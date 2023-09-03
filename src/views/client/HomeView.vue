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
  loader: "dots",
});

const fullPage = ref(false);
const loader = $loading.show(
  {},
  {
    // before: h('h1', {class: 'text-center text-white'}, [
    //     h('span', {class: 'fw-bolder'}, 'MIR'),
    //     h('span','Forex')
    // ])
    before: h(
      "img",
      { src: "/logo_white.png", style: "width: 150px", class: "d-block" },
      [],
    ),
  },
);

setTimeout(() => {
  loader.hide();
}, 3000);

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
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
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
              type="phone"
              :value="number"
              v-maska
              data-maska="8 (###) ###-##-##"
              class="form-control p-3"
              id="call_number"
              placeholder="Номер телефона"
            />
          </div>
        </div>
        <div class="modal-footer text-center p-5 pt-0 border-0">
          <button
            type="button"
            class="btn btn-primary p-3 m-0 mt-4 w-100 mb-3"
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

  <div
    class="modal fade"
    id="licenseModal"
    tabindex="-1"
    aria-labelledby="licenseModal"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <h1 class="modal-title fs-5" id="licenseModal">Лицензия</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="text-center">
            <img src="/lic.pdf" class="w-100 mb-3" />
            <a
              href="https://cbr.ru/finorg/foinfo/?ogrn=1167746614947"
              target="”_blank”"
              class="btn btn-primary mb-3"
              >Проверить на сайте Цетрального Банка</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <GenericModalMsg :type="GenericMsgType" />

  <ReviewModalMsg :type="ReviewlMsgType" />
  <ReviewModalCreate @onReviewResult="onReviewResult" />
  <ReviewModal
    :name="reviewData.name"
    :date="reviewData.date"
    :text="reviewData.text"
  />
  <SupportModal :title="supportData.title" :text="supportData.text" />

  <Preloader />
  <TopHeader />
  <!-- <TradingView class="charts"/> -->
  <div class="main">
    <div class="d-flex align-items-center h-100">
      <div class="w-100">
        <div class="d-flex">
          <div class="container text-white">
            <h1 class="mb-5 fw-bolder">
              ОФИЦИАЛЬНЫЕ ПРЕДСТАВИТЕЛИ<br />АЛЬФА-ФОРЕКС
            </h1>
            <p class="text-muted mb-5">
              Крупнейший Форекс - дилер с <br />лицензией ЦБ РФ
            </p>
            <button
              type="button"
              class="btn-light btn"
              data-bs-toggle="modal"
              data-bs-target="#sendApplication"
            >
              Оставить заявку
            </button>
            <p class="text-muted mb-5 fw-bold">
              Оставьте заявку и получите доступ к бесплатному<br />курсу по
              инвестициям и трейдингу
            </p>
          </div>
          <!-- <TradingViewWidget/> -->
        </div>
      </div>
    </div>
  </div>
  <article>
    <BlockType4
      title="Использование достижений науки и технологий для успеха в торговле"
    >
      <h5>
        Мы выходим за рамки традиционного консалтинга, интегрируя инновационные
        идеи всемирно признанных экспертов в нашу консультативную работу.
        Благодаря такому подходу наши решения по ваиболее важным и сложным
        вопросам клиентов разрабатываются индивидуально.
      </h5>
    </BlockType4>
    <BlockType5 title="Сотрудничество с лицензированной компанией Альфа Форекс">
      <p class="text">
        Компания "МИР" является официальным представителем профессионального
        участника рынка ценных бумаг Альфа-Форекс, учредителем которой является
        Альфа-Банк.
      </p>
      <p class="text">
        Альфа-Форекс гарантирует безопасность на уровне ведущих мировых банков с
        наивысшим рейтингом и предоставляет нашим клиентам широкий выбор
        инструментов для торговли и лучший сервис.
      </p>
      <p class="text">
        ООО «Альфа-Форекс» имеет лицензию профессионального участника рынка
        ценных бумаг No 045-14070-020000 от 20.12.2018 на осуществление
        деятельности форекс-дилера, выданную Центральным Банком Российской
        Федерации.
      </p>
    </BlockType5>
    <BlockType9
      @supportData="onSupportResult"
      title="Международный институт рынка"
      :cards="[
        {
          title: 'Онлайн-формат',
          text: 'Данный формат с каждым годом набирает все больше популярности и зарекомендовал себя свободой выбора удобного места для обучения и экономией временим наших учеников.',
        },
        {
          title: 'Практические занятия',
          text: 'Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.',
        },
        {
          title: 'Закрытый клуб инвесторов',
          text: 'Вебинары, мастер-классы, аналитический канал - все эти эксклюзивные закрытые сервисы, на которых презентуют инвестиционные идеи, инвестиционные портфели и качественную аналитику доступны нашим клиентам.',
        },
        {
          title: 'Заинтересованность в результате',
          text: 'Международный институт рынка ведет абсолютно прозрачную деятельность и заинтересован в результате каждого ученика. Одним из основных источников доходов компании является комиссия, получаемая от торговых операций, совершенных на платформе профессионального участника рынка ценных бумаг с лицензией Центрального Банка Российской Федерации.',
        },
        {
          title: 'Квалифицированная аналитика',
          text: 'Большой опыт и знания нюансов финансовой деятельности наших специалистов позволяют производить ежедневный качественный анализ текущей рыночной ситуации и делиться им с каждым.',
        },
        {
          title: 'Персональный эксперт',
          text: 'Неотъемлемую роль в успешной торговле составляет опытный специалист. Международный институт рынка заинтересован оказывать профессиональную поддержку на протяжении всего времени торговли, так как от этого зависят и наши доходы. Благодаря общей заинтересованности в результате удается добиться максимальной коммуникации и продуктивного сотрудничества!',
        },
        {
          title: 'Индивидуальное обучение',
          text: 'В режиме индивидуального обучения удается добиться закрытия подавляющей части вопросов и подобрать индивидуальный подход к каждой задаче.',
        },
      ]"
    >
      <p class="text">
        Предоставляет возможность получить профессиональное обучение
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
        text: 'Онлайн-трейдинг дает возможность торговать валютными парами на рынке Форекс в любое время из любой точки мира. Будьте мобильными, торгуйте на финансовых рынках, получайте торговую информацию и анализируйте ее - все это есть в MetaTrader. Установите торговый терминал на любое устройство и совершайте торговые операции 24 часа в сутки. Рынок Форекс не имеет ограничений для цивилизованной торговли в сравнении с другими финансовыми инструментами. На Форекс вы можете зарабатывать круглосуточно 5 дней в неделю.',
      }"
      :right_block="{
        title: 'Trading View',
        logo: '/vi.png',
        text: 'TradingView - веб-сервис и социальная сеть для трейдеров, в основе которой лежит платформа технического анализа. Проект был запущен в сентябре 2011 года. Есть бесплатная версия приложения и 3 варианта платной подписки с растущим количеством функций',
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
    <BlockType2 class="d-none d-sm-none d-md-block" />
    <BlockType11 @onReviewResult="onReviewResult" />
    <BlockType8 @reviewWindow="onReviewWindow" />
    <FooterBlock />
  </article>
</template>

<style scoped>
.text {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 14px !important;
}

.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
  font-size: 18px;
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
  background-repeat: none !important;
}

@media screen and (max-width: 768px) {
  .main {
    text-align: center !important;
    background-image: url("/bg_mini.jpeg");
    background-position: center;
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
</style>

<script>
export default {
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
    };
  },
  created() {},
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
    onReviewWindow(data) {
      this.reviewData.name = data.name;
      this.reviewData.date = data.date;
      this.reviewData.text = data.text;
    },
    onReviewResult(type) {
      alert(22);
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
  },
};
</script>
