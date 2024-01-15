<template>
  <Country :tabs="tabs" @updateTabs="updateTabs" />
  <div class="filter">
    <div class="filter__left">
      <div class="not-flag">
        <font-awesome-icon :icon="['fat', 'globe']" />
      </div>
      <div
        class="selected-flags"
        data-bs-toggle="modal"
        data-bs-target="#country"
      >
        <ul class="filter-select-flags">
          <li v-for="tab in lastThreeTabs" :key="tab.code">
            <img class="flag" :src="`/public/country/${tab.code}.svg`" alt="" />
          </li>
          <li v-if="tabs.length > 0">
            <span class="count">+{{ tabs.length }}</span>
          </li>
          <li v-if="tabs.length === 0">
            <img class="flag" src="/icons/globe.svg" alt="" />
          </li>
        </ul>
      </div>
      <button class="volatility">
        <img src="/icons/settings.svg" alt="" />
        <span>Настройки</span>
      </button>
    </div>
    <span class="filter--separator"></span>
    <div class="filter__middle">
      <button class="filter__middle--day">Вчера</button>
      <button class="filter__middle--day">Сегодня</button>
      <button class="filter__middle--day">Завтра</button>
      <button class="filter__middle--day">Эта неделя</button>
      <VueDatePicker
        v-model="date"
        range
        multi-calendars
        dark
        locale="ru"
        :format="format"
        cancelText="Отмена"
        selectText="Выбрать"
        :enable-time-picker="false"
        placeholder="Выберите период"
        input-class-name="dp-custom-input"
        menu-class-name="dp-custom-menu"
        calendar-class-name="dp-custom-calendar"
      />
    </div>
    <span class="filter--separator"></span>
    <div class="filter__right">
      <button class="utc">
        <img src="/icons/clock.svg" alt="" />
        <span>19:17 (UTC+3)</span>
      </button>
    </div>
  </div>
</template>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

button {
  outline: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.dp__main {
  width: fit-content;
}

.dp-custom-input {
  background: none;
  border: none;
  width: fit-content;

  font-weight: 500;
  color: #ffffffac;
  font-family: inherit;
  border-radius: 7px;

  transition: all 0.3s ease;
}

.dp-custom-input:hover {
  background-color: rgba(41, 61, 138, 0.4);
}

.dp-custom-input::placeholder {
  font-weight: 500;
  color: #ffffffac;
  font-family: inherit;
}

.dp__input_icon {
  fill: #1e3050;
}

/*.dp__pointer.dp-custom-input {
  background-color: rgba(41, 61, 138, 0.4);
}*/

.dp__menu {
  background-color: rgba(17, 17, 47, 0.96);
  border: none;
  color: white;
  border-radius: 10px;
}

.dp__calendar_item {
  color: white;
}

.dp__calendar_header_separator {
  background-color: #293d8a;
}

.dp__calendar_header_item {
  color: white;
}

.dp__month_year_select:hover {
  background-color: rgba(41, 61, 138, 0.4);
  color: white;
}

.dp__action_select,
.dp__range_between {
  background-color: rgba(41, 61, 138, 0.4);
  color: white;
  border: none;
}

.dp__calendar_next {
  margin-left: 20px;
}

.filter {
  width: 100%;
  display: flex;
  column-gap: 20px;
  align-items: center;

  font-weight: 500;
  color: #ffffffac;
}

.filter button {
  font-weight: 500;
  color: #ffffffac;
}

.filter--separator {
  display: block;
  width: 2px;
  height: 20px;

  background-color: rgba(121, 119, 119, 0.6);
}

.selected-flags {
  display: flex;
  align-items: center;

  cursor: pointer;
}

.filter__left {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.filter__left .volatility {
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 3px 12px;

  border-radius: 10px;

  transition: all 0.3s ease;
}

.filter-select-flags {
  display: flex;
  align-items: center;
}

.filter-select-flags li {
  margin-left: -4px;
}

.filter-select-flags li:first-child {
  margin-left: 0;
}

.filter-select-flags .flag {
  display: block;
  width: 24px;
  height: 24px;

  border-radius: 50%;
}

.filter-select-flags .count {
  min-width: 24px;
  width: auto;
  height: 24px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 38%;
  background-color: #2962ff;
}

.filter__middle {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.filter__middle--day {
  display: flex;
  padding: 6px 12px;
  column-gap: 10px;
  align-items: center;

  border-radius: 10px;
  background: none;
  cursor: pointer;

  transition: all 0.3s ease;
}

.filter__middle--day:hover,
.filter__middle--day.active,
.filter__right .categories:hover,
.filter__right .categories.active,
.filter__left .volatility:hover,
.filter__left .volatility.active,
.filter__right .utc:hover,
.filter__right .utc.active {
  background-color: rgba(41, 61, 138, 0.4);
}

.filter__right {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.filter__right .categories,
.filter__right .utc {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 6px 12px;

  border-radius: 10px;

  transition: all 0.3s ease;
}
</style>
<script setup>
import Country from "@/components/client/EconomicCalendar/Modals/Country.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import { ref, onMounted } from "vue";

const date = ref();

const format = (date) => {
  console.log("date", date);
  const startDate = {
    day: date[0].getDate(),
    month: date[0].getMonth() + 1,
    year: date[0].getFullYear(),
  };
  const endDate = {
    day: date[1].getDate(),
    month: date[1].getMonth() + 1,
    year: date[1].getFullYear(),
  };

  return `${startDate.day}.${startDate.month}.${startDate.year} - ${endDate.day}.${endDate.month}.${endDate.year}`;
};
</script>

<script>
import CountryFlag from "vue-country-flag-next";
export default {
  components: {
    CountryFlag,
  },
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    updateTabs(newTabs) {
      this.tabs = newTabs;
    },
  },
  computed: {
    lastThreeTabs() {
      return this.tabs.slice(-3);
    },
  },
  mounted() {},
};
</script>
