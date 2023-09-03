<template>
  <div class="block">
    <div class="container">
      <div class="row" style="margin-bottom: 50px">
        <div class="col-12">
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
            <p style="color: rgba(255, 255, 255, 0.5)" data-aos="fade-up">
              {{ left_block.text }}
            </p>
            <img src="/Screen_MT5.png" class="screen screen-left mt-auto" />
            <img
              src="/MT_Mobile.png"
              class="screen-mini screen-mini-left mt-auto"
              data-aos="fade-up"
            />
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
            <p style="color: rgba(255, 255, 255, 0.5)" data-aos="fade-up">
              {{ right_block.text }}
            </p>
            <img src="/Screen_TV.png" class="screen screen-right mt-auto" />
            <img
              src="/TV_Mobile.png"
              class="screen-mini screen-mini-right mt-auto"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  .screen-mini {
    display: none !important;
  }
}

@media screen and (min-width: 992px) {
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
  bottom: -170px;
  width: 50%;
}
.screen-mini-right {
  position: absolute;
  z-index: 99;
  left: 20%;
  bottom: -170px;
  width: 50%;
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
