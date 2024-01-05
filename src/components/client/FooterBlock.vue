<template>
  <div class="footer">
    <div class="container">
      <div class="row top">
        <div class="col-12 col-md-3">
          <div class="mb-4">
            <a href="/" class="mb-4">
              <img src="/full_logo_white.png" />
            </a>
          </div>
          <div class="mb-4">
            <span class="mt-4">Официальный представитель</span>
          </div>
          <div class="mb-4">
            <span class="mb-4">
              <img src="/bcs-logo-2.png" class="w-70" />
            </span>
          </div>
          <div class="mb-4">
            <a href="/privacy_policy" class="mt-4 link"
              >Политика конфиденциальности</a
            >
          </div>
        </div>
        <div class="col-12 col-md-6 text-center fw-medium">
          <p>
            "Международный институт рынка" является официальным представителем
            <span
              v-on:click="openWindow"
              class="text-decoration-underline"
              data-bs-toggle="modal"
              data-bs-target="#licenseModal"
              style="cursor: pointer"
            >
              ООО «БКС». Услуги на рынке форекс оказывает ООО
              «БКС» который имеет лицензию профессионального участника
              рынка ценных бумаг № 045-14070-020000 от 20.12.2018 на
              осуществление деятельности форекс-дилера, выданную Банком России. </span
            ><br />
            Предлагаемые к заключению договоры или финансовые инструменты
            являются высокорискованными и могут привести к потере внесённых
            денежных средств в полном объёме. До совершения сделок следует
            ознакомиться с рисками, с которыми они связаны.
          </p>
        </div>
        <div class="col-12 col-md-3 text-end">
          <ul class="nav flex-column">
            <li class="nav-item" v-if="page != 'application'">
              <a class="nav-link" href="/#methods">Наш метод</a>
            </li>
            <li class="nav-item" v-if="page != 'application'">
              <a class="nav-link" href="/courses">Курсы</a>
            </li>
            <li class="nav-item" v-if="page != 'application'">
              <a class="nav-link" href="/#review">Отзывы</a>
            </li>
            <li class="nav-item" v-if="page == 'application'">
              <a class="nav-link" href="/">Перейти на сайт</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">О компании</a>
            </li>
            <!-- <li class="nav-item">
                            <a class="nav-link" href="/admin">Администрирование</a>
                        </li> -->
          </ul>
        </div>
      </div>
      <hr class="mb-0 mt-0" />
      <div class="row bottom">
        <div class="col-12 col-md-6">
          <p>Copyright © 2018-2023 Все права защищены</p>
        </div>
        <div class="col-12 col-md-6 text-end">
          <a class="fw-bold" href="tel:+79878197778">+7 (987) 819-77-78</a
          ><br />
          <a href="mailto:mir_alfa_forex@mail.ru">mir_alfa_forex@mail.ru</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 400px;
  max-width: 90%;
}
.link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline !important;
}
@media screen and (max-width: 992px) {
  .footer > div > .top > div.col-12.col-md-3.text-end {
    /* display: none !important; */
    text-align: start !important;
    margin-left: -13px;
  }

  .footer > div > .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .footer > div > .top .text-end {
    margin-top: 20px;
  }

  .footer > div > .bottom .text-end {
    margin-right: 10px;
  }

  .footer > div > .bottom > div.col-12.col-md-6 {
    width: 40%;
  }

  .footer > div > .top > div.col-12.col-md-6.text-center > p {
    text-align: start !important;
  }
  .footer > div > .top > div:nth-child(1) > div:nth-child(3) > a > img {
    width: 50% !important;
  }
  .footer > .container > .row:nth-of-type(1) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
.footer {
  background-color: var(--main-color);
  color: #ffffffac;
  position: relative;
  z-index: 200;
}
.footer .top,
.footer .bottom {
  padding-top: 50px;
  padding-bottom: 50px;
}
a {
  text-decoration: none !important;
  color: #fff;
}
.footer > div > .top > div > .row > div:nth-of-type(1) {
  border-right: 1px #ffffffac solid !important;
}
.openCount {
  border: 3px dashed white;
  padding: 10px 15px;
  transition: 0.3s;
}
.openCount:hover {
  border: 3px solid white;
}
</style>

<script>
export default {
  props: ["page"],
  methods: {
    openWindow() {
      this.$emit("licenseModal", {});
    },
  },
};
</script>
