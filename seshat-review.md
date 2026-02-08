# Seshat Review - Dusk In The Savannah

## 1. Identidade Visual & Conceito
> "Foco total, zero carnaval."

- [ ] **Paleta Base (Grafite/Dusk)**:
    - [ ] `editor.background`: `#2f333d`
    - [ ] `sideBar.background`: `#282c34`
    - [ ] `activityBar.background`: `#23272e`
    - [ ] **Check**: A transição entre esses tons cria a profundidade desejada?

- [ ] **Acentos (Savana)**:
    - [ ] **Quente (Laranja Queimado)**: `#a53500` (Badges, Brackets, Hover)
    - [ ] **Morno (Areia)**: `#F7A04F` (Bordas ativas, sideBarTitle)
    - [ ] **Frio (Tech Blue)**: `#009DFF` (Cursor, Find Match)
    - [ ] **Check**: O balanço Quente/Frio está 70/30 ou 80/20? O azul não deve dominar a "savana".

## 2. Editor & Sintaxe
- [ ] **Contraste**:
    - [ ] Comentários (`#5b667c` italic) estão legíveis o suficiente?
    - [ ] Strings (`#A3BE8C`) e Funções (`#EBCB8B`) se destacam do fundo?
- [ ] **Linguagens**:
    - [ ] Testar com arquivo `.tsx` complexo (muitos componentes e props).
    - [ ] Testar com `.json` profundo.
    - [ ] Testar com `.md` (headers, links, code blocks).

## 3. Workbench & UI
- [ ] **Foco**:
    - [ ] `list.focusBackground`: `#1B80B2` - Está harmônico com o resto?
    - [ ] `editor.selectionBackground`: `#3f4450` - Visível mas não agressivo?
- [ ] **Terminal**:
    - [ ] As cores ANSI (ex: `terminal.ansiRed`: `#e06c75`, `ansiGreen`: `#98c379`) batem com a paleta do editor?

## 4. Meta & Entrega
- [ ] **Package.json**:
    - [ ] Version `0.0.2` (no arquivo) vs `0.0.1` (tag git) vs `0.1.0` (README). **Corrigir inconsistência**.
    - [ ] `displayName`: "Dusk In The Savannah"
    - [ ] `publisher`: "juniormartinxo"
- [ ] **Assets**:
    - [ ] Icon `themes/extension/icon.png` OK?
    - [ ] Screenshots para o README.

## 5. Ação Imediata
> Coisas para resolver antes do release oficial.

- [ ] Unificar versão (sugerido: `0.1.0`).
- [ ] Adicionar screenshots reais no README.
- [ ] Validar se o laranja `#a53500` não fica muito escuro em monitores com pouco brilho (contraste com texto branco).
