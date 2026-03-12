/**
 * Gera as variantes do tema "Dusk In The Savannah" a partir do arquivo base.
 *
 * Uso:
 *   node generate-variants.js
 *
 * O script parte de `themes/juniormartinxo-color-theme.json`, aplica a paleta
 * de cada variante e grava os arquivos em `themes/`.
 */

const fs = require("fs");
const path = require("path");

const BASE_FILE = path.join(
  __dirname,
  "themes",
  "juniormartinxo-color-theme.json"
);

const OUTPUT_DIR = path.join(__dirname, "themes");

const ACCENT_PROPS = [
  "activityBarBadge.background",
  "badge.background",
  "breadcrumb.background",
  "editor.hoverHighlightBackground",
  "editorBracketMatch.background",
  "editorBracketMatch.border",
  "list.focusOutline",
  "panelTitle.activeBorder",
  "statusBarItem.remoteBackground",
  "tab.activeBorderTop",
  "tab.activeModifiedBorder",
];

const TEXT_PROPS = [
  "activityBarBadge.foreground",
  "sideBarTitle.foreground",
  "statusBarItem.remoteForeground",
];

const SHARED_OVERRIDES = {
  "breadcrumb.foreground": "#ffffff",
};

const VARIANTS = [
  {
    name: "Forest",
    slug: "forest",
    accent: "#415936",
    text: "#eaeec6",
    colors: {
      "list.activeSelectionBackground": "#353a31",
      "list.activeSelectionForeground": "#98c379",
      "list.focusAndSelectionOutline": "#394630",
      "list.hoverBackground": "#353a31",
      "list.inactiveSelectionBackground": "#353a31",
      "list.inactiveFocusOutline": "#3c4b32",
    },
  },
  {
    name: "Ocean",
    slug: "ocean",
    accent: "#415936",
    text: "#eaeec6",
    colors: {
      "list.activeSelectionBackground": "#353a31",
      "list.activeSelectionForeground": "#98c379",
      "list.focusAndSelectionOutline": "#394630",
      "list.hoverBackground": "#353a31",
      "list.inactiveSelectionBackground": "#353a31",
      "list.inactiveFocusOutline": "#3c4b32",
    },
  },
  {
    name: "Ruby",
    slug: "ruby",
    accent: "#8C3B61",
    text: "#e9cad8",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#db8eb2",
      "list.activeSelectionBackground": "#46353d",
      "list.activeSelectionForeground": "#db8eb2",
      "list.focusAndSelectionOutline": "#7c5366",
      "list.hoverBackground": "#46353d",
      "list.inactiveSelectionBackground": "#46353d",
      "list.inactiveFocusOutline": "#46353d",
    },
  },
  {
    name: "Ember",
    slug: "ember",
    accent: "#a8482a",
    text: "#F4DDD2",
    colors: {
      "list.activeSelectionBackground": "#2c201c",
      "list.activeSelectionForeground": "#f7a78d",
      "list.focusAndSelectionOutline": "#2c201c",
      "list.hoverBackground": "#2c201c",
      "list.inactiveSelectionBackground": "#2c201c",
      "list.inactiveFocusOutline": "#522c20",
    },
  },
  {
    name: "Violet",
    slug: "violet",
    accent: "#7F00FF",
    text: "#F0E4FF",
    colors: {
      "list.activeSelectionBackground": "#3F176C",
      "list.activeSelectionForeground": "#D8BCFF",
      "list.focusAndSelectionOutline": "#8E2BFF",
      "list.hoverBackground": "#3F176C",
      "list.inactiveSelectionBackground": "#3F176C",
      "list.inactiveFocusOutline": "#7226D4",
    },
  },
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function applyColors(theme, colors) {
  for (const [prop, value] of Object.entries(colors)) {
    theme.colors[prop] = value;
  }
}

function buildVariant(baseTheme, variant) {
  const theme = JSON.parse(JSON.stringify(baseTheme));

  theme.name = `Dusk In The Savannah – ${variant.name}`;

  applyColors(theme, SHARED_OVERRIDES);

  for (const prop of ACCENT_PROPS) {
    theme.colors[prop] = variant.accent;
  }

  for (const prop of TEXT_PROPS) {
    theme.colors[prop] = variant.text;
  }

  applyColors(theme, variant.colors);

  return theme;
}

function main() {
  const baseTheme = readJson(BASE_FILE);

  for (const variant of VARIANTS) {
    const theme = buildVariant(baseTheme, variant);
    const outputFile = path.join(
      OUTPUT_DIR,
      `juniormartinxo-${variant.slug}-color-theme.json`
    );

    writeJson(outputFile, theme);
    console.log(
      `Created themes/juniormartinxo-${variant.slug}-color-theme.json (${variant.name})`
    );
  }
}

main();
