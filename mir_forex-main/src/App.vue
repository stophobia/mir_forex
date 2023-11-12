<script setup>
  import { RouterLink, RouterView } from 'vue-router'

  import AOS from 'aos';
  import 'aos/dist/aos.css'; // You can also use <link> for styles
  AOS.init({
    once: true
  });

</script>

<template>
  <router-view/>
</template>