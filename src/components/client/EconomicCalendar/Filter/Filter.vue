<template>
  <Country :tabs="countries" @updateTabs="updateFilterCountries"/>
  <Settings @updateCategories="updateFilterCategories" @updateVolatility="updateFilterVolatility"
            :volatilitySelected="volatility" :categoriesSelected="categories"/>
  <div class="filter">
    <div class="filter__left">
      <div class="not-flag">
        <font-awesome-icon :icon="['fat', 'globe']"/>
      </div>
      <div
          class="selected-flags"
          data-bs-toggle="modal"
          data-bs-target="#country"
      >
        <ul class="filter-select-flags">
          <li v-for="tab in lastThreeTabs()" :key="tab.code">
            <img class="flag" :src="`/country/${tab.code}.svg`" alt=""/>
          </li>
          <li v-if="countries.length > 0">
            <span class="count">+{{ countries.length }}</span>
          </li>
          <li v-if="countries.length === 0">
            <img class="flag" src="/icons/globe.svg" alt=""/>
          </li>
        </ul>
      </div>
      <button class="filter__middle--day">
        <img src="/icons/fire.svg" alt="">
        <span>Только важное</span>
      </button>
      <button
          class="filter__middle--day"
          data-bs-toggle="modal"
          data-bs-target="#settings"
      >
        <img src="/icons/settings.svg" alt=""/>
        <span>Настройки</span>
      </button>
    </div>
    <span class="filter--separator"></span>
    <div class="filter__middle">
      <button class="filter__middle--day" :class="{'active': panelDate.yesterdayDate}" @click="selectDate"
              id="yesterdayDate" :data-date="getDynamicDate(-1)">Вчера
      </button>
      <button class="filter__middle--day" :class="{'active': panelDate.todayDate}" @click="selectDate" id="todayDate"
              :data-date="getDynamicDate(0)">Сегодня
      </button>
      <button class="filter__middle--day" :class="{'active': panelDate.tomorrowDate}" @click="selectDate"
              id="tomorrowDate" :data-date="getDynamicDate(1)">Завтра
      </button>
      <button class="filter__middle--day" :class="{'active': panelDate.thisWeekDate}" @click="selectDate"
              id="thisWeekDate" :data-date="getDynamicWeekRange()">Эта неделя
      </button>
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
          ref="datepicker"
          @blur="selectDate"
      />
    </div>
    <span class="filter--separator"></span>
    <div class="filter__right">
      <Dropdown :bodyStyles="{position: 'absolute', zIndex: '9999', left: '50%', transform: 'translateX(-50%)'}">
        <template v-slot:header>
          <button class="utc">
            <img src="/icons/clock.svg" alt=""/>
            <span>{{ timezone }}</span>
          </button>
        </template>
        <template v-slot:main>
          <div class="utc__body">
            <button class="utc" v-for="timezone in timezones" :key="timezone.title" @click="selectTimezone"
                    :id="timezone.title">
              <img src="/icons/clock.svg" alt=""/>
              <span>{{ timezone.title }}</span>
            </button>
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.utc__body {
  background-color: rgb(12 26 80 / 85%);
  max-height: 300px;
  overflow-y: auto;
  border-radius: 10px;
  margin-top: 10px;
}

.utc__body::-webkit-scrollbar {
  width: 10px;
  background-color: rgba(41, 61, 138, 0.4);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
}

.utc__body::-webkit-scrollbar-thumb {
  background: #555;
}

button {
  outline: 0;
  background: none;
  border: none;
  color: black!important;
  cursor: pointer;
}

