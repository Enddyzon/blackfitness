// Estado del inventario: productos, movimientos y ventas. Se guarda en localStorage
const KEY='bf_state_v1';
function seed(){const L=[[1,'Toma de proteína',25,27,10],[2,'Agua Skarch',15,64,20],[3,'Monster',40,18,10],[5,'Visita Gym',50,0,0,1],[9,'Barrita Members',20,42,15],[13,'ABE y Ghost',75,30,10],[16,'Gatorlyte',30,6,10],[17,'Suerox',15,48,15],[18,'Rice Krispies',30,9,12],[19,'Agua Skartch 1.5 L',20,120,40],[20,'Lenny y Larrys',35,20,8]];
const s={n:{p:21,m:1,v:1},prod:[],mov:[],ventas:[]};L.forEach(l=>{s.prod.push({id:l[0],name:l[1],price:l[2],stock:l[3],min:l[4],serv:!!l[5]});if(l[3])s.mov.push({id:s.n.m++,t:Date.parse('2026-11-01T09:00:00'),pid:l[0],type:'Entrada',qty:l[3],price:0,note:'Existencia inicial',vid:0})});return s}
function load(){try{const j=localStorage.getItem(KEY);if(j)return JSON.parse(j)}catch(e){}return seed()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
let S=load(),cart={};
const P=id=>S.prod.find(p=>p.id==id),V=id=>$('#'+id).value;
const fd=t=>new Date(t).toLocaleString('es-MX',{dateStyle:'short',timeStyle:'short'});
const est=p=>p.serv?['Servicio','d']:p.stock<=0?['Agotado','f']:p.stock<=p.min?['Por agotarse','']:['Disponible','d'];
function toast(m){const t=$('#toast');t.textContent=m;t.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(()=>t.hidden=true,2800)}
function done(m){save();render();toast(m)}
function addMov(pid,type,qty,price,note,vid){const p=P(pid);if(!p.serv)p.stock+=type=='Entrada'?qty:-qty;S.mov.unshift({id:S.n.m++,t:Date.now(),pid,type,qty,price,note:note||'',vid:vid||0})}
function modal(title,body,ok,fn){const d=$('#dlg');d.innerHTML=`<h2>${title}</h2>${body}<div class="acts"><button class="btn ghost" onclick="$('#dlg').close()">Cancelar</button><button class="btn" id="mok">${ok}</button></div>`;$('#mok').onclick=()=>{if(fn()!==false)d.close()};d.showModal()}
