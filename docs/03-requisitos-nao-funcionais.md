# Requisitos não funcionais

## Visão geral

| ID | Categoria | Requisito | Critério de aceite |
|---|---|---|---|
| RNF-01 | Acessibilidade | Seguir diretrizes WCAG (nível alvo: AA, sempre que aplicável). | Contraste adequado; HTML semântico; navegação por teclado; foco visível; textos alternativos; suporte a preferências de redução de movimento. |
| RNF-02 | Acessibilidade | Oferecer controles de tamanho de fonte e alto contraste. | Controles disponíveis no cabeçalho; estado persistido entre visitas. |
| RNF-03 | Responsividade | Funcionar bem em celulares, tablets e desktops. | Layout legível e usável a partir de ~320px de largura; menu adaptado em telas estreitas. |
| RNF-04 | Simplicidade | Navegação clara e linguagem acolhedora. | Máximo de um nível principal de navegação; textos em português claro, sem jargão desnecessário. |
| RNF-05 | Performance | Carregamento leve. | Site estático sem frameworks pesados; assets mínimos (HTML/CSS/JS). |
| RNF-06 | Manutenibilidade | Estrutura simples para atualização de conteúdo. | Páginas HTML editáveis sem build; documentação de estrutura em `docs/`. |
| RNF-07 | Compatibilidade | Funcionar nos navegadores modernos usados pela comunidade acadêmica. | Abertura correta em Chrome, Edge e Firefox recentes (teste manual). |
| RNF-08 | Idioma | Conteúdo em português do Brasil. | `lang="pt-BR"` e textos em PT-BR. |
| RNF-09 | Disponibilidade | Página publicada em ambiente institucional ou plataforma acordada. | URL pública estável após a Fase 5. |
| RNF-10 | Privacidade | Não coletar dados sensíveis sem necessidade e sem base institucional. | Sem login; formulários (se existirem) apenas com campos necessários e aviso de uso. |

## Detalhamento de acessibilidade (WCAG)

Checklist mínimo esperado na entrega:

- [ ] Títulos (`h1`–`h3`) em hierarquia coerente
- [ ] Skip link funcional
- [ ] Contraste de texto/fundo suficiente (incluindo modo alto contraste)
- [ ] Foco visível em links e botões
- [ ] Labels/`aria-label` em controles sem texto visível suficiente
- [ ] `aria-current` (ou equivalente) na página ativa
- [ ] Respeito a `prefers-reduced-motion`
- [ ] Imagens com `alt` adequado (quando houver imagens)

## Detalhamento de responsividade

- Largura máxima de conteúdo legível (container centralizado).
- Cards em grade que se reorganizam (`auto-fit` ou equivalente).
- Menu colapsável em viewport ≤ 720px (comportamento já previsto no CSS atual).

## Tecnologias de referência

- HTML5, CSS3 e JavaScript (sem frameworks), para manter o site leve e fácil de manter.
- Figma para prototipação (Fase 2), fora do runtime do site.
