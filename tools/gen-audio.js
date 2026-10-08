// Erzeugt die MP3s in audio/ mit Google Cloud Text-to-Speech.
// Aufruf: node tools/gen-audio.js   (braucht gcloud-Login; überspringt vorhandene Dateien)
const fs = require("fs"), path = require("path"), { execSync } = require("child_process");
const PROJECT = "hb-push-fischbek", VOICE = "en-GB-Neural2-A", VOICE_DE = "de-DE-Neural2-C";
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const data = html.match(/<script>([\s\S]*?)\/\/ -+ Speicher/)[1];
const { VERBS, WAS_WERE, SENTENCES, slug, plain, example } = new Function(data + "; return { VERBS, WAS_WERE, SENTENCES, slug, plain, example };")();

// "read" klingt im Simple Past wie "red" – so bekommt die Stimme es sicher richtig
const spoken = (v, i) => v[0] === "read" && i > 0 ? "red" : v[i].replace(/[()]/g, "").split("/").join(", ");
const jobs = [];
for (const v of VERBS) {
  const forms = [0, 1, 2].map(i => spoken(v, i));
  forms.forEach((t, i) => jobs.push([`v/${slug(v[0])}-${i}`, { text: t }]));
  jobs.push([`v/${slug(v[0])}-all`, { ssml: `<speak>${forms.join('<break time="400ms"/>')}</speak>` }]);
  // deutsche Bedeutung und Beispiel ("ich bin" – "I am, I was, I have been") für "Alle vorlesen" in der Liste
  jobs.push([`v/${slug(v[0])}-de`, { text: v[3].replace(/[()]/g, "").replace(/;/g, ",") }, VOICE_DE]);
  jobs.push([`v/${slug(v[0])}-ich`, { text: v[4] }, VOICE_DE]);
  example(v).forEach((t, i) => jobs.push([`v/${slug(v[0])}-ex${i}`, { text: v[0] === "read" && i > 0 ? t.replace(/read$/, "red") : t }]));
}
for (const s of [...WAS_WERE.map(s => plain(s[0], s[1])), ...SENTENCES.map(s => plain(s[0], s[2]))])
  jobs.push([`s/${slug(s)}`, { text: s.replace("She read three", "She red three") }]);

(async () => {
  const token = execSync("gcloud auth print-access-token").toString().trim();
  let made = 0;
  for (const [name, input, voice = VOICE] of jobs) {
    const file = path.join(root, "audio", name + ".mp3");
    if (fs.existsSync(file)) continue;
    fs.mkdirSync(path.dirname(file), { recursive: true });
    const res = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, "x-goog-user-project": PROJECT, "Content-Type": "application/json" },
      body: JSON.stringify({ input, voice: { languageCode: voice.slice(0, 5), name: voice }, audioConfig: { audioEncoding: "MP3", speakingRate: 0.9, sampleRateHertz: 24000 } })
    });
    if (!res.ok) { console.error(name, res.status, await res.text()); process.exit(1); }
    fs.writeFileSync(file, Buffer.from((await res.json()).audioContent, "base64"));
    made++;
  }
  console.log(`${made} neu, ${jobs.length} gesamt`);
})();
