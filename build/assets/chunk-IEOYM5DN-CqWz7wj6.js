import{T as X}from"./chunk-VNYVDWWH-aQIGveY2.js";import{u as H}from"./chunk-FDTXKQ2M-CjK8GA8u.js";import{u as U,a as q,b as Q}from"./chunk-O4JGPO2C-tKZ5FEKB.js";import{u as N,a as Y,b as Z}from"./chunk-APWN266K-C65YEnYq.js";import{u as J}from"./chunk-WJBHHVZN-BSvaMqVO.js";import{u as K,a as V,b as W,c as $}from"./chunk-IRV425DP-Dkabmjt2.js";import{u as ee}from"./chunk-QBDU475K--UbpR47S.js";import{u as te,a as re}from"./chunk-55F244YM-B_ivUNU-.js";import{u as _,D as O}from"./chunk-MOFW5DA3-BBRzwwAr.js";import{u as se}from"./chunk-NGTKJO6Q-CBxZNPj4.js";import{u as ae}from"./chunk-OPYB3EPU-Gu9ostxc.js";import{u as oe}from"./chunk-ZBNCTGKS-C_X4IB2p.js";import{u as ne}from"./chunk-YVTBRLIE-QBelkXWc.js";import{S as ce,c as le}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as ie}from"./chunk-4N7PLYUW-DRfoew5M.js";import{u as ue,r as h,j as a,k as z,d as de,T as pe,n as me}from"./index-DQ7iaOIo.js";import{z as k}from"./index-yuYasa5Y.js";import{X as ge}from"./x-mark-mini-DjxzaqmQ.js";import{B as L}from"./label-DsyTUQgE.js";import{C as b}from"./checkbox-BXdKf1Kl.js";import{c as E}from"./index-DW7vLJga.js";function fe(s){return s.reduce((e,r)=>(e[r.value]=!0,e),{})}var et=({referenceType:s,type:e,setState:r,state:c})=>{const{t:f}=ue(),g=e==="focus"?ce:le,[S,n]=h.useState(c),l=()=>{r(S)};return a.jsxs("div",{className:"flex size-full flex-col overflow-hidden",children:[a.jsx(g.Body,{className:"min-h-0 p-0",children:a.jsx(Se,{referenceType:s,initialRowState:fe(c),intermediate:S,setIntermediate:n})}),a.jsxs(g.Footer,{children:[a.jsx(g.Close,{asChild:!0,children:a.jsx(L,{variant:"secondary",size:"small",type:"button",children:f("actions.cancel")})}),a.jsx(L,{type:"button",size:"small",onClick:l,children:f("actions.save")})]})]})},Se=({referenceType:s,...e})=>{switch(s){case"customer_groups":return a.jsx(he,{...e});case"products":return a.jsx(Pe,{...e});case"product_collections":return a.jsx(ye,{...e});case"product_types":return a.jsx(Re,{...e});case"product_tags":return a.jsx(ke,{...e});default:return null}},i=50,F="cg",he=({initialRowState:s,intermediate:e,setIntermediate:r})=>{const[c,f]=h.useState(s);D();const{searchParams:g,raw:S}=N({pageSize:i,prefix:F}),{customer_groups:n,count:l,isLoading:C,isError:P,error:w}=ne(g,{placeholderData:z}),x=o=>{const d=typeof o=="function"?o(c):o,p=Object.keys(c),m=Object.keys(d),j=m.filter(t=>!p.includes(t)),R=p.filter(t=>!m.includes(t)),I=(n==null?void 0:n.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.name})))||[],v=e.filter(t=>!R.includes(t.value));r([...v,...I]),f(d)},y=Y(),u=Ce(),{table:T}=_({data:n||[],columns:u,count:l,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:F});if(P)throw w;return a.jsx(O,{table:T,columns:u,pageSize:i,count:l,isLoading:C,filters:y,orderBy:["name","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:F,queryObject:S})},be=E(),Ce=()=>{const s=Z();return h.useMemo(()=>[be.display({id:"select",header:({table:e})=>a.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>a.jsx(b,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s],[s])},A="p",Pe=({initialRowState:s,intermediate:e,setIntermediate:r})=>{const[c,f]=h.useState(s);D();const{searchParams:g,raw:S}=te({pageSize:i,prefix:A}),{products:n,count:l,isLoading:C,isError:P,error:w}=ie(g,{placeholderData:z}),x=o=>{const d=typeof o=="function"?o(c):o,p=Object.keys(c),m=Object.keys(d),j=m.filter(t=>!p.includes(t)),R=p.filter(t=>!m.includes(t)),I=(n==null?void 0:n.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!R.includes(t.value));r([...v,...I]),f(d)},y=re(),u=xe(),{table:T}=_({data:n||[],columns:u,count:l,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:A});if(P)throw w;return a.jsx(O,{table:T,columns:u,pageSize:i,count:l,isLoading:C,filters:y,orderBy:["title","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:A,queryObject:S})},we=E(),xe=()=>{const s=ee();return h.useMemo(()=>[we.display({id:"select",header:({table:e})=>a.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>a.jsx(b,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s],[s])},G="pc",ye=({initialRowState:s,intermediate:e,setIntermediate:r})=>{const[c,f]=h.useState(s);D();const{searchParams:g,raw:S}=K({pageSize:i,prefix:G}),{collections:n,count:l,isLoading:C,isError:P,error:w}=oe(g,{placeholderData:z}),x=o=>{const d=typeof o=="function"?o(c):o,p=Object.keys(c),m=Object.keys(d),j=m.filter(t=>!p.includes(t)),R=p.filter(t=>!m.includes(t)),I=(n==null?void 0:n.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.title})))||[],v=e.filter(t=>!R.includes(t.value));r([...v,...I]),f(d)},y=V(),u=je(),{table:T}=_({data:n||[],columns:u,count:l,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:G});if(P)throw w;return a.jsx(O,{table:T,columns:u,pageSize:i,count:l,isLoading:C,filters:y,orderBy:["title","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:G,queryObject:S})},Te=E(),je=()=>{const s=J();return h.useMemo(()=>[Te.display({id:"select",header:({table:e})=>a.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>a.jsx(b,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s],[s])},B="pt",Re=({initialRowState:s,intermediate:e,setIntermediate:r})=>{const[c,f]=h.useState(s);D();const{searchParams:g,raw:S}=U({pageSize:i,prefix:B}),{product_types:n,count:l,isLoading:C,isError:P,error:w}=ae(g,{placeholderData:z}),x=o=>{const d=typeof o=="function"?o(c):o,p=Object.keys(c),m=Object.keys(d),j=m.filter(t=>!p.includes(t)),R=p.filter(t=>!m.includes(t)),I=(n==null?void 0:n.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!R.includes(t.value));r([...v,...I]),f(d)},y=q(),u=ve(),{table:T}=_({data:n||[],columns:u,count:l,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:B});if(P)throw w;return a.jsx(O,{table:T,columns:u,pageSize:i,count:l,isLoading:C,filters:y,orderBy:["value","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:B,queryObject:S})},Ie=E(),ve=()=>{const s=Q();return h.useMemo(()=>[Ie.display({id:"select",header:({table:e})=>a.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>a.jsx(b,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s],[s])},M="ptag",ke=({initialRowState:s,intermediate:e,setIntermediate:r})=>{const[c,f]=h.useState(s);D();const{searchParams:g,raw:S}=W({pageSize:i,prefix:M}),{product_tags:n,count:l,isLoading:C,isError:P,error:w}=se(g,{placeholderData:z}),x=o=>{const d=typeof o=="function"?o(c):o,p=Object.keys(c),m=Object.keys(d),j=m.filter(t=>!p.includes(t)),R=p.filter(t=>!m.includes(t)),I=(n==null?void 0:n.filter(t=>j.includes(t.id)).map(t=>({value:t.id,label:t.value})))||[],v=e.filter(t=>!R.includes(t.value));r([...v,...I]),f(d)},y=$(),u=Oe(),{table:T}=_({data:n||[],columns:u,count:l,enablePagination:!0,enableRowSelection:!0,getRowId:o=>o.id,rowSelection:{state:c,updater:x},pageSize:i,prefix:M});if(P)throw w;return a.jsx(O,{table:T,columns:u,pageSize:i,count:l,isLoading:C,filters:y,orderBy:["value","created_at","updated_at"],layout:"fill",pagination:!0,search:!0,prefix:M,queryObject:S})},_e=E(),Oe=()=>{const s=H();return h.useMemo(()=>[_e.display({id:"select",header:({table:e})=>a.jsx(b,{checked:e.getIsSomePageRowsSelected()?"indeterminate":e.getIsAllPageRowsSelected(),onCheckedChange:r=>e.toggleAllPageRowsSelected(!!r)}),cell:({row:e})=>a.jsx(b,{checked:e.getIsSelected(),onCheckedChange:r=>e.toggleSelected(!!r),onClick:r=>{r.stopPropagation()}})}),...s],[s])},D=()=>{const[s,e]=de();h.useEffect(()=>()=>{e({})},[])},tt=({index:s,label:e,onRemove:r})=>a.jsxs("div",{className:"bg-ui-bg-field-component shadow-borders-base flex items-center justify-between gap-2 rounded-md px-2 py-0.5",children:[a.jsx(pe,{size:"small",leading:"compact",children:e}),a.jsx(me,{size:"small",variant:"transparent",type:"button",onClick:()=>r(s),children:a.jsx(ge,{})})]}),ze=k.object({value:k.string(),label:k.string()});k.object({reference_type:k.nativeEnum(X),references:k.array(ze)});var rt=s=>s.references.map(e=>({reference:s.reference_type,reference_id:e.value}));export{ze as T,et as a,tt as b,rt as c};
