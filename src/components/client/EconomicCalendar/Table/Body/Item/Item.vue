<template>
  <div class="table__item">
    <header class="table__item--header">Среда, 10 Января 2024 г.</header>
    <List />
  </div>
</template>

<style scoped>
.table__item--header {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;

  border-radius: 10px;
  background-color: rgba(41, 61, 138, 0.4);
  color: white;
}
</style>
<script setup>
import List from "@/components/client/EconomicCalendar/Table/Body/Item/List/List.vue";
</script>
