(() => {
 const cfg=window.PHOTO_STORY_ADS;
 if(!cfg?.enabled || !cfg.consentConfigured || !/^ca-pub-\d{16}$/.test(cfg.publisherId))return;
 const blocks=[...document.querySelectorAll('[data-ad-placement]')].filter(el=>/^\d{10}$/.test(cfg.slots?.[el.dataset.adPlacement]||''));
 if(!blocks.length)return;
 let requested=false,ready=false;
 const initialized=new WeakSet();
 function render(){if(!ready)return;for(const block of blocks.filter(block=>!block.hidden&&!initialized.has(block))){initialized.add(block);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch{block.hidden=true}}}
 const labels={pt:'Publicidade',en:'Advertisements',es:'Publicidad',ja:'広告',zh:'广告',de:'Werbung',fr:'Publicité',it:'Pubblicità'};
 function update(){
  const lang=(document.documentElement.lang||'pt').split('-')[0];
  for(const block of blocks){
   const isHome=block.dataset.adPlacement==='home';
   block.hidden=isHome&&location.hash!==''&&location.hash!=='#/inicio';
   block.querySelector('[data-ad-label]').textContent=labels[lang]||labels.pt;
  }
  if(blocks.some(block=>!block.hidden))load();render();
 }
 for(const block of blocks){
  const ad=document.createElement('ins');ad.className='adsbygoogle';ad.style.display='block';
  ad.dataset.adClient=cfg.publisherId;ad.dataset.adSlot=cfg.slots[block.dataset.adPlacement];
  ad.dataset.adFormat='auto';ad.dataset.fullWidthResponsive='true';block.append(ad);
 }
 window.addEventListener('hashchange',update);
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 function load(){
 if(requested)return;requested=true;
 const script=document.createElement('script');script.async=true;script.crossOrigin='anonymous';
 script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(cfg.publisherId);
 script.onload=()=>{ready=true;render()};
 script.onerror=()=>{for(const block of blocks)block.hidden=true};document.head.append(script);
 }
 update();
})();
