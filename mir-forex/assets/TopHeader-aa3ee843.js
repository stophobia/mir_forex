import{U as p,_ as b}from"./FooterBlock-a1013741.js";import{o as u,c as v,a,D as m,z as l,n as i,g as r,G as c,e as d,F as h,b as f,p as _,d as g}from"./index-173b5192.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const n=e=>(_("data-v-8b6aec33"),e=e(),g(),e),x={class:"modal fade",id:"openCountModal",tabindex:"-1","aria-labelledby":"openCountModal","aria-hidden":"true",ref:"modal"},y={class:"modal-dialog modal-dialog-centered"},L={class:"modal-content"},k=n(()=>a("button",{type:"button",class:"btn-close modal-close","data-bs-dismiss":"modal","aria-label":"Close"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"},[a("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"})])],-1)),N={class:"modal-body text-center p-5 pb-0"},T=n(()=>a("h1",{class:"mb-3"},"Открыть счет",-1)),S=n(()=>a("p",{class:"fw-lighter"}," Оставьте ваши контакты и мы свяжемся с вами в ближайшее время ",-1)),C={class:"mb-4"},M={type:"text",class:"form-control p-3",id:"name",placeholder:"Ваше имя и фамилия",ref:"inputName"},B={class:"mb-3"},E=["value"],V=n(()=>a("p",{class:"fw-boler text-start text-danger mb-3 pb-0"}," Вы перейдете на официальный сайт Альфа-Форекс ",-1)),q={class:"modal-footer text-center p-5 pt-0"},A=n(()=>a("p",{class:"fw-lighter"},[d(" Нажимая на кнопку «Записаться», я даю согласие на обработку персональных данных и соглашаюсь с "),a("a",{href:"/privacy_policy"},"Политикой конфиденциальности")],-1)),R={class:"navbar navbar-expand-lg navbar-dark bg-dark",ref:"navbar"},$={class:"container-fluid"},z=n(()=>a("img",{class:"logo",src:b},null,-1)),F=[z],I=n(()=>a("span",null,null,-1)),D=[I],P={class:"collapse navbar-collapse",id:"navbarTogglerDemo03",ref:"navbar"},j=f('<ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto" data-v-8b6aec33><li class="nav-item p-4" data-v-8b6aec33><a class="nav-link active fw-bolder" href="/#methods" data-v-8b6aec33><span data-v-8b6aec33>Наш метод</span><span class="dynamic-hover-link__underline" data-v-8b6aec33></span></a></li><li class="nav-item p-4" data-v-8b6aec33><a class="nav-link active fw-bolder" href="/courses" data-v-8b6aec33><span data-v-8b6aec33>Курсы</span><span class="dynamic-hover-link__underline" data-v-8b6aec33></span></a></li><li class="nav-item p-4" data-v-8b6aec33><a class="nav-link active fw-bolder" href="/#review" data-v-8b6aec33><span data-v-8b6aec33>Отзывы</span><span class="dynamic-hover-link__underline" data-v-8b6aec33></span></a></li><li class="nav-item p-4" data-v-8b6aec33><a class="nav-link active fw-bolder" href="/about" data-v-8b6aec33><span data-v-8b6aec33>О компании</span><span class="dynamic-hover-link__underline" data-v-8b6aec33></span></a></li></ul>',1),H={href:"mailto:mir_alfa_forex@mail.ru",class:"text-white text-decoration-none fw-bolder me-3"},O={href:"https://app.leadteh.ru/w/y4VC",class:"text-white text-decoration-none fw-bolder me-3"},G={href:"tel:+79878197778",class:"text-white text-decoration-none fw-bolder me-3"},J=n(()=>a("button",{type:"button",class:"btn-light btn fw-bolder","data-bs-toggle":"modal","data-bs-target":"#sendApplication",style:{position:"relative","z-index":"2"},"data-fade-up":"true"}," Оставить заявку ",-1)),U=[J],W={data(){return{isFixed:!1,togglerActive:!1,isMobile:600>=window.innerWidth}},methods:{sendResult(e){this.$emit("onReviewResult",{type:e});const t="https://alfaforex.ru/open-account/?utm_source=463afx&p=463afx";window.open(t)},async call(){const e=await fetch("/api.php",{body:JSON.stringify({action:"createRequest",username:document.getElementById("name").value,phone_number:document.getElementById("number").value,type:"score"}),headers:{"Content-Type":"application/json"},method:"post"});try{const t=await e.json();this.sendResult(t.type)}catch{this.sendResult("error")}},formValidate(){const e=document.querySelector("#openCountModal"),t=e.querySelector("input[type='text']"),s=e.querySelector("input[type='phone']"),o=e.querySelector("button.btn");t.value.length>3&&s.value.length===17?o.disabled=!1:o.disabled=!0},scrollBurger(){const e=this.$refs.burger,t=this.$refs.navbar;if(e){const s=e.getBoundingClientRect(),o=window.scrollY;s.height,o>=100&&!t.className.includes("show")?this.isFixed=!0:this.isFixed=!1}},redirect(){const e="https://alfaforex.ru/open-account/?utm_source=463afx&p=463afx";window.open(e)},scrollNavbarMobile(){const e=document.querySelector(".navbar-collapse.show"),t=document.querySelector(".navbar.fixed"),s=this.$refs.burger;t.classList.remove("fixed"),s.classList.remove("active"),s.classList.add("fixed"),e.classList.remove("show"),e.classList.remove("collapse"),e.classList.add("collapsing"),setTimeout(()=>{e.classList.remove("collapsing"),e.classList.add("collapse"),this.togglerActive=!1},400)},navbarTogglered(){this.togglerActive=!this.togglerActive;const e=this.$refs.burger;this.$refs.navbar.classList.toggle("fixed"),e.className.includes("fixed")?(e.classList.remove("fixed"),e.classList.add("fixed-new")):e.className.includes("fixed-new")&&(e.classList.remove("fixed-new"),e.classList.add("fixed"))}},mounted(){window.addEventListener("scroll",this.scrollBurger),window.addEventListener("scroll",this.scrollNavbarMobile),this.formValidate(),this.$refs.inputName.addEventListener("input",this.formValidate),this.$refs.inputPhone.addEventListener("input",this.formValidate),[...document.querySelectorAll(".nav-link")].forEach(e=>{e.addEventListener("click",()=>{this.scrollNavbarMobile()})})},beforeDestroy(){window.removeEventListener("scroll",this.scrollBurger)}},Y=Object.assign(W,{__name:"TopHeader",setup(e){return(t,s)=>(u(),v(h,null,[a("div",x,[a("div",y,[a("div",L,[k,a("div",N,[T,S,a("div",C,[a("input",M,null,512)]),a("div",B,[m(a("input",{type:"phone",value:t.number,class:"form-control p-3",id:"number",placeholder:"Номер телефона","data-maska":"8 (###) ###-##-##",ref:"inputPhone"},null,8,E),[[l(p)]])]),V]),a("div",q,[a("button",{type:"button",class:"btn btn-primary w-100 mb-3 p-3 dialog-redirect",onClick:s[0]||(s[0]=(...o)=>t.call&&t.call(...o))}," Открыть счет "),A])])])],512),a("nav",R,[a("div",$,[a("a",{class:i(["navbar-brand ms-0 me-auto",t.isMobile?"fade-left-mobile":"fade-left"]),href:"/",ref:"logo"},F,2),a("button",{class:i(["navbar-toggler",t.isFixed?" fixed":"",t.togglerActive?" active":""]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",ref:"burger",onClick:s[1]||(s[1]=(...o)=>t.navbarTogglered&&t.navbarTogglered(...o))},D,2),a("div",P,[j,a("span",{class:i(["navbar-text me-5",t.isMobile?"fade-left-mobile":"fade-right"])},[a("a",H,[r(l(c),{icon:["fas","envelope"],style:{color:"#ffffff"},size:"xl"})]),a("a",O,[r(l(c),{icon:["fab","telegram"],size:"xl"})]),a("a",G,[r(l(c),{icon:["fas","phone"],class:"me-2",size:"xl"}),d("+7 (987) 819-77-78 ")])],2),a("span",{class:i(["navbar-text ms-2",t.isMobile?"fade-right-mobile":"fade-right"])},U,2)],512)])],512)],64))}}),Z=w(Y,[["__scopeId","data-v-8b6aec33"]]);export{Z as T};
