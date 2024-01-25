<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 block text-center">
        <div class="text-white text-center header header--title">
          <img
            src="/full_logo_white.png"
            class="mb-4 logo"
            style="width: 25 0px"
            data-aos="fade-up"
          />
          <h1 class="fw-bolder" style="margin-bottom: 120px" data-aos="fade-up">
            Чему вы научитесь<br />и что вы получите после обучения
          </h1>
        </div>
        <div
          class="tree top-tree visible"
          v-on:click="changeImage()"
          data-aos="fade-up"
        >
          <img src="/touch.svg" class="touch-icon" alt="">
          <div class="cards cards-tree">
            <div class="row">
              <div class="comment ms-auto me-auto comment-1">
                Рабочие торговые стратегии <br />
                под разные типы торговли <br />
                выверенные за 6 лет работы
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="comment ms-0 me-auto comment-2">
                Индивидуальное обучение <br />
                под разные типы торговли
              </div>
              <div class="comment ms-auto me-0 comment-3">
                Разбор с нуля торговых платформ <br />
                MetaTrader 5 и TradingView
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="comment ms-0 me-auto comment-4">
                Подготовка к получению <br />
                базового статуса квалифицированного <br />
                инвестора
              </div>
              <div class="comment ms-auto me-0 comment-5">
                Методики технического, <br />
                фундаментального и индикаторного <br />
                анализа рынка
              </div>
            </div>
            <div class="row"></div>
          </div>
          <img :src="treeSrc" alt="" />
        </div>
        <div class="header" data-aos="fade-up">
          <div class="container">
            <div class="row">
              <div class="col-6 text-end">
                <h4
                  class="button-top active text-light d-inline-block fw-light"
                  style="text-align: center"
                  v-on:click="changeImage"
                >
                  На обучении
                </h4>
              </div>
              <div class="col-6 text-start">
                <h4
                  class="button-bottom text-light d-inline-block fw-light"
                  style="text-align: center"
                  v-on:click="changeImage"
                >
                  После обучения
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tree bottom-tree"
          v-on:click="changeImage()"
          data-aos="fade-up"
        >
          <img src="/touch.svg" class="touch-icon" alt="">
          <div class="cards">
            <div class="row">
              <div class="comment ms-auto me-6 comment-21 green">
                Автоматизация <br />
                финансового планирования
              </div>
              <div class="comment ms-auto me-6 comment-22 green">
                Базовый статус <br />
                квалифицированного инвестора
              </div>
            </div>
            <div class="row"></div>
            <div class="row">
              <div class="comment ms-0 me-auto comment-23 green">
                Разбор новых <br /> инвестиционных
                стратегий
              </div>
              <div class="comment ms-auto me-0 comment-24 green">
                Сопровождение <br />
                финансового эксперта
              </div>
            </div>
            <div class="row"></div>
            <div class="row"></div>
            <div class="row">
              <div class="comment ms-auto me-auto comment-25 green">
                Комплексный анализ <br />
                рыночной ситуации и уведомления о важных <br />
                рыночных ситуациях
              </div>
            </div>
          </div>

          <img :src="treeSrc" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  position: relative;
}

#tree-mobile {
  display: none;
}

.logo {
  position: relative;
  width: 250px;
}

.container-fluid:before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(
      142deg,
      rgba(30, 43, 92, 0.65) -4.08%,
      rgba(30, 43, 92, 0) 26.96%
    ),
    #0c1022;

  top: 0;
  left: 0;

  z-index: 1;
}

.block {
  position: relative;
  padding: 10% 5% 10% 5%;
  background-color: rgb(12, 16, 33);
}

.header > img {
  position: relative;

  opacity: 1 !important;

  z-index: 4444;
}

h1 {
  position: relative;
  z-index: 4;
}

.button-top,
.button-bottom {
  position: relative;
  z-index: 3333;
}

