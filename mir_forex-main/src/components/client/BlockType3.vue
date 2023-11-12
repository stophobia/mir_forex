<template>
    <div class="block">
        <div class="container">
            <div class="row text-light">
                <div class="col-12 col-md-6">
                    <h1 class="fw-light mb-4">Заголовок</h1>
                    <div class="text-start">
                        <img class="w-100" src="https://www.world-archaeology.com/wp-content/themes/fox/images/placeholder.jpg" alt="">
                    </div>
                </div>
                <div class="col-12 col-md-6 text-start d-flex align-items-center">
                    <div class="d-block">
                        <p class="fw-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur porro magni nisi ea dignissimos iusto a fugit sapiente magnam modi nesciunt dolor praesentium dolorum eaque, hic odio ullam eos cupiditate.</p>
                        <p class="fw-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur porro magni nisi ea dignissimos iusto a fugit</p>
                        <p class="fw-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur porro magni nisi ea dignissimos iusto a fugit sapiente magnam modi nesciunt dolor praesentium dolorum eaque,</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        position: relative;
        z-index: 3 !important;
        background-color: var(--main-color);
    }

    @media screen and (max-width: 768px) {
        .block > div > .row > div {
            padding-left: 10% !important;
            padding-right: 10% !important;
        }

        .block > div > .row > div:nth-of-type(1) {
            padding-top: 50px !important;
            padding-bottom: 20px !important;
        }
        .block > div > .row > div:nth-of-type(2) {
            padding-top: 20px !important;
            padding-bottom: 50px !important;
        }
    }

    @media screen and (min-width: 768px) {
        .block > div > .row > div:nth-of-type(1) {
            padding-left: 10% !important;
            padding-right: 10px !important;
            padding-top: 100px !important;
            padding-bottom: 100px !important;
        }
        .block > div > .row > div:nth-of-type(2) {
            padding-left: 10% !important;
            padding-right: 10% !important;
            padding-top: 100px !important;
            padding-bottom: 100px !important;
        }
    }

    
</style>