<template>
  <div class="block">
    <div class="container header">
      <div class="row text-light text-center">
        <div class="col-12 title-wrap">
          <h1 class="fw-bolder" data-aos="fade-up">
            <slot name="title"></slot>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row text-bloc text-light">
        <div class="col-md-6 col-12 d-flex align-items-center">
          <div class="d-block" data-aos="fade-up">
            <slot name="text" class="text-left text-center"></slot>
          </div>
        </div>
        <div
          class="col-md-6 col-12 text-center d-flex align-items-center"
          data-aos="fade-up"
        >
          <div class="d-block">
            <img src="/vector.png" class="w-100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-left {
  text-align: center;
  transform: translateX(-90px) translateY(10px);
}

.block {
  z-index: 999;
  position: relative;
  background-color: rgba(12, 16, 34, 1);
  background-image: linear-gradient(
    45deg,
    #293d8a -44.82%,
    rgba(41, 61, 138, 0) 29.48%
  ) !important;
}
.text-bloc > div {
  padding-left: 7%;
  padding-right: 7%;
  color: rgba(255, 255, 255, 1);
}
.text-bloc > div:nth-of-type(2) {
  /* background-color: rgb(0, 0, 0); */
  padding: 0;
  margin-top: 100px;
}
.header {
  padding-top: 100px;
}
.header h1 {
  font-size: 32px;
}

@media screen and (min-width: 992px) {
  .header h1 {
    font-size: 48px;
  }
  img {
    margin-top: 135px;
    width: 85%;
  }
}
@media screen and (min-width: 768px) {
  .header {
    width: 1000px !important;
  }
  .text-bloc > div {
    height: 350px;
  }
}

@media (max-width: 560px) {
  .text-bloc > div:nth-of-type(2) {
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .text-left {
    text-align: center;
    transform: none;
  }

  .block:after {
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background: linear-gradient(0deg, #1e2b5c 0.39%, rgba(30, 43, 92, 0) 12.77%),
      #0c1022;
    z-index: -1;
  }

  .header {
    margin-top: -0px;
    padding-top: 0px;
  }

  .text,
  .d-block {
    font-size: 14px !important;
    margin-top: 20px;
    text-align: center !important;
  }

  .title-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    width: 90%;

    font-size: 25px !important;
  }

  .d-block {
    display: block;
    margin-top: 50px !important;
  }

  @media screen and (min-width: 1400px) {
    .text-left {
      text-align: center !important;
    }
  }
}
</style>

<script>
export default {
  props: ["title"],
  setup() {},
};
</script>
