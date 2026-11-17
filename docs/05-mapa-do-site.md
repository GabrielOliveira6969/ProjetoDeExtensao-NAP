# Mapa do site e arquitetura de informação

## Visão geral

Site multipágina estático, com navegação global no cabeçalho e conteúdo principal por página.

```text
Início (index.html)
├── Sobre o NAP (sobre.html)
├── Serviços (servicos.html)
│   └── Como ser atendido (seção na mesma página)
├── Conteúdos (conteudos.html)
└── Contato (contato.html)
```

## Páginas

| Página | URL/arquivo | Objetivo | Conteúdo principal |
|---|---|---|---|
| Início | `index.html` | Primeiro contato e orientação | Hero + CTA Contato; cards “Por onde começar” |
| Sobre o NAP | `sobre.html` | Explicar o núcleo | Papel do NAP; proposta; público |
| Serviços | `servicos.html` | Listar apoios e fluxo | Cards de serviços; lista “Como ser atendido” |
| Conteúdos | `conteudos.html` | Orientar e educar | Cards/artigos curtos de dicas |
| Contato | `contato.html` | Facilitar o acesso ao atendimento | E-mail, telefone, local, horário |

## Elementos comuns (todas as páginas)

1. Skip link → `#main`
2. Cabeçalho: logo/nome, navegação, controles A− / A+ / Contraste
3. Conteúdo principal (`main`)
4. Rodapé institucional
5. Scripts de menu e acessibilidade (`main.js`)

## Fluxos principais do usuário

### Fluxo A — Entender o NAP

`Início` → `Sobre o NAP` → (opcional) `Serviços` → `Contato`

### Fluxo B — Solicitar atendimento

`Início` ou `Serviços` → “Como ser atendido” → `Contato`

### Fluxo C — Buscar orientação sem atendimento imediato

`Início` → `Conteúdos` → (se necessário) `Contato`

## Estrutura de pastas pretendida

Conforme o README do projeto:

```text
nap-site/
├── index.html
├── sobre.html
├── servicos.html
├── conteudos.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
├── docs/
└── README.md
```

**Nota:** no repositório atual, `style.css` e `main.js` estão na raiz, enquanto o HTML referencia `css/style.css` e `js/main.js`. Isso é um gap técnico documentado em [07-analise-gap.md](07-analise-gap.md).

## Prototipação (Fase 2)

- Wireframes: Home, Sobre, Serviços, Contato (e Conteúdos).
- Protótipo de alta fidelidade: Figma (a registrar link/arquivo quando disponível).
- Validação: equipe do NAP + amostra de estudantes.
