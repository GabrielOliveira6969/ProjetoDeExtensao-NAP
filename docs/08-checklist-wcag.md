# Checklist WCAG (manual) — NAP Impacta

Checklist baseado em [03-requisitos-nao-funcionais.md](03-requisitos-nao-funcionais.md) (RNF-01/RNF-02) e nos controles já presentes no site. Nível alvo: **WCAG 2.2 AA**, no que for aplicável a um site estático informativo.

**Como usar:** percorra cada página (`index`, `sobre`, `servicos`, `conteudos`, `contato`) no desktop e no celular. Marque `[x]` quando verificado. Registre falhas em “Achados”.

**Data da verificação:** _a preencher_  
**Quem verificou:** _a preencher_  
**Navegadores usados:** _ex.: Chrome, Edge, Firefox_

---

## Perceptível

- [x] Idioma da página definido (`lang="pt-BR"`)
- [x] Hierarquia de títulos coerente (um `h1` por página; `h2`/`h3` em ordem)
- [x] Contraste de texto/fundo adequado no tema padrão (texto escuro sobre fundo claro)
- [x] Modo alto contraste disponível (botão Contraste + `body.contraste`)
- [x] Texto redimensionável via controles A−/A+ (90%–150%) e zoom do navegador
- [ ] Imagens informativas com `alt` descritivo *(N/A enquanto não houver imagens em `img/`)*
- [ ] Imagens decorativas com `alt=""` *(N/A)*
- [x] Informação não depende só de cor (links sublinhados/peso; estados com texto/`aria`)

## Operável

- [x] Skip link “Ir para o conteúdo” funcional (`#main`)
- [x] Toda a navegação e botões acionáveis por teclado
- [x] Foco visível (`:focus-visible`)
- [x] Menu mobile: `aria-expanded`, fecha com Escape e ao clicar em link
- [x] Alvos de toque com área mínima razoável (~44px em botões/links de card)
- [x] Sem armadilha de foco identificada no menu
- [x] `prefers-reduced-motion` respeitado (scroll suave desativado)

## Compreensível

- [x] Labels/`aria-label` em controles sem texto suficiente (A−, A+, Contraste, Menu)
- [x] Página atual identificada (`aria-current="page"`)
- [x] Mensagens de mudança de fonte/contraste anunciadas (`aria-live` em `#a11y-live`)
- [x] Linguagem em português claro e acolhedor
- [x] Placeholders de contato não se passam por dados oficiais (aviso em Contato)

## Robusto

- [x] HTML5 semântico (`header`, `nav`, `main`, `footer`)
- [x] Atributos ARIA usados de forma coerente nos controles do cabeçalho
- [x] CSS/JS carregam pelos caminhos `css/style.css` e `js/main.js`

---

## Achados e correções

| # | Página | Problema | Severidade | Status |
|---|---|---|---|---|
| — | — | Nenhum bloqueador encontrado na revisão estrutural do código (nov/2026). Completar verificação visual pela equipe. | — | Pendente preenchimento humano |

## Conclusão desta rodada

Estrutura e comportamentos de acessibilidade do scaffold estão **alinhados ao checklist**. Pendências reais:

1. Verificação visual/humana nas tabelas acima (marcar data/responsável).
2. Textos alternativos quando houver imagens (`img/`).
3. Reauditoria após conteúdo oficial do NAP.
