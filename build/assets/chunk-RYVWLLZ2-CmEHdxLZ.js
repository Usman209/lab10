import{a0 as y,s as i,Q as o,q as u,a1 as c}from"./index-DQ7iaOIo.js";var m="customers",t=c(m),l=(e,a,s)=>{const{data:r,...n}=y({queryKey:t.detail(e),queryFn:async()=>i.admin.customer.retrieve(e,a),...s});return{...r,...n}},v=(e,a)=>{const{data:s,...r}=y({queryFn:()=>i.admin.customer.list(e),queryKey:t.list(e),...a});return{...s,...r}},q=e=>o({mutationFn:a=>i.admin.customer.create(a),onSuccess:(a,s,r)=>{u.invalidateQueries({queryKey:t.lists()})},...e}),K=(e,a)=>o({mutationFn:s=>i.admin.customer.update(e,s),onSuccess:(s,r,n)=>{u.invalidateQueries({queryKey:t.lists()}),u.invalidateQueries({queryKey:t.detail(e)})},...a}),Q=(e,a)=>o({mutationFn:()=>i.admin.customer.delete(e),onSuccess:(s,r,n)=>{u.invalidateQueries({queryKey:t.lists()}),u.invalidateQueries({queryKey:t.detail(e)})},...a});export{q as a,l as b,t as c,Q as d,K as e,v as u};