.block::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/tree-bg.png);
  background-position: left top;
  background-size: contain;
  background-repeat: no-repeat;

  z-index: 1;
}

.block::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(/row_tree_2.png);
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;

  z-index: 1;
}
.tree {
  position: relative;
  width: 900px !important;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;

  z-index: 2;
}
.tree svg {
  height: 450px;
  width: auto;
  transition: 0.9s !important;
  opacity: 0.3;
}
.bottom-tree img {
  transform: rotate(180deg);
  padding-top: 30px;
}
.top-tree svg {
  padding-top: 30px;
}
.tree > .cards {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tree > .cards > .row {
  height: 70px;
}

.tree img {
  opacity: 0.4;
}

.tree.visible img {
  opacity: 1;
}

.tree > .cards > .row > .comment {
  height: auto;
  position: relative;
  z-index: 999;
  display: inline-block;
  padding: 14px;
  width: auto !important;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 50px;
  border: 2px dashed #293d8a;
  color: white;
}

.tree > .cards > .row > .comment.green {
  border: 2px dashed green;
}

.comment {
  min-width: 338px;
  display: flex !important;
  justify-content: center;
  align-items: center;

  background-color: #0c1022;
  opacity: 0.9;
}

.comment-1 {
  transform: translateY(-100px);
}

.comment-2 {
  transform: translateX(-180px) translateY(-105px);
}

.comment-3 {
  transform: translateX(180px) translateY(-105px);
}

.comment-4 {
  transform: translateX(-110px) translateY(150px);
}

.comment-5 {
  transform: translateX(120px) translateY(150px);
}

.comment-21 {
  transform: translateX(-190px) translateY(-70px);
}

.comment-22 {
  transform: translateX(180px) translateY(-70px);
}

.comment-23 {
  transform: translateX(-200px) translateY(165px);
}

.comment-24 {
  transform: translateX(200px) translateY(165px);
}

.comment-25 {
  transform: translateY(100px);
}

.touch-icon {
  position: absolute;
  width: 45px;
  height: auto;
  display: block;

  opacity: 1!important;

  top: 50%;
  left: 50%;

  transform: translateX(-50%) translateY(-50%);
  animation: infinite pulse 1.5s ease;

  z-index: 100;
}

.visible .touch-icon {
  display: none;
}

@keyframes pulse {
  0% {
    width: 45px;
  }
  50% {
    width: 55px;
  }
  100% {
    width: 45px;
  }
}

.bottom-tree .touch-icon {
  top: auto;
  left: auto;
  right: 50%;
  bottom: 50%;

  transform: rotate(0) translateX(50%);
}

@media (min-width: 1200px) {
  .header--title {
    position: relative;
    transform: translateY(-60px);

    z-index: 111;
  }
}

@media screen and (max-width: 992px) {
  .tree {
    width: 600px !important;
  }

  .tree > .cards > .row > .comment {
    width: 250px !important;
  }

  .comment-1 {
    transform: translateY(-60px);
  }

  .comment-2 {
    transform: translateX(-50px) translateY(-105px);
  }

  .comment-3 {
    transform: translateX(50px) translateY(-105px);
  }

  .comment-4 {
    transform: translateX(-50px) translateY(-20px);
  }

  .comment-5 {
    transform: translateX(50px) translateY(-20px);
  }

  .comment-21 {
    transform: translateX(0px) translateY(-75px);
  }

  .comment-22 {
    transform: translateX(70px) translateY(-75px);
  }

  .comment-23 {
    transform: translateX(0px) translateY(15px);
  }

  .comment-24 {
    transform: translateX(20px) translateY(15px);
  }

  .comment-25 {
    transform: translateY(-100px);
  }
}
@media screen and (max-width: 768px) {
  .tree {
    width: 1000px !important;
    min-height: 420px;
  }
  .tree > .cards > .row {
    height: 35px !important;
  }
  .tree > .cards > .row > .comment {
    font-size: 12px !important;
    padding: 5px 15px !important;
  }

  .top-tree svg {
    position: absolute;

    left: 10%;
  }

  .bottom-tree svg {
    position: absolute;

    right: 70%;
  }

  .comment-1 {
    transform: translateY(-90px) translateX(-285px);
  }

  .comment-2 {
    transform: translateX(10px) translateY(-80px);
  }

  .comment-3 {
    transform: translateX(-780px) translateY(215px);
  }

  .comment-4 {
    transform: translateX(-10px) translateY(-50px);
  }

  .comment-5 {
    transform: translateX(-680px) translateY(220px);
  }

  .comment-21 {
    transform: translateX(-190px) translateY(405px);
  }

  .comment-22 {
    transform: translateX(-590px) translateY(230px);
  }

  .comment-23 {
    transform: translateX(135px) translateY(-30px);
  }

  .comment-24 {
    transform: translateX(-675px) translateY(280px);
    max-height: 45px;
  }

  .tree > .cards > .row > .comment.comment-25 {
    width: 300px !important;
    transform: translateY(-210px) translateX(-360px);
  }
}

@media screen and (max-width: 576px) {
  .container-fluid {
    padding-top: 50px;
  }

  .touch-icon {
    left: 15%;
    transform: translateX(0) translateY(-50%)!important;
  }

  .bottom-tree .touch-icon {
    right: 80%;
    transform: translateX(0) translateY(50%)!important;
  }

  .header--title {
    position: relative;

    transform: translateY(-25px);
    z-index: 111;
  }

  .logo {
    width: 220px;
    margin-bottom: 10px!important;
  }

  .comment {
    min-width: 250px;
  }

  #tree-mobile {
    display: block;
  }
  h1 {
    font-size: 25px !important;
    margin-top: 20px;
    margin-bottom: 60px;
  }

  .tree > .cards > .row {
    height: 35px !important;
  }
  .tree > .cards > .row > .comment {
    font-size: 12px !important;
    padding: 5px 15px !important;
  }
  .top-tree img {
    width: 80%;
    transform: translateX(-70px) translateY(-20px);
  }
  .bottom-tree img {
    width: 80%;
    transform: translateX(-580px) rotate(180deg) translateY(-20px);
  }

  .button-top {
    width: 80%;
  }

  .container-fluid {
    padding-bottom: 40px;
  }

  .block:before {
    top: 40px;
  }
}

