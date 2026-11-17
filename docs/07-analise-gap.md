# Análise de gap — planejado vs. atual

**Data de referência:** novembro/2026  
**Base:** briefing RPE + [`README.md`](../README.md) + código + pasta `docs/`.

## Veredito

Scaffold estático utilizável, com evidências de Fase 3 (checklist WCAG + roteiro de testes) e templates das Fases 1–2 e prep 4–5. **Conteúdo oficial bloqueado** (NAP ainda não passou dados). Estimativa global: **cerca de 45–50%**.

Bloqueadores principais até finalizar:

1. Validação e conteúdo real com a equipe do NAP (contatos, serviços, textos).
2. Execução real de questionário, benchmark preenchido, Figma e sessões de usabilidade.
3. Publicação “oficial” só após RF-15 (contatos reais) — ver [17-desbloqueio-conteudo-nap.md](17-desbloqueio-conteudo-nap.md).

---

## Status por fase

| Fase | Status estimado | Situação |
|---|---|---|
| 1 — Levantamento e requisitos | ~40–50% | Requisitos em `docs/01–04`; templates ata/questionário/benchmark (`10–12`). Execução de campo pendente. |
| 2 — Design e prototipação | ~25–35% | Mapa do site feito; `docs/13` para Figma/wireframes/validação. Protótipo e validação pendentes. |
| 3 — Desenvolvimento do site | ~70–80% | 5 páginas + a11y + `css/`/`js/`; `docs/08` e `docs/09`; `img/` preparada. Sessões de teste a preencher. |
| 4 — Conteúdo e comunicação | ~20–30% | Rascunhos + inventário (`docs/14`); pasta `img/`; contatos ainda provisórios. |
| 5 — Publicação e avaliação | ~15–20% | Guias de publicação e atualização (`15–16`); Forms placeholder; URL oficial não ativada. |

**Consolidado:** ~**45–50%** do projeto fechado.

---

## O que já existe no repositório

| Item | Evidência |
|---|---|
| Site multipágina estático | `index.html`, `sobre.html`, `servicos.html`, `conteudos.html`, `contato.html` |
| Estilos e script | `css/style.css`, `js/main.js` |
| Navegação + a11y | Skip, menu mobile, A±, contraste, `aria-live`, foco, reduced motion |
| Docs de requisitos | `docs/01`–`04` |
| Evidências Fase 3 | `docs/08`, `docs/09`, `img/README.md` |
| Templates Fases 1–2 | `docs/10`–`13` |
| Prep Fases 4–5 | `docs/14`–`17` |

## Gaps restantes

| Gap | Detalhe | Impacto |
|---|---|---|
| Dados oficiais do NAP | Não fornecidos à equipe | Bloqueia RF-15 e publicação oficial |
| Assets em `img/` | Só README | Identidade visual incompleta |
| Figma / wireframes | Sem link preenchido | Fase 2 incompleta |
| Sessões de usabilidade | Tabelas vazias em `docs/09` | Evidência RPE pendente |
| Formulário de feedback | URL Google Forms a criar | RF-16 / Fase 5 |
| GitHub Pages | Guia pronto; ativação opcional como preview | RNF-09 oficial só pós-NAP |

---

## Matriz requisito × status

| ID | Tema | Status |
|---|---|---|
| RF-01 a RF-07 | Nav, home | Atendido na estrutura |
| RF-08 a RF-14 | Sobre, serviços, conteúdos | Rascunho (falta validação NAP) |
| RF-15 | Contato real | Não atendido |
| RF-16 | Formulário | Preparado via Forms (URL pendente) |
| RF-17 a RF-18 | Teclado / alt | Teclado ok; alt quando houver imagens |
| RNF-01 a RNF-03 | WCAG / responsivo | Parcial (checklist criado; auditoria humana a completar) |
| RNF-04 a RNF-06, RNF-08, RNF-10 | Simplicidade, PT-BR, privacidade | Atendido |
| RNF-07 | Navegadores | Template em `docs/09` |
| RNF-09 | Publicação | Guia pronto; URL oficial pendente |

---

## Conclusão

A base técnica e documental está pronta para avançar em paralelo ao NAP. **Não publicar como página oficial** enquanto contatos e textos não forem validados. Próximo passo externo: reunião com o NAP usando [10-ata-reuniao-nap.md](10-ata-reuniao-nap.md); depois seguir [17-desbloqueio-conteudo-nap.md](17-desbloqueio-conteudo-nap.md).
