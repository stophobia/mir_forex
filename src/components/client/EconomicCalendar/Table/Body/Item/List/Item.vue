<template>
  <Dropdown
    :activeDropdownStyles="{ backgroundColor: 'rgba(17, 17, 47, 0.6)' }"
    :dropdownStyles="{ borderRadius: '10px' }"
  >
    <template v-slot:header>
      <ul class="table__item__list__item--list">
        <li>
          <p>00:30</p>
        </li>
        <li>
          <p>00:30</p>
        </li>
        <li>
          <p>
            <img src="/country/RU.svg" alt="" class="flag" />
            <span>USD</span>
          </p>
        </li>
        <li>
          <p>
            <img src="/icons/fire.svg" alt="" />
            <img src="/icons/fire-extinct.svg" alt="" />
            <img src="/icons/fire-extinct.svg" alt="" />
          </p>
        </li>
        <li>
          <p>
            <a href="">
              Отчет Американского нефтяного института (API) по запасам нефти
              (США)
            </a>
          </p>
        </li>
        <li>
          <p>-5,215</p>
        </li>
        <li>
          <p>-1,20</p>
        </li>
        <li>
          <p>-7,418</p>
        </li>
        <li>
          <p>
            <img src="/icons/chevron-down.svg" alt="" />
          </p>
        </li>
      </ul>
    </template>
    <template v-slot:main>
      <div class="table__item__list__item__description">
        <p>
          Еженедельный бюллетень API содержит федеральные и региональные данные
          США по производству четырех основных нефтепродуктов: бензина,
          керосина, дистиллятов и мазутному топливу. Данные виды нефтепродуктов
          составляют более 85% от всей отрасли.
        </p>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped>
p {
  margin: 0;
}

.table__item__list__item--list {
  display: grid;
  width: 100%;
  grid-template-columns: 0.05fr 0.2fr 0.1fr 0.1fr 0.3fr 0.1fr 0.1fr 0.1fr 0.1fr;
  gap: 10px;
  align-items: center;

  color: white;
  text-align: center;
}

.table__item__list__item--list,
.table__item__list__item__description {
  padding: 12px;
}

.table__item__list__item--list:hover {
  background-color: rgba(17, 17, 47, 0.6);
}

.table__item__list__item__description {
  color: white;
}

.table__item__list__item--list p {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.table__item__list__item--list li:nth-child(5) p {
  text-align: start;
}

a {
  color: white !important;
}

.flag {
  display: block;
  width: 24px;
  height: 24px;

  border-radius: 50%;
}
</style>

<script setup>
import Dropdown from "@/components/UI/Dropdown.vue";
</script>
