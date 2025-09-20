export default {
 async fetch(req) {
  const UP="1234",AP="9999";
  globalThis.CODES=globalThis.CODES||new Set([
   "Uuipoop","Waaads","Vvvvber","Bbbnoppi","Aasssreth","Xxcbchi","Bdhfhmob","Xcdhghf",
   "Fgfhgbjf","Fgnggno","Fgngkkm","Gdhgjhm","Hgjghmfm","Gyjfhkcbju","Gfhfhkgnm","Ppoooh",
   "Tyfcccer","Poiuhgnx","Dhsffhhd","Afsgfvdh","Frhffjfbm","Zhfhdbhf","Fydhdbffh","Ffgfhdbfh",
   "Ttrrrrradbn","Ffgfhfbfhf"
  ]);
  globalThis.CFGS=globalThis.CFGS||[
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@1.1.1.1:9828?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#♻️ 0 B | ⏳ : ∞ - Uipo",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@er1.v-sub.site:1517?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇫🇷/🇺🇸/🇫🇷 All Location",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@er2.v-sub.site:1517?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇩🇪 Germany 1",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@er3.v-sub.site:1517?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇩🇪 Germany 2",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@er4.v-sub.site:1517?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇩🇪 Germany 3",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@er5.v-sub.site:2434?security=reality&type=tcp&headerType=none&path=&host=&sni=www.chess.com&fp=chrome&pbk=yGgU4VVwpWk3sY54VgDxYVg77n5i-4jduHegq6PqPyA&sid=#🇩🇪 Germany 5",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@qow.mahi25.cfd:4928?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇳🇱 Netherland",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@wow.mahi25.cfd:3789?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇺🇸 USA",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@eow.mahi25.cfd:3799?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇫🇷 France",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@row.mahi25.cfd:3799?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🇵🇱 Poland",
   "vless://cc770782-3a2e-438d-8d71-36466bf5bd69@tow.mahi25.cfd:1429?security=none&type=tcp&headerType=http&path=%2F&host=varzesh3.com#🏴 England"
  ];
  const url=new URL(req.url),p=url.pathname;
  if(req.method==="POST"){
    const b=await req.json().catch(()=>({}));
    if(p==="/verify"&&CODES.has(b.code)){CODES.delete(b.code);return new Response(JSON.stringify({cfgs:CFGS}),{headers:{"content-type":"application/json"}});}
    if(p==="/addcfg"&&b.admin===AP){CFGS.push(b.cfg);return new Response("OK")}
    if(p==="/addcode"&&b.admin===AP){CODES.add(b.code);return new Response("OK")}
    return new Response("Forbidden",{status:403});
  }
  return new Response(`<!doctype html><html><head><meta charset="utf-8">
<style>
body{background:#0a0f1e;color:#fff;font-family:Arial,Helvetica,sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;margin:0}
.container{background:#101a33;padding:20px;border-radius:15px;box-shadow:0 0 15px rgba(0,0,0,.5);max-width:420px;width:90%}
h2,h3{text-align:center;margin:10px 0;color:#00d1ff}
input,button{width:100%;padding:10px;margin:5px 0;border-radius:8px;border:none;font-size:14px}
input{background:#1b2649;color:#fff}
button{background:#00d1ff;color:#000;font-weight:bold;cursor:pointer;transition:.2s}
button:hover{background:#009ec7}
pre{background:#1b2649;padding:10px;border-radius:8px;white-space:pre-wrap;text-align:left;max-height:200px;overflow:auto}
hr{border:1px solid #222;margin:15px 0}
.hidden{display:none}
</style></head><body>
<div class="container">
<h2>User Panel</h2>
<input id=p type=password placeholder="Enter User Password">
<button onclick="p.value==='${UP}'?u.classList.remove('hidden'):alert('Wrong Password')">Login</button>
<div id=u class="hidden">
<input id=c placeholder="Enter Verification Code">
<button onclick="fetch('/verify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:c.value})}).then(r=>r.json()).then(d=>{cfg.textContent=d.cfgs.join('\\n');copy.disabled=false}).catch(()=>alert('Invalid Code'))">Verify</button>
<pre id=cfg>Configs are hidden</pre>
<button id=copy disabled onclick="navigator.clipboard.writeText(cfg.textContent);alert('Copied!')">Copy</button>
</div>
<hr><h3>Admin Panel</h3>
<input id=ap type=password placeholder="Enter Admin Password">
<button onclick="ap.value==='${AP}'?a.classList.remove('hidden'):alert('Wrong Admin Password')">Login</button>
<div id=a class="hidden">
<input id=newcfg placeholder="New Config">
<button onclick="fetch('/addcfg',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({admin:'${AP}',cfg:newcfg.value})}).then(r=>alert(r.status==200?'Config Added!':'Error'))">Add Config</button>
<input id=newcode placeholder="New Code">
<button onclick="fetch('/addcode',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({admin:'${AP}',code:newcode.value})}).then(r=>alert(r.status==200?'Code Added!':'Error'))">Add Code</button>
</div></div></body></html>`,{headers:{"content-type":"text/html"}});
 }
}
