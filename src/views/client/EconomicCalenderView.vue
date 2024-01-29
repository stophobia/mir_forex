<script setup>
import TopHeader from "@/components/client/TopHeader.vue";
import FooterBlock from "@/components/client/FooterBlock.vue";
import ReviewModal from "@/components/client/ReviewModal.vue";
import SupportModal from "@/components/client/SupportModal.vue";
import ReviewModalCreate from "@/components/client/ReviewModalCreate.vue";
import ReviewModalMsg from "@/components/client/ReviewModalMsg.vue";
import GenericModalMsg from "@/components/client/GenericModalMsg.vue";
import Preloader from "@/components/client/Preloader.vue";
import LicenseModal from "@/components/client/LicenseModal.vue";

import {vMaska} from "maska";
import {ref} from "vue";
import {h} from "vue";
import {useLoading} from "vue-loading-overlay";
import Filter from "@/components/client/EconomicCalendar/Filter/Filter.vue";
import Table from "@/components/client/EconomicCalendar/Table/Table.vue";

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

setTimeout(() => {
  loader.hide();
}, 4000);
</script>

<template>
  <div
      class="modal fade"
      id="sendApplication"
      tabindex="-1"
      aria-labelledby="sendApplication"
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
          <h1 class="mb-3">Оставить заявку</h1>
          <div class="mb-4">
            <input
                type="text"
                class="form-control p-3"
                id="call_name"
                placeholder="Ваше имя и фамилия"
                required
                ref="inputName"
            />
          </div>
          <div class="mb-3">
            <input
                type="phone"
                :value="number"
                v-maska
                data-maska="8 (###) ###-##-##"
                class="form-control p-3"
                id="call_number"
                placeholder="Номер телефона"
                required
                ref="inputPhone"
            />
          </div>
        </div>
        <div
            class="modal-footer text-center p-5 pt-0 border-0 flex flex-column align-center"
        >
          <button
              type="button"
              class="btn btn-primary p-3 m-0 mt-4 w-100 mb-3"
              v-on:click="call()"
              :disabled="isButtonDisabled"
          >
            Заказать звонок
          </button>
          <p v-if="isButtonDisabled" style="color: red">
            Попробуйте через {{ timeLeft }} часов.
          </p>
          <p class="fw-lighter">
            Нажимая на кнопку «Записаться», я даю согласие на обработку
            персональных данных и соглашаюсь с
            <a href="/privacy_policy">Политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <GenericModalMsg :type="GenericMsgType"/>

  <ReviewModalMsg :type="ReviewlMsgType"/>
  <ReviewModalCreate @onReviewResult="onReviewResult"/>
  <ReviewModal
      :name="reviewData.name"
      :date="reviewData.date"
      :text="reviewData.text"
  />
  <SupportModal :title="supportData.title" :text="supportData.text"/>
  <LicenseModal/>

  <Preloader/>
  <TopHeader :darkTheme="darkTheme"/>
  <main class="main" ref="main">
    <section class="content">
      <div class="content__title">
        <h1 class="">Экономический календарь</h1>
        <div class="icon" @click="switchTheme">
          <div class="icon-switcher" data-js-icon-switcher="data-js-icon-switcher">
            <input class="control" type="checkbox" :checked="this.darkTheme">
            <div class="peg"></div>
            <div class="bg"></div>
          </div>
        </div>
      </div>
      <Filter :countries="filterData.countries" :categories="filterData.categories" :volatility="filterData.volatility"
              :startDay="filterData.startDay" :endDay="filterData.endDay" :timezone="filterData.timezone"
              :updateFilterCountries="updateFilterCountries" @updateFilterDate="updateFilterDate"
              @updateFilterTimezone="updateFilterTimezone" :updateFilterCategories="updateFilterCategories"
              :updateFilterVolatility="updateFilterVolatility"/>
      <Table :events="this.events"/>
    </section>
    <section class="info">
      <h1 class="content__title">
        Экономические календарь
      </h1>
      <br/>
      <p class="info__top">
        Экономический календарь - это инструмент, предоставляющий информацию о предстоящих экономических событиях и
        публикациях, которые могут влиять на финансовые рынки. Он помогает трейдерам, инвесторам и аналитикам
        анализировать рыночные движения, управлять рисками, повышать эффективность принятия решений.
      </p>
      <br/>
      <p class="info__hidden">
        Международный институт рынка публикует экономический календарь
        исключительно для информационных целей. Демонстрация на сайте
        экономического календаря не является деятельностью по консультированию.
        Информация, полученная из экономического календаря, не может быть
        использована для принятия торговых решений. Упоминаемые в экономическом
        календаре финансовые инструменты и активы могут не входить в список
        инструментов, доступных для торговли. Международный институт рынка не
        дает гарантий и заверений и не принимает какой-либо ответственности в
        отношении финансовых результатов, которые могут быть получены при
        использовании экономического календаря. Принимая решение о проведении
        операций на финансовом рынке, необходимо учитывать, что инвестирование в
        финансовые инструменты несёт в себе риск неполучения ожидаемого дохода,
        потери части или всех инвестированных средств, расходы и возможные
        дополнительные потери. Информация предоставлена:
        <a href="{{linkPage}}">{{ linkPage }}</a>
      </p>
    </section>
  </main>
  <FooterBlock/>
