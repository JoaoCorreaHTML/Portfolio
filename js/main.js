const nav=document.getElementById('menu'),tog=document.querySelector('.tog');
const set=o=>{nav.classList.toggle('open',o);tog.setAttribute('aria-expanded',o);tog.textContent=o?'Fechar':'Menu';document.body.style.overflow=o?'hidden':''};
tog.addEventListener('click',()=>set(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>set(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')set(false)});
document.getElementById('ano').textContent=new Date().getFullYear();
const m=document.querySelector('.fig .mark');
if(m&&matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches){
 document.querySelector('.hero').addEventListener('pointermove',e=>{const x=(e.clientX/innerWidth-.5)*14,y=(e.clientY/innerHeight-.5)*10;m.style.transform=`translate(${x}px,${y}px)`});
}
