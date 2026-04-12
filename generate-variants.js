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
    accent: "#1e3c68",
    text: "#9abcee",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#629fd4",
      "list.activeSelectionBackground": "#2e3f4e",
      "list.activeSelectionForeground": "#629fd4",
      "list.focusAndSelectionOutline": "#2e3f4e",
      "list.focusOutline": "#1e3c68",
      "list.hoverBackground": "#2e3f4e",
      "list.inactiveSelectionBackground": "#2e3f4e",
      "list.inactiveFocusOutline": "#1e3c68",
      "panelTitle.activeBorder": "#1e3c68",
      "tab.activeBorderTop": "#1e3c68",
      "tab.activeModifiedBorder": "#1e3c68",
      "terminal.ansiGreen": "#629fd4",
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
    name: "Crimson",
    slug: "crimson",
    baseFile: "themes/juniormartinxo-coral-color-theme.json",
    accent: "#8C0808",
    text: "#F2F2F2",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#BF0F0F",
      "list.activeSelectionBackground": "#3A0909",
      "list.activeSelectionForeground": "#F2F2F2",
      "list.focusAndSelectionOutline": "#BF0F0F",
      "list.focusOutline": "#8C0808",
      "list.hoverBackground": "#3A0909",
      "list.inactiveSelectionBackground": "#3A0909",
      "list.inactiveFocusOutline": "#590404",
      "panelTitle.activeBorder": "#BF0F0F",
      "tab.activeBorderTop": "#8C0808",
      "tab.activeModifiedBorder": "#BF0F0F",
      "terminal.ansiGreen": "#BF0F0F",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#8C0808",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#8C0808",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#BF0F0F",
        },
      },
    ],
  },
  {
    name: "Crimson",
    slug: "plus-crimson",
    themeName: "Dusk In The Savannah [Plus] – Crimson",
    baseFile: "themes/juniormartinxo-coral-color-theme.json",
    accent: "#BF0F0F",
    text: "#F2F2F2",
    colors: {
      "activityBar.background": "#260303",
      "activityBar.border": "#3A0707",
      "activityBar.foreground": "#BF0F0F",
      "button.background": "#8C0808",
      "dropdown.background": "#2E0505",
      "dropdown.border": "#3A0707",
      "editor.background": "#341010",
      "editor.findMatchBackground": "#BF0F0F",
      "editor.findMatchHighlightBackground": "#8C080855",
      "editor.lineHighlightBackground": "#421515",
      "editor.selectionBackground": "#59040499",
      "editor.selectionHighlightBorder": "#F2F2F2",
      "editorCursor.background": "#260303",
      "editorCursor.foreground": "#F2F2F2",
      "editorGroup.border": "#3A0707",
      "editorGroupHeader.border": "#3A0707",
      "editorGroupHeader.tabsBackground": "#260303",
      "editorGroupHeader.tabsBorder": "#3A0707",
      "editorHoverWidget.background": "#2E0505",
      "editorHoverWidget.border": "#4A0A0A",
      "editorIndentGuide.activeBackground": "#BF0F0F",
      "editorIndentGuide.background": "#4A1B1B",
      "editorLineNumber.activeForeground": "#F2F2F299",
      "editorLineNumber.foreground": "#8E5C5C",
      "editorPane.background": "#2B0606",
      "editorSuggestWidget.background": "#2E0505",
      "editorSuggestWidget.border": "#4A0A0A",
      "editorSuggestWidget.selectedBackground": "#450909",
      "editorWhitespace.foreground": "#4A1B1B",
      "editorWidget.background": "#2E0505",
      "gitDecoration.ignoredResourceForeground": "#6B3B3B",
      "gitDecoration.modifiedResourceForeground": "#F2F2F2",
      "gitDecoration.untrackedResourceForeground": "#BF0F0F",
      "input.background": "#2E0505",
      "list.activeSelectionBackground": "#450909",
      "list.activeSelectionForeground": "#F2F2F2",
      "list.focusAndSelectionOutline": "#BF0F0F",
      "list.focusBackground": "#380808",
      "list.focusForeground": "#F2F2F2",
      "list.focusOutline": "#BF0F0F",
      "list.highlightForeground": "#F2F2F2",
      "list.hoverBackground": "#320707",
      "list.inactiveSelectionBackground": "#320707",
      "list.inactiveFocusOutline": "#590404",
      "list.inactiveSelectionForeground": "#D8C6C6",
      "panel.background": "#2B0606",
      "panel.border": "#3A0707",
      "panelTitle.activeBorder": "#F2F2F2",
      "peekView.border": "#4A0A0A",
      "peekViewEditor.background": "#2E0505",
      "peekViewResult.background": "#2B0606",
      "peekViewTitle.background": "#260303",
      "scrollbarSlider.activeBackground": "#BF0F0F88",
      "scrollbarSlider.background": "#8C080866",
      "scrollbarSlider.hoverBackground": "#F2F2F266",
      "sideBar.background": "#2B0606",
      "sideBar.border": "#3A0707",
      "sideBar.foreground": "#C8AAAA",
      "sideBarTitle.foreground": "#F2F2F2",
      "statusBar.background": "#260303",
      "statusBar.border": "#3A0707",
      "statusBar.debuggingBackground": "#2E0505",
      "statusBar.foreground": "#C8AAAA",
      "statusBar.noFolderBackground": "#2E0505",
      "statusBarItem.hoverBackground": "#380808",
      "statusBarItem.remoteBackground": "#8C0808",
      "statusBarItem.remoteForeground": "#F2F2F2",
      "tab.activeBackground": "#3A0C0C",
      "tab.activeBorderTop": "#BF0F0F",
      "tab.activeModifiedBorder": "#F2F2F2",
      "tab.border": "#3A0707",
      "tab.hoverBackground": "#300606",
      "tab.inactiveBackground": "#2B0606",
      "tab.inactiveForeground": "#9E7777",
      "tab.unfocusedActiveForeground": "#D8C6C6",
      "terminal.ansiBlack": "#260303",
      "terminal.ansiBlue": "#61afef",
      "terminal.ansiGreen": "#BF0F0F",
      "terminal.ansiWhite": "#F2F2F2",
      "terminal.ansiYellow": "#F2F2F2",
      "terminal.background": "#200404",
      "terminal.border": "#3A0707",
      "titleBar.activeBackground": "#260303",
      "titleBar.activeForeground": "#C8AAAA",
      "titleBar.border": "#3A0707",
      "titleBar.inactiveBackground": "#260303",
      "titleBar.inactiveForeground": "#7A4D4D",
      "tree.indentGuidesStroke": "#6A3838",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#8C0808",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#8C0808",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#F2F2F2",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#F0E0E0",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#BF0F0F",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#F0E0E0",
        },
      },
    ],
  },
  {
    name: "Mauve",
    slug: "mauve",
    baseFile: "themes/juniormartinxo-violet-color-theme.json",
    accent: "#8C3E62",
    text: "#F2C5BB",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#F27777",
      "list.activeSelectionBackground": "#4C2C59",
      "list.activeSelectionForeground": "#F2C5BB",
      "list.focusAndSelectionOutline": "#F27777",
      "list.focusOutline": "#8C3E62",
      "list.hoverBackground": "#4C2C59",
      "list.inactiveSelectionBackground": "#4C2C59",
      "list.inactiveFocusOutline": "#2E2140",
      "panelTitle.activeBorder": "#8C3E62",
      "tab.activeBorderTop": "#8C3E62",
      "tab.activeModifiedBorder": "#F27777",
      "terminal.ansiGreen": "#F27777",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#8C3E62",
        },
      },
    ],
  },
  {
    name: "Mauve",
    slug: "plus-mauve",
    themeName: "Dusk In The Savannah [Plus] – Mauve",
    baseFile: "themes/juniormartinxo-violet-color-theme.json",
    accent: "#F27777",
    text: "#F2C5BB",
    colors: {
      "activityBar.background": "#241B33",
      "activityBar.border": "#352541",
      "activityBar.foreground": "#F27777",
      "button.background": "#8C3E62",
      "dropdown.background": "#302241",
      "dropdown.border": "#352541",
      "editor.background": "#4A3654",
      "editor.findMatchBackground": "#F27777",
      "editor.findMatchHighlightBackground": "#8C3E6255",
      "editor.lineHighlightBackground": "#583F64",
      "editor.selectionBackground": "#8C3E6288",
      "editor.selectionHighlightBorder": "#F2C5BB",
      "editorCursor.background": "#2E2140",
      "editorCursor.foreground": "#F2C5BB",
      "editorGroup.border": "#352541",
      "editorGroupHeader.border": "#352541",
      "editorGroupHeader.tabsBackground": "#241B33",
      "editorGroupHeader.tabsBorder": "#352541",
      "editorHoverWidget.background": "#302241",
      "editorHoverWidget.border": "#43324F",
      "editorIndentGuide.activeBackground": "#F27777",
      "editorIndentGuide.background": "#57445F",
      "editorLineNumber.activeForeground": "#F2C5BB99",
      "editorLineNumber.foreground": "#9D7C93",
      "editorPane.background": "#332547",
      "editorSuggestWidget.background": "#302241",
      "editorSuggestWidget.border": "#43324F",
      "editorSuggestWidget.selectedBackground": "#4C2C59",
      "editorWhitespace.foreground": "#57445F",
      "editorWidget.background": "#302241",
      "gitDecoration.ignoredResourceForeground": "#736177",
      "gitDecoration.modifiedResourceForeground": "#F2C5BB",
      "gitDecoration.untrackedResourceForeground": "#F27777",
      "input.background": "#302241",
      "list.activeSelectionBackground": "#4C2C59",
      "list.activeSelectionForeground": "#F2C5BB",
      "list.focusAndSelectionOutline": "#F27777",
      "list.focusBackground": "#3A294C",
      "list.focusForeground": "#F2C5BB",
      "list.focusOutline": "#F27777",
      "list.highlightForeground": "#F2C5BB",
      "list.hoverBackground": "#382849",
      "list.inactiveSelectionBackground": "#382849",
      "list.inactiveFocusOutline": "#8C3E62",
      "list.inactiveSelectionForeground": "#E6C8C0",
      "panel.background": "#332547",
      "panel.border": "#352541",
      "panelTitle.activeBorder": "#F2C5BB",
      "peekView.border": "#43324F",
      "peekViewEditor.background": "#302241",
      "peekViewResult.background": "#332547",
      "peekViewTitle.background": "#241B33",
      "scrollbarSlider.activeBackground": "#F2777788",
      "scrollbarSlider.background": "#8C3E6266",
      "scrollbarSlider.hoverBackground": "#F2C5BB66",
      "sideBar.background": "#332547",
      "sideBar.border": "#352541",
      "sideBar.foreground": "#C8ADBF",
      "sideBarTitle.foreground": "#F2C5BB",
      "statusBar.background": "#241B33",
      "statusBar.border": "#352541",
      "statusBar.debuggingBackground": "#302241",
      "statusBar.foreground": "#C8ADBF",
      "statusBar.noFolderBackground": "#302241",
      "statusBarItem.hoverBackground": "#3A294C",
      "statusBarItem.remoteBackground": "#8C3E62",
      "statusBarItem.remoteForeground": "#F2C5BB",
      "tab.activeBackground": "#44304D",
      "tab.activeBorderTop": "#F27777",
      "tab.activeModifiedBorder": "#F2C5BB",
      "tab.border": "#352541",
      "tab.hoverBackground": "#352744",
      "tab.inactiveBackground": "#332547",
      "tab.inactiveForeground": "#A1849A",
      "tab.unfocusedActiveForeground": "#E6C8C0",
      "terminal.ansiBlack": "#2E2140",
      "terminal.ansiBlue": "#61afef",
      "terminal.ansiGreen": "#F27777",
      "terminal.ansiWhite": "#F2C5BB",
      "terminal.ansiYellow": "#F2C5BB",
      "terminal.background": "#291E38",
      "terminal.border": "#352541",
      "titleBar.activeBackground": "#241B33",
      "titleBar.activeForeground": "#C8ADBF",
      "titleBar.border": "#352541",
      "titleBar.inactiveBackground": "#241B33",
      "titleBar.inactiveForeground": "#856B80",
      "tree.indentGuidesStroke": "#6E5774",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#8C3E62",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#F2C5BB",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#F0D8D2",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#F27777",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#F0D8D2",
        },
      },
    ],
  },
  {
    name: "Violet",
    slug: "violet",
    accent: "#452961",
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
  {
    name: "Taupe",
    slug: "taupe",
    accent: "#A6756A",
    text: "#D9D0C1",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#BFB1A4",
      "list.activeSelectionBackground": "#4A3A36",
      "list.activeSelectionForeground": "#D9D0C1",
      "list.focusAndSelectionOutline": "#73534C",
      "list.focusOutline": "#73534C",
      "list.hoverBackground": "#4A3A36",
      "list.inactiveSelectionBackground": "#4A3A36",
      "list.inactiveFocusOutline": "#A69CA4",
      "panelTitle.activeBorder": "#A6756A",
      "tab.activeBorderTop": "#A6756A",
      "tab.activeModifiedBorder": "#BFB1A4",
      "terminal.ansiGreen": "#BFB1A4",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#A69CA4",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#D9D0C1",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#BFB1A4",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#A6756A",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#BFB1A4",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#D9D0C1",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#D9D0C1",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#D9D0C1",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#A6756A",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#BFB1A4",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#A6756A",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#A6756A",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#A6756A",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#D9D0C1",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#A6756A",
        },
      },
    ],
  },
  {
    name: "Taupe",
    slug: "plus-taupe",
    themeName: "Dusk In The Savannah [Plus] – Taupe",
    accent: "#8C816D",
    text: "#F2DABD",
    colors: {
      "activityBar.background": "#141210",
      "activityBar.border": "#24201B",
      "activityBar.foreground": "#8C816D",
      "button.background": "#595445",
      "dropdown.background": "#1B1815",
      "dropdown.border": "#24201B",
      "editor.background": "#1B1815",
      "editor.findMatchBackground": "#8C816D",
      "editor.findMatchHighlightBackground": "#59544588",
      "editor.lineHighlightBackground": "#25201B",
      "editor.selectionBackground": "#59544599",
      "editor.selectionHighlightBorder": "#BFB49F",
      "editorCursor.background": "#0D0D0D",
      "editorCursor.foreground": "#F2DABD",
      "editorGroup.border": "#24201B",
      "editorGroupHeader.border": "#24201B",
      "editorGroupHeader.tabsBackground": "#141210",
      "editorGroupHeader.tabsBorder": "#24201B",
      "editorHoverWidget.background": "#1B1815",
      "editorHoverWidget.border": "#2A251F",
      "editorIndentGuide.activeBackground": "#8C816D",
      "editorIndentGuide.background": "#3F3A32",
      "editorLineNumber.activeForeground": "#F2DABD99",
      "editorLineNumber.foreground": "#6F6759",
      "editorPane.background": "#161310",
      "editorSuggestWidget.background": "#1B1815",
      "editorSuggestWidget.border": "#2A251F",
      "editorSuggestWidget.selectedBackground": "#2B2621",
      "editorWhitespace.foreground": "#3A352E",
      "editorWidget.background": "#1B1815",
      "gitDecoration.ignoredResourceForeground": "#6A6254",
      "gitDecoration.modifiedResourceForeground": "#F2DABD",
      "gitDecoration.untrackedResourceForeground": "#BFB49F",
      "input.background": "#1B1815",
      "list.activeSelectionBackground": "#2B2621",
      "list.activeSelectionForeground": "#F2DABD",
      "list.focusAndSelectionOutline": "#BFB49F",
      "list.focusBackground": "#241F1B",
      "list.focusForeground": "#F2DABD",
      "list.focusOutline": "#BFB49F",
      "list.highlightForeground": "#F2DABD",
      "list.hoverBackground": "#211D19",
      "list.inactiveSelectionBackground": "#211D19",
      "list.inactiveFocusOutline": "#8C816D",
      "list.inactiveSelectionForeground": "#D6C8B3",
      "panel.background": "#171411",
      "panel.border": "#24201B",
      "panelTitle.activeBorder": "#F2DABD",
      "peekView.border": "#2A251F",
      "peekViewEditor.background": "#191612",
      "peekViewResult.background": "#171411",
      "peekViewTitle.background": "#141210",
      "scrollbarSlider.activeBackground": "#8C816D88",
      "scrollbarSlider.background": "#59544566",
      "scrollbarSlider.hoverBackground": "#BFB49F66",
      "sideBar.background": "#171411",
      "sideBar.border": "#24201B",
      "sideBar.foreground": "#AFA48E",
      "sideBarTitle.foreground": "#F2DABD",
      "statusBar.background": "#141210",
      "statusBar.border": "#24201B",
      "statusBar.debuggingBackground": "#1B1815",
      "statusBar.foreground": "#BFB49F",
      "statusBar.noFolderBackground": "#1B1815",
      "statusBarItem.hoverBackground": "#241F1B",
      "statusBarItem.remoteBackground": "#595445",
      "statusBarItem.remoteForeground": "#F2DABD",
      "tab.activeBackground": "#221E1A",
      "tab.activeBorderTop": "#F2DABD",
      "tab.activeModifiedBorder": "#BFB49F",
      "tab.border": "#24201B",
      "tab.hoverBackground": "#1E1A16",
      "tab.inactiveBackground": "#171411",
      "tab.inactiveForeground": "#8B816D",
      "tab.unfocusedActiveForeground": "#D6C8B3",
      "terminal.ansiBlack": "#0D0D0D",
      "terminal.ansiGreen": "#BFB49F",
      "terminal.ansiWhite": "#F2DABD",
      "terminal.ansiYellow": "#F2DABD",
      "terminal.background": "#11100E",
      "terminal.border": "#24201B",
      "titleBar.activeBackground": "#141210",
      "titleBar.activeForeground": "#BFB49F",
      "titleBar.border": "#24201B",
      "titleBar.inactiveBackground": "#141210",
      "titleBar.inactiveForeground": "#746B5E",
      "tree.indentGuidesStroke": "#6F6759",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2DABD",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#E7CCAA",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#D8C2A0",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#D7CCBA",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2DABD",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2DABD",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#D7CCBA",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace.round.js",
          "meta.brace.square.js",
        ],
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
        ],
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: [
          "punctuation.section.embedded.begin",
          "punctuation.section.embedded.end",
        ],
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: "punctuation.terminator",
        settings: {
          foreground: "#8C816D",
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#E7CCAA",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#F2DABD",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#D7CCBA",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: "#E7CCAA",
        },
      },
      {
        scope: "support.function.construct",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "support.type",
        settings: {
          foreground: "#D7CCBA",
        },
      },
      {
        scope: "support.type.exception",
        settings: {
          foreground: "#D7CCBA",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#E8DED0",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#E8DED0",
        },
      },
      {
        scope: "source.css constant.other.color.rgb-value",
        settings: {
          foreground: "#D8C2A0",
        },
      },
      {
        scope: "source.css meta.property-value",
        settings: {
          foreground: "#E7CCAA",
        },
      },
      {
        scope: "source.css punctuation.definition.keyword",
        settings: {
          foreground: "#BFB49F",
        },
      },
      {
        scope: "source.css support.type.property-name",
        settings: {
          foreground: "#E8DED0",
        },
      },
    ],
  },
  {
    name: "Violet",
    slug: "plus-violet",
    themeName: "Dusk In The Savannah [Plus] – Violet",
    baseFile: "themes/juniormartinxo-violet-color-theme.json",
    accent: "#5E66F2",
    text: "#B3BDF2",
    colors: {
      "activityBar.background": "#202540",
      "activityBar.border": "#262B46",
      "activityBar.foreground": "#99A6F2",
      "button.background": "#4B4FA6",
      "dropdown.background": "#262B46",
      "dropdown.border": "#262B46",
      "editor.background": "#2A2F58",
      "editor.findMatchBackground": "#5E66F2",
      "editor.findMatchHighlightBackground": "#6B7FF255",
      "editor.lineHighlightBackground": "#343A68",
      "editor.selectionBackground": "#454C83",
      "editor.selectionHighlightBorder": "#99A6F2",
      "editorCursor.background": "#171A31",
      "editorCursor.foreground": "#B3BDF2",
      "editorGroup.border": "#262B46",
      "editorGroupHeader.border": "#262B46",
      "editorGroupHeader.tabsBackground": "#202540",
      "editorGroupHeader.tabsBorder": "#262B46",
      "editorHoverWidget.background": "#262B46",
      "editorHoverWidget.border": "#31375A",
      "editorIndentGuide.activeBackground": "#99A6F2",
      "editorIndentGuide.background": "#434A70",
      "editorLineNumber.activeForeground": "#B3BDF299",
      "editorLineNumber.foreground": "#7A82B8",
      "editorPane.background": "#23284B",
      "editorSuggestWidget.background": "#262B46",
      "editorSuggestWidget.border": "#31375A",
      "editorSuggestWidget.selectedBackground": "#313761",
      "editorWhitespace.foreground": "#41476F",
      "editorWidget.background": "#262B46",
      "gitDecoration.ignoredResourceForeground": "#6D74A3",
      "gitDecoration.modifiedResourceForeground": "#B3BDF2",
      "gitDecoration.untrackedResourceForeground": "#99A6F2",
      "input.background": "#262B46",
      "list.activeSelectionBackground": "#313761",
      "list.activeSelectionForeground": "#B3BDF2",
      "list.focusAndSelectionOutline": "#6B7FF2",
      "list.focusBackground": "#2A3058",
      "list.focusForeground": "#B3BDF2",
      "list.focusOutline": "#6B7FF2",
      "list.highlightForeground": "#99A6F2",
      "list.hoverBackground": "#2A3058",
      "list.inactiveSelectionBackground": "#2A3058",
      "list.inactiveFocusOutline": "#4B4FA6",
      "list.inactiveSelectionForeground": "#CBD1FB",
      "panel.background": "#23284B",
      "panel.border": "#262B46",
      "panelTitle.activeBorder": "#99A6F2",
      "peekView.border": "#31375A",
      "peekViewEditor.background": "#262B46",
      "peekViewResult.background": "#23284B",
      "peekViewTitle.background": "#202540",
      "scrollbarSlider.activeBackground": "#6B7FF288",
      "scrollbarSlider.background": "#4B4FA666",
      "scrollbarSlider.hoverBackground": "#99A6F266",
      "sideBar.background": "#23284B",
      "sideBar.border": "#262B46",
      "sideBar.foreground": "#9CA4D9",
      "sideBarTitle.foreground": "#B3BDF2",
      "statusBar.background": "#202540",
      "statusBar.border": "#262B46",
      "statusBar.debuggingBackground": "#262B46",
      "statusBar.foreground": "#9CA4D9",
      "statusBar.noFolderBackground": "#262B46",
      "statusBarItem.hoverBackground": "#2A3058",
      "statusBarItem.remoteBackground": "#4B4FA6",
      "statusBarItem.remoteForeground": "#B3BDF2",
      "tab.activeBackground": "#313761",
      "tab.activeBorderTop": "#99A6F2",
      "tab.activeModifiedBorder": "#6B7FF2",
      "tab.border": "#262B46",
      "tab.hoverBackground": "#262C52",
      "tab.inactiveBackground": "#23284B",
      "tab.inactiveForeground": "#8B93C8",
      "tab.unfocusedActiveForeground": "#CAD1FA",
      "terminal.ansiBlack": "#171A31",
      "terminal.ansiBlue": "#5E66F2",
      "terminal.ansiGreen": "#99A6F2",
      "terminal.ansiWhite": "#B3BDF2",
      "terminal.ansiYellow": "#99A6F2",
      "terminal.background": "#252A4C",
      "terminal.border": "#262B46",
      "titleBar.activeBackground": "#202540",
      "titleBar.activeForeground": "#9CA4D9",
      "titleBar.border": "#262B46",
      "titleBar.inactiveBackground": "#202540",
      "titleBar.inactiveForeground": "#6F76A8",
      "tree.indentGuidesStroke": "#5F6796",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#6B7FF2",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#B3BDF2",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#99A6F2",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#B3BDF2",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#99A6F2",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#B3BDF2",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#99A6F2",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#B3BDF2",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#B3BDF2",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#D9DEFC",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#5E66F2",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#D9DEFC",
        },
      },
    ],
  },
  {
    name: "Lagoon",
    slug: "lagoon",
    accent: "#4184BF",
    text: "#D9D9D9",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#51A676",
      "list.activeSelectionBackground": "#2F4656",
      "list.activeSelectionForeground": "#BED95B",
      "list.focusAndSelectionOutline": "#51A676",
      "list.focusOutline": "#4184BF",
      "list.hoverBackground": "#2F4656",
      "list.inactiveSelectionBackground": "#2F4656",
      "list.inactiveFocusOutline": "#51A676",
      "panelTitle.activeBorder": "#51A676",
      "sideBarTitle.foreground": "#BED95B",
      "statusBarItem.remoteForeground": "#BED95B",
      "tab.activeBorderTop": "#4184BF",
      "tab.activeModifiedBorder": "#BED95B",
      "terminal.ansiGreen": "#51A676",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#51A676",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#BED95B",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#D9D9D9",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#4184BF",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#51A676",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#D9D9D9",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#BED95B",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#D9D9D9",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#4184BF",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#BED95B",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#4184BF",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#4184BF",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#4184BF",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#BED95B",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#4184BF",
        },
      },
    ],
  },
  {
    name: "Lagoon",
    slug: "plus-lagoon",
    themeName: "Dusk In The Savannah [Plus] – Lagoon",
    accent: "#72C1F2",
    text: "#BBDDF2",
    colors: {
      "activityBar.background": "#1A2429",
      "activityBar.border": "#1B262B",
      "activityBar.foreground": "#86A641",
      "breadcrumb.background": "#1F313A",
      "button.background": "#58732F",
      "dropdown.background": "#1C2730",
      "dropdown.border": "#1B262B",
      "editor.background": "#21303A",
      "editor.findMatchBackground": "#72C1F2",
      "editor.findMatchHighlightBackground": "#72C1F255",
      "editor.lineHighlightBackground": "#263744",
      "editor.selectionBackground": "#314450",
      "editor.selectionHighlightBorder": "#86A641",
      "editorCursor.background": "#0D0D0D",
      "editorCursor.foreground": "#BBDDF2",
      "editorGroup.border": "#1B262B",
      "editorGroupHeader.border": "#1B262B",
      "editorGroupHeader.tabsBackground": "#1A2429",
      "editorGroupHeader.tabsBorder": "#1B262B",
      "editorHoverWidget.background": "#1C2730",
      "editorHoverWidget.border": "#213038",
      "editorIndentGuide.activeBackground": "#72C1F2",
      "editorIndentGuide.background": "#28343A",
      "editorLineNumber.activeForeground": "#BBDDF299",
      "editorLineNumber.foreground": "#4D616B",
      "editorPane.background": "#1F2E38",
      "editorSuggestWidget.background": "#1C2730",
      "editorSuggestWidget.border": "#213038",
      "editorSuggestWidget.selectedBackground": "#1C2A32",
      "editorWhitespace.foreground": "#2F3D45",
      "editorWidget.background": "#1C2730",
      "gitDecoration.ignoredResourceForeground": "#5D6B5A",
      "gitDecoration.modifiedResourceForeground": "#BBDDF2",
      "gitDecoration.untrackedResourceForeground": "#86A641",
      "input.background": "#1C2730",
      "list.activeSelectionBackground": "#223038",
      "list.activeSelectionForeground": "#BBDDF2",
      "list.focusAndSelectionOutline": "#72C1F2",
      "list.focusBackground": "#1B2A33",
      "list.focusForeground": "#BBDDF2",
      "list.focusOutline": "#72C1F2",
      "list.highlightForeground": "#ABBF7E",
      "list.hoverBackground": "#1D2A31",
      "list.inactiveSelectionBackground": "#1D2A31",
      "list.inactiveFocusOutline": "#58732F",
      "list.inactiveSelectionForeground": "#C4D6E3",
      "panel.background": "#1D2A31",
      "panel.border": "#1B262B",
      "panelTitle.activeBorder": "#86A641",
      "peekView.border": "#213038",
      "peekViewEditor.background": "#1C2730",
      "peekViewResult.background": "#1D2A31",
      "peekViewTitle.background": "#1A2429",
      "scrollbarSlider.activeBackground": "#72C1F288",
      "scrollbarSlider.background": "#58732F66",
      "scrollbarSlider.hoverBackground": "#ABBF7E66",
      "sideBar.background": "#1D2A31",
      "sideBar.border": "#1B262B",
      "sideBar.foreground": "#9EB3C2",
      "sideBarTitle.foreground": "#BBDDF2",
      "statusBar.background": "#1A2429",
      "statusBar.border": "#1B262B",
      "statusBar.debuggingBackground": "#1C2730",
      "statusBar.foreground": "#9EB3C2",
      "statusBar.noFolderBackground": "#1C2730",
      "statusBarItem.hoverBackground": "#1B2A33",
      "statusBarItem.remoteBackground": "#58732F",
      "statusBarItem.remoteForeground": "#BBDDF2",
      "tab.activeBackground": "#223038",
      "tab.activeBorderTop": "#86A641",
      "tab.activeModifiedBorder": "#72C1F2",
      "tab.border": "#1B262B",
      "tab.hoverBackground": "#162026",
      "tab.inactiveBackground": "#1D2A31",
      "tab.inactiveForeground": "#8AA0AE",
      "tab.unfocusedActiveForeground": "#C4D6E3",
      "terminal.ansiBlack": "#0D0D0D",
      "terminal.ansiBlue": "#72C1F2",
      "terminal.ansiGreen": "#86A641",
      "terminal.ansiWhite": "#BBDDF2",
      "terminal.ansiYellow": "#ABBF7E",
      "terminal.background": "#1D2B34",
      "terminal.border": "#1B262B",
      "titleBar.activeBackground": "#1A2429",
      "titleBar.activeForeground": "#9EB3C2",
      "titleBar.border": "#1B262B",
      "titleBar.inactiveBackground": "#1A2429",
      "titleBar.inactiveForeground": "#6D808C",
      "tree.indentGuidesStroke": "#46545E",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#ABBF7E",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#86A641",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#ABBF7E",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#ABBF7E",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace.round.js",
          "meta.brace.square.js",
        ],
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
        ],
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: [
          "punctuation.section.embedded.begin",
          "punctuation.section.embedded.end",
        ],
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: "punctuation.terminator",
        settings: {
          foreground: "#58732F",
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#ABBF7E",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "support.function.construct",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "support.type",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "support.type.exception",
        settings: {
          foreground: "#BBDDF2",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#D3E3EE",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#D3E3EE",
        },
      },
      {
        scope: "source.css constant.other.color.rgb-value",
        settings: {
          foreground: "#86A641",
        },
      },
      {
        scope: "source.css meta.property-value",
        settings: {
          foreground: "#ABBF7E",
        },
      },
      {
        scope: "source.css punctuation.definition.keyword",
        settings: {
          foreground: "#72C1F2",
        },
      },
      {
        scope: "source.css support.type.property-name",
        settings: {
          foreground: "#D3E3EE",
        },
      },
    ],
  },
  {
    name: "Harbor",
    slug: "harbor",
    accent: "#35568C",
    text: "#DCE6F5",
    colors: {
      "editor.findMatchBackground": "#6D93D2",
      "editor.findMatchHighlightBackground": "#6D93D255",
      "editor.hoverHighlightBackground": "#6D93D2",
      "editorBracketMatch.background": "#6D93D2",
      "editorBracketMatch.border": "#6D93D2",
      "editorCursor.foreground": "#91B0DE",
      "editorSuggestWidget.selectedBackground": "#2F4B7A",
      "gitDecoration.untrackedResourceForeground": "#7A92BD",
      "list.activeSelectionBackground": "#283854",
      "list.activeSelectionForeground": "#D7E3F4",
      "list.focusAndSelectionOutline": "#7A92BD",
      "list.focusBackground": "#2F4B7A",
      "list.focusOutline": "#6D93D2",
      "list.hoverBackground": "#283854",
      "list.inactiveSelectionBackground": "#283854",
      "list.inactiveFocusOutline": "#7A92BD",
      "panelTitle.activeBorder": "#7A92BD",
      "peekViewResult.matchHighlightBackground": "#2F4B7A",
      "sideBarTitle.foreground": "#AAC0E0",
      "statusBarItem.remoteForeground": "#DCE6F5",
      "tab.activeBorderTop": "#6D93D2",
      "tab.activeModifiedBorder": "#AAC0E0",
      "terminal.ansiGreen": "#7A92BD",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#7A92BD",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#DCE6F5",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#6D93D2",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#7A92BD",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#DCE6F5",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#DCE6F5",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#6D93D2",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#6D93D2",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#6D93D2",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#6D93D2",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#6D93D2",
        },
      },
    ],
  },
  {
    name: "Harbor",
    slug: "plus-harbor",
    themeName: "Dusk In The Savannah [Plus] – Harbor",
    accent: "#84A4D6",
    text: "#D9E5F5",
    colors: {
      "activityBar.background": "#18243A",
      "activityBar.border": "#1B2940",
      "activityBar.foreground": "#8EA4C6",
      "activityBarBadge.foreground": "#152238",
      "breadcrumb.background": "#22324D",
      "button.background": "#35568C",
      "dropdown.background": "#1E2E48",
      "dropdown.border": "#1B2940",
      "editor.background": "#20314A",
      "editor.findMatchBackground": "#84A4D6",
      "editor.findMatchHighlightBackground": "#84A4D655",
      "editor.lineHighlightBackground": "#2A3E5F",
      "editor.selectionBackground": "#334A6E",
      "editor.selectionHighlightBorder": "#6F89B8",
      "editorCursor.background": "#0D0D0D",
      "editorCursor.foreground": "#D9E5F5",
      "editorGroup.border": "#1B2940",
      "editorGroupHeader.border": "#1B2940",
      "editorGroupHeader.tabsBackground": "#18243A",
      "editorGroupHeader.tabsBorder": "#1B2940",
      "editorHoverWidget.background": "#1E2E48",
      "editorHoverWidget.border": "#28415F",
      "editorIndentGuide.activeBackground": "#84A4D6",
      "editorIndentGuide.background": "#304660",
      "editorLineNumber.activeForeground": "#D9E5F599",
      "editorLineNumber.foreground": "#607494",
      "editorPane.background": "#1F304A",
      "editorSuggestWidget.background": "#1E2E48",
      "editorSuggestWidget.border": "#28415F",
      "editorSuggestWidget.selectedBackground": "#22324D",
      "editorWhitespace.foreground": "#31445C",
      "editorWidget.background": "#1E2E48",
      "gitDecoration.ignoredResourceForeground": "#5D6981",
      "gitDecoration.modifiedResourceForeground": "#D9E5F5",
      "gitDecoration.untrackedResourceForeground": "#6F89B8",
      "input.background": "#1E2E48",
      "list.activeSelectionBackground": "#253754",
      "list.activeSelectionForeground": "#D9E5F5",
      "list.focusAndSelectionOutline": "#84A4D6",
      "list.focusBackground": "#22324D",
      "list.focusForeground": "#D9E5F5",
      "list.focusOutline": "#84A4D6",
      "list.highlightForeground": "#AAC0E0",
      "list.hoverBackground": "#22324D",
      "list.inactiveSelectionBackground": "#22324D",
      "list.inactiveFocusOutline": "#6F89B8",
      "list.inactiveSelectionForeground": "#C6D5EA",
      "panel.background": "#1D2B43",
      "panel.border": "#1B2940",
      "panelTitle.activeBorder": "#84A4D6",
      "peekView.border": "#28415F",
      "peekViewEditor.background": "#1E2E48",
      "peekViewResult.background": "#1D2B43",
      "peekViewResult.matchHighlightBackground": "#35568C",
      "peekViewTitle.background": "#18243A",
      "scrollbarSlider.activeBackground": "#84A4D688",
      "scrollbarSlider.background": "#35568C66",
      "scrollbarSlider.hoverBackground": "#AAC0E066",
      "sideBar.background": "#1D2B43",
      "sideBar.border": "#1B2940",
      "sideBar.foreground": "#A1B5D2",
      "sideBarTitle.foreground": "#C5D4EB",
      "statusBar.background": "#18243A",
      "statusBar.border": "#1B2940",
      "statusBar.debuggingBackground": "#1E2E48",
      "statusBar.foreground": "#A1B5D2",
      "statusBar.noFolderBackground": "#1E2E48",
      "statusBarItem.hoverBackground": "#22324D",
      "statusBarItem.remoteBackground": "#35568C",
      "statusBarItem.remoteForeground": "#D9E5F5",
      "tab.activeBackground": "#253754",
      "tab.activeBorderTop": "#84A4D6",
      "tab.activeModifiedBorder": "#AAC0E0",
      "tab.border": "#1B2940",
      "tab.hoverBackground": "#1A2840",
      "tab.inactiveBackground": "#1D2B43",
      "tab.inactiveForeground": "#91A5C3",
      "tab.unfocusedActiveForeground": "#C6D5EA",
      "terminal.ansiBlack": "#0D0D0D",
      "terminal.ansiBlue": "#84A4D6",
      "terminal.ansiGreen": "#6F89B8",
      "terminal.ansiWhite": "#D9E5F5",
      "terminal.ansiYellow": "#AAC0E0",
      "terminal.background": "#20314B",
      "terminal.border": "#1B2940",
      "titleBar.activeBackground": "#18243A",
      "titleBar.activeForeground": "#A1B5D2",
      "titleBar.border": "#1B2940",
      "titleBar.inactiveBackground": "#18243A",
      "titleBar.inactiveForeground": "#7285A1",
      "tree.indentGuidesStroke": "#495B79",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#7F95BA",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace.round.js",
          "meta.brace.square.js",
        ],
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
        ],
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: [
          "punctuation.section.embedded.begin",
          "punctuation.section.embedded.end",
        ],
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: "punctuation.terminator",
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#C5D4EB",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "support.function.construct",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "support.type",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "support.type.exception",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#84A4D6",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#D9E5F5",
        },
      },
      {
        scope: "source.css constant.other.color.rgb-value",
        settings: {
          foreground: "#6F89B8",
        },
      },
      {
        scope: "source.css meta.property-value",
        settings: {
          foreground: "#AAC0E0",
        },
      },
      {
        scope: "source.css punctuation.definition.keyword",
        settings: {
          foreground: "#84A4D6",
        },
      },
    ],
  },
  {
    name: "Klautors",
    slug: "klautors",
    accent: "#BF6836",
    text: "#F2D16D",
    colors: {
      "gitDecoration.untrackedResourceForeground": "#F2A057",
      "list.activeSelectionBackground": "#3A1E12",
      "list.activeSelectionForeground": "#F2A057",
      "list.focusAndSelectionOutline": "#BF6836",
      "list.focusOutline": "#BF6836",
      "list.hoverBackground": "#3A1E12",
      "list.inactiveSelectionBackground": "#3A1E12",
      "list.inactiveFocusOutline": "#591C0E",
      "panelTitle.activeBorder": "#BF6836",
      "sideBarTitle.foreground": "#F2D16D",
      "statusBarItem.remoteForeground": "#F2D16D",
      "tab.activeBorderTop": "#BF6836",
      "tab.activeModifiedBorder": "#F2A057",
      "terminal.ansiGreen": "#F2A057",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#A61205",
        },
      },
    ],
  },
  {
    name: "Klautors",
    slug: "plus-klautors",
    themeName: "Dusk In The Savannah [Plus] – Klautors",
    accent: "#F2A057",
    text: "#F2D16D",
    colors: {
      "activityBar.background": "#1F0A05",
      "activityBar.border": "#2E0F08",
      "activityBar.foreground": "#F2A057",
      "activityBarBadge.foreground": "#1F0A05",
      "breadcrumb.background": "#281108",
      "button.background": "#BF6836",
      "dropdown.background": "#27100A",
      "dropdown.border": "#2E0F08",
      "editor.background": "#2E120B",
      "editor.findMatchBackground": "#F2A057",
      "editor.findMatchHighlightBackground": "#BF683655",
      "editor.lineHighlightBackground": "#3B190F",
      "editor.selectionBackground": "#BF683666",
      "editor.selectionHighlightBorder": "#F2D16D",
      "editorCursor.background": "#0D0D0D",
      "editorCursor.foreground": "#F2D16D",
      "editorGroup.border": "#2E0F08",
      "editorGroupHeader.border": "#2E0F08",
      "editorGroupHeader.tabsBackground": "#1F0A05",
      "editorGroupHeader.tabsBorder": "#2E0F08",
      "editorHoverWidget.background": "#27100A",
      "editorHoverWidget.border": "#3B190F",
      "editorIndentGuide.activeBackground": "#F2A057",
      "editorIndentGuide.background": "#46200F",
      "editorLineNumber.activeForeground": "#F2D16D99",
      "editorLineNumber.foreground": "#7E533A",
      "editorPane.background": "#280F08",
      "editorSuggestWidget.background": "#27100A",
      "editorSuggestWidget.border": "#3B190F",
      "editorSuggestWidget.selectedBackground": "#391810",
      "editorWhitespace.foreground": "#46200F",
      "editorWidget.background": "#27100A",
      "gitDecoration.ignoredResourceForeground": "#6E4531",
      "gitDecoration.modifiedResourceForeground": "#F2D16D",
      "gitDecoration.untrackedResourceForeground": "#F2A057",
      "input.background": "#27100A",
      "list.activeSelectionBackground": "#391810",
      "list.activeSelectionForeground": "#F2D16D",
      "list.focusAndSelectionOutline": "#F2A057",
      "list.focusBackground": "#2F130B",
      "list.focusForeground": "#F2D16D",
      "list.focusOutline": "#F2A057",
      "list.highlightForeground": "#F2D16D",
      "list.hoverBackground": "#2A110A",
      "list.inactiveSelectionBackground": "#2A110A",
      "list.inactiveFocusOutline": "#BF6836",
      "list.inactiveSelectionForeground": "#E9C88C",
      "panel.background": "#281108",
      "panel.border": "#2E0F08",
      "panelTitle.activeBorder": "#F2D16D",
      "peekView.border": "#3B190F",
      "peekViewEditor.background": "#27100A",
      "peekViewResult.background": "#281108",
      "peekViewResult.matchHighlightBackground": "#BF6836",
      "peekViewTitle.background": "#1F0A05",
      "scrollbarSlider.activeBackground": "#F2A05788",
      "scrollbarSlider.background": "#BF683666",
      "scrollbarSlider.hoverBackground": "#F2D16D66",
      "sideBar.background": "#281108",
      "sideBar.border": "#2E0F08",
      "sideBar.foreground": "#D6A57A",
      "sideBarTitle.foreground": "#F2D16D",
      "statusBar.background": "#1F0A05",
      "statusBar.border": "#2E0F08",
      "statusBar.debuggingBackground": "#27100A",
      "statusBar.foreground": "#D6A57A",
      "statusBar.noFolderBackground": "#27100A",
      "statusBarItem.hoverBackground": "#2F130B",
      "statusBarItem.remoteBackground": "#BF6836",
      "statusBarItem.remoteForeground": "#F2D16D",
      "tab.activeBackground": "#351810",
      "tab.activeBorderTop": "#F2A057",
      "tab.activeModifiedBorder": "#F2D16D",
      "tab.border": "#2E0F08",
      "tab.hoverBackground": "#2C1309",
      "tab.inactiveBackground": "#281108",
      "tab.inactiveForeground": "#9C7552",
      "tab.unfocusedActiveForeground": "#E9C88C",
      "terminal.ansiBlack": "#0D0D0D",
      "terminal.ansiBlue": "#F2A057",
      "terminal.ansiGreen": "#BF6836",
      "terminal.ansiRed": "#A61205",
      "terminal.ansiWhite": "#F2D16D",
      "terminal.ansiYellow": "#F2D16D",
      "terminal.background": "#220C06",
      "terminal.border": "#2E0F08",
      "titleBar.activeBackground": "#1F0A05",
      "titleBar.activeForeground": "#D6A57A",
      "titleBar.border": "#2E0F08",
      "titleBar.inactiveBackground": "#1F0A05",
      "titleBar.inactiveForeground": "#7E533A",
      "tree.indentGuidesStroke": "#6E4531",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace.round.js",
          "meta.brace.square.js",
        ],
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
        ],
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "punctuation.terminator",
        settings: {
          foreground: "#BF6836",
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "support.function.construct",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "support.type",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#F9E3B8",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#A61205",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#F9E3B8",
        },
      },
      {
        scope: "source.css constant.other.color.rgb-value",
        settings: {
          foreground: "#F2A057",
        },
      },
      {
        scope: "source.css meta.property-value",
        settings: {
          foreground: "#F2D16D",
        },
      },
      {
        scope: "source.css punctuation.definition.keyword",
        settings: {
          foreground: "#A61205",
        },
      },
    ],
  },
  {
    name: "Bandeira",
    slug: "plus-bandeira",
    themeName: "Dusk In The Savannah [Plus] – Bandeira",
    accent: "#F2B705",
    text: "#F9E88A",
    colors: {
      "activityBar.background": "#02200B",
      "activityBar.border": "#0A3E17",
      "activityBar.foreground": "#F2B705",
      "activityBarBadge.foreground": "#02200B",
      "breadcrumb.background": "#03280F",
      "button.background": "#038C33",
      "dropdown.background": "#042E12",
      "dropdown.border": "#0A3E17",
      "editor.background": "#073A17",
      "editor.findMatchBackground": "#F2B705",
      "editor.findMatchHighlightBackground": "#038C3355",
      "editor.lineHighlightBackground": "#0A4A1E",
      "editor.selectionBackground": "#038C3366",
      "editor.selectionHighlightBorder": "#F9E88A",
      "editorCursor.background": "#02200B",
      "editorCursor.foreground": "#F9E88A",
      "editorGroup.border": "#0A3E17",
      "editorGroupHeader.border": "#0A3E17",
      "editorGroupHeader.tabsBackground": "#02200B",
      "editorGroupHeader.tabsBorder": "#0A3E17",
      "editorHoverWidget.background": "#042E12",
      "editorHoverWidget.border": "#0A3E17",
      "editorIndentGuide.activeBackground": "#F2B705",
      "editorIndentGuide.background": "#0D5023",
      "editorLineNumber.activeForeground": "#F9E88A99",
      "editorLineNumber.foreground": "#3E6E48",
      "editorPane.background": "#03280F",
      "editorSuggestWidget.background": "#042E12",
      "editorSuggestWidget.border": "#0A3E17",
      "editorSuggestWidget.selectedBackground": "#08451B",
      "editorWhitespace.foreground": "#0D5023",
      "editorWidget.background": "#042E12",
      "gitDecoration.ignoredResourceForeground": "#3E6E48",
      "gitDecoration.modifiedResourceForeground": "#F9E88A",
      "gitDecoration.untrackedResourceForeground": "#F2B705",
      "input.background": "#042E12",
      "list.activeSelectionBackground": "#08451B",
      "list.activeSelectionForeground": "#F9E88A",
      "list.focusAndSelectionOutline": "#F2B705",
      "list.focusBackground": "#053514",
      "list.focusForeground": "#F9E88A",
      "list.focusOutline": "#F2B705",
      "list.highlightForeground": "#F9E88A",
      "list.hoverBackground": "#053010",
      "list.inactiveSelectionBackground": "#053010",
      "list.inactiveFocusOutline": "#038C33",
      "list.inactiveSelectionForeground": "#D7E8AA",
      "panel.background": "#03280F",
      "panel.border": "#0A3E17",
      "panelTitle.activeBorder": "#F9E88A",
      "peekView.border": "#0A3E17",
      "peekViewEditor.background": "#042E12",
      "peekViewResult.background": "#03280F",
      "peekViewResult.matchHighlightBackground": "#038C33",
      "peekViewTitle.background": "#02200B",
      "scrollbarSlider.activeBackground": "#F2B70588",
      "scrollbarSlider.background": "#038C3366",
      "scrollbarSlider.hoverBackground": "#F9E88A66",
      "sideBar.background": "#03280F",
      "sideBar.border": "#0A3E17",
      "sideBar.foreground": "#8FB89D",
      "sideBarTitle.foreground": "#F9E88A",
      "statusBar.background": "#02200B",
      "statusBar.border": "#0A3E17",
      "statusBar.debuggingBackground": "#042E12",
      "statusBar.foreground": "#8FB89D",
      "statusBar.noFolderBackground": "#042E12",
      "statusBarItem.hoverBackground": "#053514",
      "statusBarItem.remoteBackground": "#038C33",
      "statusBarItem.remoteForeground": "#F9E88A",
      "tab.activeBackground": "#08451B",
      "tab.activeBorderTop": "#F2B705",
      "tab.activeModifiedBorder": "#F9E88A",
      "tab.border": "#0A3E17",
      "tab.hoverBackground": "#053010",
      "tab.inactiveBackground": "#03280F",
      "tab.inactiveForeground": "#6A9678",
      "tab.unfocusedActiveForeground": "#D7E8AA",
      "terminal.ansiBlack": "#02200B",
      "terminal.ansiBlue": "#2D2A8C",
      "terminal.ansiGreen": "#038C33",
      "terminal.ansiWhite": "#F2F2F2",
      "terminal.ansiYellow": "#F2B705",
      "terminal.background": "#02200B",
      "terminal.border": "#0A3E17",
      "titleBar.activeBackground": "#02200B",
      "titleBar.activeForeground": "#8FB89D",
      "titleBar.border": "#0A3E17",
      "titleBar.inactiveBackground": "#02200B",
      "titleBar.inactiveForeground": "#3E6E48",
      "tree.indentGuidesStroke": "#3E6E48",
      "widget.shadow": "#00000055",
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "punctuation.definition.comment",
          "punctuation.end.definition.comment",
          "punctuation.start.definition.comment",
        ],
        settings: {
          foreground: "#558860",
        },
      },
      {
        scope: "constant.character",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "constant.character.escape",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "constant.language",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "constant.numeric",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: [
          "entity.name.class",
          "entity.name.type.class",
        ],
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: [
          "entity.name.class.js",
          "entity.name.type.class.js",
        ],
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "entity.name.function",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "entity.name.tag",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "entity.other.attribute-name",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "keyword",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "keyword.operator",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "keyword.other.new",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: [
          "punctuation",
          "meta.brace.round.js",
          "meta.brace.square.js",
        ],
        settings: {
          foreground: "#558860",
        },
      },
      {
        scope: [
          "punctuation.definition.method-parameters",
          "punctuation.definition.function-parameters",
          "punctuation.definition.parameters",
        ],
        settings: {
          foreground: "#558860",
        },
      },
      {
        scope: "punctuation.definition.tag",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "punctuation.section",
        settings: {
          foreground: "#558860",
        },
      },
      {
        scope: "punctuation.terminator",
        settings: {
          foreground: "#558860",
        },
      },
      {
        scope: "storage",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "string",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "string.regexp",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "support.class",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "support.constant",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "support.function",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "support.function.construct",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "support.type",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "variable.other",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "variable.language",
        settings: {
          foreground: "#04B343",
        },
      },
      {
        scope: "variable.parameter",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "source.css constant.other.color.rgb-value",
        settings: {
          foreground: "#F2B705",
        },
      },
      {
        scope: "source.css meta.property-value",
        settings: {
          foreground: "#F9E88A",
        },
      },
      {
        scope: "source.css punctuation.definition.keyword",
        settings: {
          foreground: "#04B343",
        },
      },
    ],
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

