<script setup>
import TopHeader from "@/components/client/TopHeader.vue";
import Preloader from "@/components/client/Preloader.vue";
import FooterBlock from "@/components/client/FooterBlock.vue";

import { ref, inject } from "vue";
import { useLoading } from "vue-loading-overlay";
import { h } from "vue";
import { vMaska } from "maska";
import LicenseModal from "@/components/client/LicenseModal.vue";
import CoursesModal from "@/components/client/CoursesModal.vue";

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
  <TopHeader />
  <LicenseModal />
  <CoursesModal />

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
            />
          </div>
          <div class="mb-3">
            <input
              v-maska
              data-maska="8 (###) ###-##-##"
              type="phone"
              class="form-control p-3"
              id="call_number"
              placeholder="Номер телефона"
            />
          </div>
        </div>
        <div class="modal-footer text-center p-5 pt-0 border-0">
          <button
            type="button"
            class="btn btn-light btn-light-2 w-100 mb-3"
            v-on:click="call()"
          >
            Заказать звонок
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

  <article>
    <div class="container">
      <div
        class="row header justify-content-center align-center"
        data-aos="fade-up"
      >
        <h1 class="header-title">Профессиональное обучение</h1>
        <h3 class="pt-5 pb-5 text-white text-center fw-bolder">
          Наша компания сотрудничает с ведущими мировыми аналитиками и
          финансовыми экспертами для автоматизации торговли и создания самых
          совершенных стратегий
        </h3>
      </div>
      <div
        class="card-2 top row text-white description flex justify-content-center align-items-center flex-column row-gap-3"
        data-aos="fade-up"
      >
        <div class="text-center long-text">
          <h5 class="fw-light">
            На финансовом рынке, который меняется достаточно быстро традиционные
            методики устаревают, и подход "один для всех" изжил себя.
          </h5>
          <h5 class="fw-light">
            По этой Причине Международный институт рынка постоянно
            совершенствует свои стратегии и тестирует новые решения для рынка.
            <br />В наших курсах мы используем многолетний опыт работы
          </h5>
        </div>

        <button
          class="down"
          data-bs-toggle="modal"
          data-bs-target="#coursesModal"
          style="z-index: 99"
          v-on:click="openWindow()"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
            />
          </svg>
        </button>
      </div>
      <div class="row text-white pb-5">
        <h1 class="text-center fw-bolder">Наши курсы</h1>
      </div>
      <div class="row carded">
        <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3 card-wrap">
          <div class="card" data-aos="fade-up">
            <div class="image">
              <img src="/robo1.png" alt="" />
            </div>
            <div class="text">
              <h5 class="fw-bolder mb-3 text-white">Начинающий</h5>
              <p class="text-muted">
                Данный курс подходит для тех кто хочет получить сопровождение на
                начальных этапах своей торговли. Получать ежедневную аналитику
                рынка и познакомится с профессиональными инструментами
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3 card-wrap">
          <div class="card" data-aos="fade-up">
            <div class="image">
              <img src="/robo4.png" alt="" />
            </div>
            <div class="text">
              <h5 class="fw-bolder mb-3 text-white">Продвинутый</h5>
              <p class="text-muted">
                Данный курс создан для тех кто хочет создать для себя
                полноценный дополнительный доход на финансовых рынках. На данном
                курсе особое внимание уделяется среднесрочному анализу для
                минимизации времени нахождения в рынке.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3 card-wrap">
          <div class="card" data-aos="fade-up">
            <div class="image">
              <img src="/robo3.png" alt="" />
            </div>
            <div class="text">
              <h5 class="fw-bolder mb-3 text-white">Профессиональный</h5>
              <p class="text-muted">

                Данный курс создан для тех кто хочет полноценно освоить сферу финансовых рынков и сделать ее основным источником дохода. На данном курсе идет изучение всех видов анализа используются все временные  диапазоны от краткосрочной до долгосрочной торговли, изучаются все ведущие инструменты рынка идет частичная оптимизация торговых процессов и полное погружение в мир торговли.

              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3 card-wrap">
          <div class="card" data-aos="fade-up">
            <div class="image">
              <img src="/robo2.png" alt="" />
            </div>
            <div class="text">
              <h5 class="fw-bolder mb-3 text-white">РОБОКУРС</h5>
              <p class="text-muted">
                Данный курс нацелен на полную автоматизацию торговых процессов. В курс входят роботы по техническому, фундаментальному и индикаторному анализу, а так же полное изучение алгоритмов их работы, автоматизация финансового планирования. В данный курс также входит материал из "Профессионального" курса так как трейдер должен понимать принцип действий роботов и уметь самостоятельно анализировать рынок
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="card-2 text-center" data-aos="fade-up">
          <h4 class="fw-light">
            Наполненность каждого курса составляется индивидуально под каждого
            ученика в зависимости от его знаний, целей и задач. Те нюансы
            которые для многих незначительны играют важную роль на рынке начиная
            от торгового времени в которое вы можете выходить на рынок, в плоть
            до того как часто вам надо отходить от компьютера. Все эти и другие
            нюансы разбираются на нашем бесплатном обучении где вы сможете
            получить полную консультацию по каждому курсу и познакомится с
            финансовыми рынками.
          </h4>
          <button
            type="button"
            class="btn-light btn"
            data-bs-toggle="modal"
            data-bs-target="#sendApplication"
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </div>
    <FooterBlock />
  </article>
