<template>
  <div class="block" style="overflow-y: hidden">
    <div class="container" style="overflow-y: hidden">
      <div class="row" style="overflow-y: hidden">
        <div class="col-12 text-center" style="overflow-y: hidden">
          <img
            src="/full_logo_white.png"
            class="mb-4"
            style="max-width: 220px; overflow-y: hidden"
            data-aos="fade-up"
          />
          <h1
            class="fw-bolder text-white mt-3"
            data-aos="fade-up"
            style="overflow-y: hidden"
          >
            Часто задаваемые вопросы
          </h1>
          <button
            class="btn btn-light"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            data-aos="fade-up"
            style="overflow-y: hidden"
          >
            Смотреть
          </button>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-item-block">
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div
                class="accordion accordion-flush p-4"
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="col-11">
                          <p class="fw-bolder mb-0">
                            Как пройти у вас бесплатное обучение?
                          </p>
                          <!-- <p></p> -->
                        </div>
                        <div class="col-1 text-center">
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'plus']"
                              class="ms-auto me-auto iconPlus text-center"
                            />
                          </p>
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'minus']"
                              class="iconMinus text-center"
                            />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Для этого необходимо оставить заявку на нашем сайте в
                      разделе бесплатно или заказать обратный звонок. С Вами
                      свяжется специалист и проинформирует Вас подробнее о
                      курсе, предложит Вам удобное время для посещения и
                      назначит график занятий.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="col-11">
                          <p class="fw-bolder mb-0">
                            Почему с "МИР" сотрудничать надежно?
                          </p>
                          <!-- <p></p> -->
                        </div>
                        <div class="col-1 text-center">
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'plus']"
                              class="ms-auto me-auto iconPlus text-center"
                            />
                          </p>
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'minus']"
                              class="iconMinus text-center"
                            />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Во-первых, у компании "МИР" есть лицензия на осуществление
                      образовательной деятельности, с которой Вы можете
                      ознакомиться на нашем сайте. Во-вторых, компания "Мир"
                      является официальным представителем профессионального
                      участника рынка ценных бумаг "БКС", учредителем
                      которой является "БКС-Банк", входящий в банковскую
                      группу, головной компанией которой является AHB Holdings
                      S.A. "БКС" гарантирует безопасность на уровне
                      ведущих мировых банков с наивысшим рейтингом надежности и
                      предоставляет нашим клиентам широкий выбор инструментов
                      для торговли и лучший сервис.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="col-11">
                          <p class="fw-bolder mb-0">
                            Как проходит бесплатное обучение? Какие документы
                            необходимо предоставить для прохождения обучения?
                          </p>
                          <!-- <p></p> -->
                        </div>
                        <div class="col-1 text-center">
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'plus']"
                              class="ms-auto me-auto iconPlus text-center"
                            />
                          </p>
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'minus']"
                              class="iconMinus text-center"
                            />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Бесплатное обучение проходит в удобном для Вас режиме:
                      онлайн (skype, zoom) или офлайн в офисе компании. Все
                      обучение в нашей компании всегда происходит индивидуально,
                      мы не обучаем группами. Каждому ученику предоставляется
                      личный специалист, с которым Вы подберете для себя удобный
                      график обучения и удобное время для обучения. На этапе
                      обучения Вам зарегистрируют демо-счет, на котором Вы, в
                      течение всего обучения, будете тренироваться с Вашим
                      специалистом. Никакие документы для прохождения обучения
                      Вам не потребуются. Никакие договора на бесплатное
                      обучение не заключаются между клиентом и компанией.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFore"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="col-11">
                          <p class="fw-bolder mb-0">
                            Если я уже умею торговать и бесплатный пробный курс
                            мне не нужен, зачем мне обращаться в вашу компанию?
                          </p>
                          <!-- <p></p> -->
                        </div>
                        <div class="col-1 text-center">
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'plus']"
                              class="ms-auto me-auto iconPlus text-center"
                            />
                          </p>
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'minus']"
                              class="iconMinus text-center"
                            />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFore"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <p>
                        В компании "МИР", помимо пробного бесплатного курса,
                        есть также продвинутые занятия, которые проводятся с
                        аналитиком компании, на которых Вы работаете по
                        продвинутой программе:
                      </p>
                      <ul>
                        <li>Стартовое обучение трейдингу;</li>
                        <li>Продвинутое обучение трейдингу;</li>
                        <li>Профессиональное обучение трейдингу.</li>
                      </ul>
                      <p>
                        Подробнее с программами обучения Вы можете ознакомиться
                        на нашем сайте в разделе обучение . Здесь Вы найдете
                        подробные темы каждого занятия. Данные занятия проводит
                        ведущий аналитик компании. В качестве дополнительных
                        бонусов к обучению вы получаете доступ к ежедневной
                        аналитике, доступ к еженедельным вебинарам и обзорам
                        рынка. После прохождения "профессионального обучения" -
                        Вы получаете удостоверение о дополнительном
                        профессиональном образовании "Анализ финансовых рынков и
                        торговля финансовыми активами".
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFive"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="col-11">
                          <p class="fw-bolder mb-0">
                            Могу ли я отдать свои деньги под управление и
                            торговлю вашей компании "МИР"?
                          </p>
                          <!-- <p></p> -->
                        </div>
                        <div class="col-1 text-center">
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'plus']"
                              class="ms-auto me-auto iconPlus text-center"
                            />
                          </p>
                          <p class="text-center m-0 p-0">
                            <font-awesome-icon
                              :icon="['fas', 'minus']"
                              class="iconMinus text-center"
                            />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Нет, не можете. Компания "МИР" не принимает средства
                      клиентов на свои счета для торговли на рынке ценных бумаг,
                      не берет средства в управление и не гарантирует прямое или
                      косвенное получение дохода. Деятельность организации
                      строго ограничивается обучением, консультациями , а также
                      оказанием информационной и аналитической поддержки.
                      Торговые операции клиент проводит самостоятельно, на своем
                      торговом счете.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

* {
  transition: 0.3s !important;
}
.btn-light {
  background-image: linear-gradient(
    162deg,
    white 23.95%,
    rgba(52, 91, 219, 0.3)
  );
  border: none !important;
  margin-top: 50px;
  padding: 15px 90px !important;
  font-size: 16px;
  font-weight: 600;
}
@media screen and (min-width: 992px) {
  .block {
    margin-top: 100px;
    margin-bottom: 150px;
  }
}

.accordion-button,
.accordion-item {
  background-color: transparent !important;
  color: #fff;
  padding-bottom: 20px !important;
  padding-top: 20px;
}
.accordion-item {
  border-bottom: 1px solid #564dff6c !important;
}
.accordion-button {
  padding: 0 !important;
  border: none !important;
  box-shadow: none !important;
}
.accordion-button.collapsed .iconMinus {
  display: none !important;
}
.accordion-button .iconPlus {
  display: none;
}
.accordion-button.collapsed .iconPlus {
  display: block !important;
}
.accordion-button .iconMinus,
.accordion-button .iconPlus {
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 50px;
  width: 15px !important;
  height: 15px !important;
  padding: 8px;
}
.accordion-body {
  padding: 0 !important;
  margin-bottom: 20px;
  margin-top: 40px;
  color: rgba(255, 255, 255, 0.9) !important;
}
.accordion-button::after {
  display: none !important;
}

@media (max-width: 560px) {
  h1 {
    font-size: 25px !important;
  }

  .block {
    padding-top: 60px !important;
  }
}
</style>
<script setup></script>
