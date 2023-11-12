<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex">
        <p class="mb-0 fw-bolder d-inline-block">{{ name }}</p>
        <p
          class="mb-0 d-inline-block ms-auto me-0 fw-bolder text-uppercase text-muted"
        >
          {{ code }}
        </p>
      </div>
      <p class="mb-0 text-muted ms-0 me-0 text-left">{{ date }}</p>
    </div>
    <div class="card-body" v-bind:class="{ 'long-text': long }">
      <button
        class="down"
        data-bs-toggle="modal"
        data-bs-target="#reviewModal"
        style="z-index: 99"
        v-on:click="openWindow()"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          size="xl"
          style="color: rgba(255, 255, 255, 0.3)"
        />
      </button>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      long: false,
    };
  },
  mounted() {
    if (this.text.length > 200) {
      this.long = true;
    }
  },
  props: ["name", "date", "code", "text"],
  methods: {
    openWindow() {
      this.$emit("reviewData", {
        name: this.name,
        date: this.date,
        text: this.text,
      });
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(12, 16, 34);
  border: 1px solid rgb(35, 61, 163);
  color: #fff;
  height: 300px;
  overflow-y: hidden;
  min-width: 282px;
}
.long-text:before {
  content: "";
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  background: linear-gradient(transparent 50.42%, rgb(12, 16, 34) 82%);
}
.down {
  border: none !important;
  background-color: transparent !important;
  outline: none !important;
  color: #fff;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.card-body > .down {
  display: none;
}
.long-text > .down {
  display: block !important;
}
.card-header {
  background-image: linear-gradient(
    160deg,
    rgb(12, 16, 34),
    rgb(24, 33, 70) 80.25%
  );
  border-bottom: 1px solid rgb(35, 61, 163);
  padding: 25px;
  text-align: left;
}
.card-body {
  padding: 30px;
  color: rgba(255, 255, 255, 0.5);
}
.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
}
.modal {
  z-index: 1200 !important;
}
</style>
