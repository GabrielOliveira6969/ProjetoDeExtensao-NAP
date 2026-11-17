# Requisitos funcionais

Requisitos derivados do escopo do RPE, do [`README.md`](../README.md) e das seções já esboçadas no site estático.

**Legenda de prioridade:** Alta = necessário para entrega mínima; Média = importante para qualidade; Baixa = desejável.

## Navegação e estrutura comum

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-01 | O site deve oferecer navegação principal entre Início, Sobre o NAP, Serviços, Conteúdos e Contato. | Alta | Todas as páginas listam os cinco links; a página atual é identificada (ex.: `aria-current`). |
| RF-02 | Em telas estreitas, a navegação deve ser acessível via menu expansível. | Alta | Botão de menu controla a abertura/fechamento da navegação e atualiza `aria-expanded`. |
| RF-03 | Deve existir link de “pular para o conteúdo” no início de cada página. | Alta | O link leva o foco para o conteúdo principal (`#main`). |
| RF-04 | O usuário deve poder aumentar/diminuir o tamanho da fonte e ativar alto contraste. | Média | Controles visíveis; preferências persistem entre visitas (ex.: `localStorage`). |
| RF-05 | O rodapé deve identificar o NAP e a instituição. | Baixa | Texto institucional presente em todas as páginas. |

## Início (Home)

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-06 | A home deve apresentar o NAP com título, texto curto de acolhimento e CTA para contato. | Alta | Seção hero com H1, parágrafo e link/botão para Contato. |
| RF-07 | A home deve oferecer atalhos para Sobre, Serviços e Conteúdos. | Alta | Cards ou links equivalentes levam às páginas corretas. |

## Sobre o NAP

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-08 | A página deve explicar o papel do NAP (aprendizagem, adaptação, inclusão, acessibilidade). | Alta | Texto institucional revisado e validado pela equipe do NAP. |
| RF-09 | A página deve descrever a proposta/missão do núcleo. | Alta | Seção “proposta” ou equivalente com conteúdo aprovado. |
| RF-10 | A página deve indicar quem pode procurar o NAP. | Alta | Menciona a comunidade acadêmica (estudantes e demais membros). |

## Serviços e como ser atendido

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-11 | Listar os tipos de atendimento/orientação oferecidos pelo NAP. | Alta | Cada serviço tem título e descrição curta, alinhados ao que o NAP confirma. |
| RF-12 | Exibir o passo a passo de “como ser atendido”. | Alta | Fluxo em etapas claras, com link para Contato quando aplicável. |

## Conteúdos e orientações

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-13 | Disponibilizar conteúdos educativos sobre estudo, adaptação, inclusão e acessibilidade. | Alta | Ao menos três orientações publicadas, revisadas com o NAP. |
| RF-14 | Permitir expansão futura de materiais (textos adicionais, links ou arquivos). | Média | Estrutura de página permite incluir novos itens sem redesenhar a navegação. |

## Contato

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-15 | Exibir canais de contato reais: e-mail, telefone, local e horário. | Alta | Nenhum placeholder “[a confirmar]”; dados validados pelo NAP. |
| RF-16 | (Desejável) Oferecer formulário online de contato ou feedback. | Baixa | Formulário funcional ou link para canal institucional equivalente, se aprovado no escopo operacional. |

## Acessibilidade operacional (comportamentos)

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-17 | Páginas devem ser navegáveis por teclado. | Alta | Todos os controles interativos recebem foco visível e são acionáveis sem mouse. |
| RF-18 | Conteúdo multimídia (quando houver) deve ter texto alternativo adequado. | Alta | Imagens informativas com `alt` descritivo; decorativas com `alt` vazio. |

## Observações

- Os textos atuais em `sobre.html`, `servicos.html` e `conteudos.html` são **rascunhos** e não satisfazem sozinhos os critérios de “conteúdo validado”.
- Contato em `contato.html` ainda usa placeholders e **não atende** RF-15.
- Formulário de feedback (RF-16) não existe no código atual; permanece opcional até definição com o NAP/instituição.
