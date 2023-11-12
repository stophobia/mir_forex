<template>
  <div
    class="modal fade"
    id="reviewModalCreate"
    tabindex="-1"
    aria-labelledby="reviewModalCreate"
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
        <div class="modal-header">
          <div class="row justify-content-between w-100">
            <div class="col-12 text-start">
              <h4 class="mb-0 fw-bolder">Новый отзыв</h4>
            </div>
          </div>
        </div>
        <div class="modal-body pb-0">
          <form>
            <div class="row mt-3">
              <div class="col-7">
                <input
                  type="text"
                  class="form-control p-3"
                  id="username"
                  placeholder="ФИО"
                />
              </div>
              <div class="col-5">
                <Popper
                  content="Идентификатор вы можете получить у своего куратора, данная функция используется для актуальности отзывов о нашей компании"
                  hover="True"
                  arrow="True"
                  zIndex="9999"
                  offsetDistance="10px"
                  placement="top"
                  class="w-100 m-0"
                >
                  <input
                    type="text"
                    class="form-control p-3"
                    oninput="this.value = this.value.toUpperCase()"
                    maxlength="7"
                    id="code"
                    placeholder="Идентификатор"
                  />
                </Popper>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-12">
                <textarea
                  class="form-control p-3"
                  id="text"
                  rows="6"
                  placeholder="Введите отзыв"
                ></textarea>
              </div>
            </div>
            <div class="mb-5 mt-4 w-100">
              <Popper
                content="Для отправки отзыва получите идентификатор у вашего куратора, данная функция используется для акутальности отзывов о нашей компании"
                hover="True"
                arrow="True"
                zIndex="9999"
                offsetDistance="10px"
                placement="top"
                class="w-100 m-0"
              >
                <button
                  type="button"
                  class="btn btn-primary p-3 w-100 position-relative"
                  v-on:click="createFeedback()"
                >
                  Отправить<font-awesome-icon
                    :icon="['fas', 'circle-exclamation']"
                    style="color: #fff; margin-left: 5px"
                  />
                </button>
              </Popper>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-content {
  background-color: rgb(12, 16, 34);
  border: 1px solid black;
  border-radius: 13px;
  color: #fff;
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

.modal-close {
  position: absolute;
  width: 35px;
  height: 35px;

  top: 20px;
  right: 20px;
  z-index: 333;

  background: none;
  border: none;
}

.modal-close svg {
  width: 100%;
  height: 100%;
  fill: #ffffff;
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
      [...document.querySelectorAll(".modal-backdrop.show")].forEach(
        (item) => (item.style.display = "none"),
      );

      document.body.style.overflow = "auto";
      document.body.style.padding = "0";
      document.body.classList.remove("modal-open");
    },
    sendResult(typeStr) {
      this.$emit("onReviewResult", {
        type: typeStr,
      });
    },
    async createFeedback() {
      const response = await fetch("/api.php", {
        body: JSON.stringify({
          action: "createFeedback",
          username: document.getElementById("username").value,
          code: document.getElementById("code").value,
          text: document.getElementById("text").value,
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
