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
    name: "Ochre",
    slug: "ochre",
    accent: "#856D24",
    text: "#F9E3A0",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#F2C641",
      "list.activeSelectionBackground": "#3D3210",
      "list.activeSelectionForeground": "#F5D167",
      "list.focusAndSelectionOutline": "#B69531",
      "list.focusOutline": "#B69531",
      "list.hoverBackground": "#3D3210",
      "list.inactiveSelectionBackground": "#3D3210",
      "list.inactiveFocusOutline": "#9D812A",
      "panelTitle.activeBorder": "#B69531",
      "tab.activeBorderTop": "#B69531",
      "tab.activeModifiedBorder": "#B69531",
      "terminal.ansiGreen": "#F2C641",
    },
  },
  {
    name: "Steel",
    slug: "steel",
    accent: "#5B5B5B",
    text: "#E6E6E6",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#A3A3A3",
      "list.activeSelectionBackground": "#2A2A2A",
      "list.activeSelectionForeground": "#D8D8D8",
      "list.focusAndSelectionOutline": "#707070",
      "list.focusOutline": "#707070",
      "list.hoverBackground": "#2A2A2A",
      "list.inactiveSelectionBackground": "#2A2A2A",
      "list.inactiveFocusOutline": "#5B5B5B",
      "panelTitle.activeBorder": "#707070",
      "tab.activeBorderTop": "#707070",
      "tab.activeModifiedBorder": "#707070",
      "terminal.ansiGreen": "#A3A3A3",
    },
  },
  {
    name: "Olive",
    slug: "olive",
    accent: "#606C36",
    text: "#CAD3A9",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#94A653",
      "list.activeSelectionBackground": "#2C3219",
      "list.activeSelectionForeground": "#B9C58F",
      "list.focusAndSelectionOutline": "#768542",
      "list.focusOutline": "#768542",
      "list.hoverBackground": "#2C3219",
      "list.inactiveSelectionBackground": "#2C3219",
      "list.inactiveFocusOutline": "#606C36",
      "panelTitle.activeBorder": "#768542",
      "tab.activeBorderTop": "#768542",
      "tab.activeModifiedBorder": "#768542",
      "terminal.ansiGreen": "#94A653",
    },
  },
  {
    name: "Coral",
    slug: "coral",
    accent: "#A63E3C",
    text: "#FFAFAE",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#FF5F5D",
      "list.activeSelectionBackground": "#4D1D1C",
      "list.activeSelectionForeground": "#FF9796",
      "list.focusAndSelectionOutline": "#CC4C4A",
      "list.focusOutline": "#CC4C4A",
      "list.hoverBackground": "#4D1D1C",
      "list.inactiveSelectionBackground": "#4D1D1C",
      "list.inactiveFocusOutline": "#A63E3C",
      "panelTitle.activeBorder": "#CC4C4A",
      "tab.activeBorderTop": "#CC4C4A",
      "tab.activeModifiedBorder": "#CC4C4A",
      "terminal.ansiGreen": "#FF5F5D",
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