</template>

<style scoped>
h1 {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;

  background: 0;
}

a {
  color: inherit;
  background: 0;
}

p {
  padding: 0;
  margin: 0;
  background: 0;

  font-weight: 500;
  color: #ffffffac;
}

button {
  outline: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.content__title {
  display: flex;
  align-items: flex-end;
  gap: 20px;
}

.table__main__list__item__description p {
  margin-top: 10px;
}

.main {
  padding-top: 20vh;
  padding-left: 5% !important;
  padding-right: 5% !important;

  color: black;
}

.main.dark {color: white;
  background-image: linear-gradient(
      rgba(12, 16, 32, 1) 16%,
      rgba(27, 39, 82, 1)
  );
}

.info {
  padding: 50px 0;
}

.info .info__hidden {
  font-size: 12px;
  color: rgba(105, 104, 104, 0.88);
}

@media (min-width: 1400px) {
  .text-left.blocktype2 {
    transform: translateX(-90px) translateY(10px);
  }
}

@media (max-width: 500px) {
  .text-muted {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 14px;
  }
}

.btn-light {
  background-image: linear-gradient(
      162deg,
      white 23.95%,
      rgba(52, 91, 219, 0.3)
  );
  margin-bottom: 50px;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 600;
}

.btn-dark {
  background-image: linear-gradient(
      283.54deg,
      #878787 -39.35%,
      rgba(86, 86, 86, 0) 85.21%
  );
  background-color: transparent;
  margin-top: 50px;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 600;
}

#social {
  margin-left: 30px;
}

#social a {
  text-align: center !important;
  padding: 15px;
  transition: 0.3s;
}

#social a:hover {
  cursor: pointer !important;
  transform: scale(0.9);
}

.intro-carousel {
  position: relative;

  z-index: 1111;
}

. {
  opacity: 0;

  transition: all 1.5s ease !important;
}

..active {
  display: block;

  opacity: 1;
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
  fill: #293d8a;
}

.intro-wrap {
  position: relative;
}

.btn-carousel {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;

  top: 50%;
  left: 0;

  transform: translateY(-50%);

  z-index: 100;
}

@media screen and (max-width: 768px) {
  .main {
    text-align: center !important;
    background-image: url("/bg_mini.jpeg");
    background-position: center;
  }

  .main:after {
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: linear-gradient(transparent 90.42%, rgba(12, 16, 34, 0.9) 99%);

    transform: rotate(180deg);
  }
}

.charts {
  position: fixed;
  width: 100%;
  height: 120vh;
  margin-top: -20vh;
  left: 0;
  top: 0;
  z-index: 2 !important;
  background-color: var(--main-color);
}

