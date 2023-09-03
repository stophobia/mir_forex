<script setup>
    import TopHeader from '@/components/client/TopHeader.vue'
    import Preloader from '@/components/client/Preloader.vue';
    import FooterBlock from '@/components/client/FooterBlock.vue';
    

    import {ref, inject} from 'vue'
    import {useLoading} from 'vue-loading-overlay'
    import {h} from 'vue';
    import { createWebHistory } from 'vue-router';
    import { vMaska } from "maska"
    
    const $loading = useLoading({
        'background-color': '#0d1118',
        'opacity' : 1,
        'lock-scroll' : true,
        'color' : '#fff',
        'loader' : 'dots'
    });

    const fullPage = ref(false)
    const loader = $loading.show(
        {}, {
            // before: h('h1', {class: 'text-center text-white'}, [
            //     h('span', {class: 'fw-bolder'}, 'MIR'),
            //     h('span','Forex')
            // ])
            before: h('img', {src: '/logo_white.png', style: 'width: 150px', class: 'd-block'}, [])
        }
    );
    // simulate AJAX
    setTimeout(() => {
        loader.hide()
    }, 2000)

</script>

<template>

    <Preloader />
    <TopHeader />

    <div class="modal fade" id="sendApplication" tabindex="-1" aria-labelledby="sendApplication" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center p-5 pb-0">
                    <h1 class="mb-3">Оставить заявку</h1>
                    <div class="mb-4">
                        <input type="text" class="form-control p-3" id="call_name" placeholder="Ваше имя и фамилия">
                    </div>
                    <div class="mb-3">
                        <input 
                            v-maska 
                            data-maska="8 (###) ###-##-##"
                            type="phone"
                            class="form-control p-3"
                            id="call_number"
                            placeholder="Номер телефона"
                        >
                    </div>
                </div>
                <div class="modal-footer text-center p-5 pt-0 border-0">
                    <button type="button" class="btn btn-light btn-light-2 w-100 mb-3" v-on:click="call()">Заказать звонок</button>
                    <p class="fw-lighter">Нажимая на кнопку «Записаться», я даю согласие на обработку персональных данных и соглашаюсь с <a href="/privacy_policy">Политикой конфиденциальности</a></p>
                </div>
            </div>
        </div>
    </div>

    <article>
        <div class="container">
            <div class="row header justify-content-center" data-aos="fade-up">
                <h3 class="pt-5 pb-5 text-white text-center fw-bolder">Сотрудничество с ведущими мировыми аналитиками и финансовыми экспертами для автоматизации торговли и создания самых совершенных стратегий</h3>
            </div>
            <div class="row text-white description" data-aos="fade-up">
                <div class="col-md-6 col-12">
                    <h5 class="fw-light">На финансовом рынке, который меняется достаточно быстро традиционные методики устаревают, и подход "один для всех" изжил себя.</h5>
                    <h5 class="fw-light">По этой Причине Международный институт рынка постоянно совершенствует свои стратегии и тестирует новые решения для рынка.В наших курсах мы используем многолетний опыт работы на финансовых рынках и знания ведущих трейдеров мира для создания уникальных идей, способных упростить работу наших учеников.</h5>
                </div>
                <div class="col-md-6 col-12">
                    <h5 class="fw-light">Для индивидуального подхода к каждому ученику нашим институтом разработаны решения под различные типы торговли.</h5>
                    <h5 class="fw-light">Наполненность каждого курса формировалась из сотен тысяч личных торговых ситуаций, тысяч вопросов и целей наших учеников. Благодаря этому мы сформировали четыре основных направления</h5>
                </div>
            </div>
            <div class="row text-white pb-5">
                <h1 class="text-center fw-bolder">Наши курсы</h1>
            </div>
            <div class="row carded">
                <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3">
                    <div class="card" data-aos="fade-up">
                        <div class="image">
                            <img src="/robo1.png" alt="">
                        </div>
                        <div class="text">
                            <h5 class="fw-bolder mb-3 text-white">Начинающий</h5>
                            <p class="text-muted">Данный курс подходит для тех кто хочет получить сопровождение на начальных этапах своей торговли. Получать ежедневную аналитику рынка и познакомится с профессиональными инструментами</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3">
                    <div class="card" data-aos="fade-up">
                        <div class="image">
                            <img src="/robo4.png" alt="">
                        </div>
                        <div class="text">
                            <h5 class="fw-bolder mb-3 text-white">Продвинутый</h5>
                            <p class="text-muted">Данный курс создан для тех кто хочет создать для себя полноценный дополнительный доход на финансовых рынках. На данном курсе особое внимание уделяется среднесрочному анализу для минимизации времени нахождения в рынке.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3">
                    <div class="card" data-aos="fade-up">
                        <div class="image">
                            <img src="/robo3.png" alt="">
                        </div>
                        <div class="text">
                            <h5 class="fw-bolder mb-3 text-white">Профессиональный</h5>
                            <p class="text-muted">Данный курс создан для тех кто хочет полноценно освоить сферу финансовых рынков и сделать ее основным источником дохода. На данном курсе идет изучение всех видов анализа используются все временные диапазоны от краткосрочной до долгосрочной торговли, изучаются все ведущие инструменты рынка идет</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3 col-12 p-3">
                    <div class="card" data-aos="fade-up">
                        <div class="image">
                            <img src="/robo2.png" alt="">
                        </div>
                        <div class="text">
                            <h5 class="fw-bolder mb-3 text-white">РОБОКУРС</h5>
                            <p class="text-muted">Данный курс нацелен на полную автоматизацию торговых процессов.В курс входят роботы по техническому, Фундаментальному и индикаторному анализу, а так же полное изучение алгоритмов их работы, автоматизация финансового планирования. В данных курс также входит материал</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card-2 text-center" data-aos="fade-up">
                    <h4 class="fw-light">Наполненность каждого курса составляется индивидуально под каждого ученика в зависимости от его знаний, целей и задач. Те нюансы которые для многих незначительны играют важную роль на рынке начиная от торгового времени в которое вы можете выходить на рынок, в плоть до того как часто вам надо отходить от компьютера. Все эти и другие нюансы разбираются на нашем бесплатном обучении где вы сможете получить полную консультацию по каждому курсу и познакомится с финансовыми рынками.</h4>
                    <button type="button" class="btn-light btn" data-bs-toggle="modal" data-bs-target="#sendApplication">
                        Получить консультацию
                    </button>
                </div>
            </div>
        </div>
        <FooterBlock/>
    </article>
