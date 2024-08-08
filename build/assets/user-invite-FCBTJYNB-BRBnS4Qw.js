import{u as U}from"./chunk-C76H5USB-BzcnRuay.js";import{r as f,j as t,u as I,f as F,H as P,T as L,I as H,C as z,y as C,A as q,cs as B}from"./index-DQ7iaOIo.js";import{u as J,D as $}from"./chunk-MOFW5DA3-BBRzwwAr.js";import"./lodash-BbEdBw2P.js";import"./chunk-7LAPOKHJ-CJKFdgcT.js";import"./chunk-M566SHKI-CpCecA-q.js";import{a as K,b as Q,c as V,d as W}from"./chunk-GKWRHYJ2-DSZK-cj8.js";import{R as j}from"./chunk-RLLZZQKN-CuYY48Je.js";import{u as X,F as y}from"./chunk-C7RYT3S3-DvWl1ixb.js";import{a as G,b as T}from"./chunk-GH77ZQI2-CyzKiLW4.js";import{t as Y}from"./zod-DqtdDTUb.js";import{o as Z,s as ee}from"./index-yuYasa5Y.js";import{T as re}from"./Trans-LG4CmYWt.js";import{A as te}from"./arrow-path--xNxCUH4.js";import{T as ae}from"./trash-AHlgA58B.js";import{u as se}from"./use-prompt-DSUtE_64.js";import{A as oe}from"./alert-BDVUsyGc.js";import{B as ne}from"./label-DsyTUQgE.js";import{f as b}from"./format-CJ2FegFx.js";import{S as D}from"./status-badge-CrS-Pq0N.js";import{c as ie}from"./index-DW7vLJga.js";import"./chunk-5FUV23JF-BunLQmqw.js";import"./chunk-RKBIB2RM-cgj6pqOB.js";import"./chunk-WX2SMNCD-CYp4yo3d.js";import"./plus-mini-DfhjBeEB.js";import"./command-bar-B4tNt0in.js";import"./index-T2cn0UOM.js";import"./chunk-QAF7PVQE-D70u5tsT.js";import"./_baseIsEqual-DdDy9tKi.js";import"./date-picker-BsdoIRhX.js";import"./clsx-B-dksMZM.js";import"./popover-C1ro1ubo.js";import"./x-mark-mini-DjxzaqmQ.js";import"./triangle-left-mini-o3U9ykef.js";import"./prompt-BKfKBHyN.js";var le=Object.defineProperty,w=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,M=(e,a,r)=>a in e?le(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,ce=(e,a)=>{for(var r in a||(a={}))k.call(a,r)&&M(e,r,a[r]);if(w)for(var r of w(a))A.call(a,r)&&M(e,r,a[r]);return e},de=(e,a)=>{var r={};for(var s in e)k.call(e,s)&&a.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&w)for(var s of w(e))a.indexOf(s)<0&&A.call(e,s)&&(r[s]=e[s]);return r};const R=f.forwardRef((e,a)=>{var r=e,{color:s="currentColor"}=r,n=de(r,["color"]);return f.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:a},n),f.createElement("g",{stroke:s,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,clipPath:"url(#a)"},f.createElement("path",{d:"m6.44 3.965 1.59-1.591a3.25 3.25 0 1 1 4.597 4.596l-1.591 1.59M3.964 6.44l-1.59 1.59a3.25 3.25 0 1 0 4.596 4.597l1.59-1.591M5.909 9.09 9.091 5.91"})),f.createElement("defs",null,f.createElement("clipPath",{id:"a"},f.createElement("path",{fill:"#fff",d:"M0 0h15v15H0z"}))))});R.displayName="Link";var me=({prefix:e,pageSize:a=20})=>{const r=U(["offset","q","order","created_at","updated_at"],e),{offset:s,created_at:n,updated_at:l,q:m,order:c}=r;return{searchParams:{limit:a,offset:s?Number(s):0,order:c,created_at:n?JSON.parse(n):void 0,updated_at:l?JSON.parse(l):void 0,q:m},raw:r}},ue=T({"../../../node_modules/toggle-selection/index.js"(e,a){a.exports=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var s=document.activeElement,n=[],l=0;l<r.rangeCount;l++)n.push(r.getRangeAt(l));switch(s.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":s.blur();break;default:s=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||n.forEach(function(m){r.addRange(m)}),s&&s.focus()}}}}),pe=T({"../../../node_modules/copy-to-clipboard/index.js"(e,a){var r=ue(),s={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function l(c){var i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return c.replace(/#{\s*key\s*}/g,i)}function m(c,i){var d,g,h,x,p,o,v=!1;i||(i={}),d=i.debug||!1;try{h=r(),x=document.createRange(),p=document.getSelection(),o=document.createElement("span"),o.textContent=c,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(u){if(u.stopPropagation(),i.format)if(u.preventDefault(),typeof u.clipboardData>"u"){d&&console.warn("unable to use e.clipboardData"),d&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var _=s[i.format]||s.default;window.clipboardData.setData(_,c)}else u.clipboardData.clearData(),u.clipboardData.setData(i.format,c);i.onCopy&&(u.preventDefault(),i.onCopy(u.clipboardData))}),document.body.appendChild(o),x.selectNodeContents(o),p.addRange(x);var O=document.execCommand("copy");if(!O)throw new Error("copy command was unsuccessful");v=!0}catch(u){d&&console.error("unable to copy using execCommand: ",u),d&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(i.format||"text",c),i.onCopy&&i.onCopy(window.clipboardData),v=!0}catch(_){d&&console.error("unable to copy using clipboardData: ",_),d&&console.error("falling back to prompt"),g=l("message"in i?i.message:n),window.prompt(g,c)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(x):p.removeAllRanges()),o&&document.body.removeChild(o),h()}return v}a.exports=m}}),fe=G(pe()),ve=Z({email:ee().email()}),E=10,N="usr_invite",xe=()=>{const{t:e}=I(),a=X({defaultValues:{email:""},resolver:Y(ve)}),{raw:r,searchParams:s}=me({prefix:N,pageSize:E}),{invites:n,count:l,isPending:m,isError:c,error:i}=K(s),d=ge(),{table:g}=J({data:n??[],columns:d,count:l,enablePagination:!0,getRowId:o=>o.id,pageSize:E}),{mutateAsync:h,isPending:x}=Q(),p=a.handleSubmit(async o=>{try{await h({email:o.email}),a.reset()}catch(v){if(F(v)&&v.status===400){a.setError("root",{type:"manual",message:v.message});return}}});if(c)throw i;return t.jsx(j.Form,{form:a,children:t.jsxs("form",{onSubmit:p,className:"flex h-full flex-col overflow-hidden",children:[t.jsx(j.Header,{}),t.jsx(j.Body,{className:"flex flex-1 flex-col overflow-hidden",children:t.jsx("div",{className:"flex flex-1 flex-col items-center overflow-y-auto",children:t.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16",children:[t.jsxs("div",{children:[t.jsx(P,{children:e("users.inviteUser")}),t.jsx(L,{size:"small",className:"text-ui-fg-subtle",children:e("users.inviteUserHint")})]}),a.formState.errors.root&&t.jsx(oe,{variant:"error",dismissible:!1,className:"text-balance",children:a.formState.errors.root.message}),t.jsxs("div",{className:"flex flex-col gap-y-4",children:[t.jsx("div",{className:"grid grid-cols-2 gap-4",children:t.jsx(y.Field,{control:a.control,name:"email",render:({field:o})=>t.jsxs(y.Item,{children:[t.jsx(y.Label,{children:e("fields.email")}),t.jsx(y.Control,{children:t.jsx(H,{...o})}),t.jsx(y.ErrorMessage,{})]})})}),t.jsx("div",{className:"flex items-center justify-end",children:t.jsx(ne,{size:"small",variant:"secondary",type:"submit",isLoading:x,children:e("users.sendInvite")})})]}),t.jsxs("div",{className:"flex flex-col gap-y-4",children:[t.jsx(P,{level:"h2",children:e("users.pendingInvites")}),t.jsx(z,{className:"overflow-hidden p-0",children:t.jsx($,{table:g,columns:d,count:l,pageSize:E,prefix:N,pagination:!0,search:!0,isLoading:m,queryObject:r,orderBy:["email","created_at","updated_at"]})})]})]})})})]})})},ye=({invite:e})=>{const{mutateAsync:a}=V(e.id),{mutateAsync:r}=W(e.id),s=se(),{t:n}=I(),l=async()=>{await s({title:n("general.areYouSure"),description:n("users.deleteInviteWarning",{email:e.email}),cancelText:n("actions.cancel"),confirmText:n("actions.delete")})&&await a()},m=async()=>{await r()},c=()=>{const i=`${B}/app/invite?token=${e.token}`;(0,fe.default)(i)};return t.jsx(q,{groups:[{actions:[{icon:t.jsx(te,{}),label:n("users.resendInvite"),onClick:m}]},{actions:[{icon:t.jsx(R,{}),label:n("users.copyInviteLink"),onClick:c}]},{actions:[{icon:t.jsx(ae,{}),label:n("actions.delete"),onClick:l}]}]})},S=ie(),ge=()=>{const{t:e}=I();return f.useMemo(()=>[S.accessor("email",{header:e("fields.email"),cell:({getValue:a})=>a()}),S.accessor("accepted",{header:e("fields.status"),cell:({getValue:a,row:r})=>{const s=a(),n=new Date(r.original.expires_at)<new Date;return s?t.jsx(C,{content:e("users.acceptedOnDate",{date:b(new Date(r.original.updated_at),"dd MMM, yyyy")}),children:t.jsx(D,{color:"green",children:e("users.inviteStatus.accepted")})}):n?t.jsx(C,{content:e("users.expiredOnDate",{date:b(new Date(r.original.expires_at),"dd MMM, yyyy")}),children:t.jsx(D,{color:"red",children:e("users.inviteStatus.expired")})}):t.jsx(C,{content:t.jsx(re,{i18nKey:"users.validFromUntil",components:[t.jsx("span",{className:"font-medium"},"from"),t.jsx("span",{className:"font-medium"},"untill")],values:{from:b(new Date(r.original.created_at),"dd MMM, yyyy"),until:b(new Date(r.original.expires_at),"dd MMM, yyyy")}}),children:t.jsx(D,{color:"orange",children:e("users.inviteStatus.pending")})})}}),S.display({id:"actions",cell:({row:a})=>t.jsx(ye,{invite:a.original})})],[e])},er=()=>t.jsx(j,{children:t.jsx(xe,{})});export{er as Component};
