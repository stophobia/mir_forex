<template>
  <div class="dropdown" :class="{active: isOpen}" :style="calculateStyles()">
    <header class="header" :style="isOpen ? activeHeaderStyles : {}" @click="toggle">
      <slot name="header"></slot>
    </header>
    <main class="main" :style="{ maxHeight: contentHeight + 'px' }" ref="dropdownContent">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped>
.dropdown {
  width: fit-content;
  background: none;
  padding: 0;
  overflow: hidden;
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