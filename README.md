# Página Web do Núcleo de Apoio Psicopedagógico (NAP)

Projeto de extensão do **Centro Universitário Impacta** para o desenvolvimento de uma página web institucional, simples e acessível, para o Núcleo de Apoio Psicopedagógico (NAP).

---

## Equipe

| Nome | RA | Curso |
|---|---|---|
| Arthur Cesar Rodrigues Lima | 2501769 | ADS4AN |
| Diego Gonçalves Fernandes Faria | _a preencher_ | ADS4AN |
| Gabriel Vieira de Oliveira | 2404126 | ADS4AN |
| Kassia Isabelle da Cruz Marques | 2500203 | ADS4AM |
| Matheus Farias de Queiros | _a preencher_ | ADS4AM |

**Instituição:** Centro Universitário Impacta  
**Curso:** Análise e Desenvolvimento de Sistemas (ADS)

## Licença

Projeto acadêmico de extensão, desenvolvido para uso institucional do Centro Universitário Impacta.

## Sobre o projeto

O NAP desempenha um papel importante no apoio aos estudantes durante a trajetória acadêmica, especialmente em situações relacionadas à aprendizagem, adaptação, inclusão, acessibilidade e dificuldades que possam interferir na vida acadêmica.

Esta página será um espaço institucional de **acolhimento, orientação e comunicação**, onde estudantes e demais membros da comunidade acadêmica encontram, de forma rápida e organizada, informações sobre o NAP, formas de atendimento, orientações e canais de contato.

## Objetivo geral

Desenvolver uma página web simples e acessível para o NAP, facilitando o acesso da comunidade acadêmica às informações e aos serviços oferecidos pelo setor.

### Objetivos específicos

- Centralizar em um único espaço as informações sobre o NAP e seus serviços.
- Facilitar a comunicação entre o NAP e os estudantes.
- Disponibilizar conteúdos educativos e orientações que contribuam para uma comunidade acadêmica mais acolhedora, inclusiva e informada.
- Garantir acessibilidade e boa experiência de uso em diferentes dispositivos.

## Público-alvo

Comunidade acadêmica (estudantes, professores e demais colaboradores da instituição).

## Justificativa

Hoje as informações sobre o NAP podem estar dispersas ou de difícil acesso. Uma página própria permite centralizar esse conteúdo, reduzir barreiras para quem precisa de apoio e fortalecer a cultura de acolhimento e inclusão na instituição.

## Escopo e funcionalidades

### Dentro do escopo

| Seção | Descrição |
|---|---|
| **Início (Home)** | Apresentação breve do NAP e acesso rápido às demais seções |
| **Sobre o NAP** | Missão, quem somos e como o núcleo apoia a comunidade acadêmica |
| **Serviços** | Tipos de atendimento e orientações oferecidas |
| **Como ser atendido** | Passo a passo para buscar atendimento |
| **Conteúdos e orientações** | Materiais educativos sobre aprendizagem, adaptação, inclusão e acessibilidade |
| **Contato** | Canais de contato, horários e localização |

### Requisitos não funcionais

- **Acessibilidade:** seguir as diretrizes WCAG (contraste, navegação por teclado, textos alternativos, HTML semântico).
- **Responsividade:** funcionar bem em celulares, tablets e desktops.
- **Simplicidade:** navegação clara, linguagem acolhedora e carregamento leve.
- **Manutenibilidade:** estrutura simples para que a equipe do NAP consiga atualizar o conteúdo.

### Fora do escopo

- Sistema de login ou área restrita.
- Agendamento online com integração a sistemas internos.
- Atendimento psicopedagógico em si (a página apenas informa e orienta).

## Fases do projeto

| Fase | Etapa | Entregas principais |
|---|---|---|
| 1 | Levantamento e requisitos | Reuniões com o NAP, questionário com estudantes, análise de sites similares, requisitos documentados |
| 2 | Design e prototipação | Mapa do site, wireframes, protótipo de alta fidelidade no Figma, validação |
| 3 | Desenvolvimento do site | Páginas implementadas, WCAG, design responsivo, testes de usabilidade |
| 4 | Conteúdo e comunicação | Textos, imagens e ícones, revisão com o NAP, materiais de divulgação |
| 5 | Publicação e avaliação | Publicação, treinamento da equipe, coleta de feedback, relatório final |

## Tecnologias

- HTML5, CSS3 e JavaScript (sem frameworks, para manter o site leve e fácil de manter)
- Figma (prototipação)

## Estrutura de pastas

```
ProjetoDeExtensao-NAP/
├── index.html
├── sobre.html
├── servicos.html
├── conteudos.html
├── contato.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── docs/         (requisitos, fases, checklists, templates)
├── img/          (pasta pronta; assets de marca ainda pendentes)
└── README.md
```

## Como executar

Basta abrir o arquivo `index.html` em qualquer navegador. Não há dependências para instalar.

Documentação de requisitos e acompanhamento: pasta [`docs/`](docs/).

## Publicação (preview)

Instruções para GitHub Pages e formulário de feedback: [`docs/15-publicacao.md`](docs/15-publicacao.md).  
Enquanto o NAP não validar contatos e textos, tratar qualquer URL pública como **preview**, não como página oficial ([`docs/17-desbloqueio-conteudo-nap.md`](docs/17-desbloqueio-conteudo-nap.md)).
