<template>
    <Chart :options="{
        symbol: 'USDRUB',
        theme: 'dark',
        autosize: true,
        hide_top_toolbar: true,
        hide_side_toolbar: true,
        locale: 'ru'
    }"/>
</template>
  
<script>
import { Chart, CryptoMarket, Snaps, Screener } from "vue-tradingview-widgets";

export default {
  name: "App",
  components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
};
</script>