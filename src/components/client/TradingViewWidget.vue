<template>
    <SingleTicker :options="{
        symbol: 'NASDAQ:AAPL',
        colorTheme: 'dark',
        autosize: false,
        locale: 'ru'
    }"/>
</template>
  
<script>
import { SingleTicker} from "vue-tradingview-widgets";

export default {
  name: "App",
  components: {
    SingleTicker
  },
};
</script>