<template>
    <div class="block">
        <div class="container header">
            <div class="row text-light text-center">
                <div class="col-12">
                    <h1 class="fw-bolder" data-aos="fade-up">{{title}}</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row text-bloc text-light">
                <div class="col-md-6 col-12 d-flex align-items-center">
                        <div class="d-block" data-aos="fade-up">
                            <slot></slot>
                        </div>
                    </div>
                <div class="col-md-6 col-12 text-center d-flex align-items-center" data-aos="fade-up">
                    <div class="d-block">
                        <img src="/vector.png" class="w-100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        z-index: 999;
        position: relative;
        background-color: rgba(12, 16, 34, 1);
        background-image: linear-gradient(45deg, #293D8A -44.82%, rgba(41, 61, 138, 0) 29.48%) !important;
    }
    .text-bloc > div {
        padding-left: 10%;
        padding-right: 10%;
        color: rgba(255, 255, 255, 1);
    }
    .text-bloc > div:nth-of-type(1) {
        padding-top: 50px;
    }
    .text-bloc > div:nth-of-type(2) {
        /* background-color: rgb(0, 0, 0); */
        padding: 0;
        margin-top: 100px;
    }
    .header {
        padding-top: 100px;
    }
    .header h1 {
        font-size: 32px;
    }
    @media screen and (min-width: 992px) {
        .header h1 {
            font-size: 48px;
        }
    }
    @media screen and (min-width: 768px) {
        .header {
            width: 900px !important;    
        }
        .text-bloc > div {
            height: 400px;
        }
    }
</style>

<script>
    export default {
        props: ['title'],
        setup() {
        }
    }
</script>