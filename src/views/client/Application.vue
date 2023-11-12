<script setup>
import FooterBlock from "@/components/client/FooterBlock.vue";
import Preloader from "@/components/client/Preloader.vue";

import { ref, inject } from "vue";
import { useLoading } from "vue-loading-overlay";
import { h } from "vue";
import LicenseModal from "@/components/client/LicenseModal.vue";
import ReviewModalMsg from "@/components/client/reviewModalMsg.vue";
import GenericModalMsg from "@/components/client/GenericModalMsg.vue";

const $loading = useLoading({
  "background-color": "#0d1118",
  opacity: 1,
  "lock-scroll": true,
  color: "#fff",
  loader: "line",
});

const fullPage = ref(false);
const loader = $loading.show(
  {},
  {
    before: h(
      "img",
      {
        src: "/logo_white.png",
        style: "width: 150px",
        class: "d-block",
      },
      [],
    ),
    after: h(
      "div",
      {
        class: "preloader-line",
      },
      [],
    ),
  },
);
// simulate AJAX
setTimeout(() => {
  loader.hide();
}, 4000);
</script>

<template>
  <Preloader />
  <LicenseModal />
  <ReviewModalMsg :type="ReviewlMsgType" :page="'application'" />

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ref="navbar">
    <div
      class="container-fluid flex justify-content-between align-items-center"
    >
      <a
        v-bind:class="[
          'navbar-brand ms-0 me-auto',
          /*togglerActive ? 'fixed' : '',*/
          isMobile ? 'fade-left-mobile' : 'fade-left',
        ]"
        href="/"
        ref="logo"
      >
        <img class="logo" src="/full_logo_white.png" />
      </a>
      <span class="header-text fade-right" v-if="!isMobile"
        >Обучение инвестициям и трейдингу</span
      >
    </div>
  </nav>
  <div class="main">
    <div class="container">
      <div class="application-wrap">
        <h1 class="title fade-up-1">
          БЕСПЛАТНЫЙ 10 ЧАСОВОЙ КУРС
          <span>для начинающего трейдера</span>
        </h1>
        <p class="sub-title fade-up-2">
          Заполните форму для получения доступа к
          <span>бесплатному обучению</span>
        </p>
        <div class="fade-up-3">
          <div class="form-wrap">
            <input
              type="text"
              class="form-control p-4"
              id="learn_name"
              placeholder="ФИО"
            />
            <input
              type="phone"
              v-maska
              data-maska="+7 (###) ###-##-##"
              placeholder="+7 (___)___+__+__"
              class="form-control p-4"
              id="learn_number"
            />
            <button
              class="btn btn-light p-4"
              type="button"
              v-on:click="callrev()"
            >
              Оставить заявку
            </button>
          </div>
        </div>

        <span class="header-text fade-bottom" v-if="isMobile"
          >Обучение инвестициям и трейдингу</span
        >
      </div>
    </div>
  </div>
  <FooterBlock :page="'application'" />
</template>

<style scoped>
* {
  transition: 0.3s !important;
}

.main {
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(39deg, #0c1022 16.49%, rgba(12, 16, 34, 0) 73.43%),
    url(/application-bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-text {
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.title,
.title span {
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.title span {
  font-size: 40px;
}

.application-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 66px;
}

.form-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  column-gap: 66px;
  position: relative;
  z-index: 1;
}

.sub-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sub-title,
.sub-title span {
  color: #a3a3a3;
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.sub-title span {
  color: #fff;
}

input {
  font-size: 22px;
}
button {
  font-size: 28px;
}

input,
button {
  width: 372px;
  position: relative;
  z-index: 2;
}

@media (min-width: 1400px) {
  .main {
    padding-top: 80px;
  }
}

@media (max-width: 1800px) {
  .title,
  .title span {
    font-size: 60px;
  }
  .title span {
    font-size: 40px;
  }

  input {
    font-size: 18px;
  }
  button {
    font-size: 18px;
  }
}

@media (max-width: 1600px) {
  .application-wrap {
    row-gap: 63px;
  }

  .sub-title,
  .sub-title span {
    font-size: 18px;
  }

  input,
  button {
    width: 272px;
  }

  .header-text {
    font-size: 18px;
  }
}

@media (max-width: 1200px) {
  .application-wrap {
    row-gap: 23px;
  }

  .title,
  .title span {
    font-size: 40px;
  }

  .sub-title,
  .sub-title span {
    font-size: 16px;
  }

  input,
  button {
    width: 172px;
    padding: 15px !important;
    font-size: 0.9rem;
  }

  .header-text {
    font-size: 16px;
  }
}

@media (max-width: 1000px) {
  .navbar-brand {
    width: fit-content;
  }

  .application-wrap {
    row-gap: 23px;
  }

  .title,
  .title span {
    font-size: 30px;
  }

  .sub-title,
  .sub-title span {
    font-size: 14px;
  }

  input,
  button {
    width: 172px;
    padding: 15px !important;
    font-size: 0.9rem;
    margin: 0 !important;
  }

  .header-text {
    width: fit-content;

    font-size: 14px;
  }

  .navbar-brand {
    width: fit-content;
  }

  .logo {
    width: 240px !important;
  }
}

@media (max-width: 740px) {
  .main {
    padding-top: 30px !important;
    background-attachment: fixed;
    background-position: -70px 0;
  }

  .application-wrap {
    row-gap: 23px;
  }

  .title,
  .title span {
    font-size: 24px;
  }

  .sub-title,
  .sub-title span {
    font-size: 12px;
  }

  input,
  button {
    width: 172px;
    padding: 15px !important;
    font-size: 0.9rem;
    margin: 0 !important;
  }

  .header-text {
    width: fit-content;

    font-size: 12px;
  }

  .form-wrap {
    column-gap: 22px;
  }

  .navbar-brand {
    width: fit-content;
  }
}

@media (max-width: 610px) {
  .main {
    padding-top: 0 !important;
    position: relative;
  }
  .container {
    position: relative;
  }

  .container-fluid {
    width: 100%;
  }

  .application-wrap {
    margin-top: -20px;
    row-gap: 33px;
  }

  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .navbar-brand {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .header-text {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 100px;
  }

  .logo {
    padding-right: 0 !important;
  }

  .title,
  .title span {
    font-size: 20px;
  }

  .sub-title,
  .sub-title span {
    font-size: 12px;
  }
  .form-wrap {
    flex-direction: column;
    row-gap: 30px;
  }

  input,
  button {
    width: 320px;
  }
}

nav {
  position: fixed;
  z-index: 99;
  width: 100vw;
  /* background-color: rgb(12, 16, 34) !important; */
  background-color: transparent !important;
}

.application-wrap {
}

nav > .container-fluid {
  padding-left: 5% !important;
  padding-right: 5% !important;
}
nav .logo {
  width: 250px;
  padding: 15px;
}

.modal-close svg {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 1400px) {
}

@media screen and (max-width: 992px) {
  .col-md-6 {
    width: 50% !important;
  }

  .logo {
    padding-left: 0 !important;
  }

  nav {
    position: absolute;
  }

  nav.fixed {
    position: fixed;
  }
  .navbar-brand img {
    width: 300px;
  }

  .navbar-collapse > ul {
    margin-top: 150px;
  }
  .navbar-collapse li {
    padding-left: 0 !important;
  }
  .navbar-brand {
    position: relative;
    z-index: 999;
  }

  .navbar-toggler span {
    display: inline-block;
    width: 70%;
    height: 1.5px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.69);
    transition: all 0.4s ease;

    left: 50%;
    top: 50%;

    transform: translateX(-50%) translateY(-50%);
  }

  .navbar-toggler span:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1.5px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.69);
    transition: all 0.4s ease;

    left: 0;
    top: -6px;
  }

  .navbar-toggler span:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1.5px;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.69);
    transition: all 0.4s ease;

    left: 0;
    top: 6px;

    transform: rotate(360deg);
  }

  .navbar-toggler.active span {
    background-color: transparent;
  }

  .navbar-toggler.active span:before {
    top: 0;
    transform: rotate(45deg);
  }

  .navbar-toggler.active span:after {
    top: 0;
    transform: rotate(315deg);
  }
}

