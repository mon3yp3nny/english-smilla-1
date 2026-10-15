---
name: Englisch-Trainer
description: An irregular-verb trainer drawn as the student's own exercise book, squared paper, fineliner ink and highlighter.
colors:
  ink-navy: "#1d2433"
  squared-paper: "#f8f9fb"
  grid-line: "#e2e7ef"
  sheet-white: "#ffffff"
  pencil-grey: "#525b6d"
  hairline: "#cdd3de"
  marker-yellow: "#f6ea4f"
  marker-green: "#86eeb4"
  marker-pink: "#ffa3c4"
  right-ink: "#0b7443"
  wrong-ink: "#b8124f"
  level-often-wrong: "#ff94ba"
  level-wrong: "#ffd6e5"
  level-secure: "#cdf8df"
  level-very-secure: "#86eeb4"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(3rem, 11vw, 4.6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  numeral:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(4.2rem, 16vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.6rem, 10vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  row-title:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "1.22rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
  column-head:
    fontFamily: "Bricolage Grotesque, system-ui, -apple-system, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  cell: "3px"
  box: "6px"
  control: "10px"
  field: "12px"
  pill: "99px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "28px"
  section: "44px"
  grid: "24px"
components:
  button-primary:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.squared-paper}"
    rounded: "{rounded.field}"
    padding: "14px 20px"
    height: "56px"
    width: "100%"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.field}"
    padding: "14px 20px"
    height: "56px"
  button-floating:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.squared-paper}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  list-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    typography: "{typography.row-title}"
    padding: "14px 4px"
    height: "72px"
  list-row-hover:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.ink-navy}"
  chip:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.control}"
    padding: "8px 14px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.ink-navy}"
  answer-option:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.field}"
    padding: "16px 12px"
    height: "72px"
  answer-option-right:
    backgroundColor: "{colors.marker-green}"
    textColor: "{colors.ink-navy}"
  answer-option-wrong:
    backgroundColor: "{colors.marker-pink}"
    textColor: "{colors.ink-navy}"
  text-field:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
  text-field-right:
    backgroundColor: "{colors.level-secure}"
  text-field-wrong:
    backgroundColor: "{colors.level-wrong}"
  segmented-active:
    backgroundColor: "{colors.marker-yellow}"
    textColor: "{colors.ink-navy}"
    padding: "10px 14px"
    height: "44px"
  listen-button:
    backgroundColor: "{colors.sheet-white}"
    textColor: "{colors.ink-navy}"
    rounded: "50%"
    size: "44px"
---

# Design System: Englisch-Trainer

## Overview

**Creative North Star: "Heft & Textmarker"**

The app is the student's own exercise book. The page is fine squared paper, everything is written in one fineliner ink (a deep navy), and colour appears only where a highlighter would go: on the current thing, on the right answer, on the wrong one. Structure comes from ruled lines and inked boxes, never from tinted cards. The result reads grown-up and calm for a 12+ learner while staying warm, because the highlighter swipe is the one gesture that moves.

Density is relaxed: one question per screen, ruled rows of at least 72px, generous touch targets (44px minimum everywhere, 56px for primary actions) for an iPad held in the hand. Type does the hierarchy work through weight and size inside one family, Bricolage Grotesque, from an 800-weight tightly tracked display down to a 400 body.

Dark mode is the same notebook under a desk lamp at night: navy paper, light ink, and the highlighters keep dark ink on top so a marked word always reads as a marked word.

**Key Characteristics:**
- Squared-paper background (24px grid) on every full screen, including the full-screen read-aloud stage.
- One ink colour for type, rules, borders and the primary button.
- Highlighter yellow, green and pink are state colours only.
- Ruled lists (2px top rule, 1.5px row rules) instead of cards.
- The highlighter swipe, animated left to right, marks the right answer, solutions and the line being read aloud.

## Colors

One ink on cool paper, plus three highlighter markers that carry meaning, never decoration.

