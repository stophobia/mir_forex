import{H as r,f as u,o as c,c as n,a as e,g as d,e as l,q as i,p,d as h}from"./index-474c2831.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const b={components:{FontAwesomeIcon:r},setup(){},props:["type","page"],methods:{close(){this.$refs.closeModal;const o=this.$refs.modal;console.log(this.type),console.log(this.type=="success"),o.classList.remove("show"),o.style.display="none",[...document.querySelectorAll(".modal-backdrop.show")].forEach(_=>_.style.display="none"),document.body.style.overflow="auto",document.body.style.padding="0",document.body.classList.remove("modal-open")}}},s=o=>(p("data-v-e8f1e043"),o=o(),h(),o),y={class:"modal fade",id:"reviewModalMsg",tabindex:"-1","aria-labelledby":"reviewModalMsg","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-dialog-centered"},v=s(()=>e("button",{id:"reviewModalMsgOpen",type:"button",class:"btn btn-primary d-none","data-bs-toggle":"modal","data-bs-target":"#reviewModalMsg"}," Открыть ",-1)),f={class:"modal-content pt-3 pb-4"},w=s(()=>e("button",{type:"button",class:"btn-close modal-close","data-bs-dismiss":"modal","aria-label":"Close"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},[e("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})])],-1)),x={class:"modal-body pb-0"},M={key:0,class:"text-center"},k=s(()=>e("br",null,null,-1)),L=s(()=>e("br",null,null,-1)),I={key:1,class:"text-center"},z=s(()=>e("br",null,null,-1)),B=s(()=>e("br",null,null,-1)),N=s(()=>e("br",null,null,-1)),S=s(()=>e("br",null,null,-1)),V=s(()=>e("br",null,null,-1)),C=s(()=>e("br",null,null,-1)),R=s(()=>e("a",{class:"nav-link",href:"/"},"Перейти на наш сайт",-1)),q={key:2,class:"text-center"},A=s(()=>e("br",null,null,-1)),E=s(()=>e("br",null,null,-1));function F(o,_,t,G,H,O){const a=u("font-awesome-icon");return c(),n("div",y,[e("div",g,[v,e("div",f,[w,e("div",x,[t.type=="success"&&t.page!="application"?(c(),n("h3",M,[d(a,{icon:["fas","circle-check"],class:"error",size:"2xl"}),k,L,l(" Ваша заявка успешно отправлена ")])):i("",!0),t.type=="success"&&t.page=="application"?(c(),n("h3",I,[d(a,{icon:["fas","circle-check"],class:"error",size:"2xl"}),z,B,l(" Ваша заявка успешно отправлена. "),N,l("В ближайшее время с вами "),S,l("свяжется наш специалист! "),V,C,R])):i("",!0),t.type=="error"?(c(),n("h3",q,[d(a,{icon:["fas","circle-exclamation"],size:"2xl",class:"error"}),A,E,l(" Произошла ошибка, пожалуйста проверьте корректность введённых данных, в случае повторной ошибки обратитесь по указанным выше контактам ")])):i("",!0)])])])],512)}const j=m(b,[["render",F],["__scopeId","data-v-e8f1e043"]]);export{j as R};
