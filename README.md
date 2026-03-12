# Dusk In The Savannah

A family of **dark** VS Code themes inspired by the dusk of the savannah: graphite base, clean contrast, and multiple accent variants tuned for long coding sessions with low visual noise.

## Preview

![Preview of Dusk In The Savannah theme](https://github.com/user-attachments/assets/81b3e9ae-4ef2-4f96-a803-9137aa708cdc)

## Why use it

* **Low visual fatigue**: balanced dark tones, no "flat black".
* **Accent variety**: choose between the original accent plus Forest, Ocean, Ruby, Ember, and Violet variants.
* **Consistent UI**: sidebar, tabs, panel, and terminal speaking the same palette language.

## Included Themes

This extension currently ships with six selectable themes:

* `Dusk In The Savannah`
* `Dusk In The Savannah - Forest`
* `Dusk In The Savannah - Ocean`
* `Dusk In The Savannah - Ruby`
* `Dusk In The Savannah - Ember`
* `Dusk In The Savannah - Violet`

## Installation

1. Open **Extensions** in VS Code
2. Search for: `Dusk In The Savannah`
3. Install the extension
4. Open `Preferences → Color Theme`
5. Pick one of:

   * `Dusk In The Savannah`
   * `Dusk In The Savannah - Forest`
   * `Dusk In The Savannah - Ocean`
   * `Dusk In The Savannah - Ruby`
   * `Dusk In The Savannah - Ember`
   * `Dusk In The Savannah - Violet`

## Recommended Configuration

Suggestion to make reading even more "premium":

```json
{
  "editor.fontLigatures": true,
  "editor.cursorBlinking": "smooth",
  "editor.smoothScrolling": true,
  "workbench.list.smoothScrolling": true,
  "editor.renderWhitespace": "selection",
  "editor.guides.bracketPairs": true
}
```

## Core Palette

* **Background UI:** `#23272E`, `#1D1F23`, `#282C34`, `#2F333D`
* **Text/Neutrals:** `#9DA5B4`, `#D8DEE9`
* **Warm Accent:** `#A53500`, `#F7A04F`
* **Cool Accent:** `#009DFF`

## Variant Accents

* **Default:** `#A53500`
* **Forest:** `#415936`
* **Ocean:** `#034C8C`
* **Ruby:** `#8C3B61`
* **Ember:** `#C75B39`
* **Violet:** `#A67E4E`

## Icon

* PNG **128x128**
* **Transparent Background**
* Minimalist style (flat), aligned with the "dusk/savannah" identity.

## Support

Works well in:

* TypeScript / JavaScript
* Python
* Go
* Java
* HTML/CSS/Markdown
* YAML/JSON

> If you find any token too "faded" or "too strong", open an issue with a screenshot and language/file.

## Contributing

1. Fork
2. Create your branch: `feat/my-improvement`
3. Commit with an objective description
4. PR with:

   * before/after (screenshot)
   * which scopes/colors were impacted
   * rationale (why this improves UX)

## Release Notes

### Unreleased

* Split the former magenta `Ember` variant into `Ruby`.
* Added a new `Ember` variant with a warmer ember-toned accent.
* Updated the extension contribution list so all six themes appear in VS Code.

## License

MIT — use, modify, distribute. Just don't sell it as a "productivity miracle".
