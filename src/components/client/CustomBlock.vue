<template>
  <div class="card">
    <div class="card-body text-center">
      <h5 class="fw-bolder mb-3 text-white">{{ title }}</h5>
      <p class="text-muted">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: ["title", "text"],
  methods: {
    openWindow() {
      this.$emit("supportDataRes", {
        title: this.title,
        text: this.text,
      });
    },
  },
};
</script>

<style scoped>
.card {
  background-color: rgb(12, 16, 34);
  border: 1px dashed rgb(35, 61, 163);
  color: #fff;
  height: calc(278px + 3rem);
  overflow-y: hidden;
}
.down {
  border: none !important;
  background-color: transparent !important;
  outline: none !important;
  color: #fff;
  position: absolute;
  z-index: 999;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.card-body {
  padding: 20px;
  color: rgba(255, 255, 255, 0.5);
}
.text-muted {
  color: rgba(255, 255, 255, 0.5) !important;
}
h5 {
  font-size: 20px;
}
p {
  font-size: 12px;
}

@media screen and (min-width: 1600px) {
  .card p {
    font-size: 13px !important;
  }
}

@media screen and (min-width: 1800px) {
  .card p {
    font-size: 14px !important;
  }
}
</style>
