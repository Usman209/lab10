import{u as O,a as H,b as L}from"./chunk-APWN266K-C65YEnYq.js";import{u as M,D as N}from"./chunk-MOFW5DA3-BBRzwwAr.js";import{u as _}from"./chunk-YVTBRLIE-QBelkXWc.js";import{S as q,c as Q}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as X,r as i,k as Z,j as o}from"./index-DQ7iaOIo.js";import{B as j}from"./label-DsyTUQgE.js";import{C as w}from"./checkbox-BXdKf1Kl.js";import{c as J}from"./index-DW7vLJga.js";var u=50,d="cg",k=t=>t.reduce((e,r)=>(e[r.id]=!0,e),{}),oe=({state:t,setState:e,type:r})=>{const{t:m}=X(),[c,p]=i.useState(k(t)),[f,h]=i.useState(t);i.useEffect(()=>{p(k(t)),h(t)},[t]);const{searchParams:y,raw:v}=O({pageSize:u,prefix:d}),{customer_groups:n,count:S,isLoading:I,isError:P,error:R}=_(y,{placeholderData:Z}),E=a=>{const g=typeof a=="function"?a(c):a,x=Object.keys(c),b=Object.keys(g),T=b.filter(s=>!x.includes(s)),F=x.filter(s=>!b.includes(s)),B=(n==null?void 0:n.filter(s=>T.includes(s.id)).map(s=>({id:s.id,name:s.name})))||[],A=f.filter(s=>!F.includes(s.id));h([...A,...B]),p(g)},G=()=>{e(f)},z=H(),C=U(),{table:D}=M({data:n||[],columns:C,count:S,enablePagination:!0,enableRowSelection:!0,getRowId:a=>a.id,rowSelection:{state:c,updater:E},pageSize:u,prefix:d}),l=r==="focus"?q:Q;if(P)throw R;return o.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[o.jsx(l.Body,{className:"min-h-0 p-0",children:o.jsx(N,{table:D,columns:C,pageSize:u,count:S,isLoading:I,filters:z,orderBy:["name","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:d,queryObject:v})}),o.jsxs(l.Footer,{children:[o.jsx(l.Close,{asChild:!0,children:o.jsx(j,{variant:"secondary",size:"small",type:"button",children:m("actions.cancel")})}),o.jsx(j,{type:"button",size:"small",onClick:G,children:m("actions.save")})]})]})},K=J(),U=()=>{const t=L();return i.useMemo(()=>[K.display({id:"select",header:({table:e})=>o.jsx(w,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>o.jsx(w,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...t],[t])};export{oe as P};
