<template>
  <div class="table">
    <Header/>
    <Body :events="events"/>
  </div>
</template>

<style scoped>

</style>
<script setup>
import Body from "@/components/client/EconomicCalendar/Table/Body/Body.vue";
import Header from "@/components/client/EconomicCalendar/Table/Header.vue";
import {defineProps} from "vue";

const {events} = defineProps(["events"])
</script>