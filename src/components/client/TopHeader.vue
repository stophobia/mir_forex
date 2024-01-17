<script setup>
import { vMaska } from "maska";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <div
    class="modal fade"
    id="openCountModal"
    tabindex="-1"
    aria-labelledby="openCountModal"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button
          type="button"
          class="btn-close modal-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
        <div class="modal-body text-center p-5 pb-0">
          <h1 class="mb-3">Открыть счет</h1>
          <p class="fw-lighter">
            Оставьте ваши контакты и мы свяжемся с вами в ближайшее время
          </p>
          <div class="mb-4">
            <input
              type="text"
              class="form-control p-3"
              id="name"
              placeholder="Ваше имя и фамилия"
              ref="inputName"
            />
          </div>
          <div class="mb-3">
            <input
              type="phone"
              :value="number"
              class="form-control p-3"
              id="number"
              placeholder="Номер телефона"
              v-maska
              data-maska="8 (###) ###-##-##"
              ref="inputPhone"
            />
          </div>
          <p class="fw-boler text-start text-danger mb-3 pb-0">
            Вы перейдете на официальный сайт БКС
          </p>
        </div>
        <div class="modal-footer text-center p-5 pt-0">
          <button
            type="button"
            class="btn btn-primary w-100 mb-3 p-3 dialog-redirect"
            v-on:click="call"
          >
            Открыть счет
          </button>
          <p class="fw-lighter">
            Нажимая на кнопку «Записаться», я даю согласие на обработку
            персональных данных и соглашаюсь с
            <a href="/privacy_policy">Политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" ref="navbar">
    <div class="container-fluid">
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
      <button
        v-bind:class="[
          'navbar-toggler',
          isFixed ? ' fixed' : '',
          togglerActive ? ' active' : '',
        ]"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref="burger"
        @click="navbarTogglered"
      >
        <span></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarTogglerDemo03"
        ref="navbar"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
          <li class="nav-item p-2">
            <a class="nav-link active fw-bolder" href="/#methods">
              <span>Наш метод</span>
              <span class="dynamic-hover-link__underline"></span>
            </a>
          </li>
          <li class="nav-item p-2">
            <router-link to="/about" class="nav-link active fw-bolder">
              <span>Курсы</span>
              <span class="dynamic-hover-link__underline"></span>
            </router-link>
          </li>
          <li class="nav-item p-2">
            <router-link to="/about" class="nav-link active fw-bolder">
              <span class="text-mob">Экономический календарь</span>
              <span class="dynamic-hover-link__underline"></span>
            </router-link>
          </li>
          <li class="nav-item p-2">
            <a class="nav-link active fw-bolder" href="/#review"
              ><span>Отзывы</span>
              <span class="dynamic-hover-link__underline"></span
            ></a>
          </li>
          <li class="nav-item p-2">
            <router-link to="/about" class="nav-link active fw-bolder">
              <span>О компании</span>
              <span class="dynamic-hover-link__underline"></span>
            </router-link>
          </li>
        </ul>
        <span
          v-bind:class="[
            'navbar-text me-5',
            isMobile ? 'fade-left-mobile' : 'fade-right',
          ]"
        >
          <a
            href="mailto:mir_bcs@mail.ru"
            class="text-white text-decoration-none fw-bolder me-3"
            ><font-awesome-icon
              :icon="['fas', 'envelope']"
              style="color: #ffffff"
              size="xl"
          /></a>
          <a
            href="https://app.leadteh.ru/w/y4VC"
            class="text-white text-decoration-none fw-bolder me-3"
          >
            <font-awesome-icon :icon="['fab', 'telegram']" size="xl" />
          </a>
          <a
            href="tel:+79878197778"
            class="text-white text-decoration-none fw-bolder me-3"
          >
            <font-awesome-icon
              :icon="['fas', 'phone']"
              class="me-2"
              size="xl"
            />+7 (987) 819-77-78
          </a>
        </span>
        <span
          v-bind:class="[
            'navbar-text ms-2',
            isMobile ? 'fade-right-mobile' : 'fade-right',
          ]"
        >
          <button
            type="button"
            class="btn-light btn fw-bolder"
            data-bs-toggle="modal"
            data-bs-target="#sendApplication"
            style="position: relative; z-index: 2"
            data-fade-up="true"
          >
            Оставить заявку
          </button>
        </span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
* {
  transition: 0.3s !important;
}

.modal-footer {
  border: none !important;
}

nav {
  position: fixed;
  z-index: 99;
  width: 100vw;
  /* background-color: rgb(12, 16, 34) !important; */
  background-color: transparent !important;
}

nav > .container-fluid {
  padding-left: 5% !important;
  padding-right: 5% !important;
}

nav .logo {
  width: 250px;
  padding: 15px;
}

nav .btn {
  padding: 10px 30px;
}

.navbar-nav {
  animation: ease 5s fade;
}

.openCount {
  background-image: linear-gradient(233deg, blue, rgb(108, 2, 163)) !important;
  color: #fff !important;
  text-decoration: none !important;
  padding: 10px 20px;
  border-radius: 25px;
  transition: 0.3s;
  z-index: 1000 !important;
}

.openCount:hover {
  transform: scale(1.03);
}

#openCountModal .modal-header,
#openCountModal .modal-body,
#openCountModal .modal-footer {
  border: none !important;
}

.modal-content {
  position: relative;
}

.modal-close {
  position: absolute;
  width: 35px;
  height: 35px;

  top: 10px;
  right: 10px;
  z-index: 333;

  background: none;
  border: none;
}

.modal-close svg {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 1400px) {
}

