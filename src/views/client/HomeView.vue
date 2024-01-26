<script setup>
import TopHeader from "@/components/client/TopHeader.vue";
import TradingView from "@/components/client/TradingViewBack.vue";
// import TradingViewWidget from '@/components/client/TradingViewWidget.vue';
// import BlockType1 from '@/components/client/BlockType1.vue';
import BlockType2 from "@/components/client/BlockType2.vue";
// import BlockType3 from '@/components/client/BlockType3.vue';
import BlockType4 from "@/components/client/BlockType4.vue";
import BlockType5 from "@/components/client/BlockType5.vue";
import BlockType6 from "@/components/client/BlockType6.vue";
import BlockType7 from "@/components/client/BlockType7.vue";
import BlockType8 from "@/components/client/BlockType8.vue";
import BlockType9 from "@/components/client/BlockType9.vue";
import BlockType10 from "@/components/client/BlockType10.vue";
import BlockType11 from "@/components/client/BlockType11.vue";
import FooterBlock from "@/components/client/FooterBlock.vue";
import ReviewModal from "@/components/client/ReviewModal.vue";
import SupportModal from "@/components/client/SupportModal.vue";
import ReviewModalCreate from "@/components/client/ReviewModalCreate.vue";
import ReviewModalMsg from "@/components/client/ReviewModalMsg.vue";
import GenericModalMsg from "@/components/client/GenericModalMsg.vue";
import Preloader from "@/components/client/Preloader.vue";
import LicenseModal from "@/components/client/LicenseModal.vue";

import { vMaska } from "maska";
import { ref, inject } from "vue";
import { h } from "vue";
import { createWebHistory } from "vue-router";
import { useLoading } from "vue-loading-overlay";

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

