<script setup>
import { vMaska } from "maska";
</script>

<template>
  <div class="block">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="fw-bolder text-white mt-3" data-aos="fade-up">
            Оставить заявку на обучение
          </h1>
        </div>
      </div>
      <div class="row pt-5" data-aos="fade-up">
        <div class="col-lg-3 col-md-6 col-12">
          <p class="text mt-3 mb-0">Оставьте заявку на обучение</p>
          <input
            type="text"
            class="form-control p-4"
            id="learn_name"
            placeholder="Ваше имя и фамилия"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <p class="text mt-3 mb-0">Номер телефона</p>
          <input
            type="phone"
            v-maska
            data-maska="8 (###) ###-##-##"
            placeholder="8 (999) 999-99-99"
            class="form-control p-4"
            id="learn_number"
          />
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <p class="text mt-3 mb-0">Комментарий</p>
          <input
            type="text"
            class="form-control p-4"
            id="learn_text"
            placeholder=""
          />
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <button
            class="btn btn-light p-4"
            type="button"
            v-on:click="callrev()"
          >
            Оставить заявку
          </button>
        </div>
      </div>
      <div class="row" data-aos="fade-up">
        <div class="col-12">
          <p class="text mt-3 mb-0">
            Нажимая на кнопку “Оставить заявку”, я даю согласие на обработку
            данных и соглашаюсь с Политикой конфиденциальности
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  transition: 0.3s !important;
}
.text {
  color: rgba(255, 255, 255, 0.5);
}
.form-control {
  background-color: transparent;
  color: #fff;
  border: 1px solid #293d8a;
}
.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.btn-light {
  background-image: linear-gradient(
    162deg,
    white 23.95%,
    rgba(52, 91, 219, 0.3)
  );
  border: none !important;
  padding: 15px 50px;
  margin-top: 35px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
}
.block {
  background-color: rgb(12, 16, 34);
  padding-top: 20px;
  padding-bottom: 50px;
  border: 1px solid rgba(41, 61, 138, 1);
  border-left: none !important;
  border-right: none !important;
}

@media (max-width: 560px) {
  h1 {
    font-size: 25px !important;
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sendResult(typeStr) {
      this.$emit("onReviewResult", {
        type: typeStr,
      });
    },
    async callrev() {
      const response = await fetch("/api.php", {
        body: JSON.stringify({
          action: "createRequest",
          username: document.getElementById("learn_name").value,
          phone_number: document.getElementById("learn_number").value,
          description: document.getElementById("learn_text").value,
          type: "learn",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
      });

      try {
        const data = await response.json();
        this.sendResult(data.type);
      } catch (e) {
        this.sendResult("error");
      }
    },
  },
};
</script>
