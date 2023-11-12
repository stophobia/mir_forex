<script setup>
    import TopHeader from '@/components/client/TopHeader.vue';
    import FooterBlock from '@/components/client/FooterBlock.vue';
    import Preloader from '@/components/client/Preloader.vue';
    

    import {ref, inject} from 'vue'
    import {useLoading} from 'vue-loading-overlay'
    import {h} from 'vue';
    import { createWebHistory } from 'vue-router';
    
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

    <div class="main">
        <div class="container">
            <div class="d-flex align-items-center">
                <div class="row">
                    <div class="col-lg-6 col-12 text-center align-self-center d-none d-sm-none d-md-none d-lg-block">
                        <img src="/logo_white.png" alt="" class="w-70">
                        <h1 class="logo">Международный<br>Институт<br>Рынка</h1>
                    </div>
                    <div class="col-lg-6 col-12 text-white align-self-center">
                        <h1 class="fw-bolder mb-5">О компании</h1>
                        <p>МИР - это Международный Институт Рынка, который занимается обучением трейдингу на профессиональном уровне.</p>
                        <p>Наша компания готова предложить бесплатные курсы по трейдингу для начинающих трейдеров, а также профессиональное обучение трейдингу для опытных специалистов. Обучение проводится в индивидуальном порядке, Вы можете посещать офис компании для личных консультаций, либо проходить профессиональное обучение в онлайн-формате, в удобном для Вас месте и в удобное для Вас время.</p>
                        <p>Также, Международный Институт Рынка является официальным представителем ООО «Альфа-Форекс», которая имеет лицензию профессионального участника рынка ценных бумаг Nº 045-14070-020000 от 20.12.2018 на осуществление деятельности форекс-дилера, выданную Центральным Банком России.</p>
                    </div>
                </div>
            </div>
        </div>
        <FooterBlock/>
    </div>
</template>

<style scoped>

    .logo {
        font-family: 'conthrax-sb';
        color: #fff;
        font-size: 20px;
        margin-top: -90px;
    }
    img {
        margin-top: -100px;
    }
    p {
        font-size: 14px;
        font-weight: 200;
        color: rgba(195, 194, 194, 1);
    }

    .main {
        padding-top: 200px;
        position: relative;
        width: 100vw;
        min-height: 100vh;
        /* background-image: linear-gradient(-80deg, #1E2B5C, #0C1022); */
        background-image: linear-gradient(rgba(12,16,32,1) 16%, rgba(27, 39, 82, 1));
    }
    .row {
        margin-bottom: 200px; 
        margin-top: 100px;
    }
    @media screen and (max-width: 992px) {
        .main {
            padding-top: 120px;
        }
        .row {
            margin-bottom: 50px !important;  
            margin-top: 50px !important;
        }
        .main > .container > .d-flex {
            align-items: start !important;
        }
        .row > div {
            align-self: start !important;
        }
        p {
            color: rgba(255, 255, 255, .9);
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
    }
}
</script>