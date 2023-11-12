<template>
  <div
    class="modal fade"
    id="reviewModalMsg"
    tabindex="-1"
    aria-labelledby="reviewModalMsg"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <button
        id="reviewModalMsgOpen"
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#reviewModalMsg"
      >
        Открыть
      </button>
      <div class="modal-content pt-3 pb-4">
        <button
          type="button"
          class="btn-close modal-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
        <div class="modal-body pb-0">
          <h3
            v-if="type == 'success' && page != 'application'"
            class="text-center"
          >
            <font-awesome-icon
              :icon="['fas', 'circle-check']"
              class="error"
              size="2xl"
            />
            <br />
            <br />
            Ваша заявка успешно отправлена
          </h3>
          <h3
            v-if="type == 'success' && page == 'application'"
            class="text-center"
          >
            <font-awesome-icon
              :icon="['fas', 'circle-check']"
              class="error"
              size="2xl"
            />
            <br />
            <br />
            Ваша заявка успешно отправлена.
            <br />В ближайшее время с вами <br />свяжется наш специалист!
            <br />
            <br />
            <a class="nav-link" href="/">Перейти на наш сайт</a>
          </h3>
          <h3 v-if="type == 'error'" class="text-center">
            <font-awesome-icon
              :icon="['fas', 'circle-exclamation']"
              size="2xl"
              class="error"
            />
            <br />
            <br />
            Произошла ошибка, пожалуйста проверьте корректность введённых
            данных, в случае повторной ошибки обратитесь по указанным выше
            контактам
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes beat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.error {
  animation: beat 1s infinite;
}

h3 {
  font-size: 18px;
}

.modal-header {
  background-image: linear-gradient(
    160deg,
    rgb(12, 16, 34),
    rgb(24, 33, 70) 80.25%
  );
  border-bottom: none !important;
  padding: 25px;
}
.modal-body {
  padding: 20px 30px;
  color: rgba(255, 255, 255, 0.8);
}

.modal-content {
  background-color: #0c1022 !important;
}

.modal-close {
  position: absolute;
  width: 35px;
  height: 35px;

  top: 10px;
  right: 10px;
  z-index: 333;

  background: none;
  border: none;
}

.modal-close svg {
  width: 100%;
  height: 100%;
  fill: #293d8a;
}

input,
textarea,
input:focus,
textarea:focus,
input:active,
textarea:active {
  color: rgba(255, 255, 255, 0.9) !important;
  background-color: rgb(12, 16, 34);
  outline: 0 !important;
  border: 1px solid rgb(28, 40, 85);
}
input::placeholder,
textarea::placeholder {
  color: rgba(255, 255, 255, 0.5) !important;
}

@medid (max-width: 600px) {
  h3 {
    font-size: 12px !important;
  }
}

.nav-link {
  text-decoration: underline !important;
}
</style>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
  setup() {},
  props: ["type", "page"],
  methods: {
    close() {
      const btnClose = this.$refs.closeModal;
      const modal = this.$refs.modal;
      console.log(this.type);
      console.log(this.type == "success");

      modal.classList.remove("show");
      modal.style.display = "none";
      [...document.querySelectorAll(".modal-backdrop.show")].forEach(
        (item) => (item.style.display = "none"),
      );

      document.body.style.overflow = "auto";
      document.body.style.padding = "0";
      document.body.classList.remove("modal-open");
    },
  },
};
</script>