</template>

<style scoped>
    .text-muted {
        color: rgba(255,255,255,.5) !important;
    }

    .btn-light  {
        background-image: linear-gradient(162deg, white 23.95%, rgba(52, 91, 219, 0.3));
        border: none !important;
        margin-top: 50px;
        padding: 15px 50px;
        font-size: 16px;
        font-weight: 600;
    }
    .btn-light-2 {
        background-image: linear-gradient(162deg, rgb(233, 233, 233) 23.95%, rgba(52, 91, 219, 0.3));
    }
    .carded {
        background-image: url('/bg_courses.png');
        background-position: bottom center;
        background-size: cover;
    }
    article {
        position: relative;
        z-index: 98;
        padding-top: 100px;
        max-width: 100vw !important;
        /* background-image: linear-gradient(-80deg, #1E2B5C, #0C1022); */
        background-color: rgba(12, 16, 34, 1);
        background-image: linear-gradient(35.53deg, #1E2B5C -16.19%, rgba(30, 43, 92, 0) 43.06%);

    }
    .header > * {
        max-width: 60%;
    }
    .description {
        padding-bottom: 90px;
    }
    .card {
        background-color: rgb(15, 21, 46) !important;
        padding: 25px;
        border: 1px solid rgba(35, 61, 163,.7);
        border-radius: 16px;
        min-height: 500px;
        margin-bottom: 10px;
    }
    .card-2 {
        background-color: rgb(15, 21, 46) !important;
        padding: 5% 20% 5% 20%;
        color: #fff;
        border: 1px solid rgba(35, 61, 163,.7);
        border-radius: 16px;
        margin-bottom: 30px;
        margin-top: 50px;
    }
    .card > .image > img {
        width: 80%;
        margin-top: -25px;
        margin-bottom: -20px;
    }
    .card > .image {
        text-align: end;
        position: relative;
    }
    .card > .text {
        position: relative;
        z-index: 2;
    }
    .card > .image::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: -25px;
        left: 0;
        width: 100%;
        height: 145%;
        background-image: linear-gradient(transparent 18.07%, rgb(15, 21, 46) 91.6%)
    }
    @media screen and (max-width: 768px) {
        .header > h3 {
            text-align: start !important;
            max-width: 100% !important;
            margin-top: 20px;
        }
        .row > .card-2 {
            padding: 40px 20px;
        }
        .carded {
            background-image: none !important;
        }
    }
</style>

<script>

    export default {
    data() {
        return {
        }
    },
    setup() {
    },
    methods: {
        async call () {

            const response = await fetch("/api.php", {
                body: JSON.stringify({
                    "action" : "createRequest",
                    "username" : document.getElementById('call_name').value,
                    "phone_number" : document.getElementById('call_number').value,
                    "type" : 'call'
                }),
                headers: {
                    "Content-Type": "application/json"
                },
                method: "post"
            })

            try {
                const data = await response.json()
                this.ReviewlMsgType = data.type.type
                document.getElementById('reviewModalMsgOpen').click()
            } catch(e) {
                this.ReviewlMsgType = 'error'
                document.getElementById('reviewModalMsgOpen').click()
            }
        }
    }
}
</script>