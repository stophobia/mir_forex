<template>
  <ul class="table__header">
    <li>
      <p>
        <span>GMT</span>
        <span>+3:00</span>
      </p>
    </li>
    <li>
      <p>Оставшееся время</p>
    </li>
    <li>
      <p>Валюта</p>
    </li>
    <li>
      <p>Волатильность</p>
    </li>
    <li>
      <p>Событие</p>
    </li>
    <li>
      <p>Фактическое значение</p>
    </li>
    <li>
      <p>Прогноз</p>
    </li>
    <li>
      <p>Предыдущее значение</p>
    </li>
  </ul>
</template>

<style scoped>
.table__header {
  display: grid;
  width: 100%;
  grid-template-columns: 0.05fr 0.2fr 0.1fr 0.1fr 0.3fr 0.1fr 0.1fr 0.1fr 0.1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;
  padding: 0;
}

.table__header li:nth-child(5) p {
  text-align: start;
}

p {
  background: none!important;
  color: white!important;
  padding: 0!important;
}
</style>
