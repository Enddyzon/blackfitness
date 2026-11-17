// Navegación (hash), tema y arranque de la aplicación
function go(r){location.hash=r}
function render(){const r=(location.hash||'#dashboard').slice(1),m=MENU.find(x=>x[0]==r)||MENU[0],k=m[0];
$('#nav').innerHTML=MENU.map(x=>x[0]=='g'?`<div class="grp">${x[1]}</div>`:`<a tabindex="0" class="${x[2]?'sub ':''}${x[0]==k?'on':''}" onclick="go('${x[0]}')" onkeydown="if(event.key=='Enter')go('${x[0]}')">${x[1]}</a>`).join('');
$('#view').innerHTML=k=='dashboard'?dashboard():k=='productos'?productos():k=='stocks'?stocks():k=='ventas'?ventas():`<h1>${m[1]}</h1><div class="card soon">Este módulo se mantiene como está por ahora. Se rediseñará en una siguiente etapa.</div>`;
if(k=='ventas')drawPOS();$('#side').classList.remove('open');scrollTo(0,0)}
addEventListener("hashchange",render);
$('#ham').onclick=()=>$('#side').classList.toggle('open');
$('#theme').onclick=()=>{const d=document.documentElement,dark=d.dataset.theme?d.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.theme=dark?'light':'dark'};
render();