@media (max-width: 425px) {
  .button-top, .button-bottom {
    max-width: 110px;
  }
}

.tree > .cards {
  opacity: 0;
  transition: 0.5s;
}
.tree.visible svg,
.tree.visible .cards {
  opacity: 1;
}
.header h4 {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size 0.6s;
  cursor: pointer !important;
}

.header h4.active {
  background-size: 100% 1px !important;
}

.top-tree {
  margin-bottom: 100px;
}

.bottom-tree {
  margin-top: 100px;
}
</style>

<script>
export default {
  data() {
    return {
      visibleTree: "top",
      treeSrc:
        window.innerWidth < 600 ? "/tree_mobile.svg" : "/tree_desktop.svg",
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeImage() {
      let topElem = document.getElementsByClassName(`top-tree`)[0];
      let topButton = document.getElementsByClassName(`button-top`)[0];
      let bottomElem = document.getElementsByClassName(`bottom-tree`)[0];
      let bottomButton = document.getElementsByClassName(`button-bottom`)[0];

      if (this.visibleTree == "top") {
        topElem.classList.remove("visible");
        bottomElem.classList.add("visible");

        topButton.classList.remove("active");
        bottomButton.classList.add("active");

        this.visibleTree = "bottom";
      } else if (this.visibleTree == "bottom") {
        topElem.classList.add("visible");
        bottomElem.classList.remove("visible");

        topButton.classList.add("active");
        bottomButton.classList.remove("active");

        this.visibleTree = "top";
      }
    },
  },
};
</script>
