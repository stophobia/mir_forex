import{G as _}from"./GeneralPage-c06207e9.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";import{o as c,C as h,y as p,a as t,c as i,A as u,F as m,t as n,p as f,d as w}from"./index-2f8be584.js";import"./logo_white-7a6d5727.js";const l=s=>(f("data-v-9474ceed"),s=s(),w(),s),g={class:"d-flex"},v={class:"col-12"},y=l(()=>t("h1",{class:"fw-bolder mb-3"},"Заявки",-1)),b={class:"row"},D={class:"col-12"},k={class:"card shadow w-100"},C=l(()=>t("div",{class:"mb-4 d-flex"},null,-1)),j={class:"mb-0"},x={class:"table table-hover"},B=l(()=>t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#"),t("th",{scope:"col"},"ФИО"),t("th",{scope:"col"},"Тип"),t("th",{scope:"col"},"Номер"),t("th",{scope:"col"},"Созданно")])],-1)),I=["onClick"],L={scope:"row"},R={data(){return{data:[]}},mounted(){this.loadData()},methods:{formatDate(s){var o=new Date(s),a=""+(o.getMonth()+1),e=""+o.getDate(),d=o.getFullYear();return a.length<2&&(a="0"+a),e.length<2&&(e="0"+e),[d,a,e].join("/")},open(s){window.location.href="/admin/request/"+s},async loadData(){const s=await fetch("/api.php?action=getAllRequest",{headers:{"Content-Type":"application/json"},method:"get"});try{const o=await s.json();o.length>0&&(this.data=o)}catch{console.log("error")}}}},S=Object.assign(R,{__name:"RequestListView",setup(s){return(o,a)=>(c(),h(_,null,{default:p(()=>[t("div",g,[t("div",v,[y,t("form",null,[t("div",b,[t("div",D,[t("div",k,[C,t("div",j,[t("table",x,[B,t("tbody",null,[(c(!0),i(m,null,u(o.data,e=>(c(),i("tr",{key:e.id,onClick:d=>o.open(e.id)},[t("th",L,n(e.id),1),t("td",null,n(e.username),1),t("td",null,n(e.type),1),t("td",null,n(e.phone_number),1),t("td",null,n(o.formatDate(e.created_at)),1)],8,I))),128))])])])])])])])])])]),_:1}))}}),E=r(S,[["__scopeId","data-v-9474ceed"]]);export{E as default};