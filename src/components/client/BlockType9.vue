<script setup>
import CustomBlock from "@/components/client/CustomBlock.vue";
</script>

<template>
  <div class="block bg">
    <div class="container-fuild">
      <div class="row">
        <div class="col-12 text-center p-4" id="student">
          <h1 class="text-white text-center fw-bolder mb-4" data-aos="fade-up">
            {{ title }}
          </h1>
          <p
            class="text-white text-center fw-medium ms-auto me-auto"
            style="max-width: 600px"
            data-aos="fade-up"
          >
            <slot></slot>
          </p>
        </div>
      </div>
      <div class="row control justify-content-between">
        <div class="col-3 text-start align-self-center">
          <div
            class="row h-100"
            style="
              background-image: linear-gradient(
                to right,
                rgba(12, 16, 34, 1) 20.17%,
                transparent
              );
            "
          >
            <div class="col align-self-center">
              <font-awesome-icon
                :icon="['fas', 'angle-left']"
                size="2xl"
                class="left"
                v-on:click="leftScoll()"
              />
            </div>
          </div>
        </div>
        <div class="col-3 text-end">
          <div
            class="row h-100"
            style="
              background-image: linear-gradient(
                -90deg,
                rgba(12, 16, 34, 1) 20.17%,
                transparent
              );
            "
          >
            <div class="col align-self-center">
              <font-awesome-icon
                :icon="['fas', 'angle-right']"
                size="2xl"
                class="right"
                v-on:click="rightScoll()"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex position-relative corusell" data-aos="fade-up">
        <div
          class="col-10 col-half col-md-4 p-4 d-none d-sm-none d-md-block"
        ></div>
        <div
          class="col-10 col-half col-md-4 p-4"
          v-for="once in cards"
          :key="once.title"
        >
          <CustomBlock
            @supportDataRes="onSupportData"
            :title="once.title"
            :text="once.text"
          />
        </div>
        <div
          class="col-10 col-half col-md-4 p-4 d-none d-sm-none d-md-block"
        ></div>
      </div>
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
.block {
  padding-bottom: 100px;
  background-color: rgba(12, 16, 34, 1);
  padding-top: 0px !important;
  overflow-x: hidden;
  position: relative;
  background-image: url("/bg_student.svg");
  background-position: top right;
  background-size: auto;
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
  margin-right: 0;
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
@media screen and (min-width: 1200px) {
  .col-half {
    width: 20%;
  }
}

@media screen and (min-width: 992px) {
  .block {
    padding-top: 200px !important;
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
</style>

<script>
export default {
  props: ["title", "cards"],
  data() {
    return {};
  },
  mounted() {
    this.rightScoll();
  },
  methods: {
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
    onSupportData(data) {
      this.$emit("supportData", {
        title: data.title,
        text: data.text,
      });
    },
  },
};
</script>
