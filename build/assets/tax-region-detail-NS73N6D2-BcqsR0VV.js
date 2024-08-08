import{a as _,b as w,T as E,u as C,c as D,d as N}from"./before-1t1Ro4Vi.js";import{u as O,a as z,T as B}from"./chunk-AO6DXNYA-5PVGuvvh.js";import{T as L}from"./chunk-S4M2HKPF-Bbl1bIJy.js";import{w as k,r as b,h as A,cJ as I,j as e,u as d,C as u,y as q,B as F,cC as G,cK as T,H as R,T as h,k as S}from"./index-DQ7iaOIo.js";import{cL as ke}from"./index-DQ7iaOIo.js";import{S as H}from"./chunk-FGHVNTU2-B17BbdmQ.js";import"./chunk-3IW4HYUP-DTbTbYs9.js";import"./lodash-BbEdBw2P.js";import{a as J}from"./chunk-DBDBBAQF-CMdHLg8z.js";import{A as Q}from"./alert-BDVUsyGc.js";import{B as g}from"./label-DsyTUQgE.js";import"./chunk-C76H5USB-BzcnRuay.js";import"./chunk-VNYVDWWH-aQIGveY2.js";import"./chunk-5FUV23JF-BunLQmqw.js";import"./chunk-RKBIB2RM-cgj6pqOB.js";import"./chunk-WX2SMNCD-CYp4yo3d.js";import"./plus-mini-DfhjBeEB.js";import"./chunk-NGTKJO6Q-CBxZNPj4.js";import"./chunk-OPYB3EPU-Gu9ostxc.js";import"./chunk-ZBNCTGKS-C_X4IB2p.js";import"./chunk-4N7PLYUW-DRfoew5M.js";import"./chunk-DMYZ6SLX-CvGU_oYL.js";import"./chunk-YVTBRLIE-QBelkXWc.js";import"./chunk-RYVWLLZ2-CmEHdxLZ.js";import"./index-DW7vLJga.js";import"./pencil-square-C2dQ88SM.js";import"./trash-AHlgA58B.js";import"./arrow-down-right-mini-DIwWk90s.js";import"./status-badge-CrS-Pq0N.js";import"./chunk-EQTBJSBZ-C6oQs6qn.js";import"./react-country-flag.esm-BUpPP8bW.js";import"./plus-CQspOzlS.js";import"./use-prompt-DSUtE_64.js";import"./prompt-BKfKBHyN.js";import"./arrow-up-right-on-box-CErxVq_8.js";import"./Trans-LG4CmYWt.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-down-mini-CMQwg4p-.js";import"./square-two-stack-0Hf-pV3m.js";var X=({taxRegion:r})=>{const{t:s}=d(),i=r.tax_rates.filter(a=>a.is_default===!0),t=i.length===0;return e.jsxs(u,{className:"divide-y p-0",children:[e.jsx(L,{taxRegion:r,type:"header",asLink:!1,badge:t&&e.jsx(q,{content:s("taxRegions.fields.noDefaultRate.tooltip"),children:e.jsx(F,{color:"orange",size:"2xsmall",className:"cursor-default",children:s("taxRegions.fields.noDefaultRate.label")})})}),i.map(a=>e.jsx(E,{taxRate:a},a.id))]})},f=10,v="p",Z=({taxRegion:r,showSublevelRegions:s})=>{const{t:i}=d(),{searchParams:t,raw:a}=O({pageSize:f,prefix:v}),{tax_regions:o,count:n,isPending:l,isError:p,error:m}=G({...t,parent_id:r.id},{placeholderData:S}),{table:y}=z({count:n,data:o,pageSize:f,prefix:v}),c=T(r.country_code);if(!c&&!s&&!r.children.length)return null;const P=(c==null?void 0:c.type)||"sublevel";if(p)throw m;return e.jsx(u,{className:"divide-y p-0",children:e.jsx(B,{variant:"province",action:{to:"provinces/create",label:i("actions.create")},table:y,isPending:l,queryObject:a,count:n,children:e.jsx(R,{level:"h2",children:i(`taxRegions.${P}.header`)})})})},j=10,x="o",K=({taxRegion:r})=>{const{t:s}=d(),{searchParams:i,raw:t}=C({pageSize:j,prefix:x}),{tax_rates:a,count:o,isPending:n,isError:l,error:p}=J({...i,tax_region_id:r.id,is_default:!1},{placeholderData:S}),{table:m}=D({count:o,data:a,pageSize:j,prefix:x});if(l)throw p;return e.jsx(u,{className:"p-0",children:e.jsx(N,{isPending:n,table:m,count:o,action:{label:s("actions.create"),to:"overrides/create"},queryObject:t,prefix:x,children:e.jsx(R,{level:"h2",children:s("taxRegions.taxOverrides.header")})})})},$=({taxRegion:r,showSublevelRegions:s,setShowSublevelRegions:i})=>{const{t}=d(),[a,o]=b.useState(!1);return T(r.country_code)||s||a||r.children.length?null:e.jsx(Q,{dismissible:!0,variant:"info",className:"bg-ui-bg-base",children:e.jsxs("div",{className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(h,{size:"small",leading:"compact",weight:"plus",asChild:!0,children:e.jsx("h2",{children:t("taxRegions.fields.sublevels.alert.header")})}),e.jsx(h,{size:"small",leading:"compact",className:"text-pretty",children:t("taxRegions.fields.sublevels.alert.description")})]}),e.jsxs("div",{className:"flex items-center gap-x-3",children:[e.jsx(g,{variant:"secondary",size:"small",onClick:()=>i(!0),children:t("taxRegions.fields.sublevels.alert.action")}),e.jsx(g,{variant:"transparent",size:"small",onClick:()=>o(!0),children:t("actions.hide")})]})]})})},ze=()=>{const{id:r}=k(),[s,i]=b.useState(!1),t=A(),{tax_region:a,isLoading:o,isError:n,error:l}=I(r,void 0,{initialData:t});if(o||!a)return e.jsx("div",{children:"Loading..."});if(n)throw l;return e.jsxs(H,{data:a,showJSON:!0,hasOutlet:!0,widgets:{after:_,before:w},children:[e.jsx($,{taxRegion:a,showSublevelRegions:s,setShowSublevelRegions:i}),e.jsx(X,{taxRegion:a}),e.jsx(Z,{taxRegion:a,showSublevelRegions:s}),e.jsx(K,{taxRegion:a})]})};export{ze as Component,ze as TaxRegionDetail,ke as loader};
