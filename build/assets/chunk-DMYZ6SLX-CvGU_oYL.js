import{a0 as l,s as i,a1 as d,Q as y,q as r}from"./index-DQ7iaOIo.js";var m="inventory_items",s=d(m),c="inventory_item_levels",v=d(c),K=(e,t)=>{const{data:a,...n}=l({queryFn:()=>i.admin.inventoryItem.list(e),queryKey:s.list(e),...t});return{...a,...n}},Q=(e,t,a)=>{const{data:n,...u}=l({queryFn:()=>i.admin.inventoryItem.retrieve(e,t),queryKey:s.detail(e),...a});return{...n,...u}},I=e=>y({mutationFn:t=>i.admin.inventoryItem.create(t),onSuccess:(t,a,n)=>{r.invalidateQueries({queryKey:s.lists()})},...e}),L=(e,t)=>y({mutationFn:a=>i.admin.inventoryItem.update(e,a),onSuccess:(a,n,u)=>{r.invalidateQueries({queryKey:s.lists()}),r.invalidateQueries({queryKey:s.detail(e)})},...t}),E=(e,t)=>y({mutationFn:()=>i.admin.inventoryItem.delete(e),onSuccess:(a,n,u)=>{r.invalidateQueries({queryKey:s.lists()}),r.invalidateQueries({queryKey:s.detail(e)})},...t}),F=(e,t,a)=>y({mutationFn:()=>i.admin.inventoryItem.deleteLevel(e,t),onSuccess:(n,u,o)=>{r.invalidateQueries({queryKey:s.lists()}),r.invalidateQueries({queryKey:s.detail(e)}),r.invalidateQueries({queryKey:v.detail(e)})},...a}),_=(e,t,a)=>{const{data:n,...u}=l({queryFn:()=>i.admin.inventoryItem.listLevels(e,t),queryKey:v.detail(e),...a});return{...n,...u}},b=(e,t,a)=>y({mutationFn:n=>i.admin.inventoryItem.updateLevel(e,t,n),onSuccess:(n,u,o)=>{r.invalidateQueries({queryKey:s.lists()}),r.invalidateQueries({queryKey:s.detail(e)}),r.invalidateQueries({queryKey:v.detail(e)})},...a}),p=(e,t)=>y({mutationFn:a=>i.admin.inventoryItem.batchUpdateLevels(e,a),onSuccess:(a,n,u)=>{r.invalidateQueries({queryKey:s.lists()}),r.invalidateQueries({queryKey:s.detail(e)}),r.invalidateQueries({queryKey:v.detail(e)})},...t});export{v as a,Q as b,E as c,I as d,_ as e,F as f,L as g,p as h,s as i,b as j,K as u};
