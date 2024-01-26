<template>
  <div
    class="modal fade"
    id="settings"
    tabindex="-1"
    aria-labelledby="settings"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="header">
          <h3>Настройки</h3>
          <button
            class="modal-close"
            data-bs-toggle="modal"
            data-bs-target="#settings"
          >
            <img src="/icons/xmark.svg" alt="" />
          </button>
        </div>
        <div class="content">
          <div class="content__item">
            <div class="row--header">
              <h5>Категории</h5>
              <button class="select__list--item">
                <img src="/icons/checkbox.svg" alt="" />
                <span>Выбрать все</span>
              </button>
            </div>
            <div class="select__list">
              <button
                  class="select__list--item"
                  v-for="item in categories"
                  :key="item.id"
              >
                <span class="name">{{ item.title }}</span>
              </button>
            </div>
          </div>
          <div class="content__item">
            <div class="row--header">
              <h5>Волатильность</h5>
              <button class="select__list--item">
                <img src="/icons/checkbox.svg" alt="" />
                <span>Выбрать все</span>
              </button>
            </div>
            <div class="select__list">
              <button
                  class="select__list--item"
                  v-for="item in volatility"
                  :key="item.value"
              >
                <span class="name">{{ item.title }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 0;
}

input {
  outline: 0;
  background: none;
  border: none;
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}

.row--header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.modal-content {
  background-color: rgba(17, 17, 47, 0.9);
  color: #fff;
  padding: 20px;
}

.modal.show .modal-dialog {
  width: 50%;
  padding: 0;
  margin: 30px auto;
  max-width: 100%;
}

.modal-body img {
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-close {
  width: 30px;
  height: 30px;
}

.modal-close img {
  width: 100%;
  height: 100%;
}

.search {
  width: 100%;
  position: relative;
}

.search img {
  position: absolute;
  width: auto;
  height: 20px;

  top: 50%;
  left: 10px;

  transform: translateY(-50%);
}

.search input {
  width: 100%;
  padding: 10px 35px;

  border: 2px solid #293d8a;
  border-radius: 5px;
  color: white;

  transition: all 0.3s ease;
}

.search input:focus {
  box-shadow: 0 0 0 0.15rem rgba(13, 110, 253, 0.25);
}

.flag {
  display: block;
  width: 20px;
  height: 20px;

  border-radius: 5px;
  background-color: rgba(121, 119, 119, 0.6);
}

.tabs-list {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin-top: 10px;
}

.tab {
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 3px 5px;
  width: fit-content;

  border-radius: 5px;
  background-color: rgba(18, 52, 189, 0.4);
}

.quick-choice {
  display: flex;
  column-gap: 10px;
  margin: 40px 0;
}

.quick-choice button {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 7px 15px;

  border-radius: 7px;
  background-color: rgba(41, 61, 138, 0.2);

  transition: all 0.3s ease;
}

.quick-choice button:hover,
.quick-choice button.active {
  background-color: rgba(18, 52, 189, 0.4);
}

.select__list {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.select__list--item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 7px 15px;

  border-radius: 7px;
  background-color: rgba(41, 61, 138, 0.2);

  transition: all 0.3s ease;
}

.select__list--item:hover,
.select__list--item.active {
  background-color: rgba(18, 52, 189, 0.4);
}

.select__list--item .flag {
  width: 24px;
  height: 24px;
}

@media (max-width: 1200px) {
  .modal.show .modal-dialog {
    width: 100%;
  }
}
</style>
<script setup>
import { countries } from "@/components/client/EconomicCalendar/Filter/countries";
import categories from "@/components/client/EconomicCalendar/Filter/categories";
import { ref, defineProps, defineEmits, computed } from "vue";
import volatility from "@/components/client/EconomicCalendar/Filter/volatility";

const { tabs } = defineProps(["tabs"]);
const emit = defineEmits();

const searchText = ref("");

function toggleCountry(country) {
  const index = tabs.findIndex((tab) => tab.code === country.code);

  if (index === -1) {
    tabs.push(country);
  } else {
    tabs.splice(index, 1);
  }
  emit("updateTabs", tabs);
}
function isCountrySelected(country) {
  return tabs.some((tab) => tab.code === country.code);
}
function removeTab(tab) {
  const index = tabs.indexOf(tab);
  if (index !== -1) {
    tabs.splice(index, 1);
    emit("updateTabs", tabs);
  }
}
function selectAllCountries() {
  if (tabs.length === countries.length) {
    tabs.splice(0, tabs.length);
  } else {
    const newCountries = countries.filter(
      (country) => !isCountrySelected(country),
    );
    tabs.push(...newCountries);
  }
  emit("updateTabs", tabs);
}
const filteredCountries = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchLowerCase) ||
      country.code.toLowerCase().includes(searchLowerCase),
  );
});
</script>
