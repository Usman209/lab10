import{C as j}from"./chunk-OEMJBX6M-BrrzLRN5.js";import{a as i,u as f}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as v,F as s}from"./chunk-C7RYT3S3-DvWl1ixb.js";import{f as g,l as C}from"./chunk-4N7PLYUW-DRfoew5M.js";import{w as y,u as p,j as e,H as P,t as m,I as F}from"./index-DQ7iaOIo.js";import{t as b}from"./zod-DqtdDTUb.js";import{z as a}from"./index-yuYasa5Y.js";import{B as u}from"./label-DsyTUQgE.js";import"./index-DurlSV0o.js";import"./motion-DA5tZ6sm.js";import"./x-mark-mini-DjxzaqmQ.js";import"./prompt-BKfKBHyN.js";import"./chunk-DMYZ6SLX-CvGU_oYL.js";var S=a.object({title:a.string().min(1),values:a.array(a.string()).optional()}),w=({product:l})=>{const{t:r}=p(),{handleSuccess:n}=f(),o=v({defaultValues:{title:"",values:[]},resolver:b(S)}),{mutateAsync:c,isPending:d}=C(l.id),x=o.handleSubmit(async t=>{c(t,{onSuccess:()=>{m.success(r("products.options.create.successToast",{title:t.title})),n()},onError:async h=>{m.error(h.message)}})});return e.jsx(i.Form,{form:o,children:e.jsxs("form",{onSubmit:x,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(i.Body,{className:"flex flex-1 flex-col gap-y-4 overflow-auto",children:[e.jsx(s.Field,{control:o.control,name:"title",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("products.fields.options.optionTitle")}),e.jsx(s.Control,{children:e.jsx(F,{...t,placeholder:r("products.fields.options.optionTitlePlaceholder")})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:o.control,name:"values",render:({field:t})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:r("products.fields.options.variations")}),e.jsx(s.Control,{children:e.jsx(j,{...t,placeholder:r("products.fields.options.variantionsPlaceholder")})}),e.jsx(s.ErrorMessage,{})]})})]}),e.jsx(i.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(i.Close,{asChild:!0,children:e.jsx(u,{variant:"secondary",size:"small",children:r("actions.cancel")})}),e.jsx(u,{type:"submit",size:"small",isLoading:d,children:r("actions.save")})]})})]})})},V=()=>{const{id:l}=y(),{t:r}=p(),{product:n,isLoading:o,isError:c,error:d}=g(l);if(c)throw d;return e.jsxs(i,{children:[e.jsx(i.Header,{children:e.jsx(P,{children:r("products.options.create.header")})}),!o&&n&&e.jsx(w,{product:n})]})};export{V as Component};