.fade-left {
  position: relative;

  left: 0;

  animation: ease 5s fade-left;
}
.fade-right {
  position: relative;

  right: 0;

  animation: ease 5s fade-right;
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-left {
  0% {
    left: -200px;
    opacity: 0;
  }

  80% {
    left: -200px;
    opacity: 0;
  }

  90% {
    opacity: 1;
  }

  100% {
    left: 0;
  }
}

@keyframes fade-right {
  0% {
    right: -200px;
    opacity: 0;
  }

  80% {
    right: -200px;
    opacity: 0;
  }

  90% {
    opacity: 1;
  }

  100% {
    right: 0;
  }
}

.fade-up-1 {
  position: relative;

  top: 0;

  animation: ease 5s fade-up-1;
}

.fade-up-2 {
  position: relative;

  top: 0;

  animation: ease 5s fade-up-2;
}

.fade-up-3 {
  position: relative;

  top: 0;

  animation: ease 5s fade-up-3;
}

@keyframes fade-up-1 {
  0% {
    top: 200px;
    opacity: 0;
  }

  80% {
    top: 200px;
    opacity: 0;
  }

  90% {
    opacity: 1;
  }

  100% {
    top: 0;
  }
}

@keyframes fade-up-2 {
  0% {
    top: 200px;
    opacity: 0;
  }

  85% {
    top: 200px;
    opacity: 0;
  }

  92.5% {
    opacity: 1;
  }

  100% {
    top: 0;
  }
}

@keyframes fade-up-3 {
  0% {
    top: 200px;
    opacity: 0;
  }

  90% {
    top: 200px;
    opacity: 0;
  }

  95% {
    opacity: 1 !important;
  }

  100% {
    top: 0;
    transform: 0 !important;
  }
}

@media (max-width: 500px) {
}
.logo {
  font-family: "conthrax-sb";
  color: #fff;
  font-size: 20px;
}
p {
  font-size: 14px;
  font-weight: 200;
  color: rgba(195, 194, 194, 1);
}

@media screen and (max-width: 992px) {
  .main {
    padding-top: 120px;
  }
  .row > div {
    align-self: start !important;
  }
  p {
    color: rgba(255, 255, 255, 0.9);
  }
}
</style>

<script>
import { vMaska } from "maska";
export default {
  data() {
    return {
      ReviewlMsgType: null,
      isMobile: window.innerWidth <= 560,
    };
  },
  setup() {},
  methods: {
    openWindow() {
      this.$emit("licenseModal", {});
    },
    onReviewResult(type) {
      console.log(type);
      this.ReviewlMsgType = type;
      document.getElementById("reviewModalMsgOpen").click();
    },
    sendResult(typeStr) {
      this.onReviewResult(typeStr);
    },
    async callrev() {
      const response = await fetch("/api.php", {
        body: JSON.stringify({
          action: "createRequest",
          username: document.getElementById("learn_name").value,
          phone_number: document.getElementById("learn_number").value,
          type: "learn",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      });

      try {
        const data = await response.json();
        this.sendResult(data.type);
      } catch (e) {
        this.sendResult("error");
      }
    },
  },
};
</script>
