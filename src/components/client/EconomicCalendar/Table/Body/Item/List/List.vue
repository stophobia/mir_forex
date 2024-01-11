<template>
  <div class="table__item__list">
    <Item/>
    <Item/>
  </div>
</template>

<style scoped>
.table__item__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  background: none;
}
</style>
<script setup>
import Item from "@/components/client/EconomicCalendar/Table/Body/Item/List/Item.vue";
</script>