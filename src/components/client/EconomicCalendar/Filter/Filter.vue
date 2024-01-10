<template>
  <div class="filter">
    <div class="filter__left">
      <div class="not-flag">
        <font-awesome-icon
        :icon="['fat', 'globe']"/>
      </div>
      <div class="selected-flags">
        <ul class="filter-select-flags">
          <li>
            <span class="flag"></span>
          </li>
          <li>
            <span class="flag"></span>
          </li>
          <li>
            <span class="flag"></span>
          </li>
          <li>
            <span class="count">+12</span>
          </li>
        </ul>
      </div>
      <button class="volatility">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
          <path fill="currentColor" fill-rule="evenodd"
                d="M16 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h4v-3a1 1 0 0 1 1-1h4V7Zm-4 4v10h4V11h-4Zm-1 4H7v6h4v-6Zm10 6h-4V7h4v14Z"></path>
        </svg>
        <span>Волатильность</span>
      </button>
    </div>
    <span class="filter--separator"></span>
    <div class="filter__middle">
      <button class="filter__middle--day">Вчера</button>
      <button class="filter__middle--day">Сегодня</button>
      <button class="filter__middle--day">Завтра</button>
      <button class="filter__middle--day">Эта неделя</button>
      <button class="filter__middle--day">
        <img src="/icons/calendar.svg" alt=""/>
        <span>Выберите период</span>
      </button>
    </div>
    <span class="filter--separator"></span>
    <div class="filter__right">
      <button class="categories">
        <img src="/icons/list.svg" alt=""/>
        <span>Категории</span>
      </button>
      <button class="utc">
        <img src="/icons/clock.svg" alt=""/>
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

  transition: all .3s ease;
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
  background-color: rgba(121, 119, 119, 0.6);
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

  transition: all .3s ease;
}

.filter__middle--day:hover,
.filter__middle--day.active,
.filter__right .categories:hover,
.filter__right .categories.active,
.filter__left .volatility:hover,
.filter__left .volatility.active,
.filter__right .utc:hover,
.filter__right .utc.active {
  background-color: rgba(240, 243, 250, 0.6);
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

  transition: all .3s ease;
}
</style>