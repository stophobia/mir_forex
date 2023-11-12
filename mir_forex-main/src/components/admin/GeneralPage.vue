<script setup>
    import Sidebar from '@/components/admin/Sidebar.vue' 
</script>

<template>
  <div class="main">
    <div class="d-flex">
        <div class="col-md-2 d-none d-sm-block header">
            <Sidebar />
        </div>
        <div class="col-md-10 col-12 p-4">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<style scoped>
.main {
    background-image: linear-gradient(-80deg, rgb(22,43,89), rgb(10,16,34));
    width: 100wv !important;
    height: 100vh !important;
    overflow: hidden;
}
.main {
  /* padding-left: 10%;
  padding-right: 10%; */
}
.header {
    padding: 20px;
}
.header img {
    margin-top: -20px;
    margin-bottom: -20px;
}
.header h1 {
    font-size: 42px;
    font-weight: 300;
    color: #ffffffb3;
}
.header h1 > span {
    font-size: 42px;
    font-weight: 300;
    color: rgba(0, 80, 255, 0.71)
}
.main > div > div:nth-of-type(1) {
    /* height: 100vh !important; */
}
.main > div > div:nth-of-type(2) {
    padding-left: 5% !important;
    padding-right: 5% !important;
    padding-top: 5% !important;
    height: 100vh;
    background-color: white;
    border-radius: 30px 0 0 30px;
}

@media screen and (max-width: 768px) {
    .main > div > div:nth-of-type(2) {
        border-radius: 0;
    }
}
.main > div > div:nth-of-type(2) > div {
    height: 100vh;
}
</style>
