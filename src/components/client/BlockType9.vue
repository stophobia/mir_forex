<script setup>
import CustomBlock from "@/components/client/CustomBlock.vue";
</script>

<template>
  <div class="block bg">
    <div class="container-fuild" id="methods">
      <div class="row" style="overlflow-y: hidden">
        <div
          class="col-12 text-center p-4 wrap-text"
          style="overlflow-y: hidden"
        >
          <h1
            class="text-white text-center fw-bolder mb-4"
            style="overlflow-y: hidden"
            data-aos="fade-up"
          >
            {{ title }}
          </h1>
          <div
            class="text-white text-center fw-medium ms-auto me-auto"
            style="max-width: 600px"
            data-aos="fade-up"
          >
            <slot></slot>
            <p class="text-info">Что вы получите на обучении</p>

            <!--            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
            >
              <path
                d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              />
            </svg>-->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path
                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="once in cards" :key="once.title">
          <CustomBlock :title="once.title" :text="once.text" />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="text-center d-block" data-aos="fade-up">
        <button
          type="button"
          class="btn-light btn"
          data-bs-toggle="modal"
          data-bs-target="#sendApplication"
        >
          Оставить заявку
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fuild {
  z-index: 3333;
}

.block {
  padding-bottom: 100px;
  background-color: rgba(12, 16, 34, 1);
  padding-top: 0px !important;
  overflow-x: hidden;
  position: relative;
  background-image: url("/bg_student.svg");
  background-position: top right;
  background-size: auto;
  background-repeat: no-repeat;
}

.block::before {
  background-image: linear-gradient(
    360deg,
    rgba(12, 16, 34, 1) 32.77%,
    transparent
  );
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.block > div {
  position: relative;
}
.btn-light {
  background-image: linear-gradient(
    162deg,
    white 23.95%,
    rgba(52, 91, 219, 0.3)
  );
  padding: 15px 60px;
  position: relative;
  z-index: 9999;
  font-size: 16px;
  font-weight: 800;
}
.control {
  margin-left: 0 !important;
  margin-right: 0 !important;
  position: absolute;
  z-index: 999;
  margin-top: 0px;
  width: 100vw !important;
  overflow: initial;
  height: 40%;
}
.corusell,
.corusell > div {
  z-index: 500 !important;
  position: relative !important;
}
.control .left,
.control .right {
  transition: 0.5s;
  position: relative !important;
  z-index: 9999 !important;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer !important;
}
.control > div {
  height: 100%;
}
.control .right {
  /* padding: 100px 20px 100px 200px; */
  margin-right: 20px;
  margin-left: auto;
}
.control .left {
  /* padding: 100px 200px 100px 20px; */
  margin-left: 20px;
}
.control .left:hover,
.control .right:hover {
  color: rgba(255, 255, 255, 1);
}
.block > div > div {
  overflow: scroll;
  width: auto;
}
.block > div > div::-webkit-scrollbar {
  display: none !important;
}

.swiper {
  width: 100%;
  position: relative;
}

.swiper:before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(
    270deg,
    #0c1022 6.96%,
    rgba(12, 16, 34, 0) 20.37%
  );

  z-index: 3;
}

.swiper:after {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(
    270deg,
    #0c1022 6.96%,
    rgba(12, 16, 34, 0) 20.37%
  );

  transform: rotate(180deg);

  z-index: 3;
}

.swiper-button-prev {
  z-index: 4444;
}

.swiper-button-next {
  z-index: 4444;
}

.swiper-slide {
  width: calc(245px + 3rem) !important;
}

.wrap-text svg {
  margin-top: 5px;

  fill: white;
  height: 40px;

  animation: bounce 3.5s infinite;
}

.text-info {
  margin-top: 40px;
  font-size: 25px;
  color: white !important;
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

.block > div > .row:nth-of-type(1) {
  margin-top: 100px;
  margin-bottom: 30px !important;
}

@media screen and (min-width: 1600px) {
  .card p {
    font-size: 16px !important;
  }
}

@media screen and (min-width: 1200px) {
  .col-half {
    width: 20%;
  }

  .text {
    font-size: 18px !important;
  }
}

@media screen and (min-width: 992px) {
  .block {
    padding-top: 100px !important;
  }
  .btn-light {
    margin-top: 80px;
  }
}

@media screen and (min-width: 768px) {
  .block > div > .row:nth-of-type(1) {
    margin-top: 100px;
    margin-bottom: 70px;
  }
}

@media screen and (max-width: 768px) {
  .control {
    display: none !important;
  }
  #student > p,
  #student > h1 {
    text-align: start !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media (max-width: 560px) {
  .corusell {
    transform: translateX(22px) !important;
  }

  .wrap-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 30px;
  }

  h1 {
    position: relative;
    max-width: 90%;

    font-size: 25px !important;
    font-weight: 700 !important;

    z-index: 3;
  }

  .block {
    margin-top: -100px;
  }

  .block:after {
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: linear-gradient(transparent 85.42%, rgba(12, 16, 34, 1) 100%);

    transform: rotate(180deg);

    z-index: 0;
  }

  .text-info {
    margin-top: 40px;
    color: white !important;
    font-size: 24px;
  }

  .btn {
    margin-top: 45px;
  }

  .swiper:after {
    content: none;
    display: none;

    opacity: 0;
  }

  .swiper:before {
    content: none;
    display: none;

    opacity: 0;
  }
}
</style>

<script>
import { right } from "@popperjs/core";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: ["title", "cards"],
  data() {
    return {
      autoScrollType: "right",
      settings: {
        itemsToShow: window.innerWidth < 600 ? 1.3 : 5,
        snapAlign: "center",
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 5,
          snapAlign: "center",
        },
      },
    };
  },
  setup() {},
  mounted() {},
  methods: {
    onSwiper(swiper) {
      // console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    },
    leftScoll() {
      var box = document.getElementsByClassName("corusell")[0];
      box.scrollBy({
        left: -310,
        behavior: "smooth",
      });
    },
    rightScoll() {
      var box = document.getElementsByClassName("corusell")[0];
      box.scrollBy({
        left: 310,
        behavior: "smooth",
      });
    },

    autoCycleSlider() {
      const leftBorder = this.$refs.leftBorder;
      const rightBorder = this.$refs.rightBorder;

      if (!leftBorder) return;

      const leftBorderX = leftBorder.getBoundingClientRect().x;
      const rightBorderX = rightBorder.getBoundingClientRect().x;
      const windowWidth = window.innerWidth;

      const offsetRightBorderX = windowWidth - rightBorderX;

      if (offsetRightBorderX < 100 && this.autoScrollType === "right") {
        this.rightScoll();
      } else {
        this.autoScrollType = "left";
      }

      if (leftBorderX < 0 && this.autoScrollType === "left") {
        this.leftScoll();
      } else {
        this.autoScrollType = "right";
      }
    },

    onSupportData(data) {
      this.$emit("supportData", {
        title: data.title,
        text: data.text,
      });
    },
  },
};
</script>
