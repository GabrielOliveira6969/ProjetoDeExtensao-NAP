# Guia de atualização de conteúdo (para a equipe do NAP)

Site estático: cada página é um arquivo HTML. Não há painel de login. Para alterar textos, edite o arquivo correspondente e publique novamente (GitHub ou servidor institucional).

## Arquivos por seção

| Seção | Arquivo |
|---|---|
| Início | `index.html` |
| Sobre o NAP | `sobre.html` |
| Serviços / como ser atendido | `servicos.html` |
| Conteúdos | `conteudos.html` |
| Contato | `contato.html` |
| Estilos | `css/style.css` |
| Comportamentos (menu, fonte, contraste) | `js/main.js` |
| Imagens | pasta `img/` (ver `img/README.md`) |

## Como editar com segurança

1. Faça uma cópia ou use Git (branch) antes de alterar.
2. Abra o HTML em um editor de texto.
3. Altere **apenas o texto dentro das tags** (`<p>`, `<h1>`, `<h2>`, `<li>`…).
4. Não remova `class`, `id`, `aria-*` nem os links do menu — isso quebra acessibilidade e navegação.
5. Em Contato, use dados oficiais; remova o aviso de rascunho só depois da validação.
6. Salve, abra `index.html` no navegador e confira desktop + celular.
7. Publique os arquivos atualizados (ver [15-publicacao.md](15-publicacao.md)).

## Contato — exemplo do que atualizar

```html
<h3>E-mail</h3>
<p>email-oficial@exemplo.edu.br</p>
```

Depois de todos os canais oficiais:

- Remover o parágrafo com `class="aviso"` sobre placeholders.
- Atualizar a meta description se fizer sentido.

## Imagens

1. Coloque o arquivo em `img/`.
2. No HTML: `<img src="img/seu-arquivo.webp" alt="Descrição em português">`.
3. Se for só decoração: `alt=""`.

## Treinamento sugerido (30–40 min)

1. Abrir o repositório e a pasta do projeto.
2. Editar um texto de teste em `conteudos.html` e ver no navegador.
3. Mostrar onde ficam Contato e Serviços.
4. Revisar este guia e o fluxo de publicação.

| Campo | Valor |
|---|---|
| Data do treinamento | |
| Participantes NAP | |
| Responsável técnico do projeto | |
