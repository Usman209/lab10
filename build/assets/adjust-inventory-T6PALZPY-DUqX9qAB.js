import{u as q}from"./chunk-3UMDCRM2-NSGJIubw.js";import{a as i,u as w}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as L,F as r}from"./chunk-C7RYT3S3-DvWl1ixb.js";import{b as F,j as I}from"./chunk-DMYZ6SLX-CvGU_oYL.js";import{w as S,u as _,j as e,H as N,t as p,I as A,T as h}from"./index-DQ7iaOIo.js";import{t as T}from"./zod-DqtdDTUb.js";import{o as z,n as C}from"./index-yuYasa5Y.js";import{B as g}from"./label-DsyTUQgE.js";import"./prompt-BKfKBHyN.js";var l=({title:o,value:s})=>e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx(h,{className:"px-2 py-1.5",size:"small",leading:"compact",children:o}),e.jsx(h,{className:"px-2 py-1.5",size:"small",leading:"compact",children:s})]}),E=({item:o,level:s,location:m})=>{const{t}=_(),{handleSuccess:d}=w(),x=z({stocked_quantity:C().min(s.reserved_quantity)}),n=L({defaultValues:{stocked_quantity:s.stocked_quantity},resolver:T(x)}),c=n.watch("stocked_quantity"),{mutateAsync:u,isPending:y}=I(o.id,s.location_id),v=n.handleSubmit(async a=>{if(a.stocked_quantity===s.stocked_quantity)return d();await u({stocked_quantity:a.stocked_quantity},{onSuccess:()=>{p.success(t("inventory.toast.updateLevel")),d()},onError:j=>{p.error(j.message)}})});return e.jsx(i.Form,{form:n,children:e.jsxs("form",{onSubmit:v,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(i.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-auto",children:[e.jsxs("div",{className:"text-ui-fg-subtle shadow-elevation-card-rest grid grid-rows-4 divide-y rounded-lg border",children:[e.jsx(l,{title:t("fields.title"),value:o.title??"-"}),e.jsx(l,{title:t("fields.sku"),value:o.sku}),e.jsx(l,{title:t("locations.domain"),value:m.name}),e.jsx(l,{title:t("inventory.reserved"),value:s.reserved_quantity}),e.jsx(l,{title:t("inventory.available"),value:c-s.reserved_quantity})]}),e.jsx(r.Field,{control:n.control,name:"stocked_quantity",render:({field:{onChange:a,value:j,...k}})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:t("fields.inStock")}),e.jsx(r.Control,{children:e.jsx(A,{type:"number",min:s.reserved_quantity,value:j||"",onChange:b=>{const f=b.target.value;a(f===""?null:parseFloat(f))},...k})}),e.jsx(r.ErrorMessage,{})]})})]}),e.jsx(i.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(i.Close,{asChild:!0,children:e.jsx(g,{variant:"secondary",size:"small",children:t("actions.cancel")})}),e.jsx(g,{type:"submit",size:"small",isLoading:y,children:t("actions.save")})]})})]})})},V=()=>{const{id:o,location_id:s}=S(),{t:m}=_(),{inventory_item:t,isPending:d,isError:x,error:n}=F(o),c=t==null?void 0:t.location_levels.find(a=>a.location_id===s),{stock_location:u,isLoading:y}=q(s),v=!d&&t&&c&&!y&&u;if(x)throw n;return e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx(N,{children:m("inventory.manageLocations")})}),v&&e.jsx(E,{item:t,level:c,location:u})]})};export{V as Component};
