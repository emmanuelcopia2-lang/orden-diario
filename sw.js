const V='orden-v1';
const FILES=['./','index.html','manifest.json','icons/icon-192.png','icons/icon-512.png','fonts/figtree-latin-400-normal.woff2','fonts/figtree-latin-500-normal.woff2','fonts/figtree-latin-700-normal.woff2','fonts/bricolage-grotesque-latin-600-normal.woff2','fonts/bricolage-grotesque-latin-700-normal.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(hit=>{
    const net=fetch(e.request).then(r=>{ if(r.ok){ const c=r.clone(); caches.open(V).then(x=>x.put(e.request,c)); } return r; }).catch(()=>hit);
    return hit||net;
  }));
});
