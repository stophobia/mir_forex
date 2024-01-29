<template>
  <div class="table__main">
    <Item v-for="event in Object.keys(events)" :key="event" :event="events[event]" :date="event"/>
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
import {defineProps} from "vue";

const {events} = defineProps(["events"])
console.log("events", events)
</script>