article {
  position: relative;
  z-index: 98;
  max-width: 100vw !important;
  /* background-image: linear-gradient(-80deg, rgb(22,43,89), rgb(10,16,34)); */
  background-image: linear-gradient(-80deg, #1e2b5c, #0c1022 56%);
}

.text-left {
  font-size: 22px;
}

.icon-switcher {
  width: 50px;
  height: 24px;
  position: relative;
  cursor: pointer;
  user-select: none;
}

.icon-switcher > .control {
  display: none;
}

.icon-switcher > .control + .peg {
  display: inline-block;
  position: absolute;
  z-index: 4;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #999;
  transition: 0.2s;
  background-color: #fff;
}

.icon-switcher > .control ~ .bg {
  border-radius: 12px;
  width: 100%;
  height: 100%;
  border: 1px solid #999;
  background-color: #fff;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.icon-switcher > .control ~ .bg::before {
  content: '';
  position: absolute;
  left: calc(100% - 20px);
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #262626;
  transition: 0.2s ease-out;
}

.icon-switcher > .control ~ .bg::after {
  content: '';
  position: absolute;
  left: calc(100% - 14px);
  top: -1px;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  transition: 0.2s ease-out;
}

.icon-switcher > .control:checked + .peg {
  left: calc(100% - 24px);
}

.icon-switcher > .control:checked ~ .bg {
  background-color: #262626;
}

.icon-switcher > .control:checked ~ .bg::before {
  left: 6px;
  width: 14px;
  height: 14px;
  background-color: #ffd712;
  filter: blur(4px);
}

.icon-switcher > .control:checked ~ .bg::after {
  background-color: #ffd712;
  width: 12px;
  height: 12px;
  top: initial;
  left: 8px;
}

@media (max-width: 560px) {
  .text-left {
    font-size: 18px;
  }

  .btn-carousel {
    padding: 10px;
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
    opacity: 1;
  }

  100% {
    top: 0;
  }
}
</style>

<script>
import {Carousel, Navigation, Slide} from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import timezones from "@/components/client/EconomicCalendar/Filter/timezones.mjs";
import moment from "moment-timezone";
import 'moment/locale/ru';
import ru from "moment/dist/locale/ru"
import categories from "@/components/client/EconomicCalendar/Filter/categories";
import volatility from "@/components/client/EconomicCalendar/Filter/volatility";
import {countries} from "@/components/client/EconomicCalendar/Filter/countries";
import {ref} from "vue";

moment.locale("ru", ru);

export default {
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      reviewData: {
        name: "",
        date: "",
        text: "",
      },
      supportData: {
        title: "",
        text: "",
      },
      ReviewlMsgType: null,
      GenericMsgType: null,
      isMobile: window.innerWidth <= 560,
      clickCount: 0,
      isButtonDisabled: false,
      timeLeft: 0,
      dropdown: false,
      contentHeight: 0,
      linkPage: location.href,
      filterData: {
        countries: countries.filter(item => item.top),
        volatility: volatility,
        categories: categories,
        startDay: "",
        endDay: "",
        timezone: this.getUserTimeZone()
      },
      events: {},
      darkTheme: false,
      main: ref('')
    };
  },
  watch: {
    filterData: {
      handler(newFilterData, oldFilterData) {
        console.log("updateFilterData", oldFilterData, newFilterData);
        this.getEvents();
      },
      deep: true,
    },
  },
  setup() {
  },
  mounted() {
    document
        .querySelector("#call_number")
        .addEventListener("input", (e) => console.log(e));

    this.$nextTick(() => {
      const hash = window.location.hash;

      if (hash === "#methods" || hash === "#review") {
        const element = document.querySelector(`a[href='/${hash}']`);

        setTimeout(() => element.click(), 4000);
      }
    });

    window.addEventListener("hashchange", () => {
      // Убрать хеш
      window.location.hash = "";
    });

    this.formValidate();
    this.$refs.inputName.addEventListener("input", this.formValidate);
    this.$refs.inputPhone.addEventListener("input", this.formValidate);

    this.switchTheme();

    const lastClickTime = localStorage.getItem("lastClickTime");
    if (lastClickTime) {
      const currentTime = new Date().getTime();
      const hoursPassed = Math.floor(
          (currentTime - Number(lastClickTime)) / 3600000,
      );

      if (hoursPassed < 12) {
        this.disableButton(12 - hoursPassed);
      }
    }
  },
  created() {
    this.getEvents();
  },
  methods: {
    getDynamicDate(dayDifference) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + dayDifference);
      const formattedDate = this.formatDate(currentDate);
      return `${formattedDate}-${formattedDate}`;
    },
    formatDate(date) {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${day}.${month}.${year}`;
    },
    getEvents() {
      /*console.log("this.filterData", this.filterData);
      const requestData = {
        countries: this.filterData.countries.map(country => country.code),
        volatility: this.filterData.volatility.filter(item => item.active).map(item => item.value),
        categories: this.filterData.categories.filter(item => item.active).map(category => category.value),
        startDay: this.filterData.startDay === "" ? this.getDynamicDate(0).split("-")[0] : this.filterData.startDay,
        endDay: this.filterData.endDay === "" ? this.getDynamicDate(0).split("-")[0] : this.filterData.endDay,
        timezone: this.filterData.timezone,
      }
      console.log("requestData", requestData)
      const queryString = Object.entries(requestData)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');
      fetch("http://mir-forex-backend/index.php?action=getEconomicEvents&" + queryString)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Попытка разбора ответа как JSON
          })
          .then(data => {
            if (data) {
              console.log("response", data);
              this.events = data.data;
            } else {
              console.error('Empty response or invalid JSON');
            }
          })
          .catch(error => {
            console.error('Fetch error:', error);
          });
      console.log("queryString", queryString);*/
    },
    close() {
      const btnClose = this.$refs.closeModal;
      const modal = this.$refs.modal;

      modal.classList.remove("show");
      modal.style.display = "none";
      modal.removeAttribute("aria-modal");
      modal.setAttribute("aria-hidden", true);
      [...document.querySelectorAll(".modal-backdrop.show")].forEach(
          (item) => (item.style.display = "none"),
      );

      document.body.style.overflow = "auto";
      document.body.style.padding = "0";
      document.body.classList.remove("modal-open");
    },

    scrollToMethods(element) {
      const targetElement = document.getElementById(element);
      console.log(targetElement);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    async call() {
      const response = await fetch("/api.php", {
        body: JSON.stringify({
          action: "createRequest",
          username: document.getElementById("call_name").value,
          phone_number: document.getElementById("call_number").value,
          type: "call",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      });

      try {
        const data = await response.json();
        this.ReviewlMsgType = data.type;
        console.log(this.ReviewlMsgType);
        document.getElementById("reviewModalMsgOpen").click();

        this.clickCount++;

        if (this.clickCount >= 3) {
          this.disableButton(12); // Блокируем кнопку на 12 часов
        }

        localStorage.setItem("lastClickTime", new Date().getTime());
      } catch (e) {
        console.log(e);
        this.ReviewlMsgType = "error";
        document.getElementById("reviewModalMsgOpen").click();
      }
    },
    disableButton(hours) {
      this.isButtonDisabled = true;
      this.timeLeft = hours;

      // Запустить таймер, чтобы разблокировать кнопку через указанное количество часов
      setTimeout(() => {
        this.isButtonDisabled = false;
        this.clickCount = 0;
        localStorage.removeItem("lastClickTime");
      }, hours * 3600000); // 3600000 миллисекунд в часе
    },
    openWindow() {
      this.$emit("licenseModal", {});
    },
    onReviewWindow(data) {
      this.reviewData.name = data.name;
      this.reviewData.date = data.date;
      this.reviewData.text = data.text;
    },
    onReviewResult(type) {
      this.ReviewlMsgType = type.type;
      document.getElementById("reviewModalMsgOpen").click();
    },
    onGenericResult(type) {
      this.GenericMsgType = type.type;
      document.getElementById("genericModalMsgOpen").click();
    },
    onSupportResult(data) {
      this.supportData.title = data.title;
      this.supportData.text = data.text;
      document.getElementById("rsupportModalOpen").click();
    },
    formValidate() {
      const modal = document.querySelector("#sendApplication");
      const inputName = modal.querySelector("input[type='text']");
      const inputPhone = modal.querySelector("input[type='phone']");
      const btn = modal.querySelector("button.btn");

      if (inputName.value.length > 3 && inputPhone.value.length === 17) {
        btn.disabled = false;
      } else {
        btn.disabled = true;
      }
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
      this.calculateContentHeight();
    },
    calculateContentHeight() {
      this.$nextTick(() => {
        const content = document.querySelector(".dropdown-content");

        this.contentHeight = this.dropdown ? content.scrollHeight : 0;
      });
    },
    updateFilterCountries(newCountries) {
      this.filterData.countries = newCountries;
    },
    updateFilterDate(newStartDay, newEndDay) {
      console.log("newStartDay", newStartDay)
      console.log("newEndDay", newEndDay)
      this.filterData.startDay = newStartDay;
      this.filterData.endDay = newEndDay;
    },
    updateFilterTimezone(newTimezone) {
      console.log("update timezone", newTimezone)
      this.filterData.timezone = newTimezone;
    },
    updateFilterCategories(newCategories) {
      console.log("updateFilterCategories", newCategories)
      this.filterData.categories = newCategories;
    },
    updateFilterVolatility(newVolatility) {
      console.log("updateFilterVolatility", newVolatility)
      this.filterData.volatility = newVolatility;
    },
    pad(num, size) {
      let s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    },
    getUserTimeZone() {
      const now = new Date();
      const timeZoneOffsetHours = -now.getTimezoneOffset() / 60 * 100;
      const timeZone = moment.tz.guess().split("/")[1];

      const userTimeZone = timezones.find(zone => {
        return zone.value === `+${this.pad(timeZoneOffsetHours, 4)}` && zone.en.includes(timeZone)
      });
      const defaultTimeZone = timezones.find(zone => zone.title.includes("Москва"));

      return userTimeZone ? userTimeZone.title : defaultTimeZone.title;
    },
    switchTheme() {
      this.darkTheme = !this.darkTheme;
      console.log("this.darkTheme", this.darkTheme);
      if (this.darkTheme) this.$refs.main.classList.add("dark");
      else this.$refs.main.classList.remove("dark");
    }
  },
};
</script>
