# Photo Story — versão 21

## Correções
- Carrossel informa 2× ou 4× nos oito idiomas.
- Traduções dos avisos de prévia, instruções avançadas, resultados de exportação/PDF/lote e recuperação.
- Salvamento automático local com imagens PNG sem redução de resolução, galeria, ajustes, textos, elementos, imagem original, seleção e ferramenta atual.
- Recuperação ao recarregar a mesma aba ou navegar entre as páginas do editor nessa aba.
- Indicador de salvamento e botão Salvar projeto agora.
- Aviso nativo antes de sair com alterações ainda não salvas ou durante processamento.
- Falhas de espaço/armazenamento deixam o aviso de erro visível e não apresentam o projeto como salvo.
- Última ferramenta de cada seção é mantida após recarregar.

## Uso
Aguarde “Projeto salvo neste navegador.” antes de recarregar. Os dados ficam no navegador, sem envio das imagens. O recurso depende da disponibilidade e cota do armazenamento local. Limpar os dados do site pode apagar a recuperação. Nesta versão, o salvamento é associado à mesma aba; fechar definitivamente a aba não substitui um arquivo de backup do projeto. O histórico completo de desfazer não é persistido: após recuperar, a edição atual constitui um novo ponto inicial. O botão de limpar o editor salva um projeto vazio.

## Validação
32 testes automatizados locais passaram: regressões da ampliação 2×/4× (incluindo execução real pequena de ESRGAN), foco, serialização e restauração de imagens referenciadas em diferentes camadas, galeria, dimensões ímpares, conteúdo Unicode, transparência representada na serialização, mensagens de quota, alterações durante gravação, bloqueio de autosave em operação ocupada e tradução nos oito idiomas. O teste do armazenamento usa adaptadores simulados; não é um teste físico de atualização da página em todos os navegadores.

Todos os 21 HTMLs de editor foram conferidos para os controles de recuperação. O pacote foi extraído e comparado byte a byte com os arquivos de origem.

A versão 21 ainda precisa ser conferida no site após a publicação, especialmente a recuperação após atualizar a página. A bateria realizada anteriormente no site publicado validou a versão 20, não esta versão.
