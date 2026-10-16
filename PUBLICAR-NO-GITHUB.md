# Publicar o Photo Story completo

## Recomendado: GitHub Desktop
1. No GitHub Desktop, entre na sua conta e clone o repositório photostoryedit/photostory.
2. Use Repository > Show in Explorer para abrir a pasta local correta.
3. Extraia o ZIP desta versão em uma pasta separada.
4. Copie TODOS os arquivos extraídos para a pasta do repositório, substituindo os existentes. index.html deve ficar na raiz; não copie a pasta que contém os arquivos nem o ZIP.
5. No GitHub Desktop, confira a lista Changes, preencha uma mensagem como Atualizar Photo Story v19 e clique Commit to main.
6. Clique Push origin e aguarde a publicação do GitHub Pages terminar.
7. Abra https://photostoryedit.github.io/photostory/ e atualize com Ctrl+F5.
8. No rodapé, abra Verificar publicação e clique Verificar arquivos. Nenhum arquivo essencial deve ter erro.

Não apague arquivos de configuração existentes do repositório. Ao copiar, preserve a pasta .git local. Os arquivos desta entrega não contêm .git.

## Se usar o navegador
Em Add file > Upload files, arraste TODOS os arquivos de dentro da pasta extraída. Confira também arquivos .wasm, .onnx, .bin, .gz, .js e .woff2: são necessários para IA e fontes. Não envie o ZIP diretamente. Se aparecer falha, confira se o commit realmente incluiu todos os arquivos.

## Quando há erro 404
O código não consegue carregar um modelo que não foi publicado. Localize no ZIP o arquivo listado pelo verificador e envie-o para a mesma pasta do index.html, mantendo exatamente seu nome. Depois espere o deploy terminar e verifique novamente.
Arquivos auxiliares geram avisos; o marcador .nojekyll deve ser conferido no repositório, pois não precisa responder pelo endereço público.
