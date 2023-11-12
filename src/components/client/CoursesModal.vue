<template>
  <div
    class="modal fade"
    id="coursesModal"
    tabindex="-1"
    aria-labelledby="coursesModal"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
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
        <img src="/full_logo_white.png" alt="" class="logo" />
        <div class="modal-body text-start">
          <div class="">
            <h5 class="fw-light">
              На финансовом рынке, который меняется достаточно быстро
              традиционные методики устаревают, и подход "один для всех" изжил
              себя.
            </h5>
            <h5 class="fw-light">
              По этой Причине Международный институт рынка постоянно
              совершенствует свои стратегии и тестирует новые решения для рынка.
              <br />В наших курсах мы используем многолетний опыт работы на
              финансовых рынках и знания ведущих трейдеров мира для создания
              уникальных идей, способных упростить работу наших учеников.
            </h5>
          </div>
          <div class="">
            <h5 class="fw-light">
              Для индивидуального подхода к каждому ученику нашим институтом
              разработаны решения под различные типы торговли.
            </h5>
            <h5 class="fw-light">
              Наполненность каждого курса формировалась из сотен тысяч личных
              торговых ситуаций, тысяч вопросов и целей наших учеников.
              Благодаря этому мы сформировали четыре основных направления:
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-body {
  padding: 30px;
}

.modal-content {
  background-color: rgb(15, 21, 46) !important;
  border: 1px solid rgba(35, 61, 163, 0.7);
  border-radius: 13px;
  color: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 0px;
  align-items: flex-start;
}

.modal-close {
  position: absolute;
  width: 30px;
  height: 30px;

  background: none;
  border: none;

  top: 10px;
  right: 10px;

  z-index: 11;
}

.modal-close svg {
  width: 100%;
  height: 100%;

  fill: white;
}

.logo {
  margin-top: 20px;
  width: 60%;
  margin-left: 30px;
}
</style>

<script>
export default {
  setup() {},
  methods: {
    close() {
      const btnClose = this.$refs.closeModal;
      const modal = this.$refs.modal;

      modal.classList.remove("show");
      modal.style.display = "none";
      modal.removeAttribute("aria-modal");
      modal.setAttribute("aria-hidden", true);
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
