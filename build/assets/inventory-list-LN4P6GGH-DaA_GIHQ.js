import{u as v,D as x}from"./chunk-MOFW5DA3-BBRzwwAr.js";import{j as t,O as g,u as p,C as b,H as j,T as k,L as _,r as N,A as w}from"./index-DQ7iaOIo.js";import"./lodash-BbEdBw2P.js";import{P as m}from"./chunk-P3UUX2T6-OlAXa1VC.js";import{u as q}from"./chunk-C76H5USB-BzcnRuay.js";import"./chunk-7LAPOKHJ-CJKFdgcT.js";import"./chunk-M566SHKI-CpCecA-q.js";import{b as T}from"./chunk-3UMDCRM2-NSGJIubw.js";import{u as I,c as S}from"./chunk-DMYZ6SLX-CvGU_oYL.js";import{P}from"./pencil-square-C2dQ88SM.js";import{T as z}from"./trash-AHlgA58B.js";import{u as C}from"./use-prompt-DSUtE_64.js";import{B as O}from"./label-DsyTUQgE.js";import{c as L}from"./index-DW7vLJga.js";import"./chunk-5FUV23JF-BunLQmqw.js";import"./chunk-RKBIB2RM-cgj6pqOB.js";import"./chunk-WX2SMNCD-CYp4yo3d.js";import"./plus-mini-DfhjBeEB.js";import"./command-bar-B4tNt0in.js";import"./index-T2cn0UOM.js";import"./chunk-QAF7PVQE-D70u5tsT.js";import"./format-CJ2FegFx.js";import"./_baseIsEqual-DdDy9tKi.js";import"./date-picker-BsdoIRhX.js";import"./clsx-B-dksMZM.js";import"./popover-C1ro1ubo.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-left-mini-o3U9ykef.js";import"./prompt-BKfKBHyN.js";var A=({item:s})=>{const{t:i}=p(),e=C(),{mutateAsync:n}=S(s.id),a=async()=>{await e({title:i("general.areYouSure"),description:i("inventory.deleteWarning"),confirmText:i("actions.delete"),cancelText:i("actions.cancel")})&&await n()};return t.jsx(w,{groups:[{actions:[{icon:t.jsx(P,{}),label:i("actions.edit"),to:`${s.id}/edit`}]},{actions:[{icon:t.jsx(z,{}),label:i("actions.delete"),onClick:a}]}]})},l=L(),D=()=>{const{t:s}=p();return N.useMemo(()=>[l.accessor("title",{header:s("fields.title"),cell:({getValue:i})=>{const e=i();return e?t.jsx("div",{className:"flex size-full items-center overflow-hidden",children:t.jsx("span",{className:"truncate",children:e})}):t.jsx(m,{})}}),l.accessor("sku",{header:s("fields.sku"),cell:({getValue:i})=>{const e=i();return e?t.jsx("div",{className:"flex size-full items-center overflow-hidden",children:t.jsx("span",{className:"truncate",children:e})}):t.jsx(m,{})}}),l.accessor("reserved_quantity",{header:s("inventory.reserved"),cell:({getValue:i})=>{const e=i();return Number.isNaN(e)?t.jsx(m,{}):t.jsx("div",{className:"flex size-full items-center overflow-hidden",children:t.jsx("span",{className:"truncate",children:e})})}}),l.accessor("stocked_quantity",{header:s("fields.inStock"),cell:({getValue:i})=>{const e=i();return Number.isNaN(e)?t.jsx(m,{}):t.jsx("div",{className:"flex size-full items-center overflow-hidden",children:t.jsx("span",{className:"truncate",children:e})})}}),l.display({id:"actions",cell:({row:i})=>t.jsx(A,{item:i.original})})],[s])},E=()=>{const{t:s}=p(),{stock_locations:i}=T({limit:1e3}),e=[];if(i){const n={type:"select",options:i.map(a=>({label:a.name,value:a.id})),key:"location_id",searchable:!0,label:s("fields.location")};e.push(n)}return e.push({type:"string",key:"material",label:s("fields.material")}),e.push({type:"string",key:"sku",label:s("fields.sku")}),e.push({type:"string",key:"mid_code",label:s("fields.midCode")}),e.push({type:"number",key:"height",label:s("fields.height")}),e.push({type:"number",key:"width",label:s("fields.width")}),e.push({type:"number",key:"length",label:s("fields.length")}),e.push({type:"number",key:"weight",label:s("fields.weight")}),e.push({type:"select",options:[{label:s("fields.true"),value:"true"},{label:s("fields.false"),value:"false"}],key:"requires_shipping",multiple:!1,label:s("fields.requiresShipping")}),e},J=({pageSize:s=20,prefix:i})=>{const e=q(["id","location_id","q","order","requires_shipping","offset","sku","origin_country","material","mid_code","hs_code","order","weight","width","length","height"],i),{offset:n,weight:a,width:o,length:c,height:d,requires_shipping:u,...r}=e;return{searchParams:{limit:s,offset:n?parseInt(n):void 0,weight:a?JSON.parse(a):void 0,width:o?JSON.parse(o):void 0,length:c?JSON.parse(c):void 0,height:d?JSON.parse(d):void 0,requires_shipping:u?JSON.parse(u):void 0,q:r.q,sku:r.sku,order:r.order,mid_code:r.mid_code,hs_code:r.hs_code,material:r.material,location_levels:{location_id:r.location_id||[]},id:r.id?r.id.split(","):void 0},raw:e}},f=20,H=()=>{const{t:s}=p(),{searchParams:i,raw:e}=J({pageSize:f}),{inventory_items:n,count:a,isPending:o,isError:c,error:d}=I({...i}),u=E(),r=D(),{table:y}=v({data:n??[],columns:r,count:a,enablePagination:!0,getRowId:h=>h.id,pageSize:f});if(c)throw d;return t.jsxs(b,{className:"divide-y p-0",children:[t.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[t.jsxs("div",{children:[t.jsx(j,{children:s("inventory.domain")}),t.jsx(k,{className:"text-ui-fg-subtle",size:"small",children:s("inventory.subtitle")})]}),t.jsx(O,{size:"small",variant:"secondary",asChild:!0,children:t.jsx(_,{to:"create",children:s("actions.create")})})]}),t.jsx(x,{table:y,columns:r,pageSize:f,count:a,isLoading:o,pagination:!0,search:!0,filters:u,queryObject:e,orderBy:["title","sku","stocked_quantity","reserved_quantity"],navigateTo:h=>`${h.id}`})]})},fe=()=>t.jsxs("div",{className:"flex flex-col gap-y-2",children:[t.jsx(H,{}),t.jsx(g,{})]});export{fe as Component};
