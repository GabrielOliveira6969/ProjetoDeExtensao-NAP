# Fases e tarefas (RPE)

Plano definido pelo RPE a partir da demanda pública. **5 fases**.

## Resumo

| Fase | Etapa | Entregas principais |
|---|---|---|
| 1 | Levantamento e requisitos | Reuniões com o NAP, questionário com estudantes, análise de sites similares, requisitos documentados |
| 2 | Design e prototipação | Mapa do site, wireframes, protótipo de alta fidelidade no Figma, validação |
| 3 | Desenvolvimento do site | Páginas implementadas, WCAG, design responsivo, testes de usabilidade |
| 4 | Conteúdo e comunicação | Textos, imagens e ícones, revisão com o NAP, materiais de divulgação |
| 5 | Publicação e avaliação | Publicação, treinamento da equipe, coleta de feedback, relatório final |

---

## Fase 1 — Levantamento e requisitos

**Objetivo:** Identificar as necessidades do NAP e da comunidade acadêmica, definindo o escopo detalhado da página web.

### Tarefas

- [ ] Realizar reuniões com a equipe do NAP para entender os serviços e informações a serem divulgados *(execução real pendente; template em [10-ata-reuniao-nap.md](10-ata-reuniao-nap.md))*
- [ ] Aplicar questionário com estudantes *(execução real pendente; roteiro em [11-questionario-estudantes.md](11-questionario-estudantes.md))*
- [ ] Analisar sites de núcleos de apoio similares *(preencher [12-benchmark-sites-similares.md](12-benchmark-sites-similares.md))*
- [x] Documentar os requisitos funcionais e não funcionais da página *(docs/01–04)*

### Artefatos esperados

- Atas ou notas de reunião — template pronto (`docs/10`)
- Resultados do questionário — roteiro pronto (`docs/11`)
- Benchmark de sites similares — template + referências (`docs/12`)
- Documentos de requisitos (`docs/01` a `docs/04`) — feitos

---

## Fase 2 — Design e prototipação

**Objetivo:** Criar a identidade visual e o protótipo da página, com foco em acessibilidade e usabilidade.

### Tarefas

- [x] Definir a arquitetura de informação e o mapa do site *([05-mapa-do-site.md](05-mapa-do-site.md))*
- [ ] Criar wireframes das principais telas (home, sobre, serviços, contato) *(registrar em [13-design-figma.md](13-design-figma.md))*
- [ ] Desenvolver protótipo de alta fidelidade no Figma *(link em `docs/13`)*
- [ ] Validar o protótipo com a equipe do NAP e com uma amostra de estudantes *(registro em `docs/13`)*

### Artefatos esperados

- Mapa do site (`docs/05`) — feito
- Wireframes / Figma / validação — pendentes de execução; estrutura em `docs/13`

---

## Fase 3 — Desenvolvimento do site

**Objetivo:** Implementar a página web com base no protótipo aprovado, utilizando tecnologias acessíveis e responsivas.

### Tarefas

- [x] Configurar o ambiente de desenvolvimento e escolher a plataforma (HTML/CSS/JS estático)
- [x] Implementar as páginas e funcionalidades estruturais conforme os requisitos *(5 páginas + nav + a11y; conteúdo oficial ainda provisório)*
- [x] Aplicar diretrizes de acessibilidade (WCAG) e design responsivo *(controles no site + [08-checklist-wcag.md](08-checklist-wcag.md))*
- [ ] Realizar testes de usabilidade e corrigir problemas identificados *(roteiro em [09-testes-usabilidade.md](09-testes-usabilidade.md); sessões a preencher pela equipe)*

### Artefatos esperados

- Site estático funcional (CSS/JS em `css/` e `js/`) — feito
- Checklist WCAG — criado (`docs/08`); verificação humana a completar
- Relato de testes de usabilidade — template (`docs/09`); sessões pendentes
- Pasta `img/` preparada (README; sem assets de marca ainda)

---

## Fase 4 — Conteúdo e comunicação

**Objetivo:** Produzir e revisar os conteúdos textuais e visuais da página, garantindo clareza e acolhimento.

### Tarefas

- [ ] Redigir textos informativos sobre o NAP, serviços e formas de contato *(rascunhos no HTML; inventário em [14-conteudo-provisorio.md](14-conteudo-provisorio.md))*
- [ ] Selecionar e produzir imagens e ícones *(pasta `img/` pronta; assets pendentes)*
- [ ] Revisar o conteúdo com a equipe do NAP *(bloqueado: dados oficiais não fornecidos)*
- [ ] Criar materiais de divulgação da página para a comunidade acadêmica

### Artefatos esperados

- Textos finais aprovados — pendente NAP
- Pasta `img/` com assets — pasta criada
- Contatos reais — pendente NAP (ver [17-desbloqueio-conteudo-nap.md](17-desbloqueio-conteudo-nap.md))
- Materiais de divulgação — pendente

---

## Fase 5 — Publicação e avaliação

**Objetivo:** Publicar a página, monitorar seu uso e avaliar os resultados junto à comunidade.

### Tarefas

- [ ] Publicar a página em servidor institucional ou plataforma escolhida *(guia GitHub Pages em [15-publicacao.md](15-publicacao.md); não tratar URL de rascunho como oficial)*
- [ ] Realizar treinamento com a equipe do NAP para atualização do conteúdo *([16-guia-atualizacao-conteudo.md](16-guia-atualizacao-conteudo.md))*
- [ ] Coletar feedback dos usuários por meio de formulário online *(placeholder Google Forms em `docs/15`)*
- [ ] Elaborar relatório final com indicadores de acesso e sugestões de melhoria

### Artefatos esperados

- URL pública — pendente
- Guia curto de atualização — feito (`docs/16`)
- Formulário/feedback — URL a preencher
- Relatório final — pendente

---

## Status consolidado

Ver detalhamento e percentuais em [07-analise-gap.md](07-analise-gap.md).
**Legenda:** “template pronto” ≠ tarefa de campo concluída (reunião, Figma, validação NAP).
