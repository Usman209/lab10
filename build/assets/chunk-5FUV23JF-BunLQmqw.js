import{u as d,l as p}from"./lodash-BbEdBw2P.js";import{u as m,r as l,j as f,I as h}from"./index-DQ7iaOIo.js";var g=({placeholder:o,prefix:r})=>{const{t:n}=m(),c=o||n("general.search"),e=d({param:"q",prefix:r,multiple:!1}),a=e.get(),s=l.useCallback(p.debounce(u=>{const t=u.target.value;t?e.add(t):e.delete()},500),[e]);return l.useEffect(()=>()=>{s.cancel()},[s]),f.jsx(h,{autoComplete:"off",name:"q",type:"search",size:"small",defaultValue:(a==null?void 0:a[0])||void 0,onChange:s,placeholder:c})};export{g as D};
