<template>
  <div
    class="modal fade"
    id="licenseModal"
    tabindex="-1"
    aria-labelledby="licenseModal"
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
        <div class="modal-body text-start">
          <img src="../../../public/license.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  background-color: #293d8a;
  border: 1px solid rgb(35, 61, 163);
  color: #fff;
}

.modal.show .modal-dialog {
  width: 50%;
  padding: 0;
  margin: 30px auto;
  max-width: 100%;
}

.modal-body {
  padding: 7px 7px;
  color: rgba(255, 255, 255, 0.8);
}

.modal-body img {
  width: 100%;
  height: 100%;
}

.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
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

.modal-header {
  justify-content: flex-end;
}

@media (max-width: 1200px) {
  .modal.show .modal-dialog {
    width: 100%;
  }
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
