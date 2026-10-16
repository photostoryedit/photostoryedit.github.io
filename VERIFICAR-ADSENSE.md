# Verificar a propriedade no AdSense — v26

A metatag ca-pub-2243531074722333 já está nas páginas HTML do editor. O identificador também está em ads-config.js; os anúncios permanecem desativados porque faltam blocos, consentimento e aprovação.

## Etapa A — editor existente

Extraia o pacote v26 e envie os arquivos do site ao repositório photostory, substituindo os correspondentes. Preserve o arquivo google....html do Search Console já existente e qualquer CNAME. O editor continua em https://photostoryedit.github.io/photostory/.

## Etapa B — domínio cadastrado no AdSense

O cadastro foi aceito para photostoryedit.github.io. A página da raiz precisa estar acessível com a identificação. O ZIP PAGINA-RAIZ-ADSENSE.zip contém uma página de apresentação, links para o editor e a mesma metatag.

1. No GitHub, crie um repositório público chamado exatamente photostoryedit.github.io, caso ainda não exista.
2. Extraia PAGINA-RAIZ-ADSENSE.zip no computador.
3. Envie index.html e .nojekyll para a raiz DESSE repositório. Não envie esse index.html ao repositório photostory: ele substituiria o editor. Se já existe conteúdo na raiz do domínio, preserve-o e apenas inclua a metatag no head da página existente.
4. Em Settings → Pages, selecione a publicação da branch main e da pasta / (root), se ainda não estiver habilitada.
5. Aguarde a publicação e abra https://photostoryedit.github.io/. Deve aparecer a apresentação Photo Story com o botão Abrir o editor. Não basta abrir o HTML local no computador.
6. No AdSense, mantenha o método Metatag, confirme a inclusão e clique em Verificar. Se a verificação passar, solicite a revisão. Isso não garante aprovação.

A página da raiz não redireciona automaticamente e não carrega anúncios. O editor e seus endereços existentes são preservados. A raiz não foi publicada por este pacote: você precisa realizar a etapa B no GitHub. Nenhuma validação real do AdSense foi feita nesta entrega.
