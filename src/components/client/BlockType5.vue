<template>
  <div class="block">
    <div class="container-fliud">
      <div class="row text-bloc text-dark ms-0 me-0">
        <div class="col-12 d-flex align-items-center pt-0">
          <div class="container-fliud">
            <div class="row">
              <div class="col-12">
                <!-- <h3 class="mb-5 name"><span class="h3" style="border-bottom: 2px solid white;">А</span>льфа Форекс</h3> -->
                <img
                    class="position-relative logo-img"
                    src="/bcs-logo-2.png"
                    style="
                    z-index: 22;
                    width: 300px;
                    margin-bottom: 50px;
                    margin-top: 30px;
                  "
                    data-aos="fade-up"
                />
              </div>
              <div
                  class="col-12 col-md-7 d-flex align-items-center screen"
                  data-aos="fade-up"
              >
                <img src="/forex-1.png"/>
              </div>
              <div
                  class="col-12 col-md-auto p- text position-relative text-wrap"
                  style="z-index: 100"
              >
                <h1 class="mb-4 text-uppercase fw-bold" data-aos="fade-up">
                  <slot name="title"></slot>
                </h1>
                <div class="" data-aos="fade-up">
                  <slot data-aos="fade-up"></slot>
                </div>

                <button
                    type="button"
                    class="btn-dark btn mt-5"
                    data-bs-toggle="modal"
                    data-bs-target="#openCountModal"
                >
                  Открыть счет
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-wrap {
  transform: translateY(90px) translateX(100px);
}

.logo-img {
  width: 340px!important;
  transform: translateY(-50px) !important;
}

.block {
  padding-top: 0 !important;
  z-index: 100;
  position: relative;
  background-color: rgba(12, 16, 34, 1);
  /* background-image: linear-gradient(82.08deg, #1E2B5C 0.39%, rgba(30, 43, 92, 0) 52.77%); */
  background-image: linear-gradient(
      135deg,
      #293d8a -44.82%,
      rgba(41, 61, 138, 0) 29.48%
  ) !important;
}

.block::before {
  background-image: url("/bg_support.png");
  background-position: bottom right;
  background-size: auto;
  background-repeat: no-repeat;
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.name,
.name span {
  font-size: 48px;
  font-weight: 900;
}

.text {
  max-width: 550px;
}

.block > div > .row > div {
  /* background-color: #0C1022 !important; */
  /* background-image: linear-gradient(272deg, #0c1022, rgb(31, 43, 90)); */
  color: #fff;
  padding-top: 120px;
  padding-bottom: 80px;
  padding-left: 5%;
  padding-right: 5%;
}

.btn-light {
  background-image: linear-gradient(
      162deg,
      white 23.95%,
      rgba(52, 91, 219, 0.3)
  );
  padding: 20px 60px;
  font-size: 16px;
  font-weight: 800;
  position: relative;
  z-index: 2;
}

.screen {
  height: fit-content;
  position: relative;
  z-index: 2;
  margin-left: -10%;
  /* border-radius: 0 10px 10px 0; */
  /* border: 15px rgb(12,16,34) solid; */
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  border-radius: 20px;
  border: 2px solid #1E2B5C;

  background-color: #0C1022;
}

.screen img {
  height: auto;
  width: 100%;
  border-radius: 15px;
}

.btn {
  width: 255px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-dark {
  background-image: linear-gradient(
      283.54deg,
      #878787 -39.35%,
      rgba(86, 86, 86, 0) 85.21%
  );
  background-color: auto;
  border: 1px solid #646464;
  margin-top: 40px;
  padding: 15px 60px;
  font-size: 16px;
  font-weight: 800;
}

@media (max-width: 1600px) {
  h1 {
    font-size: 30px;
  }
}

@media screen and (min-width: 992px) {
  .screen  {
    margin-bottom: -180px;
  }

  .block > div > .row > div {
    padding-top: 80px;
  }
}

@media screen and (max-width: 768px) {
  .text-wrap {
    transform: none;
  }

  .logo-img {
    transform: none !important;
  }

  .screen {
    margin-left: -7% !important;
    margin-bottom: 20px !important;
  }

  .block {
    position: relative;
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

    transform: rotate(180deg);
  }

  .block {
    padding-bottom: 50px;
  }
}

@media (max-width: 560px) {
  h1 {
    font-size: 25px !important;
  }

  .block {
    padding-bottom: 0;
  }
}
</style>

<script>
export default {
  props: ["title"],
  setup() {
  },
};
</script>
