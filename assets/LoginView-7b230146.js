import{_ as i}from"./logo_white-7a6d5727.js";import{_ as l}from"./_plugin-vue_export-helper-c27b6911.js";import{o as p,c as r,a as s,p as _,d as m,e as n}from"./index-a06986c1.js";const f={setup(){},methods:{async login(){const e=document.getElementById("login").value,t=document.getElementById("password").value,a=await fetch("/api.php",{body:JSON.stringify({login:e,password:t}),headers:{"Content-Type":"application/json"},method:"post"});try{(await a.json()).type=="success"?window.location.href="/admin":alert("Ошибка авторизации")}catch{alert("Ошибка авторизации")}}}},o=e=>(_("data-v-f5587d9f"),e=e(),m(),e),h={class:"main"},u={class:"d-flex align-items-center"},v=o(()=>s("div",{class:"col-md-4 header"},[s("div",{class:"text-center"},[s("img",{src:i,class:"w-60"}),s("h4",null,[n("Если вы попали сюда "),s("span",{class:"h1"},"случайно"),n(", просто уходите, тут ничего нет")])])],-1)),g={class:"col-md-8 col-12"},w={class:"d-flex align-items-center"},y={class:"col-12"},b=o(()=>s("h1",{class:"fw-bolder"},"Авторизация",-1)),x=o(()=>s("div",{class:"mb-3"},[s("input",{type:"email",class:"form-control p-3",id:"login",placeholder:"Введите ваш email"})],-1)),I=o(()=>s("div",{class:"mb-3"},[s("input",{type:"password",class:"form-control p-3",id:"password",placeholder:"Введите ваш пароль"})],-1));function B(e,t,a,c,S,d){return p(),r("div",h,[s("div",u,[v,s("div",g,[s("div",w,[s("div",y,[b,s("form",null,[x,I,s("button",{type:"button",class:"w-100 btn btn-primary p-3 mt-3",onClick:t[0]||(t[0]=V=>d.login())},"Войти")])])])])])])}const N=l(f,[["render",B],["__scopeId","data-v-f5587d9f"]]);export{N as default};