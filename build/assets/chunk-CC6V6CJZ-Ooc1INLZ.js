import{s as l}from"./chunk-AYIUW4A5-32QjTsWY.js";import{a0 as o,v as u,a1 as K,Q as y,q as t}from"./index-DQ7iaOIo.js";var v="api_keys",i=K(v),p=(e,s,a)=>{const{data:r,...n}=o({queryFn:()=>u.apiKeys.retrieve(e,s),queryKey:i.detail(e),...a});return{...r,...n}},q=(e,s)=>{const{data:a,...r}=o({queryFn:()=>u.apiKeys.list(e),queryKey:i.list(e),...s});return{...a,...r}},Q=e=>y({mutationFn:s=>u.apiKeys.create(s),onSuccess:(s,a,r)=>{t.invalidateQueries({queryKey:i.lists()})},...e}),m=(e,s)=>y({mutationFn:a=>u.apiKeys.update(e,a),onSuccess:(a,r,n)=>{t.invalidateQueries({queryKey:i.lists()}),t.invalidateQueries({queryKey:i.detail(e)})},...s}),A=(e,s)=>y({mutationFn:()=>u.apiKeys.revoke(e),onSuccess:(a,r,n)=>{t.invalidateQueries({queryKey:i.lists()}),t.invalidateQueries({queryKey:i.detail(e)})}}),S=(e,s)=>y({mutationFn:()=>u.apiKeys.delete(e),onSuccess:(a,r,n)=>{t.invalidateQueries({queryKey:i.lists()}),t.invalidateQueries({queryKey:i.detail(e)})}}),h=(e,s)=>y({mutationFn:a=>u.apiKeys.batchRemoveSalesChannels(e,a),onSuccess:(a,r,n)=>{t.invalidateQueries({queryKey:i.lists()}),t.invalidateQueries({queryKey:i.detail(e)}),t.invalidateQueries({queryKey:l.lists()})},...s}),F=(e,s)=>y({mutationFn:a=>u.apiKeys.batchAddSalesChannels(e,a),onSuccess:(a,r,n)=>{t.invalidateQueries({queryKey:i.lists()}),t.invalidateQueries({queryKey:i.detail(e)}),t.invalidateQueries({queryKey:l.lists()})},...s});export{A as a,S as b,Q as c,p as d,h as e,i as f,m as g,F as h,q as u};
