<template>
  <div class="table__main">
    <Item/>
  </div>
</template>

<style scoped>
.table__main {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
<script setup>
import Item from "@/components/client/EconomicCalendar/Table/Body/Item/Item.vue";
</script>