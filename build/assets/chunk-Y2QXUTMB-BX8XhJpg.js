import{c as i}from"./chunk-6GU6IDUA-CDc7wW5L.js";import{i as n}from"./index-DQ7iaOIo.js";import{z as o}from"./index-yuYasa5Y.js";var s=o.union([o.string(),o.number()]).optional().refine(t=>t===""||t===void 0?!0:Number.isInteger(i(t)),{message:n.t("validation.mustBeInt")}).refine(t=>t===""||t===void 0?!0:i(t)>=0,{message:n.t("validation.mustBePositive")});o.array(o.object({key:o.string(),value:o.unknown(),isInitial:o.boolean().optional(),isDeleted:o.boolean().optional(),isIgnored:o.boolean().optional()}));export{s as o};
