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
          <h2>Настройки</h2>
          <button
              class="modal-close"
              data-bs-toggle="modal"
              data-bs-target="#settings"
          >
            <img src="/icons/xmark.svg" alt=""/>
          </button>
        </div>
        <div class="content">
          <div class="content__item">
            <div class="row__header">
              <h4>Категории</h4>
              <div class="row__header--btns">
                <button class="select__list--item" @click="selectAllCategories">
                  <span>Выбрать все</span>
                </button>
                <button class="select__list--item" @click="clearAll('updateCategories')">
                  <span>Очистить</span>
                </button>
              </div>
            </div>
            <div class="select__list categories">
              <div
                  class="select__list--item"
                  v-for="item in categoriesSelected"
                  :key="item.id"
                  @click="toggleCategory(item)"
              >
                <div class="checkbox-wrapper-65">
                  <label for="cbk1-65">
                    <input type="checkbox" id="cbk1-65" :checked="item.active">
                    <span class="cbx">
                      <svg width="12px" height="11px" viewBox="0 0 12 11">
                       <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
                <span class="name">{{ item.title }}</span>
              </div>
            </div>
          </div>
          <div class="content__item">
            <div class="row__header">
              <h4>Волатильность</h4>
              <div class="row__header--btns">
                <button class="select__list--item" @click="selectAllVolatility">
                  <span>Выбрать все</span>
                </button>
                <button class="select__list--item" @click="clearAll('updateVolatility')">
                  <span>Очистить</span>
                </button>
              </div>
            </div>
            <div class="select__list">
              <div
                  class="select__list--item"
                  v-for="item in volatilitySelected"
                  :key="item.value"
                  @click="toggleVolatility(item)"
              >
                <div class="checkbox-wrapper-65">
                  <label for="cbk1-65">
                    <input type="checkbox" id="cbk1-65" :checked="item.active">
                    <span class="cbx">
                      <svg width="12px" height="11px" viewBox="0 0 12 11">
                       <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
                <div>
                  <img v-for="icon in volatilityGenerate(item.value)" data-v-6f7a99de="" :src="`/icons/${icon}.svg`"
                       alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__footer">
          <button class="btn--update"
                  data-bs-toggle="modal"
                  data-bs-target="#settings">Обновить
          </button>
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

.row__header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.row__header h4 {
  margin: 0 !important;
}

.row__header--btns {
  display: flex;
  align-items: center;
  gap: 7px;
}

.modal-content {
  background-color: rgba(17, 17, 47, 0.9);
  color: #fff;
  padding: 30px;
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
  margin-bottom: 30px;
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

.select__list.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.select__list--item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 7px 15px;

  cursor: pointer;
  border-radius: 7px;
  background-color: rgba(41, 61, 138, 0.2);

  transition: all 0.3s ease;
}

.select__list--item input {
  padding: 0;
  margin: 0;
}

.select__list--item div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.select__list--item:hover,
.select__list--item.active {
  background-color: rgba(18, 52, 189, 0.4);
}

.select__list--item .flag {
  width: 24px;
  height: 24px;
}

