import{u as x,D as y}from"./chunk-MOFW5DA3-BBRzwwAr.js";import{j as a,O as j,u as o,C as v,H as b,T as P,L as T,r as S,k as _,A as w,t as u}from"./index-DQ7iaOIo.js";import"./lodash-BbEdBw2P.js";import{u as k}from"./chunk-C76H5USB-BzcnRuay.js";import"./chunk-7LAPOKHJ-CJKFdgcT.js";import"./chunk-M566SHKI-CpCecA-q.js";import{u as C,a as A}from"./chunk-347W5B26-Be4tWg0J.js";import{T as D}from"./trash-AHlgA58B.js";import{u as E}from"./use-prompt-DSUtE_64.js";import{B as N}from"./label-DsyTUQgE.js";import{c as O}from"./index-DW7vLJga.js";import"./chunk-5FUV23JF-BunLQmqw.js";import"./chunk-RKBIB2RM-cgj6pqOB.js";import"./chunk-WX2SMNCD-CYp4yo3d.js";import"./plus-mini-DfhjBeEB.js";import"./command-bar-B4tNt0in.js";import"./index-T2cn0UOM.js";import"./chunk-QAF7PVQE-D70u5tsT.js";import"./format-CJ2FegFx.js";import"./_baseIsEqual-DdDy9tKi.js";import"./date-picker-BsdoIRhX.js";import"./clsx-B-dksMZM.js";import"./popover-C1ro1ubo.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-left-mini-o3U9ykef.js";import"./prompt-BKfKBHyN.js";const z={widgets:[]},L={widgets:[]};var q=({profile:t})=>{const{t:e}=o(),s=E(),{mutateAsync:r}=A(t.id),i=async()=>{await s({title:e("shippingProfile.delete.title"),description:e("shippingProfile.delete.description",{name:t.name}),verificationText:t.name,verificationInstruction:e("general.typeToConfirm"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{u.success(e("shippingProfile.delete.successToast",{name:t.name}))},onError:n=>{u.error(n.message)}})};return a.jsx(w,{groups:[{actions:[{icon:a.jsx(D,{}),label:e("actions.delete"),onClick:i}]}]})},l=O(),H=()=>{const{t}=o();return S.useMemo(()=>[l.accessor("name",{header:t("fields.name"),cell:e=>e.getValue()}),l.accessor("type",{header:t("fields.type"),cell:e=>e.getValue()}),l.display({id:"actions",cell:({row:e})=>a.jsx(q,{profile:e.original})})],[t])},I=()=>{const{t}=o();let e=[];e.push({key:"name",label:t("fields.name"),type:"string"}),e.push({key:"type",label:t("fields.type"),type:"string"});const s=[{label:t("fields.createdAt"),key:"created_at"},{label:t("fields.updatedAt"),key:"updated_at"}].map(r=>({key:r.key,label:r.label,type:"date"}));return e=[...e,...s],e},B=({pageSize:t=20,prefix:e})=>{const s=k(["offset","q","order","created_at","updated_at","name","type"],e);return{searchParams:{limit:t,offset:s.offset?parseInt(s.offset):0,q:s.q,order:s.order,created_at:s.created_at?JSON.parse(s.created_at):void 0,updated_at:s.updated_at?JSON.parse(s.updated_at):void 0,name:s.name,type:s.type},raw:s}},c=20,R=()=>{const{t}=o(),{raw:e,searchParams:s}=B({pageSize:c}),{shipping_profiles:r,count:i,isLoading:d,isError:n,error:f}=C(s,{placeholderData:_}),m=H(),h=I(),{table:g}=x({data:r,columns:m,count:i,enablePagination:!0,getRowId:p=>p.id,pageSize:c});if(n)throw f;return a.jsxs(v,{className:"divide-y p-0",children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[a.jsxs("div",{children:[a.jsx(b,{children:t("shippingProfile.domain")}),a.jsx(P,{className:"text-ui-fg-subtle",size:"small",children:t("shippingProfile.subtitle")})]}),a.jsx("div",{children:a.jsx(N,{size:"small",variant:"secondary",asChild:!0,children:a.jsx(T,{to:"create",children:t("actions.create")})})})]}),a.jsx(y,{table:g,pageSize:c,count:i,columns:m,filters:h,orderBy:["name","type","created_at","updated_at"],isLoading:d,navigateTo:p=>p.id,queryObject:e,search:!0,pagination:!0})]})},ue=()=>a.jsxs("div",{className:"flex flex-col gap-y-3",children:[L.widgets.map((t,e)=>a.jsx("div",{children:a.jsx(t.Component,{})},e)),a.jsx(R,{}),z.widgets.map((t,e)=>a.jsx("div",{children:a.jsx(t.Component,{})},e)),a.jsx(j,{})]});export{ue as Component};
