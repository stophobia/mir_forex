<template>
  <div
    class="modal fade"
    id="supportModal"
    tabindex="-1"
    aria-labelledby="supportModal"
    aria-hidden="true"
  >
    <button
      id="rsupportModalOpen"
      type="button"
      class="btn btn-primary d-none"
      data-bs-toggle="modal"
      data-bs-target="#supportModal"
    >
      Открыть
    </button>

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
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="row justify-content-between w-100">
            <div class="col-12 text-start">
              <h4 class="fw-bolder mb-0">{{ title }}</h4>
            </div>
          </div>
        </div>
        <div class="modal-body text-start">
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  props: ["title", "text"],
  setup() {},
  methods: {},
};
</script>