.select__list--item input {
  min-width: 15px;
  min-height: 15px;
  width: 15px;
  height: 15px;
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.btn--update {
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 18px 40px;
  width: fit-content;

  cursor: pointer;
  border-radius: 7px;
  background-color: rgba(18, 52, 189, 1);

  transition: all 0.3s ease;
}
.checkbox-wrapper-65 *,
.checkbox-wrapper-65 ::after,
.checkbox-wrapper-65 ::before {
  box-sizing: border-box;
}
.checkbox-wrapper-65 .cbx {
  position: relative;
  display: block;
  float: left;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background-color: #38387587;
  background-image: linear-gradient(#7c7c92d4, #565667);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 1px rgba(0,0,0,0.15);
  //transition: all 0.15s ease;
}
.checkbox-wrapper-65 .cbx svg {
  position: absolute;
  top: 3px;
  left: 3px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #fff;
  stroke-width: 2;
  stroke-dasharray: 17;
  stroke-dashoffset: 17;
  transform: translate3d(0, 0, 0);
}
.checkbox-wrapper-65 .cbx + span {
  float: left;
  margin-left: 6px;
}
.checkbox-wrapper-65 {
  user-select: none;
}
.checkbox-wrapper-65 label {
  display: inline-block;
  cursor: pointer;
}
.checkbox-wrapper-65 input[type="checkbox"] {
  display: none;
  visibility: hidden;
}
.checkbox-wrapper-65 input[type="checkbox"]:checked + .cbx {
  background-color: #606062;
  background-image: linear-gradient(#255cd2, #1d52c1);
}
.checkbox-wrapper-65 input[type="checkbox"]:checked + .cbx svg {
  stroke-dashoffset: 0;
  //transition: all 0.15s ease;
}

@media (max-width: 1200px) {
  .modal.show .modal-dialog {
    width: 100%;
  }
}
</style>
<script setup>
import {countries} from "@/components/client/EconomicCalendar/Filter/countries";
import categories from "@/components/client/EconomicCalendar/Filter/categories";
import {ref, defineProps, defineEmits, computed} from "vue";
import volatility from "@/components/client/EconomicCalendar/Filter/volatility";

const {
  categoriesSelected,
  volatilitySelected,
} = defineProps(["categoriesSelected", "volatilitySelected"]);
const emit = defineEmits();

const searchText = ref("")

/*function removeTab(tab) {
  const index = tabs.indexOf(tab);
  if (index !== -1) {
    tabs.splice(index, 1);
    emit("updateTabs", tabs);
  }
}*/

/*function selectAllCategories() {
  if (tabs.length === countries.length) {
    tabs.splice(0, tabs.length);
  } else {
    const newCountries = countries.filter(
        (country) => !isCountrySelected(country),
    );
    tabs.push(...newCountries);
  }
  emit("updateTabs", tabs);
}*/
// function isSelected()
function selectAllCategories() {
  const updateCategories = categories.map(item => ({...item, active: true}))
  categories.forEach(item => item.active = true)

  emit("updateCategories", updateCategories)
}

function clearAll(event) {
  if (event === "updateCategories") {
    const updateCategories = categories.map(item => ({...item, active: false}))
    categories.forEach(item => item.active = false)
    emit(event, updateCategories)
  }
  if (event === "updateVolatility") {
    const updateVolatility = volatility.map(item => ({...item, active: false}))
    volatility.forEach(item => item.active = false)
    emit(event, updateVolatility)
  }
}

function selectAllVolatility() {
  const updateVolatility = volatility.map(item => ({...item, active: true}))
  volatility.forEach(item => item.active = true)

  emit("updateVolatility", updateVolatility)
}

function toggleCategory(category) {
  const index = categories.findIndex((item) => item.id === category.id);

  if (index === -1) return;

  const updateCategories = categories.map((item, i) => {
    if (i === index) item.active = !item.active
    return item;
  })

  emit("updateCategories", updateCategories);
}

function toggleVolatility(volatilityItem) {
  const index = volatility.findIndex((item) => item.value === volatilityItem.value);

  if (index === -1) return;

  const updateVolatility = volatility.map((item, i) => {
    if (i === index) item.active = !item.active
    return item;
  })

  emit("updateVolatility", updateVolatility);
}

function checkSelected(item, arrActive, field) {
  return arrActive.some((itemActive) => itemActive[field] === item[field]);
}

const filteredCountries = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return countries.filter(
      (country) =>
          country.name.toLowerCase().includes(searchLowerCase) ||
          country.code.toLowerCase().includes(searchLowerCase),
  );
});
const volatilityGenerate = (count) => {
  const fire = "fire";
  const fireExtinct = "fire-extinct";
  const result = [];

  for (let i = 0; i < 3; i++) {
    if (i < count) result.push(fire);
    else result.push(fireExtinct);
  }

  return result;
};
</script>
