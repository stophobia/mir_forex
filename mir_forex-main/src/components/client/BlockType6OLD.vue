<template>
    <div class="block">
        <div class="container">
            <div class="row" style="margin-bottom: 50px;">
                <div class="col-12">
                    <h1 class="header text-white fw-bolder" data-aos="fade-up">Платформы<br>для трейдинга</h1>
                    <p class="header-mini" data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi pariatur eligendi nostrum placeat illum adipisci iusto optio aspernatur minus laboriosam deleniti labore quidem doloribus ad, quod numquam distinctio assumenda exercitationem?</p>
                </div>
            </div>
                
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="card" data-aos="fade-up">
                        <img src="/logo_white.png" style="width: 60px;" data-aos="fade-up">
                        <h2 class="text-white" data-aos="fade-up">MetaTrader 5</h2>
                        <p style="color: rgba(255, 255, 255, .5)" data-aos="fade-up">Онлайн-трейдинг дает возможность торговать валютными парами на рынке Форекс в любое время из любой точки мира. Будьте мобильными, торгуйте на финансовых рынках, получайте торговую информацию и анализируйте ее - все это есть в MetaTrader.
Установите торговый терминал на любое устройство и совершайте торговые операции 24 часа в сутки. Рынок Форекс не имеет ограничений для цивилизованной торговли в сравнении с другими финансовыми инструментами. На Форекс вы можете зарабатывать круглосуточно 5 дней в неделю.</p>
                        <img src="/Screen_MT5.png" class="screen screen-left mt-auto">
                        <img src="/MT_Mobile.png" class="screen-mini screen-mini-left mt-auto" data-aos="fade-up">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="card" data-aos="fade-up">
                        <img src="/logo_white.png" style="width: 60px;" data-aos="fade-up">
                        <h2 class="text-white" data-aos="fade-up">Trading View</h2>
                        <p style="color: rgba(255, 255, 255, .5)" data-aos="fade-up">TradingView - веб-сервис и социальная сеть для трейдеров, в основе которой лежит платформа технического анализа. Проект был запущен в сентябре 2011 года. Есть бесплатная версия приложения и 3 варианта платной подписки с растущим количеством функций</p>
                        <img src="/Screen_TV.png" class="screen screen-right mt-auto">
                        <img src="/TV_Mobile.png" class="screen-mini screen-mini-right mt-auto" data-aos="fade-up">
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
        padding-top: 30px;
        padding-bottom: 100px;
        width: 100vw;
        overflow: hidden !important;
    }
    .block > div > .row > div {
        padding-left: 2% !important;
        padding-right: 2% !important;
        /* padding-top: 50px !important;
        padding-bottom: 50px !important; */
    }
    .header {
        font-size: 38px !important;
        margin-bottom: 30px;
    }
    .header-mini {
        color: rgba(255, 255, 255, .5);
        max-width: 400px;
    }
    .block > div > .row > div:nth-of-type(1) {
        /* background-color: white !important; */
    }
    .block > div > .row > div:nth-of-type(2) {
        /* background-color: #f0f1f1 !important; */
        /* color: #000000 !important; */
    }
    .card {
        width: 100%;
        background-color: transparent !important;
        padding: 45px;
        border: 1px solid rgb(35, 61, 163);
        border-radius: 16px;
        height: 1000px;
        max-width: 100%;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px) {
        .card {
            height: 1000px;  
        }
    }

    @media screen and (max-width: 992px) {
        .card {
            height: 900px;  
        }
        .screen-mini {
            display: none !important;
        }
    }

    .card h2 {
        margin-top: 14px;
        margin-bottom: 30px;
    }
    .screen-left {
        margin-left: -40%;
        width: 140%;
    }
    .screen-right {
        margin-left: 0%;
        width: 140%;
    }
    .screen-mini-left {
        margin-top: -205px !important;
        margin-left: 30% !important;
        margin-bottom: -45px;
        width: 50%;
    }
    .screen-mini-right {
        margin-top: -205px !important;
        margin-left: 20% !important;
        margin-bottom: -45px;
        width: 50%;
    }
</style>

<script>
    export default {
        props: ['title1', 'title2', 'text1', 'text2'],
        setup() {
        }
    }
</script>