.main.dark button {
  color: white!important;
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

.dp-custom-input::placeholder {
  opacity: 1;
}

.dp-custom-input:hover {
  background-color: rgba(41, 61, 138, 0.4);
}

.dp-custom-input::placeholder {
  font-weight: 500;
  color: black;
  font-family: inherit;
}

.main.dark .dp-custom-input::placeholder {
  color: #ffffffac;
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

.dp__action_buttons {
  gap: 7px;
}

.dp__action_select,
.dp__range_between {
  background-color: rgba(41, 61, 138, 0.4);
  color: white !important;
  border: none;
  padding: 7px 15px !important;
  font-size: 14px;
  height: auto;
}

.dp__action_cancel {
  padding: 7px 15px !important;
  font-size: 14px;
  height: auto;
  color: white !important;
}

.dp__arrow_top {
  display: none;
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

.filter__left .settings {
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
  margin: 0;
  padding: 0;
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
.filter__left .settings:hover,
.filter__left .settings.active,
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

  border-radius: 0;

  transition: all 0.3s ease;
}

.header .utc {
  border-radius: 10px;
}
</style>
<script setup>
import Country from "@/components/client/EconomicCalendar/Modals/Country.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import timezones from "@/components/client/EconomicCalendar/Filter/timezones.mjs";

import {ref, onMounted, defineProps, defineEmits} from "vue";
import Dropdown from "@/components/UI/Dropdown.vue";
import Settings from "@/components/client/EconomicCalendar/Modals/Settings.vue";

const emit = defineEmits();
const date = ref();
const datepicker = ref(null);
const panelDate = ref({
  yesterdayDate: false,
  todayDate: false,
  tomorrowDate: false,
  thisWeekDate: false,
});
const {
  countries,
  updateFilterCountries,
  startDay,
  endDay,
  timezone,
  updateFilterCategories,
  updateFilterVolatility,
  categories,
  volatility
} = defineProps(["countries", "updateFilterCountries", "startDay", "endDay", "timezone", "updateFilterCategories", "updateFilterVolatility", "categories", "volatility"]);

const clearDatapicker = () => {
  if (datepicker) {
    datepicker.value.clearValue()
  }
}
const selectDate = (e) => {
  if (e && e.target) {
    const panelDateItem = e.target.dataset.date;
    const id = e.target.id;

    for (const key in panelDate.value) {
      panelDate.value[key] = key === id;
    }

    if (date.value) clearDatapicker();

    const dateParts = panelDateItem.split("-");

    emit("updateFilterDate", dateParts[0], dateParts[1])

    return;
  }

  if (!date.value) {
    return;
  }
  const startDay = formatDate(date.value[0]);
  const endDay = date.value[1] ? formatDate(date.value[1]) : startDay;

  emit("updateFilterDate", startDay, endDay);

  if (startDay && endDay) {
    for (const key in panelDate.value) {
      panelDate.value[key] = false;
    }
  }
}


function getDynamicDate(dayDifference) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + dayDifference);
  const formattedDate = formatDate(currentDate);
  return `${formattedDate}-${formattedDate}`;
}

function getDynamicWeekRange() {
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (7 - currentDate.getDay()));
  return `${formatDate(startOfWeek)}-${formatDate(endOfWeek)}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${day}.${month}.${year}`;
}

function selectTimezone(e) {
  if (!e) return;

  const id = e.target.className.includes("utc") ? e.target.id : e.target.closest(".utc").id;
  emit("updateFilterTimezone", id);
}

const format = (date) => {
  const startDate = {
    day: date[0]?.getDate(),
    month: date[0]?.getMonth() + 1,
    year: date[0]?.getFullYear(),
  };
  const endDate = {
    day: "",
    month: "",
    year: "",
  };

  if (date[1]) {
    endDate.day = date[1]?.getDate();
    endDate.month = date[1]?.getMonth() + 1;
    endDate.year = date[1]?.getFullYear();
  } else {
    endDate.day = date[0]?.getDate();
    endDate.month = date[0]?.getMonth() + 1;
    endDate.year = date[0]?.getFullYear();
  }

  return `${String(startDate.day).padStart(2, '0')}.${String(startDate.month).padStart(2, '0')}.${startDate.year} - ${String(endDate.day).padStart(2, '0')}.${String(endDate.month).padStart(2, '0')}.${endDate.year}`;
};

const lastThreeTabs = () => {
  console.log("countries.slice(-3)", countries.slice(-3));
  return countries.slice(-3);
}
</script>

<script>
import CountryFlag from "vue-country-flag-next";

export default {
  components: {
    CountryFlag,
  },
  methods: {},
  computed: {},
  mounted() {
  },
};
</script>
