export const SECTIONS={
 inicio:{title:'Photo Story',tools:[]},
 fotos:{eyebrow:'EDIÇÃO DE FOTOS',title:'Sua foto, do seu jeito.',description:'Ajuste cores, recorte e encontre o enquadramento ideal.',tools:['adjust','crop','resize','privacy'],defaultTool:'adjust'},
 stories:{eyebrow:'STORIES & POSTS',title:'Sua ideia merece um story.',description:'Comece com um modelo e personalize com textos, elementos e fotos.',tools:['elements','text','collage','resize'],defaultTool:'elements'},
 ia:{eyebrow:'FERRAMENTAS COM IA',title:'Um toque de inteligência.',description:'Remova fundos, recorte pelo assunto, crie retratos e extraia texto.',tools:['background','upscale','smartcrop','portrait','ocr'],defaultTool:'background'},
 lote:{eyebrow:'EDIÇÃO EM LOTE',title:'Várias imagens. Uma tarefa.',description:'Converta, comprima e baixe todos os arquivos juntos.',tools:['batch'],defaultTool:'batch'},
 arquivos:{eyebrow:'CONVERSÃO DE ARQUIVOS',title:'No formato que você precisa.',description:'Exporte sua criação ou converta entre imagens e PDF.',tools:['export','pdf'],defaultTool:'export'}
};
export function sectionFromHash(hash){const key=(hash||'').replace(/^#\/?/,'').split('?')[0];return Object.hasOwn(SECTIONS,key)?key:'inicio'}
export function sectionForTool(tool,current='inicio'){if(SECTIONS[current]?.tools.includes(tool))return current;return Object.keys(SECTIONS).find(k=>SECTIONS[k].tools.includes(tool))||'fotos'}
export function toolForSection(id,lastTool){const section=SECTIONS[id];return section.tools.includes(lastTool)?lastTool:section.defaultTool}
