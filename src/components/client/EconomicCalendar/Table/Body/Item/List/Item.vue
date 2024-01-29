<template>
  <Dropdown
    :activeDropdownStyles="{ backgroundColor: 'rgba(17, 17, 47, 0.6)' }"
    :dropdownStyles="{ borderRadius: '10px', width: '100%!important' }"
  > 
    <template v-slot:header>
      <ul class="table__item__list__item--list">
        <li>
          <p>{{ formatDate(event["DateTime_Date"]) }}</p>
        </li>
        <li ref="leftTimeEl" :class="{'soon' : leftTime.status === 'soon'}">
          <template v-if="!!leftTime">
            <p>{{ leftTime.time }}</p>
          </template>
          <template v-else>
            <img src="/icons/check.svg" alt="">
          </template>
        </li>
        <li>
          <p>
            <img :src="'/country/' + event['InternationalCode'] + '.svg'" alt="" class="flag" />
            <span>{{ event["Currency"] }}</span>
          </p>
        </li>
        <li>
          <p>
            <img v-for="icon in volatilityGenerate(event['Volatility'])" data-v-6f7a99de="" :src="`/icons/${icon}.svg`"
            alt="">
          </p>
        </li>
        <li>
          <p>
            <template v-if="hasLink(event['HTMLDescription'])">
              <a :href="getLink(event['HTMLDescription'])" target="_blank">
                {{ event.Name }}
              </a>
            </template>
            <template v-else>
              <span>{{ event.Name }}</span>
            </template>
          </p>
        </li>
        <li>
          <p>{{ event["DisplayActual"] ? event["DisplayActual"] : "-" }}</p>
        </li>
        <li>
          <p>{{ event["DisplayConsensus"] ? event["DisplayConsensus"] : "-" }}</p>
        </li>
        <li>
          <p>{{ event["DisplayPrevious"] ? event["DisplayPrevious"] : "-" }}</p>
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
        <p v-html="event['HTMLDescription']">

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

  color: black;
  text-align: center;
}

.main.dark .table__item__list__item--list {
  color: white !important;
}

.table__item__list__item--list,
.table__item__list__item__description {
  padding: 12px;
}

.table__item__list__item--list:hover {
  background-color: rgba(17, 17, 47, 0.6);
}

.table__item__list__item__description {
  color: black;
}

.main.dark .table__item__list__item__description {
  color: white !important;
}

.table__item__list__item--list p {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}

.table__item__list__item--list li:nth-child(5) p {
  text-align: start;
  display: flex;
  width: 100%;
  justify-content: flex-start;
}

a {
  color: black !important;
}

.main.dark a {
  color: white !important;
}

.flag {
  display: block;
  width: 24px;
  height: 24px;

  border-radius: 50%;
}

.soon {
  display :flex;
  justify-content: center;
  align-items: center;
}

.soon p {
  display: block;
  padding: 5px 10px;
  width: fit-content;

  border-radius: 5px;
  background-color: rgba(215, 38, 38, 0.83);
}
</style>

<script setup>
import Dropdown from "@/components/UI/Dropdown.vue";
import {defineProps, ref} from "vue";
import moment from "moment-timezone";
import timezones from "@/components/client/EconomicCalendar/Filter/timezones.mjs";

const {event} = defineProps(["event"])
const parser = new DOMParser();
const timezone = timezones.find(item => item.title === event["TimezoneTitle"]);
const leftTime = ref("");
const leftTimeEl = ref(null);
console.log("timezone", timezone);

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
const hasLink = (text) => {
  return /<a\s/i.test(text);
};
const getLink = (text) => {
  console.log("text", text);
  const doc = parser.parseFromString(text, 'text/html');
  const linkElement = doc.querySelector('a');
  if (linkElement) {
    return linkElement.getAttribute('href');
  }
  return false;
}
function formatDate(inputDate) {
  const date = new Date(inputDate);

  const formatter = new Intl.DateTimeFormat('ru-RU', {
    hour: 'numeric',
    minute: 'numeric'
  });

  return formatter.format(date);
}
function getTimeRemaining(newsDate, timeZoneOffset) {
  const timezoneName = moment.tz.names().find(item => item.includes(timezone.en));
  const newsDateTime = moment(newsDate).tz(timezoneName);
  const currentTime = moment.tz(timezoneName);
  console.log("currentTime", currentTime)
  console.log("currentTime", timezoneName)
  console.log("newsDateTime", newsDateTime)
  const result = {
    status: true,
    time: ""
  }

  if (currentTime.isAfter(newsDateTime)) {
    result.status = true;
    return result;
  }

  const remainingTime = newsDateTime.diff(currentTime, 'seconds');
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime / 3600 - hours) * 60);
  const seconds = remainingTime % 60;

  if (remainingTime <= 3600) {
    result.status = "soon";
    result.time = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    // console.log("result.time soon", hours.padStart(2, '0'));
    return result;
  }

  result.status = false;
  result.time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  // console.log("result.time", String(hours).padStart(2, '0'));
  return result;
}
function checkNewsTime() {
  const response = getTimeRemaining(event["DateTime_Date"], timezone);
  let nextCheckTime = 60000;
  // console.log(response)
  if (response.status === true) return;
  else if (response.status === "soon") {
    nextCheckTime = 1000
  } if (response.time === "00:00") response.status = true;

  setTimeout(checkNewsTime, nextCheckTime);
  leftTime.value = response;
}
checkNewsTime();
</script>