function isSameScope(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function applyTokenColorOverrides(theme, overrides = []) {
  for (const override of overrides) {
    const existing = theme.tokenColors.find((entry) =>
      isSameScope(entry.scope, override.scope)
    );

    if (existing) {
      existing.settings = {
        ...existing.settings,
        ...override.settings,
      };
      continue;
    }

    theme.tokenColors.push({
      scope: override.scope,
      settings: { ...override.settings },
    });
  }
}

function buildVariant(baseTheme, variant) {
  const theme = JSON.parse(JSON.stringify(baseTheme));

  theme.name = variant.themeName ?? `Dusk In The Savannah – ${variant.name}`;

  applyColors(theme, SHARED_OVERRIDES);

  for (const prop of ACCENT_PROPS) {
    theme.colors[prop] = variant.accent;
  }

  for (const prop of TEXT_PROPS) {
    theme.colors[prop] = variant.text;
  }

  applyColors(theme, variant.colors);
  applyTokenColorOverrides(theme, variant.tokenColors);

  return theme;
}

function main() {
  const defaultBaseTheme = readJson(BASE_FILE);

  for (const variant of VARIANTS) {
    const baseTheme = variant.baseFile
      ? readJson(path.join(__dirname, variant.baseFile))
      : defaultBaseTheme;
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
