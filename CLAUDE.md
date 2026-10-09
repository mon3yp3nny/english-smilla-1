# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-file English trainer (irregular verbs and simple past) for a German-speaking school child, used mainly on an iPad as a home-screen web app. The whole app is `index.html`: inline CSS, inline vanilla JS, no dependencies, no build step, no tests, no linter.

UI text and code comments are in German; the content being taught is English. Keep that split, and keep the tone of UI strings child-friendly.

## Commands

- Run locally: `python3 -m http.server` in the repo root, then open `http://localhost:8000`. (Opening `index.html` via `file://` also works.)
- Deploy: push to `main`. GitHub Pages serves the repo root at https://mon3yp3nny.github.io/english-smilla-1/.
- Generate missing audio: `node tools/gen-audio.js`. Needs a `gcloud` login with access to the Google Cloud project named in the script (Text-to-Speech API). It skips files that already exist, so to re-record a clip delete its MP3 first.

## Architecture

### Data block and its coupling to the audio generator

The top of the `<script>` holds the data (`VERBS`, `RANGES`, `WAS_WERE`, `SENTENCES`) and the helpers `slug`, `plain` and `example`. `tools/gen-audio.js` does not import anything: it reads `index.html`, cuts out everything between `<script>` and the `// ---------- Speicher` comment, and evaluates it. So:

- That section must stay pure data and pure functions (no DOM, no `localStorage`), and the `// ---------- Speicher` marker comment must stay where it is.
- Audio filenames are derived from the text: `audio/v/<slug(infinitive)>-{0,1,2,all,de,ich,ex0,ex1,ex2}.mp3` per verb (`de` is the German meaning and `ich` the German first-person form, both spoken by a German voice; `ex0`–`ex2` are the three English example phrases "I …", "I …", "I have …" built by `example()`; the "Alle vorlesen" run in the list plays one clip per line it shows full-screen) and `audio/s/<slug(plain(sentence, answer))>.mp3` per sentence. Editing a verb or sentence changes its filename, so rerun the generator and delete the orphaned MP3s. MP3s are committed.
- If an MP3 is missing or fails to load, `play()` falls back to the browser's speech synthesis, so a missing file is silent in testing rather than an error.
- `RANGES` are hard-coded index slices into `VERBS` (they mirror the textbook pages) and are only quick-select groups in the verb list. Adding, removing or reordering verbs means updating those indices.
- The pronunciation override for "read" (spoken as "red" in the past forms) lives in `gen-audio.js`, not in the data.

### Answer format conventions

- Alternatives in one form are separated by `/` (`"learnt/learned"`); `check()` accepts any one of them unless the field sets `needAll` (used for `be`, where both "was" and "were" are required).
- Parentheses mark optional parts (`"hang out (with)"`); `expand()` accepts the form with and without them.
- Sentences use `___` for the gap and ` (not)` as a hint that is stripped from the solved sentence.

### Rendering and session flow

There is no framework or router. Each screen is a function (`home`, `list`, `showQ`, `result`) that replaces `#app.innerHTML` and then wires up handlers. `build(mode)` turns a mode into a list of question objects of three types (`card`, `input`, `choice`), and `showQ` / `grade` / `record` / `next` run them generically, so a new exercise mode is usually a new branch in `build()` plus an entry in the mode lists in `home()`.

Missed questions are appended to the end of the running session with `retry: true`; only the first attempt counts toward the score (`S.total` is fixed at the start).

### Persistence

Everything lives in one `localStorage` entry (`KEY`): per-verb streaks in `store.p` (a verb counts as mastered at a streak of 2), per-verb miss counters in `store.m` (+1 per wrong answer, -1 per right one; with the streak they give the five colour levels in the verb list, see `level()`), the settings (including `store.sel`, the ticked verbs: all verb exercises and the read-all run use only these, or every verb when it is empty), and the entire in-progress session object `store.session`, which is restored on load so a reload resumes at the same question. Because the session is round-tripped through JSON, question objects must stay plain serializable data: no functions or DOM nodes, and `q.verb` is a copy after reload, not a reference into `VERBS`. Changing the shape of question objects can break a session saved by an older version.

### Version number

`VERSION` is shown at the bottom of the home screen next to the reload button so it is visible on the iPad whether a new deploy has arrived. Bump it with each user-visible change.

## Repo notes

- The `IMG_*.jpeg` files in the root are photos of the textbook pages the verb list was taken from. They are gitignored on purpose (copyright) and must not be committed.