### Primary
- **Ink Navy** (ink-navy): All text, all rules and borders, the primary button fill, checkbox and field strokes. In dark mode it inverts to a light ink (#e8ecf4) on navy paper.

### Secondary
- **Marker Yellow** (marker-yellow): The "current / selected / focus" marker. Focus rings, text selection, the selected chip and segment, the hovered row title, the progress bar fill, the line currently read aloud, and the highlighted word "Trainer" in the title.

### Tertiary
- **Marker Green** (marker-green): Right / sicher. Correct options, ticked checkboxes, the solved gap, the score when it reaches 70%.
- **Marker Pink** (marker-pink): Wrong / falsch. Wrong options, the "Noch nicht ganz." feedback, the "Nochmal" retry badge.
- **Right Ink** (right-ink) and **Wrong Ink** (wrong-ink): Text-strength versions of green and pink for strokes and small text on paper (field borders after grading, the correction line, the mastered tick). In dark mode they fall back to the marker values.

### Neutral
- **Squared Paper** (squared-paper): Page background and the text colour on ink-filled buttons.
- **Grid Line** (grid-line): The 1px squared-paper grid lines only.
- **Sheet White** (sheet-white): Fill for anything you write into or tap: fields, options, chips, checkboxes, the listen button, empty strip cells.
- **Pencil Grey** (pencil-grey): Secondary text, field labels, counters, German translations.
- **Hairline** (hairline): Light rules inside dense data (table rows, the missed-answers list) and the outline of empty or unselected level cells.

### Learning levels
Five progress levels share one scale, used on the 70-cell strip, the legend chips and the verb-table rows: often wrong (level-often-wrong), wrong (level-wrong), new (sheet white with a hairline outline), secure (level-secure), very secure (level-very-secure). The two strong levels are real markers and always take dark ink; the two pale levels are tints. In dark mode the pale levels become translucent (pink at 20%, green at 18%).

### Named Rules
**The Marker Means Something Rule.** Yellow is current or selected, green is right, pink is wrong. A marker colour never appears without that meaning, and never as a background for a section or card.

**The Dark Ink On Markers Rule.** Text on any full-strength marker is always on-highlight ink (#1d2433 light, #121722 dark), in both themes.

## Typography

**Display Font:** Bricolage Grotesque (self-hosted variable woff2, weights 400 to 800, with system-ui fallback)
**Body Font:** Bricolage Grotesque

**Character:** A single expressive grotesque used at extremes: 800-weight, tightly tracked display numerals and words against a plain 400 body. Optical sizing is on.

### Hierarchy
- **Display** (800, clamp(3rem, 11vw, 4.6rem), 0.92): The two-line app title only.
- **Numeral** (800, clamp(4.2rem, 16vw, 6rem), 0.9, tabular): The mastered-verb count; the result score goes larger (clamp(5rem, 22vw, 8rem)).
- **Headline** (800, clamp(2.6rem, 10vw, 3.8rem), 1.1): The prompt word on a question screen. Gap sentences drop to 600 at clamp(1.5rem, 5vw, 1.9rem), line-height 1.35.
- **Title** (800, 1.55rem, 1.15): Section headings above ruled lists; screen titles run at 1.8rem.
- **Row Title** (700, 1.22rem, 1.2): The name in a ruled row; the verb forms on the flashcard back run at 1.6rem / 800.
- **Body** (400, 18px, 1.45; 20px at 700px and wider): Running text and descriptions, intro text capped at 62ch.
- **Label** (700, 0.85rem, pencil grey): Field labels and form captions ("Simple Past (2. Form)").
- **Column Head** (700, 0.7rem, 0.08em, uppercase, pencil grey): Verb-table column headers only.

### Named Rules
**The One Family Rule.** Hierarchy comes from weight (400 / 600 / 700 / 800) and size inside Bricolage Grotesque. No second family.

**The Tight Big Type Rule.** Anything 1.5rem and up is set 800 with negative tracking (-0.025em to -0.04em); counts and scores use tabular numerals.

## Layout

A single centred column: max 600px with 16px side padding on phones, 700px with 40px padding from 700px viewport width. Top padding 28px (52px wide), bottom padding 56px plus the safe-area inset. Everything sits on the 24px squared-paper grid, positioned at -1px so lines fall on the edge.

The home screen is a ruled document: title, the big count with the level strip (35 columns, 14 below 500px), then section headings 44px apart, each followed by a ruled list. Question screens put a close button, progress bar and counter on one top line, then the prompt centred with 40px above it, then answers. Multiple-choice answers sit in a two-column grid with 12px gaps. Paired actions split the row evenly with a 12px gap.

Spacing steps observed: 4px (row inner inset), 8px, 12px, 16px, 28px (block gaps), 44px (between sections).

## Elevation & Depth

Flat. Depth is drawn, not cast: 2px ink borders, ruled lines and inset hairlines separate things. The one exception is the floating read-aloud controls that hover over the scrolling verb table and the full-screen stage, which carry a soft lift shadow so they read as a button held above the page.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 12px 28px -14px rgba(29, 36, 51, .45)`; dark `0 12px 28px -12px rgba(0, 0, 0, .7)`): Floating pill controls only.
- **Focus marker** (`box-shadow: 0 0 0 5px` marker yellow): Text field focus; all other elements use a 5px marker-yellow outline.

### Named Rules
**The Drawn Not Cast Rule.** Separation comes from ink lines and borders. A shadow is reserved for controls that float over scrolling content.

## Shapes

Gently rounded inked boxes: 12px on buttons, fields and answer options, 10px on chips and the segmented control, 6px on checkboxes, 3px on strip cells. Floating controls and the progress bar are full pills; the listen button is a circle. Borders are 2px ink on interactive boxes, 2px ink for the top rule of a list and 1.5px ink between rows, 1px hairline inside the table.

The highlighter shape is deliberately uneven: asymmetric corner radii (.06em .22em .1em .18em), sitting low on the line (positioned at 72%, 80% tall), and clone-decorated so it breaks across lines like a real marker stroke.

## Components

### Buttons
Ink-filled and confident, sized for a thumb.
- **Shape:** gently rounded (12px), 2px ink border, full width, min height 56px.
- **Primary:** ink fill, paper text, 700 at 1.1rem, padding 14px 20px.
- **Ghost:** same box, transparent fill, ink text; used as the secondary half of a pair.
- **Press:** scale(.98) over .12s; disabled at 50% opacity. Focus is the 5px yellow outline.
- **Exam button:** the primary button stretched to an 80px, left-aligned row with title, muted subline and arrow; the one filled row in the home list.
- **Floating pill:** primary or ghost (sheet fill) at 99px radius with the lift shadow, for the read-aloud run.

### Ruled list rows
The drill menu. A 2px ink rule tops the list, 1.5px ink rules separate rows of at least 72px. Each row holds a bold title, a muted one-line description and an arrow icon. Hover (on hover-capable devices), press and focus put a yellow marker behind the title and nudge the arrow 4px right.

### Chips
- **Style:** sheet fill, 2px ink border, 10px radius, 44px min height, 600 at .92rem, optional muted count.
- **State:** selected chips take marker yellow. Level chips keep their level colour at rest with a hairline inset; selected, they gain an ink border plus a 2px ink ring.

### Inputs / Fields
- **Style:** sheet fill, 2px ink border, 12px radius, 600 at 1.3rem, label above in the Label style.
- **Focus:** a 5px marker-yellow ring.
- **Graded:** right turns the border right-ink and the fill to the pale secure tint; wrong turns it wrong-ink on the pale wrong tint, with a correction line below in wrong-ink.

### Answer options
Sheet-filled 12px boxes with a 2px ink border, 72px tall, 700 at 1.2rem. Hover fills yellow. After answering, the right option turns marker green, a wrong pick marker pink, the rest fade to 45%.

### Checkbox and segmented control
Custom 26px checkbox: 2px ink border, 6px radius, ticked state fills marker green with an ink tick. The segmented theme switch is a 2px ink box with 2px ink dividers; the active segment is marker yellow.

### Progress
Top bar: a 14px pill outlined by a 2px inset ink stroke on sheet, filled with marker yellow that also carries the ink stroke. Home strip: one 3px-rounded cell per verb, coloured by learning level.

### Highlighter swipe (signature)
A marker stroke drawn behind a word, animated left to right over .55s with cubic-bezier(.16, 1, .3, 1); the text turns to on-highlight ink 40% in. Used on the feedback line, the solved forms (second form delayed .15s), the result score and the word currently read aloud on the stage. Removed under prefers-reduced-motion.

### Listen button
A 44px ink-outlined circle on sheet with a speaker line icon, placed after the word it speaks; press scales to .92 and fills yellow. The large variant is an ink-filled pill with the label.

### Icons
A small set of 24px line icons drawn inline as SVG: 2.2 stroke, round caps and joins, currentColor.

## Do's and Don'ts

### Do:
- **Do** set every full screen on the squared-paper grid (24px, grid-line colour).
- **Do** draw structure with ink: 2px borders on interactive boxes, a 2px top rule and 1.5px row rules on lists.
- **Do** keep text on full-strength markers in on-highlight ink, in both themes.
- **Do** use the highlighter swipe for a right answer, a revealed solution or the line being read, and respect reduced motion.
- **Do** keep touch targets at 44px minimum and primary actions at 56px.
- **Do** define every new colour in both light and dark token sets.

### Don't:
- **Don't** use marker yellow, green or pink as decoration or as a section background; each means current, right or wrong.
- **Don't** wrap drills or content in tinted, shadowed cards; use ruled rows.
- **Don't** add shadows to anything that does not float over scrolling content.
- **Don't** introduce a second typeface or emoji tiles and mascots inside the interface.
- **Don't** use icon fonts or glyph characters as icons; add a line SVG to the inline set.
