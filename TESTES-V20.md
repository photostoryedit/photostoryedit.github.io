# Photo Story — versão 20

Correções: seletor de 2×/4× por IA em cada dimensão, sem o teto anterior de 24 MP/8192 px; inferência em blocos de 192 px com margem de 24 px. 4× usa duas passagens de 2×. A importação deixa de reduzir automaticamente as dimensões para 16 MP. Cancelamento/erros descartam saída parcial. Mensagens de memória insuficiente disponíveis nos oito idiomas. Permanecem os limites das ferramentas convencionais e de arquivos de entrada (20 MB).

21 testes locais passaram: sintaxe, foco, dimensões exatas (4000×6000, 8192×8192, 12000×18000, dimensões ímpares e mínimas), entradas inválidas, cobertura de blocos sem lacunas/sobreposição, cancelamento, saída inválida e 4× com duas passagens.

Inferência real: modelo ESRGAN com pesos incluídos executado em CPU de 16×16 para 32×32 e 64×64, com valores finitos. Os testes de blocos/cancelamento usam motor simulado. Os planos grandes são testes matemáticos, sem inferência completa de 384 MP.

No site publicado anterior: exemplo, preto e branco, remoção de filtros, redimensionamento proporcional, desfazer, navegação edição/IA e ampliação real de 16×20 para 32×40 funcionaram. A versão 20 não foi publicada automaticamente.

Limite físico: 2× multiplica os pixels por 4; 4× por 16. 4000×6000 em 4× resulta em 16000×24000 (384 MP), cerca de 1,54 GB apenas para um buffer RGBA. Os blocos reduzem a memória de inferência, mas o canvas final e a exportação ainda dependem da memória e dos limites do navegador. Não há garantia para qualquer tamanho/dispositivo; o tamanho escolhido nunca é reduzido silenciosamente.
