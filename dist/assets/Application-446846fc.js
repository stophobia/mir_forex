import{U as u,F as m,_ as h}from"./FooterBlock-521f14f6.js";import{d as f,P as g,L as v}from"./LicenseModal-adab5271.js";import{R as b}from"./GenericModalMsg.vue_vue_type_style_index_0_scoped_08b5f08e_lang-366bb1a8.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{k as w,l as c,o as l,c as i,g as o,a as e,n as k,q as d,j as M,u as R,F as x,p as B,d as I,e as p}from"./index-a6c94651.js";const n=s=>(B("data-v-9641a276"),s=s(),I(),s),T={class:"navbar navbar-expand-lg navbar-dark bg-dark",ref:"navbar"},j={class:"container-fluid flex justify-content-between align-items-center"},E=n(()=>e("img",{class:"logo",src:h},null,-1)),N=[E],C={key:0,class:"header-text fade-right"},F={class:"main"},S={class:"container"},V={class:"application-wrap"},A=n(()=>e("h1",{class:"title fade-up-1"},[p(" БЕСПЛАТНЫЙ 10 ЧАСОВОЙ КУРС "),e("span",null,"для начинающего трейдера")],-1)),L=n(()=>e("p",{class:"sub-title fade-up-2"},[p(" Заполните форму для получения доступа к "),e("span",null,"бесплатному обучению")],-1)),O={class:"fade-up-3"},$={class:"form-wrap"},q=n(()=>e("input",{type:"text",class:"form-control p-4",id:"learn_name",placeholder:"ФИО"},null,-1)),P={type:"phone","data-maska":"+7 (###) ###-##-##",placeholder:"+7 (___)___+__+__",class:"form-control p-4",id:"learn_number"},W={key:0,class:"header-text fade-bottom"},z={data(){return{ReviewlMsgType:null,isMobile:window.innerWidth<=560}},setup(){},methods:{openWindow(){this.$emit("licenseModal",{})},onReviewResult(s){console.log(s),this.ReviewlMsgType=s,document.getElementById("reviewModalMsgOpen").click()},sendResult(s){this.onReviewResult(s)},async callrev(){const s=await fetch("/api.php",{body:JSON.stringify({action:"createRequest",username:document.getElementById("learn_name").value,phone_number:document.getElementById("learn_number").value,type:"learn"}),headers:{"Content-Type":"application/json"},method:"post"});try{const a=await s.json();this.sendResult(a.type)}catch{this.sendResult("error")}}}},D=Object.assign(z,{__name:"Application",setup(s){const a=f.useLoading({"background-color":"#0d1118",opacity:1,"lock-scroll":!0,color:"#fff",loader:"line"});w(!1);const _=a.show({},{before:c("img",{src:"/logo_white.png",style:"width: 150px",class:"d-block"},[]),after:c("div",{class:"preloader-line"},[])});return setTimeout(()=>{_.hide()},4e3),(t,r)=>(l(),i(x,null,[o(g),o(v),o(b,{type:t.ReviewlMsgType,page:"application"},null,8,["type"]),e("nav",T,[e("div",j,[e("a",{class:k(["navbar-brand ms-0 me-auto",t.isMobile?"fade-left-mobile":"fade-left"]),href:"/",ref:"logo"},N,2),t.isMobile?d("",!0):(l(),i("span",C,"Обучение инвестициям и трейдингу"))])],512),e("div",F,[e("div",S,[e("div",V,[A,L,e("div",O,[e("div",$,[q,M(e("input",P,null,512),[[R(u)]]),e("button",{class:"btn btn-light p-4",type:"button",onClick:r[0]||(r[0]=J=>t.callrev())}," Оставить заявку ")])]),t.isMobile?(l(),i("span",W,"Обучение инвестициям и трейдингу")):d("",!0)])])]),o(m,{page:"application"})],64))}}),X=y(D,[["__scopeId","data-v-9641a276"]]);export{X as default};
