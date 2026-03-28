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
      "editor.background": "#11100E",
      "editor.findMatchBackground": "#8C816D",
      "editor.findMatchHighlightBackground": "#59544588",
      "editor.lineHighlightBackground": "#1E1A16",
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
    name: "Lagoon",
    slug: "plus-lagoon",
    themeName: "Dusk In The Savannah [Plus] – Lagoon",
    accent: "#72C1F2",
    text: "#BBDDF2",
    colors: {
      "activityBar.background": "#10171A",
      "activityBar.border": "#1B262B",
      "activityBar.foreground": "#86A641",
      "button.background": "#58732F",
      "dropdown.background": "#141B20",
      "dropdown.border": "#1B262B",
      "editor.background": "#0E1417",
      "editor.findMatchBackground": "#72C1F2",
      "editor.findMatchHighlightBackground": "#72C1F255",
      "editor.lineHighlightBackground": "#182227",
      "editor.selectionBackground": "#2B3B43",
      "editor.selectionHighlightBorder": "#86A641",
      "editorCursor.background": "#0D0D0D",
      "editorCursor.foreground": "#BBDDF2",
      "editorGroup.border": "#1B262B",
      "editorGroupHeader.border": "#1B262B",
      "editorGroupHeader.tabsBackground": "#10171A",
      "editorGroupHeader.tabsBorder": "#1B262B",
      "editorHoverWidget.background": "#141B20",
      "editorHoverWidget.border": "#213038",
      "editorIndentGuide.activeBackground": "#72C1F2",
      "editorIndentGuide.background": "#28343A",
      "editorLineNumber.activeForeground": "#BBDDF299",
      "editorLineNumber.foreground": "#4D616B",
      "editorPane.background": "#121A1E",
      "editorSuggestWidget.background": "#141B20",
      "editorSuggestWidget.border": "#213038",
      "editorSuggestWidget.selectedBackground": "#1C2A32",
      "editorWhitespace.foreground": "#2F3D45",
      "editorWidget.background": "#141B20",
      "gitDecoration.ignoredResourceForeground": "#5D6B5A",
      "gitDecoration.modifiedResourceForeground": "#BBDDF2",
      "gitDecoration.untrackedResourceForeground": "#86A641",
      "input.background": "#141B20",
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
      "panel.background": "#121A1E",
      "panel.border": "#1B262B",
      "panelTitle.activeBorder": "#86A641",
      "peekView.border": "#213038",
      "peekViewEditor.background": "#141B20",
      "peekViewResult.background": "#121A1E",
      "peekViewTitle.background": "#10171A",
      "scrollbarSlider.activeBackground": "#72C1F288",
      "scrollbarSlider.background": "#58732F66",
      "scrollbarSlider.hoverBackground": "#ABBF7E66",
      "sideBar.background": "#121A1E",
      "sideBar.border": "#1B262B",
      "sideBar.foreground": "#9EB3C2",
      "sideBarTitle.foreground": "#BBDDF2",
      "statusBar.background": "#10171A",
      "statusBar.border": "#1B262B",
      "statusBar.debuggingBackground": "#141B20",
      "statusBar.foreground": "#9EB3C2",
      "statusBar.noFolderBackground": "#141B20",
      "statusBarItem.hoverBackground": "#1B2A33",
      "statusBarItem.remoteBackground": "#58732F",
      "statusBarItem.remoteForeground": "#BBDDF2",
      "tab.activeBackground": "#1A2429",
      "tab.activeBorderTop": "#86A641",
      "tab.activeModifiedBorder": "#72C1F2",
      "tab.border": "#1B262B",
      "tab.hoverBackground": "#162026",
      "tab.inactiveBackground": "#121A1E",
      "tab.inactiveForeground": "#8AA0AE",
      "tab.unfocusedActiveForeground": "#C4D6E3",
      "terminal.ansiBlack": "#0D0D0D",
      "terminal.ansiBlue": "#72C1F2",
      "terminal.ansiGreen": "#86A641",
      "terminal.ansiWhite": "#BBDDF2",
      "terminal.ansiYellow": "#ABBF7E",
      "terminal.background": "#0E1417",
      "terminal.border": "#1B262B",
      "titleBar.activeBackground": "#10171A",
      "titleBar.activeForeground": "#9EB3C2",
      "titleBar.border": "#1B262B",
      "titleBar.inactiveBackground": "#10171A",
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
