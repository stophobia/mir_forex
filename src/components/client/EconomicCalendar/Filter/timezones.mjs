const timezones = [
  {
    value: "-1100",
    time: "UTC-11",
    title: "(GMT -11:00) Ниуэ",
    en: "Niue"
  },
  {
    value: "-1000",
    time: "Aleutian+Standard+Time",
    title: "(GMT -10:00) Гавайи",
    en: "Hawaii"
  },
  {
    value: "-0930",
    time: "Marquesas+Standard+Time",
    title: "(GMT -09:30) Маркизские острова",
    en: "Marquesas Islands"
  },
  {
    value: "-0900",
    time: "Alaskan+Standard+Time",
    title: "(GMT -09:00) Аляска",
    en: "Alaska"
  },
  {
    value: "-0800",
    time: "Pacific+Standard+Time+(Mexico)",
    title: "(GMT -08:00) Клиппертон",
    en: "Clipperton"
  },
  {
    value: "-0700",
    time: "US+Mountain+Standard+Time",
    title: "(GMT -07:00) Сонора",
    en: "Sonora"
  },
  {
    value: "-0600",
    time: "Central+America+Standard+Time",
    title: "(GMT -06:00) Гватемала",
    en: "Guatemala"
  },
  {
    value: "-0500",
    time: "SA+Pacific+Standard+Time",
    title: "(GMT -05:00) Гаити",
    en: "Haiti"
  },
  {
    value: "-0400",
    time: "Paraguay+Standard+Time",
    title: "(GMT -04:00) Парагвай",
    en: "Paraguay"
  },
  {
    value: "-0330",
    time: "Newfoundland+Standard+Time",
    title: "(GMT -03:30) Ньюфаундленд",
    en: "Newfoundland"
  },
  {
    value: "-0300",
    time: "Argentina+Standard+Time",
    title: "(GMT -03:00) Амапа",
    en: "Amapa"
  },
  {
    value: "-0200",
    time: "Mid-Atlantic+Standard+Time",
    title: "(GMT -02:00) Галифакс",
    en: "Halifax"
  },
  {
    value: "-0100",
    time: "Azores+Standard+Time",
    title: "(GMT -01:00) Кабо-Верде",
    en: "Cape Verde"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Лондон",
    en: "London"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Лиссабон",
    en: "Lisbon"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Рейкьявик",
    en: "Reykjavik"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Берлин",
    en: "Berlin"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Белград",
    en: "Belgrade"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Берн",
    en: "Bern"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Братислава",
    en: "Bratislava"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Будапешт",
    en: "Budapest"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Валлетта",
    en: "Valletta"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Варшава",
    en: "Warsaw"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Вена",
    en: "Vienna"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Загреб",
    en: "Zagreb"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Любляна",
    en: "Ljubljana"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Мадрид",
    en: "Madrid"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Осло",
    en: "Oslo"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Париж",
    en: "Paris"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Прага",
    en: "Prague"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Рим",
    en: "Rome"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Скопье",
    en: "Skopje"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Стокгольм",
    en: "Stockholm"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Тирана",
    en: "Tirana"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Касабланка",
    en: "Casablanca"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Афины",
    en: "Athens"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Бухарест",
    en: "Bucharest"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Вильнюс",
    en: "Vilnius"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Калининград",
    en: "Kaliningrad"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Киев",
    en: "Kyiv"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Кишинёв",
    en: "Chisinau"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Рига",
    en: "Riga"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) София",
    en: "Sofia"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Таллинн",
    en: "Tallinn"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Каир",
    en: "Cairo"
  },
  {
    value: "+0300",
    time: "Arabic+Standard+Time",
    title: "(GMT +03:00) Москва",
    en: "Moscow"
  },
  {
    value: "+0300",
    time: "Arabic+Standard+Time",
    title: "(GMT +03:00) Минск",
    en: "Minsk"
  },
  {
    value: "+0330",
    time: "Iran+Standard+Time",
    title: "(GMT +03:30) Тегеран",
    en: "Tehran"
  },
  {
    value: "+0400",
    time: "Russia+Time+Zone+3",
    title: "(GMT +04:00) Самара",
    en: "Samara"
  },
  {
    value: "+0430",
    time: "Afghanistan+Standard+Time",
    title: "(GMT +04:30) Кабул",
    en: "Kabul"
  },
  {
    value: "+0500",
    time: "Ekaterinburg+Standard+Time",
    title: "(GMT +05:00) Екатеринбург",
    en: "Ekaterinburg"
  },
  {
    value: "+0500",
    time: "Ekaterinburg+Standard+Time",
    title: "(GMT +05:00) Исламабад",
    en: "Islamabad"
  },
  {
    value: "+0530",
    time: "India+Standard+Time",
    title: "(GMT +05:30) Нью-Дели",
    en: "New Delhi"
  },
  {
    value: "+0600",
    time: "Bangladesh+Standard+Time",
    title: "(GMT +06:00) Астана",
    en: "Astana"
  },
  {
    value: "+0600",
    time: "Bangladesh+Standard+Time",
    title: "(GMT +06:00) Дакка",
    en: "Dhaka"
  },
  {
    value: "+0630",
    time: "Myanmar+Standard+Time",
    title: "(GMT +06:30) Нейпидо",
    en: "Naypyidaw"
  },
  {
    value: "+0700",
    time: "Altai+Standard+Time",
    title: "(GMT +07:00) Норильск",
    en: "Norilsk"
  },
  {
    value: "+0800",
    time: "China+Standard+Time",
    title: "(GMT +08:00) Пекин",
    en: "Beijing"
  },
  {
    value: "+0830",
    time: "North+Korea+Standard+Time",
    title: "(GMT +08:30) Пхеньян",
    en: "Pyongyang"
  },
  {
    value: "+0900",
    time: "Tokyo+Standard+Time",
    title: "(GMT +09:00) Токио",
    en: "Tokyo"
  },
  {
    value: "+0930",
    time: "AUS+Central+Standard+Time",
    title: "(GMT +09:30) Папеэте",
    en: "Papeete"
  },
  {
    value: "+1000",
    time: "Vladivostok+Standard+Time",
    title: "(GMT +10:00) Владивосток",
    en: "Vladivostok"
  },
  {
    value: "+1030",
    time: "Lord+Howe+Standard+Time",
    title: "(GMT +10:30) Канберра",
    en: "Canberra"
  },
  {
    value: "+1100",
    time: "Magadan+Standard+Time",
    title: "(GMT +11:00) Сидней",
    en: "Sydney"
  },
  {
    value: "+1100",
    time: "Magadan+Standard+Time",
    title: "(GMT +11:00) Магадан",
    en: "Magadan"
  },
  {
    value: "+1200",
    time: "New+Zealand+Standard+Time",
    title: "(GMT +12:00) Веллингтон",
    en: "Wellington"
  }
];

export default timezones;
