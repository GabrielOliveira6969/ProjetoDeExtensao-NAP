# Análise de gap — planejado vs. atual

**Data de referência:** novembro/2026  
**Base:** briefing RPE + [`README.md`](../README.md) + código na raiz do repositório.

## Veredito

O projeto está em estágio de **desenvolvimento (Fase 3 em andamento)**, com documentação de requisitos formalizada e scaffold estático utilizável (CSS/JS carregando). Estimativa global de conclusão: **cerca de 35–40%**.

Bloqueadores principais até finalizar:

1. Validação e conteúdo real com a equipe do NAP (contatos, serviços, textos).
2. Artefatos de design (Figma/wireframes) e validação com usuários.
3. Publicação, feedback formal e relatório (Fase 5).

---

## Status por fase

| Fase | Status estimado | Situação |
|---|---|---|
| 1 — Levantamento e requisitos | ~25–35% | Objetivo/escopo no README; requisitos formais em `docs/`. Faltam atas, questionário e benchmark. |
| 2 — Design e prototipação | ~10–20% | Mapa do site documentado; estrutura de páginas no HTML. Sem wireframes/Figma/validação no repositório. |
| 3 — Desenvolvimento do site | ~55–65% | Cinco páginas + nav + controles de a11y; `css/` e `js/` alinhados ao HTML. Sem testes de usabilidade registrados; formulário opcional (RF-16) não iniciado. |
| 4 — Conteúdo e comunicação | ~15–25% | Textos de exemplo com avisos de revisão; contato 100% placeholder; sem imagens/ícones. |
| 5 — Publicação e avaliação | ~0–5% | Sem hosting, treinamento, feedback formal ou relatório. |

**Consolidado:** ~**35–40%** do projeto fechado.

---

## O que já existe no repositório

| Item | Evidência |
|---|---|
| Site multipágina estático | `index.html`, `sobre.html`, `servicos.html`, `conteudos.html`, `contato.html` |
| Estilos e script | `css/style.css`, `js/main.js` |
| Navegação compartilhada | Header/nav/footer em todas as páginas; `aria-current` |
| Menu mobile | Botão `#menu` + classe `nav.open`; fecha no link e com Escape |
| Acessibilidade básica | Skip link; A+/A−; contraste; `:focus-visible`; `prefers-reduced-motion`; alvos de toque |
| Escopo e fases descritos | [`README.md`](../README.md) |
| Requisitos documentados | Esta pasta `docs/` |

## Gaps técnicos (código)

| Gap | Detalhe | Impacto |
|---|---|---|
| Paths CSS/JS | **Resolvido:** arquivos em `css/style.css` e `js/main.js`, como o HTML referencia | — |
| Pasta `img/` ausente | README prevê imagens; não há assets | Identidade visual incompleta |
| Formulário de contato/feedback | Não implementado (fora deste polish; RF-16 desejável) | RF-16 e tarefa da Fase 5 pendentes |
| Conteúdo oficial | Avisos de revisão em Sobre/Serviços/Conteúdos; Contato com placeholders honestos | Não pronto para publicação institucional |

---

## Matriz requisito × status

### Requisitos funcionais (resumo)

| ID | Tema | Status |
|---|---|---|
| RF-01 a RF-05 | Navegação e chrome comum | Atendido no scaffold (nav, menu, skip, a11y, rodapé) |
| RF-06 a RF-07 | Home | Atendido na estrutura (hero + atalhos); conteúdo ainda rascunho |
| RF-08 a RF-10 | Sobre | Rascunho (falta validação NAP) |
| RF-11 a RF-12 | Serviços / como ser atendido | Rascunho (falta validação NAP) |
| RF-13 a RF-14 | Conteúdos | Rascunho fino (3 orientações de exemplo) |
| RF-15 | Contato real | Não atendido (placeholders) |
| RF-16 | Formulário | Não iniciado (desejável / baixa prioridade) |
| RF-17 a RF-18 | Teclado / alt | Parcial (teclado previsto; sem imagens ainda) |

### Requisitos não funcionais (resumo)

| ID | Tema | Status |
|---|---|---|
| RNF-01 a RNF-02 | WCAG / controles a11y | Parcial (controles presentes; sem auditoria formal) |
| RNF-03 | Responsividade | Parcial (CSS e menu mobile; falta teste formal registrado) |
| RNF-04 a RNF-06 | Simplicidade / leveza / manutenção | Atendido na escolha tecnológica |
| RNF-07 | Compatibilidade navegadores | Não evidenciado (falta teste registrado) |
| RNF-08 | PT-BR | Atendido |
| RNF-09 | Publicação | Não iniciado |
| RNF-10 | Privacidade | Atendido por premissa (sem login/coleta) |

---

## Distância até finalizar (checklist prático)

### Curto prazo (desbloqueio técnico)

- [x] Corrigir paths: `style.css` → `css/` e `main.js` → `js/`
- [ ] Confirmar abertura correta de todas as páginas no navegador (checklist manual da equipe)
- [x] Alinhar README com a estrutura real de pastas

### Fase 1 restante

- [ ] Reuniões/atas com o NAP
- [ ] Questionário com estudantes
- [ ] Análise de sites similares

### Fase 2 restante

- [ ] Wireframes
- [ ] Protótipo Figma + link no repo/docs
- [ ] Validação com NAP e estudantes

### Fase 3 restante

- [ ] Fechar funcionalidades vs. RF (conteúdo oficial)
- [ ] Checklist WCAG preenchido
- [ ] Testes de usabilidade e correções

### Fase 4 restante

- [ ] Textos finais aprovados
- [ ] Contatos reais
- [ ] Imagens/ícones
- [ ] Materiais de divulgação

### Fase 5 restante

- [ ] Publicar URL
- [ ] Treinar equipe NAP
- [ ] Formulário de feedback
- [ ] Relatório final

---

## Estimativa de esforço relativo (orientação)

| Bloco | Peso no “100%” do projeto | Observação |
|---|---|---|
| Requisitos + alinhamento NAP | ~20% | Docs iniciados; falta validação de campo |
| Design/prototipação | ~15% | Quase todo pendente |
| Desenvolvimento + a11y + testes | ~30% | Scaffold utilizável; faltam testes formais |
| Conteúdo aprovado + visuals | ~20% | Maior dependência externa (NAP) |
| Publicação + avaliação | ~15% | Ainda não iniciado |

---

## Conclusão

Há uma **base de site institucional** coerente com o mapa planejado (cinco páginas, tom acolhedor, intenção de acessibilidade), com assets CSS/JS carregando corretamente. O projeto **ainda não está pronto para publicação**: conteúdo oficial, design validado, publicação e avaliação faltam.

Próximo passo recomendado: **alinhar com o NAP os dados de contato e a lista oficial de serviços**, para destravar a Fase 4.
