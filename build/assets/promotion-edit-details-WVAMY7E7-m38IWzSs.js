import{D as y}from"./chunk-YRY2CZ6I-B_uqCOEO.js";import{g as C}from"./chunk-MWVM4TYO-bKUcYSnf.js";import{w as _,u as v,cc as N,j as e,H as F,c7 as T,g as l,I,T as S}from"./index-DQ7iaOIo.js";import{a as n,u as B}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as E,a as L,F as r}from"./chunk-C7RYT3S3-DvWl1ixb.js";import{t as P}from"./zod-DqtdDTUb.js";import{o as V,s as x,e as h,n as w}from"./index-yuYasa5Y.js";import{T as D}from"./Trans-LG4CmYWt.js";import{R as t}from"./radio-group-CqMTuXTE.js";import{C as M}from"./currency-input-YdrMuETU.js";import{B as j}from"./label-DsyTUQgE.js";import"./index.esm-C23H4hs_.js";import"./prompt-BKfKBHyN.js";import"./index-CIxKSFC7.js";var R=V({is_automatic:x().toLowerCase(),code:x().min(1),value_type:h(["fixed","percentage"]),value:w(),allocation:h(["each","across"])}),z=({promotion:i})=>{const{t:a}=v(),{handleSuccess:m}=B(),s=E({defaultValues:{is_automatic:i.is_automatic.toString(),code:i.code,value:i.application_method.value,allocation:i.application_method.allocation,value_type:i.application_method.type},resolver:P(R)}),d=L({control:s.control,name:"value_type"})==="fixed",{mutateAsync:b,isPending:f}=T(i.id),g=s.handleSubmit(async o=>{await b({is_automatic:o.is_automatic==="true",code:o.code,application_method:{value:o.value,type:o.value_type,allocation:o.allocation}},{onSuccess:()=>{m()}})});return e.jsx(n.Form,{form:s,children:e.jsxs("form",{onSubmit:g,className:"flex h-full flex-col",children:[e.jsx(n.Body,{children:e.jsxs("div",{className:"flex h-full flex-col gap-y-8",children:[e.jsx(r.Field,{control:s.control,name:"is_automatic",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:"Method"}),e.jsx(r.Control,{children:e.jsxs(t,{className:"flex-col gap-y-3",...o,value:o.value,onValueChange:o.onChange,children:[e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="false"}),value:"false",label:a("promotions.form.method.code.title"),description:a("promotions.form.method.code.description")}),e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="true"}),value:"true",label:a("promotions.form.method.automatic.title"),description:a("promotions.form.method.automatic.description")})]})}),e.jsx(r.ErrorMessage,{})]})}),e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(r.Field,{control:s.control,name:"code",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:a("promotions.form.code.title")}),e.jsx(r.Control,{children:e.jsx(I,{...o})})]})}),e.jsx(S,{size:"small",leading:"compact",className:"text-ui-fg-subtle",children:e.jsx(D,{t:a,i18nKey:"promotions.form.code.description",components:[e.jsx("br",{},"break")]})})]}),e.jsx(r.Field,{control:s.control,name:"value_type",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:a("promotions.fields.value_type")}),e.jsx(r.Control,{children:e.jsxs(t,{className:"flex-col gap-y-3",...o,onValueChange:o.onChange,children:[e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="fixed"}),value:"fixed",label:a("promotions.form.value_type.fixed.title"),description:a("promotions.form.value_type.fixed.description")}),e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="percentage"}),value:"percentage",label:a("promotions.form.value_type.percentage.title"),description:a("promotions.form.value_type.percentage.description")})]})}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:s.control,name:"value",render:({field:{onChange:o,...u}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:a(d?"fields.amount":"fields.percentage")}),e.jsx(r.Control,{children:d?e.jsx(M,{min:0,onValueChange:c=>o(c?parseInt(c):null),code:"USD",symbol:C("USD"),...u,value:u.value}):e.jsx(y,{min:0,max:100,...u,value:u.value||"",onChange:c=>{o(c.target.value===""?null:parseInt(c.target.value))}},"amount")}),e.jsx(r.ErrorMessage,{})]})}),e.jsx(r.Field,{control:s.control,name:"allocation",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:a("promotions.fields.allocation")}),e.jsx(r.Control,{children:e.jsxs(t,{className:"flex-col gap-y-3",...o,onValueChange:o.onChange,children:[e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="each"}),value:"each",label:a("promotions.form.allocation.each.title"),description:a("promotions.form.allocation.each.description")}),e.jsx(t.ChoiceBox,{className:l("basis-1/2",{"border-ui-border-interactive border-2":o.value==="across"}),value:"across",label:a("promotions.form.allocation.across.title"),description:a("promotions.form.allocation.across.description")})]})}),e.jsx(r.ErrorMessage,{})]})})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(j,{size:"small",variant:"secondary",children:a("actions.cancel")})}),e.jsx(j,{size:"small",type:"submit",isLoading:f,children:a("actions.save")})]})})]})})},Z=()=>{const{id:i}=_(),{t:a}=v(),{promotion:m,isLoading:s,isError:p,error:d}=N(i);if(p)throw d;return e.jsxs(n,{children:[e.jsx(n.Header,{children:e.jsx(F,{children:a("promotions.edit.title")})}),!s&&m&&e.jsx(z,{promotion:m})]})};export{Z as Component};
