<template>
  <div class="dropdown" :class="{active: isOpen}" :style="calculateStyles()">
    <header class="header" :style="isOpen ? activeHeaderStyles : {}" @click="toggle">
      <slot name="header"></slot>
    </header>
    <main class="main" :style="{ maxHeight: contentHeight + 'px', ...(this.isOpen ? this.bodyActiveStyles : {}), ...this.bodyStyles }" ref="dropdownContent" @click="toggle">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped>
.dropdown {
  width: fit-content;
  background: none;
  padding: 0;
}

.header {
  background: none;

  cursor: pointer;
}

.main {
  overflow: hidden;

  transition: max-height .3s ease;
}
</style>

<script>
export default {
  name: "Dropdown",
  props: {
    activeDropdownStyles: Object,
    activeHeaderStyles: Object,
    dropdownStyles: Object,
    hoverHeaderStyles: Object,
    bodyActiveStyles: Object,
    bodyStyles: Object,
  },
  data() {
    return {
      isOpen: false,
      contentHeight: 0,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      this.calculateContentHeight();
    },
    calculateStyles() {
      return {
        ...this.dropdownStyles,
        ...(this.isOpen ? this.activeDropdownStyles : {}),
      };
    },
    calculateContentHeight() {
      this.$nextTick(() => {
        const content = this.$refs.dropdownContent;
        console.log(content, content.scrollHeight)
        this.contentHeight = this.isOpen ? content.scrollHeight : 0;
      });
    },
  }
}
</script>