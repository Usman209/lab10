import{a as c}from"./chunk-OPYB3EPU-Gu9ostxc.js";import{u as n,t}from"./index-DQ7iaOIo.js";import{u}from"./use-prompt-DSUtE_64.js";var T=s=>{const{t:e}=n(),o=u(),{mutateAsync:r}=c(s);return async()=>{await o({title:e("general.areYouSure"),description:e("productTypes.delete.confirmation"),confirmText:e("actions.delete"),cancelText:e("actions.cancel")})&&await r(void 0,{onSuccess:()=>{t.success(e("productTypes.delete.successToast"))},onError:a=>{t.error(a.message)}})}};export{T as u};
