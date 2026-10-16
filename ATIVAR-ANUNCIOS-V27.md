# Photo Story v27 — blocos configurados

Publisher: ca-pub-2243531074722333
Home: 6779206857
Tutoriais: 1864037502

Os códigos colados estavam intercalados. A integração usa um único carregador e cria cada bloco responsivo uma vez. Não cole novamente os snippets no HTML.

## Falta confirmar a CMP

O responsável informou aprovação do AdSense. Os blocos estão configurados e enabled está true. A exibição permanece bloqueada por consentConfigured: false, pois ainda não houve confirmação de que a mensagem de consentimento foi configurada e publicada.

Em AdSense → Privacidade e mensagens, configure e publique a mensagem das regulamentações europeias com a CMP do Google, ou integre uma CMP certificada. Verifique a cobertura das páginas /photostory/, incluindo tutoriais, e a política de privacidade. A aprovação do site não confirma por si só que essa configuração foi concluída. Esta integração não substitui uma CMP nem afirma que o usuário consentiu.

Depois de concluir a configuração, altere SOMENTE consentConfigured: false para consentConfigured: true em ads-config.js e publique esse arquivo. A flag registra a configuração do responsável; não representa consentimento individual do visitante. A CMP deve gerenciar as escolhas reais. Mantenha anúncios automáticos desativados se quiser apenas os espaços manuais preparados.

## Publicação

1. Atualize o repositório photostory com o conteúdo principal deste pacote. Preserve verificações Google e CNAME existentes.
2. Extraia PAGINA-RAIZ-ADSENSE.zip. Envie ads.txt para a raiz do repositório photostoryedit.github.io, junto ao index.html já publicado. Se já existe ads.txt com outros registros, acrescente a linha sem apagá-los.
3. Confira https://photostoryedit.github.io/ads.txt e o status no painel AdSense. Não basta publicar em /photostory/ads.txt.
4. Depois de configurar a CMP, ative consentConfigured e verifique home e tutoriais. O bloqueador do navegador e a disponibilidade de inventário podem impedir anúncios. Não clique nos próprios anúncios.

Nenhum anúncio real foi solicitado nos testes. Testes automatizados usam carregador e DOM simulados, além dos testes de regressão de edição e IA. Não houve publicação automática ou verificação da conta AdSense.
