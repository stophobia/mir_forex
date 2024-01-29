<template>
  <div class="table__item__list">
    <Item v-for="event in eventList" :event="event"/>
  </div>
</template>

<style scoped>
.table__item__list {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 0;

  background: none;
}
</style>
<script setup>
import Item from "@/components/client/EconomicCalendar/Table/Body/Item/List/Item.vue";
import {defineProps} from "vue";

const {eventList} = defineProps(["eventList"])
console.log("eventList", eventList)
</script>