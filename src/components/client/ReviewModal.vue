<template>
  <div
    class="modal fade"
    id="reviewModal"
    tabindex="-1"
    aria-labelledby="reviewModal"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="row justify-content-between w-100">
            <div class="col-12 text-start">
              <h4 class="fw-bolder mb-0">{{ name }}</h4>
              <span class="text-muted">{{ date }}</span>
            </div>
          </div>
          <button class="modal-close" v-on:click="close">
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
        </div>
        <div class="modal-body text-start">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  background-color: rgb(12, 16, 34);
  border: 1px solid rgb(35, 61, 163);
  color: #fff;
}
.modal-header {
  background-image: linear-gradient(
    160deg,
    rgb(12, 16, 34),
    rgb(24, 33, 70) 80.25%
  );
  border-bottom: 1px solid rgb(35, 61, 163);
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-close {
  background: none;
  border: none;

  width: 35px;
  height: 35px;
}

.modal-close svg {
  width: 100%;
  height: 100%;
  fill: #ffffff;
}

.modal-body {
  padding: 40px 30px;
  color: rgba(255, 255, 255, 0.8);
}
.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
}
</style>

<script>
export default {
  props: ["name", "date", "text"],
  setup() {},
  methods: {
    close() {
      const btnClose = this.$refs.closeModal;
      const modal = this.$refs.modal;

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