@media screen and (max-width: 992px) {
  .navbar-nav {
    animation: none;
  }

  .nav-item:nth-child(3) .nav-link span:first-child {
    display: block;
    max-width: 100px;
    text-wrap: wrap;
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

  .navbar-brand {
    width: 100%;
  }

  .navbar-brand img {
    width: 300px;
  }

  .navbar-collapse {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    border-radius: 0 0 50% 50%;
    padding-left: 15%;
    background-image: linear-gradient(135deg, #1e2b5c, #0c1022 56%) !important;
  }

  .navbar-collapse.show {
    border-radius: 0 0 35px 35px !important;
  }

  .navbar-collapse > ul {
    margin-top: 150px;
  }

  .navbar-collapse.collapsing {
    height: 0 !important;
  }

  .navbar-collapse li {
    padding-left: 0 !important;
  }

  .navbar-text {
    display: inline-block;
    margin-bottom: 20px !important;
    margin-left: 0 !important;
  }

  .navbar-toggler,
  .navbar-brand {
    position: relative;
    z-index: 999;
  }

  .navbar-toggler {
    height: 30px;
    width: 40px;

    backdrop-filter: blur(5px);

    top: 0;

    transition: all 0.3s ease !important;
  }

  .navbar-toggler.fixed {
    position: fixed;
    top: 20px;
  }

  .navbar-toggler:focus {
    box-shadow: none;
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

  .navbar-brand.fixed {
    position: fixed;

    top: 10px;
    left: auto;
  }
}

.fade-left {
  position: relative;

  left: 0;

  animation: ease 5s fade-left;
}

.fade-left-mobile {
  position: relative;

  left: 0;

  animation: ease 0.3s fade-left;
}

.fade-right {
  position: relative;

  right: 0;

  animation: ease 5s fade-right;
}

.fade-right-mobile {
  position: relative;

  right: 0;

  animation: ease 0.3s fade-right;
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

.nav-link {
  position: relative;
}

.nav-link:hover .dynamic-hover-link__underline {
  transform: scaleX(1);
}

.nav-link span:first-child {
  text-wrap: nowrap;
}

.dynamic-hover-link__underline {
  position: absolute;
  top: calc(70% + 8px);
  left: -8px;
  width: calc(100% + 16px);
  height: 1px;
  background-color: currentColor;
  pointer-events: none;

  transition: transform 1s cubic-bezier(0.3, 0.1, 0.3, 1) !important;
  transform: scaleX(0);
}

.navbar-toggler.active {
  position: relative;
}

@media (max-width: 500px) {
  .nav-link:hover .dynamic-hover-link__underline {
    transform: scaleX(0);
  }
}
</style>

<script>
export default {
  data() {
    return {
      isFixed: false,
      togglerActive: false,
      isMobile: 600 >= window.innerWidth,
    };
  },
  methods: {
    sendResult(typeStr) {
      this.$emit("onReviewResult", {
        type: typeStr,
      });

      const url = "https://lk.bcs-forex.ru/NewAccount/Bcsfx?partner=18875";

      window.open(url);
    },
    async call() {
      const response = await fetch("/api.php", {
        body: JSON.stringify({
          action: "createRequest",
          username: document.getElementById("name").value,
          phone_number: document.getElementById("number").value,
          type: "score",
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
    formValidate() {
      const modal = document.querySelector("#openCountModal");
      const inputName = modal.querySelector("input[type='text']");
      const inputPhone = modal.querySelector("input[type='phone']");
      const btn = modal.querySelector("button.btn");

      if (inputName.value.length > 3 && inputPhone.value.length === 17) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    },
    scrollBurger() {
      const button = this.$refs.burger;
      const navbar = this.$refs.navbar;

      if (button) {
        const buttonRect = button.getBoundingClientRect();
        const scrollPosition = window.scrollY;

        const buttonHeight = buttonRect.height;

        if (scrollPosition >= 100 && !navbar.className.includes("show")) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
      }
    },
    redirect() {
      const url = "https://lk.bcs-forex.ru/NewAccount/Bcsfx?partner=18875";

      window.open(url);
    },
    scrollNavbarMobile() {
      const navbarCollapse = document.querySelector(".navbar-collapse.show");
      const navbar = document.querySelector(".navbar.fixed");
      const burger = this.$refs.burger;

      navbar.classList.remove("fixed");
      burger.classList.remove("active");
      burger.classList.add("fixed");

      navbarCollapse.classList.remove("show");
      navbarCollapse.classList.remove("collapse");
      navbarCollapse.classList.add("collapsing");

      setTimeout(() => {
        navbarCollapse.classList.remove("collapsing");
        navbarCollapse.classList.add("collapse");
        this.togglerActive = false;
      }, 400);
    },

    navbarTogglered() {
      this.togglerActive = !this.togglerActive;

      const burger = this.$refs.burger;

      this.$refs.navbar.classList.toggle("fixed");

      if (burger.className.includes("fixed")) {
        burger.classList.remove("fixed");
        burger.classList.add("fixed-new");
      } else if (burger.className.includes("fixed-new")) {
        burger.classList.remove("fixed-new");
        burger.classList.add("fixed");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollBurger);
    window.addEventListener("scroll", this.scrollNavbarMobile);

    this.formValidate();
    this.$refs.inputName.addEventListener("input", this.formValidate);
    this.$refs.inputPhone.addEventListener("input", this.formValidate);

    [...document.querySelectorAll(".nav-link")].forEach((link) => {
      link.addEventListener("click", () => {
        this.scrollNavbarMobile();
      });
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollBurger);
  },
};
</script>
