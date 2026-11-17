# Publicação e feedback (Fase 5 — preparação)

## Premissa

Enquanto os contatos e textos não forem validados pelo NAP, qualquer URL pública é **preview técnico**, não a página institucional oficial. Ver [17-desbloqueio-conteudo-nap.md](17-desbloqueio-conteudo-nap.md).

## Opção escolhida: GitHub Pages (site estático)

O repositório já é HTML/CSS/JS na raiz — adequado para Pages a partir da branch `master` (pasta `/` root).

### Passos (quem tiver permissão no repositório)

1. No GitHub: **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `master` / pasta `/` (root).
4. Save e aguardar o build.
5. Anotar a URL gerada (ex.: `https://<usuario>.github.io/ProjetoDeExtensao-NAP/`).

| Campo | Valor |
|---|---|
| URL de preview | _a preencher após ativar_ |
| URL oficial (pós-NAP) | _a preencher_ |
| Responsável pela ativação | |

### Checklist antes de chamar de “oficial”

- [ ] RF-15 atendido (contatos reais)
- [ ] Avisos de rascunho removidos das páginas
- [ ] Conteúdo revisado com o NAP
- [ ] Checklist WCAG humano atualizado (`docs/08`)
- [ ] Link de feedback funcional (abaixo)

Alternativa institucional (servidor Impacta): se a faculdade fornecer hosting, publicar os mesmos arquivos estáticos e registrar a URL aqui.

---

## Feedback dos usuários (RF-16 / Fase 5)

Usar **Google Forms** (sem backend), alinhado a site leve e manutenível.

| Campo | Valor |
|---|---|
| Link do Google Forms | `_URL_PLACEHOLDER_ — criar formulário e colar aqui_` |
| Onde aparece no site | Opcional: parágrafo/link em `contato.html` após o Forms existir |
| Perguntas sugeridas | A página foi fácil de usar? Achou as informações? Algo faltou? Comentário livre |

Não incorporar o Forms no HTML até a URL real existir.

---

## Status

- [x] Guia de publicação documentado
- [ ] Pages/hosting ativado (preview)
- [ ] Forms criado e URL preenchida
- [ ] Publicação oficial pós-desbloqueio NAP
