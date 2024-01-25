<script setup>
import ReviewBlock from "@/components/client/ReviewBlock.vue";
import BlockType10 from "@/components/client/BlockType10.vue";

// $(".arrow").click(function() {
//     if ($(this).hasClass("arrow-right")) {
//         x = ((box.width() / 2)) + box.scrollLeft();
//         box.animate({
//             scrollLeft: x,
//         })
//     } else {
//         x = ((box.width() / 2)) - box.scrollLeft();
//         box.animate({
//             scrollLeft: -x,
//         })
//     }
// })
</script>

<template>
  <div class="block bg" id="review">
    <div class="container header">
      <div class="row text-light text-center">
        <div class="col-12">
          <h1 class="title" data-aos="fade-up">Наши отзывы</h1>
        </div>
      </div>
    </div>
    <div class="container-fuild">
      <Carousel
        v-bind="settings"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="reviewOnce in reviewAPI" :key="reviewOnce.code">
          <ReviewBlock
            @reviewData="onReviewData"
            data-aos="fade-up"
            :name="reviewOnce.username"
            :date="formatDate(reviewOnce.created_at)"
            :code="reviewOnce.code"
            :text="reviewOnce.text"
          />
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div class="row">
        <div class="col-12 text-center" data-aos="fade-up">
          <button
            type="button"
            class="btn-dark btn"
            data-bs-toggle="modal"
            data-bs-target="#reviewModalCreate"
          >
            Оставить отзыв
          </button>
        </div>
      </div>
    </div>
    <BlockType10 />
  </div>
</template>

<style scoped>
.title {
  width: 50%;
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
}

.block {
  padding-bottom: 100px;
  padding-top: 100px;
  overflow-x: hidden;
  position: relative;
}
.bg {
  background-color: rgba(12, 16, 34, 1);
  background-image: url("/bg_review.png");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: contain;
}
.control {
  position: absolute;
  z-index: 999;
  margin-top: 135px;
  width: 100% !important;
  /* height: 50% !important; */
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
.control .right {
  padding-right: 20px;
  margin-left: auto;
  margin-right: 0;
}
.control .left {
  padding-left: 20px;
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

.swiper-slide {
  width: 400px !important;
}
@media screen and (min-width: 992px) {
}
@media screen and (max-width: 992px) {
  .control {
    display: none !important;
  }
}

@media (max-width: 560px) {
  .block {
    padding-top: 100px;
    padding-bottom: 60px;
  }
  button {
    margin-top: 60px !important;
  }

  .corusell {
    transform: translateX(45px);
  }

  .swiper-slide {
    width: 280px !important;
  }

  .title {
    width: 100%;
    font-size: 25px;
  }

  .swiper:before {
    display: none;
  }

  .swiper:after {
    display: none;
  }
}
.btn-dark {
  background-image: linear-gradient(
    283.54deg,
    #878787 -39.35%,
    rgba(86, 86, 86, 0) 85.21%
  );
  background-color: transparent;
  border: 1px solid #646464;
  margin-top: 80px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 500;
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
    #0c1022 3.96%,
    rgba(12, 16, 34, 0) 20.37%
  );

  transform: rotate(180deg);

  z-index: 3;
}
</style>

<script>
import { right } from "@popperjs/core";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: ["title"],
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
      reviewDB: [
        {
          username: "Пименов Владимир",
          created_at: "07-20-2019",
          code: "72A12CB",
          text: "Проходил обучение у ",
        },
        {
          username: "Лиц Павел",
          created_at: "11-16-2021",
          code: "31B77CT",
          text: "Спасибо Кирилу",
        },
        {
          username: "Лиц Павел",
          created_at: "11-16-2021",
          code: "31B77CT",
          text: "Спасибо Кирилу ",
        },
      ],
      reviewAPI: [],
    };
  },
  setup() {
    return {
      Autoplay,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    onSwiper(swiper) {
      // console.log(swiper)
    },
    onSlideChange() {
      // console.log('slide change')
    },
    onReviewData(data) {
      this.$emit("reviewWindow", {
        name: data.name,
        date: data.date,
        text: data.text,
      });
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join(".");
    },
    async loadData() {
      const response = await fetch("/api.php?action=getAllFeedback", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "get",
      });

      try {
        const data = await response.json();
        if (data.length > 0) {
          this.reviewAPI = data;
        } else {
          this.reviewAPI = this.reviewDB;
        }
      } catch (e) {
        this.reviewAPI = this.reviewDB;
      }
    },

    autoCycleSlider() {
      const box = document.getElementsByClassName("corusell")[1];
      const firstBlock = box.querySelector(".corusell > div:first-child");
      const lastBlock = box.querySelector(".corusell > div:last-child");

      const leftBorderX = firstBlock.getBoundingClientRect().x;
      const rightBorderX = lastBlock.getBoundingClientRect().x;
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
  },
};
</script>
