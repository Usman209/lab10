import{u as p}from"./chunk-C76H5USB-BzcnRuay.js";import{u as h}from"./chunk-YVTBRLIE-QBelkXWc.js";import{u as o,r as x,j as s}from"./index-DQ7iaOIo.js";import{a as j}from"./chunk-B4FQDBC3-vSBK5DkU.js";import{S as v}from"./chunk-ADOCJB6L-DwJI6LYz.js";import{P as m}from"./chunk-P3UUX2T6-OlAXa1VC.js";import{c as b}from"./index-DW7vLJga.js";var O=({prefix:e,pageSize:r=20})=>{const a=p(["offset","q","has_account","groups","order","created_at","updated_at"],e),{offset:l,groups:t,created_at:n,updated_at:u,has_account:c,q:i,order:f}=a;return{searchParams:{limit:r,offset:l?Number(l):0,groups:t==null?void 0:t.split(","),has_account:c?c==="true":void 0,order:f,created_at:n?JSON.parse(n):void 0,updated_at:u?JSON.parse(u):void 0,q:i},raw:a}},J=e=>{const{t:r}=o(),a=e==null?void 0:e.includes("groups"),{customer_groups:l}=h({limit:1e3},{enabled:!a});let t=[];if(l&&!a){const c={key:"groups",label:r("customers.groups.label"),type:"select",multiple:!0,options:l.map(i=>({label:i.name,value:i.id}))};t=[...t,c]}const n={key:"has_account",label:r("fields.account"),type:"select",options:[{label:r("customers.registered"),value:"true"},{label:r("customers.guest"),value:"false"}]},u=[{label:r("fields.createdAt"),key:"created_at"},{label:r("fields.updatedAt"),key:"updated_at"}].map(c=>({key:c.key,label:c.label,type:"date"}));return t=[...t,n,...u],t},N=({email:e})=>e?s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:e})}):s.jsx(m,{}),_=()=>{const{t:e}=o();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.email")})})},y=({firstName:e,lastName:r})=>{if(!e&&!r)return s.jsx(m,{});const a=[e,r].filter(Boolean).join(" ");return s.jsx("div",{className:"flex h-full w-full items-center overflow-hidden",children:s.jsx("span",{className:"truncate",children:a})})},C=()=>{const{t:e}=o();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.name")})})},g=({hasAccount:e})=>{const{t:r}=o(),a=e?"green":"orange",l=r(e?"customers.fields.registered":"customers.fields.guest");return s.jsx(v,{color:a,children:l})},w=()=>{const{t:e}=o();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.account")})})},k=({createdAt:e})=>e?s.jsx(j,{date:e}):s.jsx(m,{}),A=()=>{const{t:e}=o();return s.jsx("div",{className:"flex h-full w-full items-center",children:s.jsx("span",{className:"truncate",children:e("fields.createdAt")})})},d=b(),Q=()=>x.useMemo(()=>[d.accessor("email",{header:()=>s.jsx(_,{}),cell:({getValue:e})=>s.jsx(N,{email:e()})}),d.display({id:"name",header:()=>s.jsx(C,{}),cell:({row:{original:{first_name:e,last_name:r}}})=>s.jsx(y,{firstName:e,lastName:r})}),d.accessor("has_account",{header:()=>s.jsx(w,{}),cell:({getValue:e})=>s.jsx(g,{hasAccount:e()})}),d.accessor("created_at",{header:()=>s.jsx(A,{}),cell:({getValue:e})=>s.jsx(k,{createdAt:e()})})],[]);export{J as a,Q as b,O as u};
