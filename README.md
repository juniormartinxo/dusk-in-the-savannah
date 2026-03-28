# Dusk In The Savannah

A family of **dark** VS Code themes inspired by the dusk of the savannah: graphite base, clean contrast, and multiple accent variants tuned for long coding sessions with low visual noise.

## Preview

![Preview of Dusk In The Savannah theme](https://github.com/user-attachments/assets/81b3e9ae-4ef2-4f96-a803-9137aa708cdc)

## Why use it

* **Low visual fatigue**: balanced dark tones, no "flat black".
* **Accent variety**: choose between the original accent plus Forest, Ocean, Ruby, Ember, Ochre, Steel, Olive, Coral, Crimson, Mauve, Violet, Taupe, Lagoon, and the `[Plus]` variants for Crimson, Mauve, Violet, Taupe, and Lagoon.
* **Consistent UI**: sidebar, tabs, panel, and terminal speaking the same palette language.

## Included Themes

This extension currently ships with nineteen selectable themes:

* `Dusk In The Savannah`
* `Dusk In The Savannah - Forest`
* `Dusk In The Savannah - Ocean`
* `Dusk In The Savannah - Ruby`
* `Dusk In The Savannah - Ember`
* `Dusk In The Savannah - Ochre`
* `Dusk In The Savannah - Steel`
* `Dusk In The Savannah - Olive`
* `Dusk In The Savannah - Coral`
* `Dusk In The Savannah - Crimson`
* `Dusk In The Savannah [Plus] - Crimson`
* `Dusk In The Savannah - Mauve`
* `Dusk In The Savannah [Plus] - Mauve`
* `Dusk In The Savannah - Violet`
* `Dusk In The Savannah [Plus] - Violet`
* `Dusk In The Savannah - Taupe`
* `Dusk In The Savannah [Plus] - Taupe`
* `Dusk In The Savannah - Lagoon`
* `Dusk In The Savannah [Plus] - Lagoon`

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
   * `Dusk In The Savannah - Ochre`
   * `Dusk In The Savannah - Steel`
   * `Dusk In The Savannah - Olive`
   * `Dusk In The Savannah - Coral`
   * `Dusk In The Savannah - Crimson`
   * `Dusk In The Savannah [Plus] - Crimson`
   * `Dusk In The Savannah - Mauve`
   * `Dusk In The Savannah [Plus] - Mauve`
   * `Dusk In The Savannah - Violet`
   * `Dusk In The Savannah [Plus] - Violet`
   * `Dusk In The Savannah - Taupe`
   * `Dusk In The Savannah [Plus] - Taupe`
   * `Dusk In The Savannah - Lagoon`
   * `Dusk In The Savannah [Plus] - Lagoon`

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
* **Ochre:** `#F2C641`
* **Steel:** `#8C8C8C`
* **Olive:** `#94A653`
* **Coral:** `#FF5F5D`
* **Crimson:** `#260303`, `#590404`, `#8C0808`, `#BF0F0F`, `#F2F2F2`
* **[Plus] Crimson:** `#260303`, `#2E0505`, `#3A0707`, `#BF0F0F`, `#F2F2F2`
* **Mauve:** `#8C3E62`, `#4C2C59`, `#2E2140`, `#F2C5BB`, `#F27777`
* **[Plus] Mauve:** `#241B33`, `#302241`, `#4A3654`, `#8C3E62`, `#F27777`
* **Violet:** `#7F00FF`
* **[Plus] Violet:** `#4B4FA6`, `#5E66F2`, `#6B7FF2`, `#99A6F2`, `#B3BDF2`
* **Taupe:** `#A69CA4`, `#D9D0C1`, `#BFB1A4`, `#A6756A`, `#73534C`
* **[Plus] Taupe:** `#595445`, `#8C816D`, `#BFB49F`, `#F2DABD`, `#0D0D0D`
* **Lagoon:** `#4184BF`, `#51A676`, `#BED95B`, `#BF3B3B`, `#D9D9D9`
* **[Plus] Lagoon:** `#72C1F2`, `#BBDDF2`, `#58732F`, `#86A641`, `#ABBF7E`

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
* Added the new `Ochre` variant based on `#F2C641`.
* Added the new `Steel` variant based on `#8C8C8C`.
* Added the new `Olive` variant based on `#94A653`.
* Added the new `Coral` variant based on `#FF5F5D`.
* Added the new `Dusk In The Savannah - Crimson` and `Dusk In The Savannah [Plus] - Crimson` variants based on the deep crimson palette.
* Added the new `Dusk In The Savannah - Mauve` and `Dusk In The Savannah [Plus] - Mauve` variants based on the rose-plum palette.
* Added the new `Dusk In The Savannah - Taupe` and `Dusk In The Savannah - Lagoon` variants so both palettes now have common and plus versions.
* Added the new `Dusk In The Savannah [Plus] - Violet` variant based on the softer blue-violet palette.
* Added the new `Dusk In The Savannah [Plus] - Taupe` variant with a deeper sand-and-taupe UI treatment.
* Added the new `Dusk In The Savannah [Plus] - Lagoon` variant with a sea-and-olive UI treatment.
* Updated the plus variants so the editor background is lighter.
* Updated the extension contribution list so all nineteen themes appear in VS Code.

## License

MIT — use, modify, distribute. Just don't sell it as a "productivity miracle".
