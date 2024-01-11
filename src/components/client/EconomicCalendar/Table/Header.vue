<template>
  <ul class="table__header">
    <li>
      <p>
        <span>GMT</span>
        <span>+3:00</span>
      </p>
    </li>
    <li>
      <p>
        Оставшееся время
      </p>
    </li>
    <li>
      <p>
        Валюта
      </p>
    </li>
    <li>
      <p>
        Волатильность
      </p>
    </li>
    <li>
      <p>
        Событие
      </p>
    </li>
    <li>
      <p>
        Фактическое значение
      </p>
    </li>
    <li>
      <p>
        Прогноз
      </p>
    </li>
    <li>
      <p>
        Предыдущее значение
      </p>
    </li>
    <li>
      <p>
      </p>
    </li>
  </ul>
</template>

<style scoped>
.table__header {
  display: grid;
  width: 100%;
  grid-template-columns: .05fr .1fr .1fr .1fr .3fr .1fr .1fr .1fr .1fr .1fr;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}

p {
  background: none;
  color: white;
}
</style>