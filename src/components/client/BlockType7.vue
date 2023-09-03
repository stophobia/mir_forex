<template>
    <div class="block">
        <div class="container">
            <img src="/full_logo_white.png" class="logo">
            <h1 class="text-uppercase">Наш метод</h1>
            <div class="row">
                <div class="col-md-6 col-12">
                    <div class="card">
                        <h5 class="text-white text-uppercase">ПРОФЕССИОНАЛЬНОЕ ОБУЧЕНИЕ</h5>
                        <p>Мы предоставляем возможность каждому получить дополнительное профессиональное образование в онлайн или офлайн-формате. Общайтесь с преподавателями на вебинарах, на личных практических занятиях и в чатах, для вас открыта база знаний со всеми необходимыми материалами.</p>
                    </div>
                </div>
                <div class="col-md-6 col-12">
                    <div class="card">
                        <h5 class="text-white text-uppercase">ПОСЛЕ ОБУЧЕНИЯ ВЫ СМОЖЕТЕ</h5>
                        <p>Самостоятельно анализировать и прогнозировать финансовые рынки, а также получить удостоверение о повышенииквалификации установленного образца в соответствии с Федеральным законом об образовании, который котируется, в том числе на территории СНГ.</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button type="button" class="btn-light btn" data-bs-toggle="modal" data-bs-target="#openCountModal">
                        Открыть счет
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .block {
        padding-top: 100px;
        padding-bottom: 100px;
    }
    .btn-light {
        background-image: linear-gradient(162deg, white 23.95%, rgba(52, 91, 219, 0.3));
        margin-top: 40px;
        padding: 15px 60px;
        font-size: 16px;
        font-weight: 800;
    }
    h1 {
        font-size: 48px;
        font-weight: 600;
        color: #fff;
        margin-bottom: 50px;
        margin-top: 20px;
    }
    .row > div > .card{
        min-height: 200px !important
    }
    .row > div{
        margin-bottom: 20px;
    }
    @media screen and (min-width: 768px) {
        .row > div:nth-of-type(1) {
            padding-right: 30px;
        }
        .row > div:nth-of-type(2) {
            padding-left: 30px;
        }
    }
    .logo {
        width: 150px;
        margin-bottom: 30px;
    }
    .card {
        background-color: rgb(12, 16, 33);
        padding: 20px 30px;
        border: 1px solid rgb(35, 61, 163);
    }
    .card > h5 {
        margin-bottom: 20px;
    }
    .card > p {
        color: rgba(255, 255, 255, .5);
    }
</style>

<script>
    export default {
        props: ['title'],
        setup() {
        }
    }
</script>