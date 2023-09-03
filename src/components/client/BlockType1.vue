<template>
    <div class="block">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="container">
                        <h3 class="opacity-50">Блок на светлом фоне</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur porro magni nisi ea dignissimos iusto a fugit sapiente magnam modi nesciunt dolor praesentium dolorum eaque, hic odio ullam eos cupiditate.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 bg-light text-dark text-start">
                    <img 
                        style="
                            position: absolute; 
                            width: 300px; 
                            height: 300px;
                            top: -150px;
                            right: 20px;
                        "
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" 
                        alt=""
                    >
                    <h3 class="opacity-50">Блок на затемненном фоне с картинкой, заползающей наверх</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur porro magni nisi ea dignissimos iusto a fugit sapiente magnam modi nesciunt dolor praesentium dolorum eaque, hic odio ullam eos cupiditate.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        position: relative;
        z-index: 3 !important;
    }
    .block > div > .row > div {
        padding-left: 10% !important;
        padding-right: 10% !important;
        padding-top: 100px !important;
        padding-bottom: 100px !important;
    }
    .block > div > .row > div:nth-of-type(1) {
        background-color: white !important;
    }
    .block > div > .row > div:nth-of-type(2) {
        background-color: #f0f1f1 !important;
        color: #000000 !important;
    }
</style>

<script>
    export default {
        props: ['title1', 'title2', 'text1', 'text2'],
        setup() {
        }
    }
</script>