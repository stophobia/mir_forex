<template>
    <div class="block">
        <div class="container">
            <h1 class="text-white title">Наши преимущества</h1>
        </div>
        <div class="container position-relative">
            <div class="liner">
                <span></span>
            </div>
            <div class="row bigs">
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-xl-4">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
                <div class="col-12 col-md-12 col-xl-4">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
            </div>

            <div class="row mins">
                <div class="col-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-3">
                    <div class="card">
                        <h2 class="fw-bolder">Практические занятия</h2>
                        <p>Вас ждет практика по каждому изученному инструменту в реальном времени на демо-счете и понимание его структуры работы. На учебном счете мы добиваемся полноценного погружения в торговлю.</p>
                    </div>
                </div>
            </div>
            <div class=" text-center d-block">
                <button type="button" class="btn-light btn" data-bs-toggle="modal" data-bs-target="#openCountModal">
                    Открыть счет
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        padding-top: 180px;
        padding-bottom: 50px;
        position: relative;
        z-index: 3 !important;
    }
    .title {
        font-size: 48px;
        margin-bottom: 70px;
    }

    .btn-light {
        background-image: linear-gradient(162deg, white 23.95%, rgba(52, 91, 219, 0.3));
        padding: 20px 60px;
        font-size: 16px;
        font-weight: 800;
    }
    .card {
        background-color: rgb(11, 15, 32);
        color: #fff;
        text-align: center;
        border: 1px solid rgb(35, 61, 163);
        border-radius: 13px;
        margin-bottom: 50px;
    }
    .bigs > div > .card {
        min-height: 400px;
        padding: 60px;
    }
    .bigs > div > .card > h2{
        margin-bottom: 40px;
    }
    .liner {
        position: absolute;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        padding: 200px 150px 350px 150px;
    }
    .liner > span:nth-of-type(1) {
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        border: 1px dashed rgb(35, 61, 163);
    }

    @media screen and (min-width: 1200px) {
        .bigs > div:nth-of-type(1),
        .bigs > div:nth-of-type(2) {
            padding-right: 40px;
        }
        .mins > div:nth-of-type(1),
        .mins > div:nth-of-type(2),
        .mins > div:nth-of-type(3) {
            padding-right: 40px;
        }
    }

    @media screen and (max-width: 768px) {
        .title {
            text-align: center;
        }
    }

    .mins > div > .card {
        min-height: 350px;
        padding: 30px;
    }
    .mins > div > .card > h2{
        margin-bottom: 20px;
    }
</style>

<script>
    export default {
        props: ['title1', 'title2', 'text1', 'text2'],
        setup() {
        }
    }
</script>