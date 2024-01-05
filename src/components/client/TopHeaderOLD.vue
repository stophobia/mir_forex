<script setup>
</script>

<template>


    <div class="modal fade" id="openCountModal" tabindex="-1" aria-labelledby="openCountModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body text-center p-5 pb-0">
                    <h1 class="mb-3">Открыть счет</h1>
                    <p class="fw-lighter">Оставьте ваши контакты и мы свяжемся с вами в ближайшее время</p>
                    <div class="mb-4">
                        <input type="text" class="form-control p-3" id="name" placeholder="Ваше имя и фамилия">
                    </div>
                    <div class="mb-3">
                        <input type="phone" :value="number" class="form-control p-3" id="number" placeholder="Номер телефона">
                        <!-- <VuePhoneNumberInput v-model="number" /> -->
                    </div>
                    <p class="fw-boler text-start text-danger mb-3 pb-0">Вы перейдете на официальный сайт БКС-Форекс</p>
                </div>
                <div class="modal-footer text-center p-5 pt-0">
                    <button type="button" class="btn btn-primary w-100 mb-3">Открыть счет</button>
                    <p class="fw-lighter">Нажимая на кнопку «Записаться», я даю согласие на обработку персональных данных и соглашаюсь с Политикой конфиденциальности</p>
                </div>
            </div>
        </div>
    </div>


    <nav class="navbar navbar-dark bg-dark justify-content-center" id="NavBar">
        <div class="container-fluid">
            <div class="logo w-50 me-auto">
                <div class="logo-left-bar">
                    <div class="row text-center">
                        <div class="col-12">
                            <!-- <a class="pe-0 me-0 h5" href="#"><b>MIR</b>Forex</a> -->
                            <img class="logo" src="/logo_white.png">
                        </div>
                        <div class="col-12 mt-3">
                            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar top-bar"></span>
                                <span class="icon-bar middle-bar"></span>
                                <span class="icon-bar bottom-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="nav w-50 mt-2 justify-content-center menu-show-center d-none d-sm-none d-md-flex">
                <li class="nav-item me-auto"></li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="#">Курсы</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Наши методы</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Статьи</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Экономический календарь</a>
                </li> -->
                <li class="nav-item ms-auto">
                    <span>

                        <button type="button" class="openCount btn" data-bs-toggle="modal" data-bs-target="#openCountModal">
                            Открыть счет
                        </button>
                    </span>
                </li>
            </ul>

            <!-- <ul class="nav w-50 navbar-nav ms-auto justify-content-end" style="z-index: 3 !important;">
                <div class="d-flex justify-content-end">
                    
                </div>
            </ul> -->

            <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
                <div class="main-menu">
                    <div class="container">
                        <h1 class="text-white opacity-5">Что-то написано...</h1>
                        <div class="row">
                            <div class="col-4 mb-4">
                                <div class="card">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequuntur quam incidunt eius alias, est ullam ex, optio officiis iure facilis officia eveniet harum dolorum numquam amet neque nesciunt inventore?
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequuntur quam incidunt eius alias, est ullam ex, optio officiis iure facilis officia eveniet harum dolorum numquam amet neque nesciunt inventore?
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequuntur quam incidunt eius alias, est ullam ex, optio officiis iure facilis officia eveniet harum dolorum numquam amet neque nesciunt inventore?
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card">
                                    <div class="card-body">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe consequuntur quam incidunt eius alias, est ullam ex, optio officiis iure facilis officia eveniet harum dolorum numquam amet neque nesciunt inventore?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar, .nav {
        z-index: 999;
        position: fixed;
        top: 0;
        padding: 15px;
        left: 0;
        width: 100vw !important;
        background-color: transparent !important;
    }
    .navbar-collapse {
        /* background-color: rgba(0, 0, 0, 0.82); */
        background-color: rgba(13,17,24, .8);
        z-index: 2;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw !important;
    }
    .navbar-toggler {
        border: none !important;
    }
    .navbar-toggler span {
        display: block;
        background-color: #ffffff;
        height: 1px;
        width: 25px;
        margin-top: 5px;
        margin-bottom: 7px;
        position: relative;
        left: 0;
        opacity: 1;
        transition: all 0.35s ease-out;
        transform-origin: center left;
    }

    .navbar-toggler span:nth-child(1) {
        transform: translate(0%, 0%) rotate(0deg);
    }

    .navbar-toggler span:nth-child(2) {
        opacity: 1;
        width: 16px !important;
    }

    .navbar-toggler:hover span:nth-child(2) {
        opacity: 1;
        width: 25px !important;
    }

    .navbar-toggler span:nth-child(3) {
        transform: translate(0%, 0%) rotate(0deg);
    }

    .navbar-toggler span:nth-child(1) {
        /* argin-top: 0.3em; */
    }

    .navbar-toggler:not(.collapsed) span:nth-child(1) {
        transform: translate(16%, -30%) rotate(45deg);
    }

    .navbar-toggler:not(.collapsed) span:nth-child(2) {
        opacity: 0;
    }

    .navbar-toggler:not(.collapsed) span:nth-child(3) {
        transform: translate(15%, 33%) rotate(-45deg);
    }
    .logo-left-bar {
        position: absolute;
        z-index: 1200;
        top: 0;
        left: 0;
        width: 120px;
        background-color: black;
        padding:15px 0px;
        transition: .4s;
    }
    .logo-left-bar a {
        text-decoration: none !important;
        color: white;
    }
    .logo-left-bar .logo {
        width: 90px;
    }

    @media screen and (max-width: 768px) {
        .logo-left-bar {
            padding: 10px 0px;
            width: 80px;
            background-color: rgba(0, 0, 0, 0.628) !important;
        }
        .logo-left-bar .logo {
            width: 50px;
        }
    }
    .navbar-collapse > div {
        height: 100vh !important;
        padding-top: 200px;
    }
    .navbar-collapse.collapsing {
        transition: height .5s cubic-bezier(0.69, 0.03, 0.44, 0.92) !important;
    }
    .menu-show-center > li > a {
        text-decoration: none !important;
        color: #fff;
        margin-bottom: 10px;

        background-image: linear-gradient(currentColor, currentColor);
        background-position: 0% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size .6s;
    }
    .menu-show-center > li:nth-of-type(1) {
        width: 140px !important;
    }
    .menu-show-center a:hover {
        background-size: 100% 1px;
    }
    .menu-show-center {
        margin-left: 0px;
        /* border-bottom: 1px rgba(255, 255, 255, 0.616) solid; */
    }
    .openCount {
        background-image: linear-gradient(233deg, blue, rgb(108, 2, 163)) !important;
        color: #fff !important;
        text-decoration: none !important;
        padding: 10px 20px;
        border-radius: 25px;
        transition: .3s;
        z-index: 1000 !important;
    }
    .openCount:hover {
        transform: scale(1.03)
    }

    #openCountModal .modal-header,
    #openCountModal .modal-body,
    #openCountModal .modal-footer {
        border: none !important;
    }
</style>