</template>

<style scoped>
.down svg {
  height: 20px;
  margin-top: 5px;

  fill: white;

  animation: bounce 3.5s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  90% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-15px);
  }
}
.modal-content {
  background-color: rgb(12, 16, 34);
  border: 1px solid rgb(35, 61, 163);
  color: #fff;
}
.modal-header {
  background-image: linear-gradient(
    160deg,
    rgb(12, 16, 34),
    rgb(24, 33, 70) 80.25%
  );
  border-bottom: 1px solid rgb(35, 61, 163);
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close {
  background: none;
  border: none;

  width: 35px;
  height: 35px;
}

.modal-close svg {
  width: 100%;
  height: 100%;
  fill: #ffffff;
}

.card-2 {
  position: relative;
}

.down {
  border: none !important;
  background-color: transparent !important;
  outline: none !important;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.long-text:before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(transparent 50.42%, rgb(12, 16, 34) 82%);
  border-radius: 16px;
}

.modal-body {
  padding: 40px 30px;
  color: rgba(255, 255, 255, 0.8);
}

.header {
  flex-direction: column;
  align-items: center;
}

.header-title {
  text-align: center;
  font-weight: 700;
  color: white;
  width: fit-content;
  max-width: 100% !important;
  margin: 0 auto;
  margin-top: 60px;
  margin-bottom: -20px;
  font-size: 36px;

  border-bottom: 1px solid white;
}

.header > h3 {
  margin-top: 40px;
}

@medium screen and (max-width: 400px) {
  .header-title {
    width: 80% !important;
    max-width: 80% !important;
  }
}

.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
}

.btn-light {
  background-image: linear-gradient(
    162deg,
    white 23.95%,
    rgba(52, 91, 219, 0.3)
  );
  border: none !important;
  margin-top: 50px;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 600;
}
.btn-light-2 {
  background-image: linear-gradient(
    162deg,
    rgb(233, 233, 233) 23.95%,
    rgba(52, 91, 219, 0.3)
  );
}
.carded {
  background-image: url("/bg_courses.png");
  background-position: bottom center;
  background-size: cover;
  display: grid!important;
  grid-template-columns: repeat(4, 1fr);
}

.card-wrap {
  width: 100%!important;
  height: 100%!important;
}

article {
  position: relative;
  z-index: 98;
  padding-top: 100px;
  max-width: 100vw !important;
  /* background-image: linear-gradient(-80deg, #1E2B5C, #0C1022); */
  background-color: rgba(12, 16, 34, 1);
  background-image: linear-gradient(
    35.53deg,
    #1e2b5c -16.19%,
    rgba(30, 43, 92, 0) 43.06%
  );
}
.header > * {
  max-width: 60%;
}
.description {
  padding-bottom: 90px;
}

.card {
  height: 100%;
  overflow: hidden;
  position: relative;

  background-color: rgb(15, 21, 46) !important;
  padding: 25px;
  border: 1px solid rgba(35, 61, 163, 0.7);
  border-radius: 16px;
  margin-bottom: 10px;
}

.card:before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(transparent 70.42%, rgba(12, 16, 34, 0.99) 92%);

  z-index: 0;
}

.card-2 {
  background-color: rgb(15, 21, 46) !important;
  padding: 5% 20% 5% 20%;
  color: #fff;
  border: 1px solid rgba(35, 61, 163, 0.7);
  border-radius: 16px;
  margin-bottom: 120px;
  margin-top: 50px;
}

.card-2.top {
  width: 390px;
  padding: 30px;
  margin: 50px auto;
  margin-top: 30px;
}

.card > .image > img {
  width: 80%;
  margin-top: -25px;
  margin-bottom: -20px;
}
.card > .image {
  text-align: end;
  position: relative;
}
.card > .text {
  position: relative;
  z-index: 2;
}
.card > .image::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 0;
  width: 100%;
  height: 145%;
  background-image: linear-gradient(transparent 18.07%, rgb(15, 21, 46) 91.6%);
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

@media screen and (min-width: 1400px) {
  .card-2.top {
    width: 75%;
    padding: 60px 0;
  }

  .card-2.top h5 {
    font-size: 20px !important;
  }

  .carded {
    grid-template-columns: repeat();
  }
}

@media screen and (max-width: 768px) {
  .header > h3 {
    text-align: start !important;
    max-width: 100% !important;
    margin-top: 20px;
  }

  .header-title {
    font-size: 28px;
  }

  .row > .card-2 {
    padding: 40px 20px;
  }
  .carded {
    background-image: none !important;
  }

  .header h3 {
    text-align: center !important;
    font-size: 18px;
  }

  .card-2.description {
    margin-top: 0;

    padding-left: 17px;
    padding-right: 17px;
  }

  .card-2 {
    margin-bottom: 30px;
    text-align: center;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  setup() {},
  methods: {
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
        this.ReviewlMsgType = data.type.type;
        document.getElementById("reviewModalMsgOpen").click();
      } catch (e) {
        this.ReviewlMsgType = "error";
        document.getElementById("reviewModalMsgOpen").click();
      }
    },
    openWindow() {
      this.$emit("licenseModal", {});
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
  },
};
</script>
