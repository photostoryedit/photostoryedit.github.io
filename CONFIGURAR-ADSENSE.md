# Configurar publicidade — Photo Story v25

A integração está preparada, mas não exibe anúncios por padrão. Não há ID fictício ativo, chamadas ao Google ou banner vazio quando desativada. Não garante aprovação ou receita.

## 1. Conectar e solicitar análise

Cadastre o site no AdSense. O endereço com /photostory/ pode não ser aceito no cadastro; confira o domínio aceito no painel. Não informe github.io como se fosse seu domínio. Um domínio próprio pode simplificar a configuração. Confira também as restrições de uso comercial do GitHub Pages antes de transformar o site em negócio.

Use a opção de verificação por metatag oferecida pelo AdSense: copie a tag exata para dentro do <head> de index.html. Não substitua o código por um ID inventado. Esta verificação é diferente da do Search Console. Preserve o arquivo google....html que você já publicou; ele não está neste pacote porque não foi fornecido como arquivo.

## 2. Consentimento e privacidade

Configure e publique uma CMP certificada para as regiões exigidas, usando Privacidade e mensagens no AdSense ou uma solução certificada. O código deste pacote não substitui a CMP e não solicita consentimento por conta própria. Revise a política de privacidade, o contato do responsável e os fornecedores efetivamente usados antes de ativar anúncios. Configure as escolhas e sua reabertura conforme a documentação da CMP.

## 3. Blocos manuais

Após a aprovação, crie dois blocos responsivos no AdSense: página inicial e tutoriais. Copie ca-pub-... (16 dígitos) e o data-ad-slot (10 dígitos) de cada bloco.

Em ads-config.js, preencha publisherId e slots.home / slots.tutorials. Depois de configurar a CMP, defina consentConfigured: true. Somente depois da aprovação e da configuração, defina enabled: true e publique os arquivos.

Mantenha anúncios automáticos desativados no painel se quiser conservar o posicionamento manual. Eles podem adicionar espaços que não fazem parte desta implementação. Não coloque anúncios no editor, no upload, sobre a imagem ou perto de Baixar. Não clique nos anúncios para testá-los e não use tráfego automatizado.

## 4. ads.txt

Copie a linha exata fornecida pelo AdSense para um arquivo chamado ads.txt no endereço raiz do domínio que o painel espera. Não há ads.txt fictício neste pacote. Para github.io/photostory/, um arquivo neste repositório fica em /photostory/ads.txt: isso NÃO é a raiz do host. A raiz seria https://photostoryedit.github.io/ads.txt, publicada por um repositório de site de usuário photostoryedit.github.io. Confira o endereço solicitado pelo painel; se usar domínio próprio, publique em https://SEU-DOMINIO/ads.txt. Não substitua outros registros legítimos já existentes.

## 5. Publicar e verificar

Extraia o ZIP e substitua os arquivos correspondentes do repositório, preservando verificações Google e domínio personalizado existentes. Aguarde o GitHub Pages concluir. Confira a home e os tutoriais com e sem anúncios, em celular e computador. Bloqueadores e falta de inventário podem impedir a exibição; nunca force cliques. Para desativar, volte enabled para false e publique.

## Testes desta versão

Regressão de edição, recuperação, oito idiomas e modelo ESRGAN; testes isolados da integração com DOM e carregador simulados; links e extração completa do ZIP. Nenhum anúncio real foi solicitado. Não houve publicação automática nem validação de aprovação, CMP real ou preenchimento de anúncios.

Fontes: https://support.google.com/adsense/answer/12169212?hl=pt-BR e https://support.google.com/adsense/answer/9274019?hl=pt-BR
