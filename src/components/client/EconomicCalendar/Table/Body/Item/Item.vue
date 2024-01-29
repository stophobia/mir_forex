<template>
  <div class="table__item">
    <header class="table__item--header">{{ formatDate(date) }}</header>
    <List :eventList="event"/>
  </div>
</template>

<style scoped>
.table__item--header {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;

  border-radius: 10px;
  background-color: rgba(41, 61, 138, 0.4);
  color: black;
  text-transform: capitalize;
}

.main.dark .table__item--header {
  color: white;
}
</style>
<script setup>
import List from "@/components/client/EconomicCalendar/Table/Body/Item/List/List.vue";
import {defineProps} from "vue";

const {event, date} = defineProps(["event", "date"])
console.log("event", event)
console.log("date", date)

function formatDate(inputDate) {
  const [year, month, day] = inputDate.split('.').map(Number);
  const date = new Date(year, month - 1, day);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return formatter.format(date);
}
</script>
