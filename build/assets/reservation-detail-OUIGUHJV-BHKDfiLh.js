import{I as x}from"./chunk-LX4JNAOB-CU2Xgz-I.js";import{S as o}from"./chunk-ULQT3HE4-paLl-SNk.js";import{J as c}from"./chunk-3IW4HYUP-DTbTbYs9.js";import{c as v,r as u}from"./chunk-KWVVOB4B-Ch3DSjg4.js";import{u as y}from"./chunk-3UMDCRM2-NSGJIubw.js";import{q as m,w as j,h as p,j as e,O as f,v as g,u as h,C as w,H as I,A as _}from"./index-DQ7iaOIo.js";import{b as q}from"./chunk-DMYZ6SLX-CvGU_oYL.js";import{P as N}from"./pencil-square-C2dQ88SM.js";import"./arrow-up-right-on-box-CErxVq_8.js";import"./Trans-LG4CmYWt.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-down-mini-CMQwg4p-.js";import"./square-two-stack-0Hf-pV3m.js";const C={widgets:[]},S={widgets:[]},b={widgets:[]},L={widgets:[]};var k=s=>({queryKey:u.detail(s),queryFn:async()=>g.reservations.retrieve(s)}),T=async({params:s})=>{const n=s.id,t=k(n);return m.getQueryData(t.queryKey)??await m.fetchQuery(t)},A=({reservation:s})=>{const{t:n}=h(),{inventory_item:t,isPending:d}=q(s.inventory_item_id),{stock_location:a,isPending:l}=y(s.location_id);if(d||!t||l||!a)return e.jsx("div",{children:"Loading..."});const i=t.location_levels.find(r=>r.location_id===s.location_id);return e.jsxs(w,{className:"divide-y p-0",children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4",children:[e.jsx(I,{children:n("inventory.reservation.header",{itemName:t.title??t.sku})}),e.jsx(_,{groups:[{actions:[{icon:e.jsx(N,{}),label:n("actions.edit"),to:"edit"}]}]})]}),e.jsx(o,{title:n("inventory.reservation.lineItemId"),value:s.line_item_id}),e.jsx(o,{title:n("inventory.reservation.description"),value:s.description}),e.jsx(o,{title:n("inventory.reservation.location"),value:a==null?void 0:a.name}),e.jsx(o,{title:n("inventory.reservation.inStockAtLocation"),value:i==null?void 0:i.stocked_quantity}),e.jsx(o,{title:n("inventory.reservation.availableAtLocation"),value:i==null?void 0:i.available_quantity}),e.jsx(o,{title:n("inventory.reservation.reservedAtLocation"),value:i==null?void 0:i.reserved_quantity})]})},V=()=>{const{id:s}=j(),n=p(),{reservation:t,isLoading:d,isError:a,error:l}=v(s,{},{initialData:n});if(d||!t)return e.jsx("div",{children:"Loading..."});if(a)throw l;return e.jsxs("div",{className:"flex flex-col gap-y-2",children:[S.widgets.map((i,r)=>e.jsx("div",{children:e.jsx(i.Component,{data:t})},r)),e.jsxs("div",{className:"flex flex-col gap-x-4 xl:flex-row xl:items-start",children:[e.jsxs("div",{className:"flex w-full flex-col gap-y-3",children:[e.jsx(A,{reservation:t}),C.widgets.map((i,r)=>e.jsx("div",{children:e.jsx(i.Component,{data:t})},r)),e.jsx("div",{className:"hidden xl:block",children:e.jsx(c,{data:t})})]}),e.jsxs("div",{className:"mt-2 flex w-full max-w-[100%] flex-col gap-y-2 xl:mt-0 xl:max-w-[400px]",children:[L.widgets.map((i,r)=>e.jsx("div",{children:e.jsx(i.Component,{data:t})},r)),e.jsx(x,{inventoryItem:t.inventory_item}),b.widgets.map((i,r)=>e.jsx("div",{children:e.jsx(i.Component,{data:t})},r)),e.jsx("div",{className:"xl:hidden",children:e.jsx(c,{data:t})}),e.jsx(f,{})]})]})]})};export{V as Component,T as loader};
