import{a as f,b as v,T as R,u as h,c as y,d as T}from"./before-1t1Ro4Vi.js";import{T as j}from"./chunk-S4M2HKPF-Bbl1bIJy.js";import{w as b,h as D,cJ as _,j as a,q as p,u as m,C as d,y as P,B as S,H as w,cH as q,s as O,k as C}from"./index-DQ7iaOIo.js";import{S as E}from"./chunk-FGHVNTU2-B17BbdmQ.js";import"./chunk-3IW4HYUP-DTbTbYs9.js";import"./lodash-BbEdBw2P.js";import{a as L}from"./chunk-DBDBBAQF-CMdHLg8z.js";import"./chunk-C76H5USB-BzcnRuay.js";import"./chunk-VNYVDWWH-aQIGveY2.js";import"./chunk-5FUV23JF-BunLQmqw.js";import"./chunk-RKBIB2RM-cgj6pqOB.js";import"./label-DsyTUQgE.js";import"./chunk-WX2SMNCD-CYp4yo3d.js";import"./plus-mini-DfhjBeEB.js";import"./chunk-NGTKJO6Q-CBxZNPj4.js";import"./chunk-OPYB3EPU-Gu9ostxc.js";import"./chunk-ZBNCTGKS-C_X4IB2p.js";import"./chunk-4N7PLYUW-DRfoew5M.js";import"./chunk-DMYZ6SLX-CvGU_oYL.js";import"./chunk-YVTBRLIE-QBelkXWc.js";import"./chunk-RYVWLLZ2-CmEHdxLZ.js";import"./index-DW7vLJga.js";import"./pencil-square-C2dQ88SM.js";import"./trash-AHlgA58B.js";import"./arrow-down-right-mini-DIwWk90s.js";import"./status-badge-CrS-Pq0N.js";import"./chunk-EQTBJSBZ-C6oQs6qn.js";import"./react-country-flag.esm-BUpPP8bW.js";import"./plus-CQspOzlS.js";import"./use-prompt-DSUtE_64.js";import"./prompt-BKfKBHyN.js";import"./arrow-up-right-on-box-CErxVq_8.js";import"./Trans-LG4CmYWt.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-down-mini-CMQwg4p-.js";import"./square-two-stack-0Hf-pV3m.js";var Q=({taxRegion:r})=>{const{t}=m(),e=r.tax_rates.filter(i=>i.is_default===!0),o=e.length===0;return a.jsxs(d,{className:"divide-y p-0",children:[a.jsx(j,{taxRegion:r,type:"header",asLink:!1,badge:o&&a.jsx(P,{content:t("taxRegions.fields.noDefaultRate.tooltip"),children:a.jsx(S,{color:"orange",size:"2xsmall",className:"cursor-default",children:t("taxRegions.fields.noDefaultRate.label")})})}),e.map(i=>a.jsx(R,{taxRate:i,isSublevelTaxRate:!0},i.id))]})},l=10,n="o",k=({taxRegion:r})=>{const{t}=m(),{searchParams:e,raw:o}=h({pageSize:l,prefix:n}),{tax_rates:i,count:s,isPending:c,isError:u,error:x}=L({...e,tax_region_id:r.id,is_default:!1},{placeholderData:C}),{table:g}=y({count:s,data:i,pageSize:l,prefix:n});if(u)throw x;return a.jsx(d,{className:"p-0",children:a.jsx(T,{isPending:c,table:g,count:s,action:{label:t("actions.create"),to:"overrides/create"},queryObject:o,prefix:n,children:a.jsx(w,{level:"h2",children:t("taxRegions.taxOverrides.header")})})})},he=()=>{const{province_id:r}=b(),t=D(),{tax_region:e,isLoading:o,isError:i,error:s}=_(r,void 0,{initialData:t});if(o||!e)return a.jsx("div",{children:"Loading..."});if(i)throw s;return a.jsxs(E,{data:e,showJSON:!0,hasOutlet:!0,widgets:{after:f,before:v},children:[a.jsx(Q,{taxRegion:e}),a.jsx(k,{taxRegion:e})]})},N=r=>({queryKey:q.detail(r),queryFn:async()=>O.admin.taxRegion.retrieve(r)}),ye=async({params:r})=>{const t=r.province_id,e=N(t);return p.getQueryData(e.queryKey)??await p.fetchQuery(e)};export{he as Component,he as TaxRegionDetail,ye as loader};
