const timezones = [
  {
    value: "-1100",
    time: "UTC-11",
    title: "(GMT -11:00) Ниуэ"
  },
  {
    value: "-1000",
    time: "Aleutian+Standard+Time",
    title: "(GMT -10:00) Гавайи"
  },
  {
    value: "-0930",
    time: "Marquesas+Standard+Time",
    title: "(GMT -09:30) Маркизские острова"
  },
  {
    value: "-0900",
    time: "Alaskan+Standard+Time",
    title: "(GMT -09:00) Аляска"
  },
  {
    value: "-0800",
    time: "Pacific+Standard+Time+(Mexico)",
    title: "(GMT -08:00) Клиппертон"
  },
  {
    value: "-0700",
    time: "US+Mountain+Standard+Time",
    title: "(GMT -07:00) Сонора"
  },
  {
    value: "-0600",
    time: "Central+America+Standard+Time",
    title: "(GMT -06:00) Гватемала"
  },
  {
    value: "-0500",
    time: "SA+Pacific+Standard+Time",
    title: "(GMT -05:00) Гаити"
  },
  {
    value: "-0400",
    time: "Paraguay+Standard+Time",
    title: "(GMT -04:00) Парагвай"
  },
  {
    value: "-0330",
    time: "Newfoundland+Standard+Time",
    title: "(GMT -03:30) Ньюфаундленд"
  },
  {
    value: "-0300",
    time: "Argentina+Standard+Time",
    title: "(GMT -03:00) Амапа"
  },
  {
    value: "-0200",
    time: "Mid-Atlantic+Standard+Time",
    title: "(GMT -02:00) Галифакс"
  },
  {
    value: "-0100",
    time: "Azores+Standard+Time",
    title: "(GMT -01:00) Кабо-Верде"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Лондон"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Лиссабон"
  },
  {
    value: "+0000",
    time: "UTC",
    title: "(GMT 00:00) Рейкьявик"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Берлин"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Белград"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Берн"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Братислава"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Будапешт"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Валлетта"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Варшава"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Вена"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Загреб"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Любляна"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Мадрид"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Осло"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Париж"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Прага"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Рим"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Скопье"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Стокгольм"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Тирана"
  },
  {
    value: "+0100",
    time: "Central+Europe+Standard+Time",
    title: "(GMT +01:00) Касабланка"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Афины"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Бухарест"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Вильнюс"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Калининград"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Киев"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Кишинёв"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Рига"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) София"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Таллинн"
  },
  {
    value: "+0200",
    time: "Jordan+Standard+Time",
    title: "(GMT +02:00) Каир"
  },
  {
    value: "+0300",
    time: "Arabic+Standard+Time",
    title: "(GMT +03:00) Москва"
  },
  {
    value: "+0300",
    time: "Arabic+Standard+Time",
    title: "(GMT +03:00) Минск"
  },
  {
    value: "+0330",
    time: "Iran+Standard+Time",
    title: "(GMT +03:30) Тегеран"
  },
  {
    value: "+0400",
    time: "Russia+Time+Zone+3",
    title: "(GMT +04:00) Самара"
  },
  {
    value: "+0430",
    time: "Afghanistan+Standard+Time",
    title: "(GMT +04:30) Кабул"
  },
  {
    value: "+0500",
    time: "Ekaterinburg+Standard+Time",
    title: "(GMT +05:00) Екатеринбург"
  },
  {
    value: "+0500",
    time: "Ekaterinburg+Standard+Time",
    title: "(GMT +05:00) Исламабад"
  },
  {
    value: "+0530",
    time: "India+Standard+Time",
    title: "(GMT +05:30) Нью-Дели"
  },
  {
    value: "+0600",
    time: "Bangladesh+Standard+Time",
    title: "(GMT +06:00) Астана"
  },
  {
    value: "+0600",
    time: "Bangladesh+Standard+Time",
    title: "(GMT +06:00) Дакка"
  },
  {
    value: "+0630",
    time: "Myanmar+Standard+Time",
    title: "(GMT +06:30) Нейпидо"
  },
  {
    value: "+0700",
    time: "Altai+Standard+Time",
    title: "(GMT +07:00) Норильск"
  },
  {
    value: "+0800",
    time: "China+Standard+Time",
    title: "(GMT +08:00) Пекин"
  },
  {
    value: "+0830",
    time: "North+Korea+Standard+Time",
    title: "(GMT +08:30) Пхеньян"
  },
  {
    value: "+0900",
    time: "Tokyo+Standard+Time",
    title: "(GMT +09:00) Токио"
  },
  {
    value: "+0930",
    time: "AUS+Central+Standard+Time",
    title: "(GMT +09:30) Папеэте"
  },
  {
    value: "+1000",
    time: "Vladivostok+Standard+Time",
    title: "(GMT +10:00) Владивосток"
  },
  {
    value: "+1030",
    time: "Lord+Howe+Standard+Time",
    title: "(GMT +10:30) Канберра"
  },
  {
    value: "+1100",
    time: "Magadan+Standard+Time",
    title: "(GMT +11:00) Сидней"
  },
  {
    value: "+1100",
    time: "Magadan+Standard+Time",
    title: "(GMT +11:00) Магадан"
  },
  {
    value: "+1200",
    time: "New+Zealand+Standard+Time",
    title: "(GMT +12:00) Веллингтон"
  }
];

export default timezones;
