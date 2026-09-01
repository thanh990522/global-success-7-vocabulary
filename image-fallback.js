// Robust loading for original Loigiaihay illustrations on GitHub Pages.
// 1) Load the original img.loigiaihay.com asset without sending a referrer.
// 2) If the origin rejects hotlinking, retry the exact same image through a transparent image proxy.
// 3) If both fail, keep the source link visible instead of showing a broken-image icon.
(function(){
  const ORIGINAL_HOST='img.loigiaihay.com';
  const PROXY='https://images.weserv.nl/?url=';

  function isOriginalSourceImage(img){
    const src=(img.getAttribute('src')||'');
    return src.includes(ORIGINAL_HOST);
  }

  function prepare(img){
    if(!(img instanceof HTMLImageElement)||!isOriginalSourceImage(img)) return;
    img.referrerPolicy='no-referrer';
    if(!img.dataset.originalSrc) img.dataset.originalSrc=img.getAttribute('src');
  }

  function proxyUrl(original){
    return PROXY+encodeURIComponent(original)+'&output=webp&q=90';
  }

  function markUnavailable(img){
    img.style.display='none';
    const card=img.closest('.word-source-visual,.flash-source-visual,.source-art-media,.overview-art');
    if(card){
      card.classList.add('source-image-unavailable');
      if(!card.querySelector('.source-image-message')){
        const msg=document.createElement('span');
        msg.className='source-image-message';
        msg.textContent='🖼️ Open original source to view this picture';
        card.appendChild(msg);
      }
    }
  }

  // Capture image failures before inline onerror handlers hide the element.
  document.addEventListener('error',function(event){
    const img=event.target;
    if(!(img instanceof HTMLImageElement)) return;
    const original=img.dataset.originalSrc || (isOriginalSourceImage(img)?img.getAttribute('src'):'');
    if(!original) return;

    event.stopImmediatePropagation();

    if(img.dataset.proxyTried!=='1'){
      prepare(img);
      img.dataset.proxyTried='1';
      img.src=proxyUrl(original);
      return;
    }

    markUnavailable(img);
  },true);

  const observer=new MutationObserver(function(records){
    records.forEach(function(record){
      record.addedNodes.forEach(function(node){
        if(node.nodeType!==1) return;
        if(node.tagName==='IMG') prepare(node);
        if(node.querySelectorAll) node.querySelectorAll('img').forEach(prepare);
      });
    });
  });
  observer.observe(document.documentElement,{childList:true,subtree:true});

  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('img').forEach(prepare);
  });
})();