// $(function(){
//     $('a[href*=#]').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         && location.hostname == this.hostname) {
//             var $target = $(this.hash);
//             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
//             if ($target.length) {
//                 var targetOffset = $target.offset().top;
//                 $('html,body').animate({scrollTop: targetOffset}, 500);//скорость прокрутки
//                 return false;
//             }
//         }
//     });
// });
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

  <!--  <div-->
  <!--    class="modal fade"-->
  <!--    id="licenseModal"-->
  <!--    tabindex="-1"-->
  <!--    aria-labelledby="licenseModal"-->
  <!--    aria-hidden="true"-->
  <!--  >-->
  <!--    <div class="modal-dialog modal-dialog-centered">-->
  <!--      <div class="modal-content">-->
  <!--        <div class="modal-header border-bottom-0">-->
  <!--          <h1 class="modal-title fs-5" id="licenseModal">Лицензия</h1>-->
  <!--          <button-->
  <!--            type="button"-->
  <!--            class="btn-close"-->
  <!--            data-bs-dismiss="modal"-->
  <!--            aria-label="Close"-->
  <!--          ></button>-->
  <!--        </div>-->
  <!--        <div class="modal-body">-->
  <!--          <div class="text-center">-->
  <!--            <img src="/lic.pdf" class="w-100 mb-3" />-->
  <!--            <a-->
  <!--              href="https://cbr.ru/finorg/foinfo/?ogrn=1167746614947"-->
  <!--              target="”_blank”"-->
  <!--              class="btn btn-primary mb-3"-->
  <!--              >Проверить на сайте Цетрального Банка</a-->
  <!--            >-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->

  <GenericModalMsg :type="GenericMsgType" />

  <ReviewModalMsg :type="ReviewlMsgType" />
  <ReviewModalCreate @onReviewResult="onReviewResult" />
  <ReviewModal
    :name="reviewData.name"
    :date="reviewData.date"
    :text="reviewData.text"
  />
  <SupportModal :title="supportData.title" :text="supportData.text" />
  <LicenseModal />

  <Preloader />
  <TopHeader />
  <!-- <TradingView class="charts"/> -->
  <div class="main">
    <div class="d-flex align-items-center h-100" style="overflow-y: hidden">
      <div class="w-100 intro-wrap">
        <Carousel
          class="d-flex intro-carousel"
          :autoplay="13000"
          :items-to-show="1"
          :touchDrag="false"
          :mouseDrag="false"
          :transition="0"
          :wrap-around="true"
        >
          <Slide class="text-white">
            <h1 class="mb-5 fw-bolder fade-up-1" data-fade-up="true">
              ОФИЦИАЛЬНЫЕ ПРЕДСТАВИТЕЛИ<br />БКС МИР ИНВЕСТИЦИЙ
            </h1>
            <button
              type="button"
              class="btn-light btn fade-up-2"
              data-bs-toggle="modal"
              data-bs-target="#sendApplication"
              style="position: relative; z-index: 2"
              data-fade-up="true"
            >
              Оставить заявку
            </button>
            <p class="text-muted mb-5 fw-bold fade-up-3" data-fade-up="true">
              Оставьте заявку и получите доступ к бесплатному<br />
              курсу по инвестициям и трейдингу
            </p>
          </Slide>
          <Slide class="text-white">
            <h1
              class="mb-5 fw-bolder fade-up-1 text-uppercase"
              data-fade-up="true"
              v-html="
                !isMobile
                  ? 'Зарабатывайте <br />\n' +
                    'без многолетнего опыта<br />\n' +
                    ' и больших инвестиций'
                  : 'Зарабатывайте <br />\n' +
                    'без многолетнего<br />\n опыта ' +
                    'и больших<br />\n инвестиций'
              "
            ></h1>
            <button
              type="button"
              class="btn-light btn fade-up-2"
              data-bs-toggle="modal"
              data-bs-target="#sendApplication"
              style="position: relative; z-index: 2"
              data-fade-up="true"
            >
              Оставить заявку
            </button>
            <p class="text-muted mb-5 fw-bold fade-up-3" data-fade-up="true">
              Оставьте заявку и получите доступ к бесплатному<br />
              курсу по инвестициям и трейдингу
            </p>
          </Slide>
          <Slide class="text-white">
            <h1
              class="mb-5 fw-bolder fade-up-1 text-uppercase"
              data-fade-up="true"
              v-html="
                isMobile
                  ? 'Работать с <br> БКС МИР ИНВЕСТИЦИЙ <br /> Безопасно'
                  : 'Работать с БКС МИР ИНВЕСТИЦИЙ <br /> Безопасно'
              "
            ></h1>
            <button
              type="button"
              class="btn-light btn fade-up-2"
              data-bs-toggle="modal"
              data-bs-target="#openCountModal"
              style="position: relative; z-index: 2"
              data-fade-up="true"
            >
              Открыть счёт
            </button>
            <p class="text-muted mb-5 fw-bold fade-up-3" data-fade-up="true">
              Учреждён БКС-Банком. БКС-Банк, крупнейший частный банк в России.
              <br />
              Единственный владелец и поставщик котировок
            </p>
          </Slide>
          <Slide class="text-white">
            <h1
              class="mb-5 fw-bolder fade-up-1 text-uppercase"
              data-fade-up="true"
              v-html="
                isMobile
                  ? 'Пройдите обучение <br> и научитесь <br />прогнозировать движение цен'
                  : 'Пройдите обучение и научитесь <br />прогнозировать движение цен'
              "
            ></h1>
            <button
              type="button"
              class="btn-light btn fade-up-2"
              data-bs-toggle="modal"
              data-bs-target="#sendApplication"
              style="position: relative; z-index: 2"
              data-fade-up="true"
            >
              Оставить заявку
            </button>
            <p class="text-muted mb-5 fw-bold fade-up-3" data-fade-up="true">
              Оставьте заявку и получите индивидуальное обучение <br />
              с нашим специалистом
            </p>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
          <!-- <TradingViewWidget/> -->
        </Carousel>
      </div>
    </div>
  </div>
  <article>
    <BlockType4>
      <template v-slot:title
        >Использование достижений<br v-if="isMobile" />
        науки<br v-if="!isMobile" />
        и технологий<br v-if="isMobile" />
        для успеха в торговле</template
      >
      <template v-slot:text>
        <h5 class="text-left text-center blocktype2">
          Мы выходим за рамки традиционного обучения, интегрируя инновационные
          идеи всемирно признанных экспертов в наш процесс обучения. Благодаря
          такому подходу наши решения по наиболее важным и сложным вопросам
          учеников разрабатываются индивидуально
        </h5>
      </template>
    </BlockType4>
    <BlockType5>
      <template v-slot:title
        >Сотрудничество с лицензированной<br />
        компанией БКС</template
      >
      <p class="text">
        Компания "МИР" является официальным представителем профессионального
        участника рынка ценных бумаг БКС, учредителем которой является БКС-Банк.
      </p>
      <p class="text">
        БКС гарантирует безопасность на уровне ведущих мировых банков с
        наивысшим рейтингом и предоставляет нашим клиентам широкий выбор
        инструментов для торговли и лучший сервис.
      </p>
      <p
        class="text text-decoration-underline"
        v-on:click="openWindow"
        data-bs-toggle="modal"
        data-bs-target="#licenseModal"
        style="cursor: pointer"
      >
        ООО «БКС» имеет лицензию профессионального участника рынка ценных бумаг
        № 045-14117-020000 от 18.11.2021 на осуществление деятельности
        форекс-дилера, выданную Центральным Банком Российской Федерации.
      </p>
    </BlockType5>
    <BlockType9
      @supportData="onSupportResult"
      title="Международный институт рынка"
      :cards="[
        {
          title: 'Заинтересованность\n' + 'в результате',
          text: 'Мы ведём абсолютно прозрачную деятельность и заинтересованы в результате каждого ученика. Одним из основных источников доходов компании является комиссия, получаемая от торговых операций, совершенных на платформе профессионального участника рынка ценных бумаг с лицензией Центрального Банка Российской Федерации.',
        },
        {
          title: 'Онлайн-формат',
          text: 'Данный формат с каждым годом набирает все больше популярности и зарекомендовал себя свободой выбора удобного места для обучения и экономией временим наших учеников.',
        },
        {
          title: 'Практические занятия',
          text: 'Вас ждет практика на демо-счете по каждому изученному инструменту и понимание его структуры работы. На демо-счете мы добиваемся полноценного погружения в торговлю.',
        },
        {
          title: 'Закрытый\n' + 'клуб инвесторов',
          text: 'Нашим клиентам доступны вебинары, мастер-классы, аналитический канал - все эти и эксклюзивные закрытые сервисы на которых презентуют инвестиционные идеи, публикуются важные новости рынка и качественная аналитика',
        },
        {
          title: 'Квалифицированная\n' + 'аналитика',
          text: 'Большой опыт и знания нюансов финансовой деятельности наших специалистов позволяют производить ежедневный качественный анализ текущей рыночной ситуации и делиться им с каждым.',
        },
        {
          title: 'Персональный\n' + 'эксперт',
          text: 'Неотъемлемую роль в успешной торговле составляет опытный специалист. Мы заинтересованы оказывать профессиональную поддержку на протяжении всего времени торговли, так как от этого зависят и наши доходы. Благодаря общей заинтересованности в результате удается добиться максимальной коммуникации и продуктивного сотрудничества!',
        },
        {
          title: 'Индивидуальное обучение',
          text: 'В режиме индивидуального обучения удается добиться закрытия подавляющей части вопросов и подобрать персональный подход к каждой задаче.',
        },
      ]"
    >
      <p class="text" style="font-size: 18px !important">
        предоставляет возможность получить профессиональное обучение
        международного стандарта в онлайн или офлайн-формате. Общайтесь с
        преподавателями на вебинарах, на личных практических занятиях и в чатах.
        Для вас открыта база знаний со всеми необходимыми материалами.
      </p>
    </BlockType9>

    <BlockType6
      title="Платформы которые мы используем для торговли и анализа"
      :left_block="{
        title: 'MetaTrader 5',
        logo: '/MT5.png',
        text: 'MetaTrader 5 – это единая удобная платформа для работы на рынке Forex. Торговый терминал MetaTrader 5 позволяет совершать операции на финансовых рынках с любого устройства. С помощью программы для торговли MT5 можно проводить технический анализ графиков, работать с инструментами алгоритмического трейдинга (роботы и советники). Все Forex-дилеры с лицензией от ЦБ РФ используют MetaTrade 5 в качестве своего основного терминала.',
      }"
      :right_block="{
        title: 'Trading View',
        logo: '/vi.png',
        text: 'TradingView — это веб-сервис и социальная сеть для трейдеров, в основе которой лежит платформа технического анализа. Данная платформа предлагает широкий выбор инструментов и оптимизацию многих процессов таких как автоматическое выделение свечных комбинаций, уведомление о движении цены и многое другое.',
      }"
    >
      <p class="text" data-aos="fade-up">
        Онлайн-трейдинг дает возможность торговать валютными парами на рынке
        Форекс в любое время из любой точки мира. Международный институт рынка
        использует широкоформатный подход к торговле.
      </p>
      <p class="text" data-aos="fade-up">
        Для классической и роботизированной торговли мы используем MetaTrader 5.
        Для аналитики наши финансовые эксперты используют Trading Viev. Каждая
        из выше перечисленных платформ подробно изучается на наших занятиях.
      </p>
    </BlockType6>
    <BlockType2 />
    <BlockType11 @onReviewResult="onReviewResult" />
    <BlockType8 @reviewWindow="onReviewWindow" />
    <FooterBlock />
  </article>
</template>

<style scoped>
.main:before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(transparent 50.42%, rgb(12, 16, 34) 92%);
  z-index: 1;
}

.text {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 16px !important;
}

.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 18px;
}

.intro-wrap {
  margin-bottom: -65px;
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

.main {
  position: relative;
  z-index: 2 !important;
  overflow-x: hidden !important;
  width: 100vw;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.342); */
  /* background-image: linear-gradient(to top, rgba(13, 17, 24, 0.83) 11.76%, rgba(14, 17, 24, 0.46) 98.74%); */
  background-image: url("/bg.jpeg");
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
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
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
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
    };
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
  created() {},
  methods: {
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
  },
};
</script>
