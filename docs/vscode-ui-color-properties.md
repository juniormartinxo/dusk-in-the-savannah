# Mapa de Propriedades de Cor da Interface do VS Code

Referência detalhada das chaves de cor (`workbench.colorCustomizations`) que controlam a aparência da UI do VS Code. Útil para construir variantes do tema *Dusk In The Savannah*.

> Fonte oficial: https://code.visualstudio.com/api/references/theme-color
>
> Formato aceito: `#RRGGBB` (opaco) ou `#RRGGBBaa` (com canal alfa para transparência).

---

## Sumário

1. [Cores Globais](#1-cores-globais)
2. [Barra de Atividades (Activity Bar)](#2-barra-de-atividades-activity-bar)
3. [Barra Lateral (Sidebar / Explorer)](#3-barra-lateral-sidebar--explorer)
4. [Listas e Árvores](#4-listas-e-árvores)
5. [Editor](#5-editor)
6. [Abas e Grupos do Editor](#6-abas-e-grupos-do-editor)
7. [Breadcrumb](#7-breadcrumb)
8. [Painel Inferior (Panel)](#8-painel-inferior-panel)
9. [Terminal Integrado](#9-terminal-integrado)
10. [Widgets Flutuantes](#10-widgets-flutuantes)
11. [Peek View](#11-peek-view)
12. [Inputs e Dropdowns](#12-inputs-e-dropdowns)
13. [Botões](#13-botões)
14. [Scrollbar](#14-scrollbar)
15. [Barra de Status (Status Bar)](#15-barra-de-status-status-bar)
16. [Barra de Título (Title Bar)](#16-barra-de-título-title-bar)
17. [Menus](#17-menus)
18. [Notificações](#18-notificações)
19. [Git Decorations](#19-git-decorations)
20. [Diagnósticos e Problemas](#20-diagnósticos-e-problemas)
21. [Indicadores de Debug](#21-indicadores-de-debug)
22. [Minimap](#22-minimap)
23. [Gutter do Editor](#23-gutter-do-editor)

---

## 1. Cores Globais

Atuam como *fallback* para toda a interface — servem de base quando uma chave mais específica não é definida.

| Propriedade | Responsabilidade |
|---|---|
| `foreground` | Cor padrão de texto da UI quando nenhum token mais específico se aplica. |
| `errorForeground` | Cor padrão de textos de erro globais. |
| `descriptionForeground` | Textos auxiliares secundários (ex.: descrição em quick pick). |
| `focusBorder` | Contorno exibido em qualquer elemento com foco de teclado. |
| `contrastBorder` | Borda extra desenhada em temas de alto contraste. |
| `contrastActiveBorder` | Borda de elementos ativos em alto contraste. |
| `selection.background` | Fundo de seleção em componentes fora do editor (inputs, texto de widgets). |
| `widget.shadow` | Sombra projetada por widgets/popups flutuantes. |
| `icon.foreground` | Cor padrão dos ícones da UI. |
| `sash.hoverBorder` | Borda do divisor (sash) ao passar o mouse para redimensionar painéis. |

---

## 2. Barra de Atividades (Activity Bar)

A coluna vertical de ícones (Explorer, Search, SCM, Run, Extensions…).

| Propriedade | Responsabilidade |
|---|---|
| `activityBar.background` | Fundo da barra de atividades. |
| `activityBar.foreground` | Cor do ícone ativo/selecionado. |
| `activityBar.inactiveForeground` | Cor dos ícones não selecionados. |
| `activityBar.border` | Borda separando a Activity Bar do conteúdo ao lado. |
| `activityBar.activeBorder` | Indicador vertical do item atualmente ativo. |
| `activityBar.activeBackground` | Fundo do item ativo (sobre o fundo base). |
| `activityBar.activeFocusBorder` | Indicador quando o foco está no item ativo. |
| `activityBar.dropBorder` | Borda exibida ao arrastar um item sobre a barra. |
| `activityBarBadge.background` | Fundo do contador/badge (ex.: número de alterações no SCM). |
| `activityBarBadge.foreground` | Cor do texto dentro do badge. |

---

## 3. Barra Lateral (Sidebar / Explorer)

Painel que abriga Explorer, Search, SCM, etc.

| Propriedade | Responsabilidade |
|---|---|
| `sideBar.background` | Fundo do painel lateral (explorador de arquivos). |
| `sideBar.foreground` | Cor dos nomes de arquivos/pastas no explorer. |
| `sideBar.border` | Borda separando sidebar do editor. |
| `sideBar.dropBackground` | Fundo ao arrastar arquivos sobre a sidebar. |
| `sideBarTitle.foreground` | Título do painel (ex.: "EXPLORER"). |
| `sideBarSectionHeader.background` | Fundo dos cabeçalhos recolhíveis (ex.: "OPEN EDITORS", "OUTLINE"). |
| `sideBarSectionHeader.foreground` | Texto dos cabeçalhos recolhíveis. |
| `sideBarSectionHeader.border` | Borda inferior dos cabeçalhos. |

---

## 4. Listas e Árvores

Afetam **todos** os componentes com aparência de lista: Explorer, Quick Pick (`Ctrl+P`), Command Palette, Suggest Widget, referências, etc.

| Propriedade | Responsabilidade |
|---|---|
| `list.activeSelectionBackground` | Fundo do item selecionado quando a lista tem foco. |
| `list.activeSelectionForeground` | Texto do item selecionado quando a lista tem foco. |
| `list.activeSelectionIconForeground` | Ícone do item selecionado com foco. |
| `list.inactiveSelectionBackground` | Fundo do item selecionado quando a lista **perdeu** foco. |
| `list.inactiveSelectionForeground` | Texto do item selecionado sem foco. |
| `list.inactiveSelectionIconForeground` | Ícone do item selecionado sem foco. |
| `list.hoverBackground` | Fundo ao passar o mouse sobre um item. |
| `list.hoverForeground` | Texto ao passar o mouse. |
| `list.focusBackground` | Fundo do item com foco de teclado (pode não estar selecionado). |
| `list.focusForeground` | Texto do item com foco de teclado. |
| `list.focusOutline` | Contorno do item com foco de teclado. |
| `list.focusAndSelectionOutline` | Contorno quando o item é selecionado **e** focado. |
| `list.inactiveFocusBackground` | Fundo do foco quando a lista está inativa. |
| `list.inactiveFocusOutline` | Contorno de foco quando a lista está inativa. |
| `list.highlightForeground` | Cor do trecho que casou com o filtro de busca da lista. |
| `list.focusHighlightForeground` | Variante acima para o item focado. |
| `list.dropBackground` | Fundo ao arrastar um item sobre a lista. |
| `list.errorForeground` | Cor de item com erro (ex.: arquivo problemático). |
| `list.warningForeground` | Cor de item com aviso. |
| `list.invalidItemForeground` | Cor de item marcado como inválido. |
| `list.filterMatchBackground` | Fundo do trecho que casou com o filtro. |
| `list.filterMatchBorder` | Borda do trecho que casou com o filtro. |
| `list.deemphasizedForeground` | Cor de itens marcados como "pouco relevantes". |
| `tree.indentGuidesStroke` | Guias verticais de indentação da árvore. |
| `tree.tableColumnsBorder` | Bordas das colunas em listas em tabela. |

---

## 5. Editor

O editor de código propriamente dito.

### 5.1. Fundo, texto e cursor

| Propriedade | Responsabilidade |
|---|---|
| `editor.background` | Fundo da área de edição. |
| `editor.foreground` | Cor padrão do texto (usada quando nenhuma token color se aplica). |
| `editorCursor.foreground` | Cor do cursor de texto. |
| `editorCursor.background` | Cor do **caractere** coberto pelo cursor (quando ele "pisca" por cima). |
| `editor.lineHighlightBackground` | Fundo da linha atual. |
| `editor.lineHighlightBorder` | Borda da linha atual. |

### 5.2. Seleção

| Propriedade | Responsabilidade |
|---|---|
| `editor.selectionBackground` | Fundo do texto selecionado. |
| `editor.selectionForeground` | Cor do texto selecionado (sobrescreve syntax). |
| `editor.inactiveSelectionBackground` | Fundo da seleção quando o editor perdeu foco. |
| `editor.selectionHighlightBackground` | Fundo das outras ocorrências do texto selecionado. |
| `editor.selectionHighlightBorder` | Borda das outras ocorrências. |

### 5.3. Busca

| Propriedade | Responsabilidade |
|---|---|
| `editor.findMatchBackground` | Fundo do match atual na busca (`Ctrl+F`). |
| `editor.findMatchBorder` | Borda do match atual. |
| `editor.findMatchHighlightBackground` | Fundo dos outros matches visíveis. |
| `editor.findMatchHighlightBorder` | Borda dos outros matches. |
| `editor.findRangeHighlightBackground` | Fundo da área limitada por "Find in selection". |
| `editor.findRangeHighlightBorder` | Borda dessa área. |

### 5.4. Destaques diversos

| Propriedade | Responsabilidade |
|---|---|
| `editor.hoverHighlightBackground` | Fundo da linha sob hover quando um tooltip aparece. |
| `editor.wordHighlightBackground` | Destaque de leitura do símbolo sob o cursor. |
| `editor.wordHighlightStrongBackground` | Destaque de escrita do símbolo sob o cursor. |
| `editor.wordHighlightBorder` | Borda do destaque de leitura. |
| `editor.wordHighlightStrongBorder` | Borda do destaque de escrita. |
| `editor.rangeHighlightBackground` | Fundo de "Go to Symbol" e similares. |
| `editor.rangeHighlightBorder` | Borda desse destaque. |
| `editor.symbolHighlightBackground` | Destaque quando você navega para um símbolo. |
| `editor.symbolHighlightBorder` | Borda correspondente. |

### 5.5. Indentação, whitespace e brackets

| Propriedade | Responsabilidade |
|---|---|
| `editorWhitespace.foreground` | Caracteres de whitespace quando `renderWhitespace` está ativo. |
| `editorIndentGuide.background` | Guias verticais de indentação. |
| `editorIndentGuide.activeBackground` | Guia de indentação do bloco ativo. |
| `editorIndentGuide.background1…6` | Níveis alternados de indentação (modo bracketPairGuides). |
| `editorIndentGuide.activeBackground1…6` | Níveis alternados no bloco ativo. |
| `editorBracketMatch.background` | Fundo do par de brackets correspondente ao cursor. |
| `editorBracketMatch.border` | Borda do par de brackets. |
| `editorBracketHighlight.foreground1…6` | Cores da coloração de brackets por nível (rainbow brackets). |
| `editorBracketPairGuide.background1…6` | Guias verticais coloridas por par de brackets. |
| `editorBracketPairGuide.activeBackground1…6` | Variante ativa das guias. |

### 5.6. Linhas e números

| Propriedade | Responsabilidade |
|---|---|
| `editorLineNumber.foreground` | Número das linhas. |
| `editorLineNumber.activeForeground` | Número da linha atual (cursor). |
| `editorLineNumber.dimmedForeground` | Números "escurecidos" (ex.: linhas colapsadas). |
| `editorRuler.foreground` | Linhas verticais de limite de coluna (`editor.rulers`). |
| `editorCodeLens.foreground` | Texto das CodeLens (referências, testes…). |
| `editorLink.activeForeground` | Cor dos links ativos (`Ctrl`+click). |

---

## 6. Abas e Grupos do Editor

### 6.1. Abas individuais

| Propriedade | Responsabilidade |
|---|---|
| `tab.activeBackground` | Fundo da aba ativa no grupo focado. |
| `tab.activeForeground` | Texto da aba ativa no grupo focado. |
| `tab.activeBorder` | Borda **inferior** da aba ativa. |
| `tab.activeBorderTop` | Borda **superior** da aba ativa (o marcador mais comum). |
| `tab.activeModifiedBorder` | Borda quando a aba ativa possui alterações não salvas. |
| `tab.inactiveBackground` | Fundo das abas não ativas. |
| `tab.inactiveForeground` | Texto das abas não ativas. |
| `tab.inactiveModifiedBorder` | Borda inferior de abas inativas modificadas. |
| `tab.hoverBackground` | Fundo da aba ao passar o mouse. |
| `tab.hoverForeground` | Texto da aba ao passar o mouse. |
| `tab.hoverBorder` | Borda de hover. |
| `tab.unfocusedActiveBackground` | Aba ativa no grupo **sem foco**. |
| `tab.unfocusedActiveForeground` | Texto da aba ativa no grupo sem foco. |
| `tab.unfocusedActiveBorder` | Borda inferior no grupo sem foco. |
| `tab.unfocusedActiveBorderTop` | Borda superior no grupo sem foco. |
| `tab.unfocusedActiveModifiedBorder` | Borda de aba modificada no grupo sem foco. |
| `tab.unfocusedInactiveBackground` | Abas inativas em grupo sem foco. |
| `tab.unfocusedInactiveForeground` | Texto de abas inativas em grupo sem foco. |
| `tab.unfocusedInactiveModifiedBorder` | Borda modificada correspondente. |
| `tab.unfocusedHoverBackground` | Hover em grupo sem foco. |
| `tab.unfocusedHoverForeground` | Texto hover em grupo sem foco. |
| `tab.unfocusedHoverBorder` | Borda hover em grupo sem foco. |
| `tab.border` | Separador entre abas. |
| `tab.lastPinnedBorder` | Borda que separa abas fixadas das outras. |
| `tab.dragAndDropBorder` | Indicador ao arrastar abas. |

### 6.2. Grupos e cabeçalho de abas

| Propriedade | Responsabilidade |
|---|---|
| `editorGroup.border` | Borda entre grupos de editores lado a lado. |
| `editorGroup.dropBackground` | Fundo ao arrastar um editor sobre um grupo. |
| `editorGroup.dropIntoPromptForeground` | Texto da instrução "drop to copy…". |
| `editorGroup.emptyBackground` | Fundo de grupo vazio (sem nenhuma aba aberta). |
| `editorGroup.focusedEmptyBorder` | Borda de grupo vazio focado. |
| `editorGroupHeader.tabsBackground` | Fundo da faixa que contém as abas. |
| `editorGroupHeader.tabsBorder` | Borda inferior dessa faixa. |
| `editorGroupHeader.border` | Borda entre a faixa de abas e o conteúdo do editor. |
| `editorGroupHeader.noTabsBackground` | Fundo quando as abas estão ocultas. |
| `editorPane.background` | Fundo do painel do editor (ex.: visualizações especiais, welcome). |

---

## 7. Breadcrumb

| Propriedade | Responsabilidade |
|---|---|
| `breadcrumb.background` | Fundo da barra de breadcrumb. |
| `breadcrumb.foreground` | Cor padrão dos segmentos. |
| `breadcrumb.focusForeground` | Segmento com foco. |
| `breadcrumb.activeSelectionForeground` | Segmento selecionado no seletor. |
| `breadcrumbPicker.background` | Fundo do popup do seletor de breadcrumb. |

---

## 8. Painel Inferior (Panel)

Hospeda Terminal, Problems, Output, Debug Console, Ports, etc.

| Propriedade | Responsabilidade |
|---|---|
| `panel.background` | Fundo do painel inferior. |
| `panel.border` | Borda superior do painel. |
| `panel.dropBorder` | Borda ao arrastar algo sobre o painel. |
| `panelTitle.activeForeground` | Título da aba ativa do painel. |
| `panelTitle.inactiveForeground` | Títulos das abas inativas. |
| `panelTitle.activeBorder` | Indicador embaixo do título ativo. |
| `panelTitle.border` | Borda geral da barra de títulos. |
| `panelInput.border` | Borda de inputs dentro do painel. |
| `panelSection.border` | Borda entre seções (quando há múltiplas). |
| `panelSection.dropBackground` | Fundo ao arrastar entre seções. |
| `panelSectionHeader.background` | Fundo dos headers de seção. |
| `panelSectionHeader.foreground` | Texto dos headers de seção. |
| `panelSectionHeader.border` | Borda dos headers de seção. |

---

## 9. Terminal Integrado

| Propriedade | Responsabilidade |
|---|---|
| `terminal.background` | Fundo do terminal. |
| `terminal.foreground` | Cor padrão do texto. |
| `terminal.border` | Borda do terminal. |
| `terminal.selectionBackground` | Seleção no terminal. |
| `terminal.inactiveSelectionBackground` | Seleção quando o terminal não tem foco. |
| `terminal.selectionForeground` | Texto de seleção (sobrescreve). |
| `terminal.findMatchBackground` | Match atual na busca do terminal. |
| `terminal.findMatchHighlightBackground` | Outros matches. |
| `terminal.findMatchBorder` / `.findMatchHighlightBorder` | Bordas dos matches. |
| `terminal.hoverHighlightBackground` | Hover sobre áreas do terminal. |
| `terminalCursor.foreground` | Cor do cursor. |
| `terminalCursor.background` | Caractere sob o cursor. |
| `terminal.dropBackground` | Fundo ao arrastar algo sobre o terminal. |
| `terminal.tab.activeBorder` | Borda da aba ativa (no modo multi-terminal). |
| `terminalCommandDecoration.defaultBackground` | Marcador de comando executado. |
| `terminalCommandDecoration.successBackground` | Marcador de sucesso. |
| `terminalCommandDecoration.errorBackground` | Marcador de falha. |

### Paleta ANSI (terminal)

| Propriedade | Responsabilidade |
|---|---|
| `terminal.ansiBlack` | Preto (índice 0). |
| `terminal.ansiRed` | Vermelho (1). |
| `terminal.ansiGreen` | Verde (2). |
| `terminal.ansiYellow` | Amarelo (3). |
| `terminal.ansiBlue` | Azul (4). |
| `terminal.ansiMagenta` | Magenta (5). |
| `terminal.ansiCyan` | Ciano (6). |
| `terminal.ansiWhite` | Branco (7). |
| `terminal.ansiBrightBlack` | Cinza/preto brilhante (8). |
| `terminal.ansiBrightRed` … `BrightWhite` | Versões brilhantes dos índices 9 a 15. |

---

## 10. Widgets Flutuantes

Popups e overlays que o editor projeta.

### 10.1. Hover (tooltip de informação)

| Propriedade | Responsabilidade |
|---|---|
| `editorHoverWidget.background` | Fundo do tooltip de hover. |
| `editorHoverWidget.foreground` | Texto dentro do tooltip. |
| `editorHoverWidget.border` | Borda do tooltip. |
| `editorHoverWidget.highlightForeground` | Texto em destaque dentro do tooltip. |
| `editorHoverWidget.statusBarBackground` | Fundo da barra inferior de ações do tooltip. |

### 10.2. Suggest Widget (autocomplete)

| Propriedade | Responsabilidade |
|---|---|
| `editorSuggestWidget.background` | Fundo da lista de sugestões. |
| `editorSuggestWidget.foreground` | Texto padrão das sugestões. |
| `editorSuggestWidget.border` | Borda do widget. |
| `editorSuggestWidget.selectedBackground` | Fundo da sugestão focada. |
| `editorSuggestWidget.selectedForeground` | Texto da sugestão focada. |
| `editorSuggestWidget.selectedIconForeground` | Ícone da sugestão focada. |
| `editorSuggestWidget.highlightForeground` | Trecho que casou com o filtro. |
| `editorSuggestWidget.focusHighlightForeground` | Trecho destacado na sugestão focada. |
| `editorSuggestWidgetStatus.foreground` | Texto do rodapé de status do widget. |

### 10.3. Outros widgets do editor

| Propriedade | Responsabilidade |
|---|---|
| `editorWidget.background` | Fundo de widgets internos (busca, replace, navegação). |
| `editorWidget.foreground` | Texto dentro desses widgets. |
| `editorWidget.border` | Borda dos widgets. |
| `editorWidget.resizeBorder` | Borda exibida durante redimensionamento. |
| `editorGhostText.foreground` | Texto fantasma (sugestões inline do Copilot, por exemplo). |
| `editorGhostText.background` | Fundo do texto fantasma. |
| `editorGhostText.border` | Borda do texto fantasma. |
| `editorStickyScroll.background` | Fundo do "sticky scroll" (cabeçalhos fixos no topo). |
| `editorStickyScrollHover.background` | Fundo do sticky scroll em hover. |

---

## 11. Peek View

Usada para "Peek Definition", "Peek References", etc.

| Propriedade | Responsabilidade |
|---|---|
| `peekView.border` | Borda da janela de peek. |
| `peekViewEditor.background` | Fundo do editor embutido. |
| `peekViewEditor.matchHighlightBackground` | Destaque do match dentro do editor embutido. |
| `peekViewEditor.matchHighlightBorder` | Borda do destaque. |
| `peekViewEditorGutter.background` | Fundo do gutter do peek. |
| `peekViewResult.background` | Fundo da lista de resultados. |
| `peekViewResult.fileForeground` | Cor do nome do arquivo. |
| `peekViewResult.lineForeground` | Cor da linha de pré-visualização. |
| `peekViewResult.matchHighlightBackground` | Destaque do match na lista. |
| `peekViewResult.selectionBackground` | Fundo do resultado selecionado. |
| `peekViewResult.selectionForeground` | Texto do resultado selecionado. |
| `peekViewTitle.background` | Fundo do cabeçalho (título). |
| `peekViewTitleLabel.foreground` | Cor do nome do arquivo no cabeçalho. |
| `peekViewTitleDescription.foreground` | Descrição secundária no cabeçalho. |

---

## 12. Inputs e Dropdowns

### 12.1. Campos de texto

| Propriedade | Responsabilidade |
|---|---|
| `input.background` | Fundo do campo. |
| `input.foreground` | Texto digitado. |
| `input.border` | Borda. |
| `input.placeholderForeground` | Placeholder. |
| `inputOption.activeBorder` | Borda de botões-opção ativos (ex.: "match case" na busca). |
| `inputOption.activeBackground` | Fundo da opção ativa. |
| `inputOption.activeForeground` | Ícone da opção ativa. |
| `inputOption.hoverBackground` | Fundo da opção em hover. |
| `inputValidation.infoBackground` | Fundo de mensagem informativa. |
| `inputValidation.infoForeground` | Texto informativo. |
| `inputValidation.infoBorder` | Borda informativa. |
| `inputValidation.warningBackground` / `Foreground` / `Border` | Variante de aviso. |
| `inputValidation.errorBackground` / `Foreground` / `Border` | Variante de erro. |

### 12.2. Dropdowns / selects

| Propriedade | Responsabilidade |
|---|---|
| `dropdown.background` | Fundo do dropdown. |
| `dropdown.listBackground` | Fundo da lista aberta (macOS usa o mesmo do sistema). |
| `dropdown.foreground` | Texto selecionado. |
| `dropdown.border` | Borda. |
| `checkbox.background` | Fundo de checkboxes. |
| `checkbox.foreground` | Marca do checkbox. |
| `checkbox.border` | Borda do checkbox. |

---

## 13. Botões

| Propriedade | Responsabilidade |
|---|---|
| `button.background` | Fundo do botão primário. |
| `button.foreground` | Texto do botão primário. |
| `button.border` | Borda do botão. |
| `button.hoverBackground` | Fundo em hover. |
| `button.secondaryBackground` | Fundo do botão secundário. |
| `button.secondaryForeground` | Texto do botão secundário. |
| `button.secondaryHoverBackground` | Hover do botão secundário. |
| `button.separator` | Separador em botões compostos (split buttons). |

---

## 14. Scrollbar

Usa canais alfa (`#RRGGBBaa`) para ficar sutil.

| Propriedade | Responsabilidade |
|---|---|
| `scrollbar.shadow` | Sombra da scrollbar ao sobrepor o conteúdo. |
| `scrollbarSlider.background` | Polegar da scrollbar em estado normal. |
| `scrollbarSlider.hoverBackground` | Polegar em hover. |
| `scrollbarSlider.activeBackground` | Polegar sendo arrastado. |

---

## 15. Barra de Status (Status Bar)

| Propriedade | Responsabilidade |
|---|---|
| `statusBar.background` | Fundo quando há pasta/projeto aberto. |
| `statusBar.foreground` | Texto padrão. |
| `statusBar.border` | Borda superior da status bar. |
| `statusBar.noFolderBackground` | Fundo quando nenhum projeto está aberto. |
| `statusBar.noFolderForeground` | Texto correspondente. |
| `statusBar.noFolderBorder` | Borda correspondente. |
| `statusBar.debuggingBackground` | Fundo durante sessão de debug. |
| `statusBar.debuggingForeground` | Texto durante debug. |
| `statusBar.debuggingBorder` | Borda durante debug. |
| `statusBar.focusBorder` | Borda quando a status bar tem foco de teclado. |
| `statusBarItem.activeBackground` | Fundo do item clicado (`active`). |
| `statusBarItem.hoverBackground` | Fundo do item em hover. |
| `statusBarItem.hoverForeground` | Texto em hover. |
| `statusBarItem.prominentBackground` | Fundo de itens "prominentes" (modo de aviso). |
| `statusBarItem.prominentForeground` | Texto prominent. |
| `statusBarItem.prominentHoverBackground` | Hover de item prominent. |
| `statusBarItem.remoteBackground` | Fundo do indicador de conexão remota (SSH/WSL/Devcontainer). |
| `statusBarItem.remoteForeground` | Texto do indicador remoto. |
| `statusBarItem.remoteHoverBackground` | Hover do remoto. |
| `statusBarItem.errorBackground` | Fundo de item de erro. |
| `statusBarItem.errorForeground` | Texto de item de erro. |
| `statusBarItem.warningBackground` | Fundo de item de aviso. |
| `statusBarItem.warningForeground` | Texto de aviso. |
| `statusBarItem.compactHoverBackground` | Hover em modo compacto. |
| `statusBarItem.focusBorder` | Borda ao focar item individual. |

---

## 16. Barra de Título (Title Bar)

Presente no macOS sempre; no Windows/Linux apenas quando `window.titleBarStyle` é `custom`.

| Propriedade | Responsabilidade |
|---|---|
| `titleBar.activeBackground` | Fundo quando a janela está em foco. |
| `titleBar.activeForeground` | Texto quando ativa. |
| `titleBar.inactiveBackground` | Fundo quando a janela está fora de foco. |
| `titleBar.inactiveForeground` | Texto quando inativa. |
| `titleBar.border` | Borda inferior da title bar. |

---

## 17. Menus

Menus contextuais, command palette (header) e menu bar.

| Propriedade | Responsabilidade |
|---|---|
| `menubar.selectionForeground` | Texto do menu bar em seleção. |
| `menubar.selectionBackground` | Fundo do menu bar em seleção. |
| `menubar.selectionBorder` | Borda do menu bar em seleção. |
| `menu.foreground` | Texto padrão dos menus. |
| `menu.background` | Fundo padrão. |
| `menu.selectionForeground` | Texto do item selecionado. |
| `menu.selectionBackground` | Fundo do item selecionado. |
| `menu.selectionBorder` | Borda do item selecionado. |
| `menu.separatorBackground` | Cor dos separadores. |
| `menu.border` | Borda geral do menu. |
| `commandCenter.foreground` | Texto do Command Center (cabeçalho superior). |
| `commandCenter.activeForeground` | Texto do Command Center ativo. |
| `commandCenter.background` | Fundo do Command Center. |
| `commandCenter.border` | Borda do Command Center. |
| `commandCenter.activeBackground` | Fundo ativo. |
| `commandCenter.activeBorder` | Borda ativa. |
| `commandCenter.inactiveForeground` | Texto inativo. |
| `commandCenter.inactiveBorder` | Borda inativa. |

---

## 18. Notificações

| Propriedade | Responsabilidade |
|---|---|
| `notificationCenter.border` | Borda do centro de notificações. |
| `notificationCenterHeader.background` | Fundo do cabeçalho. |
| `notificationCenterHeader.foreground` | Texto do cabeçalho. |
| `notificationToast.border` | Borda dos toasts. |
| `notifications.foreground` | Texto das notificações. |
| `notifications.background` | Fundo das notificações. |
| `notifications.border` | Borda interna. |
| `notificationLink.foreground` | Links em notificações. |
| `notificationsErrorIcon.foreground` | Ícone de erro. |
| `notificationsWarningIcon.foreground` | Ícone de aviso. |
| `notificationsInfoIcon.foreground` | Ícone informativo. |

---

## 19. Git Decorations

Colorem arquivos no Explorer e no SCM conforme estado do Git.

| Propriedade | Responsabilidade |
|---|---|
| `gitDecoration.addedResourceForeground` | Arquivos adicionados (staged). |
| `gitDecoration.modifiedResourceForeground` | Arquivos modificados. |
| `gitDecoration.deletedResourceForeground` | Arquivos deletados. |
| `gitDecoration.renamedResourceForeground` | Arquivos renomeados. |
| `gitDecoration.untrackedResourceForeground` | Arquivos não rastreados. |
| `gitDecoration.ignoredResourceForeground` | Arquivos ignorados (`.gitignore`). |
| `gitDecoration.conflictingResourceForeground` | Arquivos em conflito. |
| `gitDecoration.stageModifiedResourceForeground` | Modificações já stageadas. |
| `gitDecoration.stageDeletedResourceForeground` | Deleções já stageadas. |
| `gitDecoration.submoduleResourceForeground` | Submódulos. |

---

## 20. Diagnósticos e Problemas

| Propriedade | Responsabilidade |
|---|---|
| `editorError.foreground` | Sublinhado ondulado vermelho. |
| `editorError.background` | Fundo atrás do erro. |
| `editorError.border` | Borda extra (usada em alto contraste). |
| `editorWarning.foreground` | Sublinhado ondulado amarelo. |
| `editorWarning.background` | Fundo de aviso. |
| `editorWarning.border` | Borda de aviso. |
| `editorInfo.foreground` | Sublinhado informativo. |
| `editorInfo.background` | Fundo informativo. |
| `editorInfo.border` | Borda informativa. |
| `editorHint.foreground` | Sublinhado de dica. |
| `editorHint.border` | Borda de dica. |
| `problemsErrorIcon.foreground` | Ícone de erro no painel Problems. |
| `problemsWarningIcon.foreground` | Ícone de aviso. |
| `problemsInfoIcon.foreground` | Ícone informativo. |
| `editorUnnecessaryCode.opacity` | Opacidade aplicada a código "desnecessário" (ex.: import não usado). |
| `editorUnnecessaryCode.border` | Borda desse destaque. |

---

## 21. Indicadores de Debug

| Propriedade | Responsabilidade |
|---|---|
| `debugToolBar.background` | Fundo da toolbar flutuante de debug. |
| `debugToolBar.border` | Borda da toolbar. |
| `debugIcon.breakpointForeground` | Ícone do breakpoint ativo. |
| `debugIcon.breakpointDisabledForeground` | Breakpoint desabilitado. |
| `debugIcon.breakpointUnverifiedForeground` | Breakpoint não verificado. |
| `debugIcon.breakpointCurrentStackframeForeground` | Stackframe atual. |
| `debugIcon.breakpointStackframeForeground` | Outros stackframes. |
| `debugIcon.startForeground` | Ícone "start". |
| `debugIcon.pauseForeground` | Ícone "pause". |
| `debugIcon.stopForeground` | Ícone "stop". |
| `debugIcon.disconnectForeground` | Ícone "disconnect". |
| `debugIcon.restartForeground` | Ícone "restart". |
| `debugIcon.stepOverForeground` | Ícone "step over". |
| `debugIcon.stepIntoForeground` | Ícone "step into". |
| `debugIcon.stepOutForeground` | Ícone "step out". |
| `debugIcon.continueForeground` | Ícone "continue". |
| `debugIcon.stepBackForeground` | Ícone "step back". |
| `editor.stackFrameHighlightBackground` | Linha onde a execução está pausada. |
| `editor.focusedStackFrameHighlightBackground` | Linha do stackframe focado. |
| `debugConsole.infoForeground` | Texto informativo no Debug Console. |
| `debugConsole.warningForeground` | Texto de aviso. |
| `debugConsole.errorForeground` | Texto de erro. |
| `debugConsole.sourceForeground` | Metadados de origem (arquivo, linha). |
| `debugConsoleInputIcon.foreground` | Ícone do input. |

---

## 22. Minimap

| Propriedade | Responsabilidade |
|---|---|
| `minimap.background` | Fundo do minimap. |
| `minimap.selectionHighlight` | Seleção do editor refletida no minimap. |
| `minimap.selectionOccurrenceHighlight` | Outras ocorrências da seleção. |
| `minimap.findMatchHighlight` | Matches de busca. |
| `minimap.errorHighlight` | Indicadores de erro. |
| `minimap.warningHighlight` | Indicadores de aviso. |
| `minimap.foregroundOpacity` | Opacidade global do conteúdo. |
| `minimapSlider.background` | Fundo do slider. |
| `minimapSlider.hoverBackground` | Slider em hover. |
| `minimapSlider.activeBackground` | Slider sendo arrastado. |
| `minimapGutter.addedBackground` | Linhas adicionadas (git). |
| `minimapGutter.modifiedBackground` | Linhas modificadas. |
| `minimapGutter.deletedBackground` | Linhas deletadas. |

---

## 23. Gutter do Editor

Faixa à esquerda com números e decorações.

| Propriedade | Responsabilidade |
|---|---|
| `editorGutter.background` | Fundo do gutter. |
| `editorGutter.modifiedBackground` | Marca de linha modificada (git). |
| `editorGutter.addedBackground` | Marca de linha adicionada. |
| `editorGutter.deletedBackground` | Marca de linha deletada. |
| `editorGutter.commentRangeForeground` | Barra lateral de comentários (ex.: extensões de review). |
| `editorGutter.commentGlyphForeground` | Glifo de comentário. |
| `editorGutter.commentUnresolvedGlyphForeground` | Glifo de comentário não resolvido. |
| `editorGutter.foldingControlForeground` | Ícone de folding (expandir/recolher). |
| `editorOverviewRuler.border` | Borda da régua à direita do editor. |
| `editorOverviewRuler.background` | Fundo da régua. |
| `editorOverviewRuler.findMatchForeground` | Marca de match de busca. |
| `editorOverviewRuler.rangeHighlightForeground` | Marca de destaque de range. |
| `editorOverviewRuler.selectionHighlightForeground` | Marca de seleção. |
| `editorOverviewRuler.wordHighlightForeground` | Marca de ocorrências de palavra. |
| `editorOverviewRuler.wordHighlightStrongForeground` | Marca de ocorrências de escrita. |
| `editorOverviewRuler.modifiedForeground` | Marca de linha modificada. |
| `editorOverviewRuler.addedForeground` | Linha adicionada. |
| `editorOverviewRuler.deletedForeground` | Linha deletada. |
| `editorOverviewRuler.errorForeground` | Erros. |
| `editorOverviewRuler.warningForeground` | Avisos. |
| `editorOverviewRuler.infoForeground` | Informativos. |
| `editorOverviewRuler.bracketMatchForeground` | Bracket match. |

---

## Dicas de uso

1. **Comece pelo fundo.** Defina `editor.background`, `sideBar.background`, `activityBar.background`, `statusBar.background` e `panel.background` antes de qualquer outra coisa — eles estabelecem a base da paleta.
2. **Use alpha para destaques sutis.** Propriedades como `editor.selectionBackground`, `editor.findMatchHighlightBackground`, `scrollbarSlider.background` ficam melhores com canal alfa (ex.: `#F2B70555`).
3. **Propriedades `*Border` são opcionais.** Se omitidas, o VS Code desenha sem borda. Em temas escuros, borders sutis (`#RRGGBB` próximo ao fundo) ajudam a delimitar regiões.
4. **Listas são globais.** `list.*` afeta Explorer, Quick Pick, Command Palette, Suggest Widget, Peek, etc. Teste mudanças em todos esses contextos.
5. **Teste com conteúdo real.** Abra um projeto, rode debug, execute o terminal e o SCM para ver como as cores interagem em todos os estados (ativo, inativo, hover, foco).
6. **`workbench.action.generateColorTheme`** (via Command Palette) gera um arquivo com **todas** as chaves suportadas pela versão do VS Code instalada — útil como checklist atualizado.
