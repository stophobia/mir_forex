<template>
    <div class="block">
        <div class="container-fliud">
            <div class="row text-bloc text-dark ms-0 me-0">
                <div class="col-12 d-flex align-items-center pt-0">
                    <div class="container-fliud">
                        <div class="row">
                            <div class="col-12">
                                <!-- <h3 class="mb-5 name"><span class="h3" style="border-bottom: 2px solid white;">А</span>льфа Форекс</h3> -->
                                <img class="position-relative" src="/forex.svg" style="z-index: 22;width: 300px; margin-bottom: 50px; margin-top: 30px;" data-aos="fade-up">
                            </div>
                            <div class="col-12 col-md-7 d-flex align-items-center screen" data-aos="fade-up">
                                <img src="/mon1.png" class="">
                            </div>
                            <div class="col-12 col-md-5 p- text position-relative" style="z-index: 100;">
                                <h2 class="mb-4 text-uppercase fw-bold" data-aos="fade-up">{{title}}</h2>
                                <div class="" data-aos="fade-up">
                                    <slot  data-aos="fade-up"></slot>
                                </div>

                                <button type="button" class="btn-light btn mt-4" data-bs-toggle="modal" data-bs-target="#openCountModal">
                                    Открыть счет
                                </button>

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
        padding-top: 0 !important;
        z-index: 100;
        position: relative;
        background-color: rgba(12, 16, 34, 1);
        /* background-image: linear-gradient(82.08deg, #1E2B5C 0.39%, rgba(30, 43, 92, 0) 52.77%); */
        background-image: linear-gradient(135deg, #293D8A -44.82%, rgba(41, 61, 138, 0) 29.48%) !important;
    }
    .block::before {
        background-image: url('/bg_support.png');
        background-position: bottom right;
        background-size: auto;
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .name, .name span {
        font-size: 48px;
        font-weight: 900;
    }
    .text {
        max-width: 500px;
    }
    .block > div > .row > div {
        /* background-color: #0C1022 !important; */
        /* background-image: linear-gradient(272deg, #0c1022, rgb(31, 43, 90)); */
        color: #fff;
        padding-top: 120px;
        padding-bottom: 80px;
        padding-left: 5%;
        padding-right: 5%;
    }
    .btn-light {
        background-image: linear-gradient(162deg, white 23.95%, rgba(52, 91, 219, 0.3));
        padding: 20px 60px;
        font-size: 16px;
        font-weight: 800;
        position: relative;
        z-index: 2;
    }
    .screen img {
        width: 100%;
        position: relative;
        z-index: 2;
        margin-left: -10%;
        /* border-radius: 0 10px 10px 0; */
        /* border: 15px rgb(12,16,34) solid; */
        border-left: none !important;
    }
    @media screen and (min-width: 992px) {
        .screen img {
            margin-bottom: -250px;
        }
        .block > div > .row > div {
            padding-top: 80px;
        }
    }
    @media screen and (max-width: 768px) {
        .screen img {
            margin-left: -7% !important;
            margin-bottom: 20px !important;
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