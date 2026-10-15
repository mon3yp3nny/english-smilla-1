# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static single file: `index.html` with inline CSS and vanilla JS, no dependencies, no build step. Deployed via GitHub Pages from `main`.

## Users

One German-speaking student in grade 7 or above (12+), practising English irregular verbs and the simple past at home. Mainly used on an iPad as a home-screen web app, sometimes on a laptop. Short sessions of about ten questions.

## Purpose

Drill the irregular-verb list from the class textbook (pages 215–217) and the simple-past grammar around it until each verb is reliably known, with spoken audio for every form and sentence.

## Capabilities

- Exercise modes: flashcards, typing the forms, German → English, multiple-choice quiz, listen & write, was/were, simple-past gap sentences, mixed mock test.
- Verb list with per-verb progress (five levels), tap-to-listen, selection of verbs to practise, and a full-screen "read all" run.
- Progress and the running session persist in `localStorage`; a reload resumes the session.

## Voice

UI text is German, addressed with "du". Child-friendly but not babyish: the user is 12+, so the app should feel grown-up rather than like a kids' toy. The content taught is English.

## Constraints

- Data block at the top of the script must stay pure (read by `tools/gen-audio.js`).
- Question objects must stay plain serializable data.
- Light and dark appearance must both exist and be user-selectable in the app.
- Textbook photos (`IMG_*.jpeg`) are copyrighted and never committed or shown.
