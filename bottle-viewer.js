const viewer=document.querySelector('.bottle-viewer');
const viewerImage=viewer.querySelector('img');
const viewerTitle=viewer.querySelector('h2');
let imageTrigger;
document.querySelectorAll('[data-bottle-image]').forEach(link=>link.addEventListener('click',event=>{
 if(!viewer.showModal)return;
 event.preventDefault();imageTrigger=link;
 viewerImage.src=link.getAttribute('href');viewerImage.alt=link.querySelector('img').alt;
 viewerTitle.textContent=link.getAttribute('aria-label').replace('Enlarge ','');
 viewer.showModal();document.documentElement.style.overflow='hidden';
}));
viewer.querySelector('button').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
viewer.addEventListener('close',()=>{document.documentElement.style.overflow='';imageTrigger?.focus();});
