<template>
  <div class="block">
    <div class="container">
      <div class="row" style="margin-bottom: 50px">
        <div class="col-12 header-wrap">
          <h1 class="header text-white fw-bolder" data-aos="fade-up">
            {{ title }}
          </h1>
          <div class="header-mini">
            <slot></slot>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card" data-aos="fade-up">
            <img
              :src="left_block.logo"
              style="width: 100px; margin-top: -30px"
              data-aos="fade-up"
            />
            <h2 class="text-white mt-0" data-aos="fade-up">
              {{ left_block.title }}
            </h2>
            <p
              style="color: rgba(255, 255, 255, 0.5)"
              data-aos="fade-up"
              class="card-text"
            >
              {{ left_block.text }}
            </p>
            <img
              src="/Screen-MT5.png"
              class="screen screen-left mt-auto"
            />
            <img class="mob-left" src="/mob-1.png" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card" data-aos="fade-up">
            <img
              :src="right_block.logo"
              style="width: 50px; margin-top: 25px"
              data-aos="fade-up"
            />
            <h2 class="text-white" data-aos="fade-up">
              {{ right_block.title }}
            </h2>
            <p
              style="color: rgba(255, 255, 255, 0.5)"
              data-aos="fade-up"
              class="card-text"
            >
              {{ right_block.text }}
            </p>
            <img
              src="/Screen-TV.png"
              class="screen screen-right mt-auto"
            />
            <img class="mob-right" src="/mob-2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1920px !important;
}

.screen {
  height: 560px;
  max-height: 560px;
}

.block {
  position: relative;
  z-index: 3 !important;
  width: 100vw;
  overflow: hidden !important;
  background-image: linear-gradient(
    195deg,
    color(srgb 0.043 0.0633 0.1303) 25.21%,
    #1e2b5c 52.52%,
    color(srgb 0.0491 0.0591 0.1304) 75.63%
  );
}
.block > div > .row > div {
  padding-left: 2% !important;
  padding-right: 2% !important;
  /* padding-top: 50px !important;
        padding-bottom: 50px !important; */
}
.header {
  font-size: 38px !important;
  margin-bottom: 30px;
  max-width: 800px;
}
.header-mini {
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
}
.block > div > .row > div:nth-of-type(1) {
  /* background-color: white !important; */
}
.block > div > .row > div:nth-of-type(2) {
  /* background-color: #f0f1f1 !important; */
  /* color: #000000 !important; */
}
.card {
  width: 100%;
  background-color: transparent !important;
  padding: 45px;
  border: 1px solid rgb(35, 61, 163);
  border-radius: 16px;
  height: 800px;
  max-width: 100%;
  margin-bottom: 30px;
}

.mob-left, .mob-right {
  position: absolute;
  width: 319px;

  z-index: 111;

  bottom: -132px;
}

@media (min-width: 1660px) {
  .mob-left, .mob-right {
    bottom: -230px;
  }
}

.mob-left {
  right: 120px;
}

.mob-right {
  left: 120px;
}

@media screen and (min-width: 1668px) {
  .block {
    padding-bottom: 200px !important;
  }

  .card-text {
    font-size: 20px !important;
  }

  .screen {
    bottom: -180px !important;
  }
}

@media screen and (max-width: 768px) {
  .card {
    height: 800px !important;
  }
  .block > div > div:nth-child(2) > div:nth-child(2) > div {
    height: 600px !important;
  }
}

@media screen and (max-width: 992px) {
  .card {
    height: 700px !important;
  }
  /*.screen-mini {
    display: none !important;
  }*/

  .block {
    padding-bottom: 40px;
  }
}

@media screen and (min-width: 992px) {
  .screen {
    height: 560px;
    max-height: 560px;
  }
  /* .screen-left {
            left: -35% !important;
        }
        .screen-right {
            right: -35% !important;
        }*/
  .block {
    position: relative;
    z-index: 3 !important;
    padding-top: 100px;
    padding-bottom: 100px;
  }
}

@media screen and (min-width: 1200px) {
  /*.screen-left {
    left: -45% !important;
  }
  .screen-right {
    right: -45% !important;
  }*/
}

@media (max-width: 560px) {
  .screen-mini {
    height: 180px !important;
    width: 140px !important;

    bottom: -74px !important;
  }

  .screen,
  .screen-right {
    height: 300px;
    bottom: -20px !important;
  }

  .header {
    width: 95%;
    text-align: center;
    font-size: 25px !important;
  }

  .header-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }

  .header-mini {
    text-align: center !important;
  }

  .screen-right {
    bottom: -60px !important;
  }

  .screen-mini-right {
    bottom: -105px !important;
  }

  .screen-mini {
    height: 180px;
  }

  .mob-left, .mob-right {
    width: 140px;

    bottom: -12px;
  }

  .mob-right {
    bottom: -70px;
  }
}

@media (max-width: 410px) {
  .screen {
    bottom: -60px !important;
  }
  .screen-right {
    bottom: -100px !important;
  }
}

.card h2 {
  margin-top: 14px;
  margin-bottom: 30px;
}
.screen-left {
  position: absolute;
  z-index: 99;
  right: 45px;
  bottom: -80px;
  width: 120%;
}
.screen-right {
  position: absolute;
  z-index: 99;
  //right: -50%;
  bottom: -80px;
  width: 120%;
}
.screen-mini-left {
  position: absolute;
  z-index: 99;
  right: 20%;
  bottom: -70px;
  width: 35%;
}
.screen-mini-right {
  position: absolute;
  z-index: 99;
  left: 20%;
  bottom: -55px;
  width: 35%;
}
/* .screen-mini-left::before,
    .screen-mini-right::before {
        content: '';
        display: block;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent, black);
    } */
</style>

<script>
export default {
  props: ["title", "left_block", "right_block"],
  setup() {},
};
</script>
