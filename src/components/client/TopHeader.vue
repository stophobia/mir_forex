<script setup>
    import { vMaska } from "maska"
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
                        <input type="phone" :value="number" class="form-control p-3" id="number" placeholder="Номер телефона" v-maska data-maska="8 (###) ###-##-##">
                    </div>
                    <p class="fw-boler text-start text-danger mb-3 pb-0">Вы перейдете на официальный сайт Альфа-Форекс</p>
                </div>
                <div class="modal-footer text-center p-5 pt-0">
                    <button type="button" class="btn btn-primary w-100 mb-3 p-3">Открыть счет</button>
                    <p class="fw-lighter">Нажимая на кнопку «Записаться», я даю согласие на обработку персональных данных и соглашаюсь с <a href="/privacy_policy">Политикой конфиденциальности</a></p>
                </div>
            </div>
        </div>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand ms-0 me-auto" href="/">
                <img class="logo" src="/full_logo_white.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                    <li class="nav-item p-4">
                        <a class="nav-link active fw-bolder" href="/#student">Обучение</a>
                    </li>
                    <li class="nav-item p-4">
                        <a class="nav-link active fw-bolder" href="/courses">Курсы</a>
                    </li>
                    <li class="nav-item p-4">
                        <a class="nav-link active fw-bolder" href="/#review">Отзывы</a>
                    </li>
                    <li class="nav-item p-4">
                        <a class="nav-link active fw-bolder" href="/about">О компании</a>
                    </li>
                </ul>
                <span class="navbar-text me-5">
                    <a href="" class="text-white text-decoration-none fw-bolder me-3">
                        <font-awesome-icon :icon="['fab', 'telegram']" size="xl"/>
                    </a>
                    <a href="" class="text-white text-decoration-none fw-bolder">
                        <font-awesome-icon :icon="['fas', 'phone']" class="me-2" size="xl"/>8(999) 171-07-58
                    </a>
                </span>
                <span class="navbar-text ms-2">
                    <button class="btn btn-light fw-bolder" data-bs-toggle="modal" data-bs-target="#openCountModal">Открыть счет</button>
                </span>
            </div>

        </div>
    </nav>

</template>

<style scoped>
    * {
        transition: .3s !important;
    }
    .modal-footer {
        border: none !important;
    }
    nav {
        position: fixed;
        z-index: 99;
        width: 100vw;
        /* background-color: rgb(12, 16, 34) !important; */
        background-color: transparent !important;
    }
    nav > .container-fluid {
        padding-left: 5% !important;
        padding-right: 5% !important;
    }
    nav .logo {
        width: 250px;
        padding: 15px;
    }
    nav .btn {
        padding: 10px 30px;
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
    @media screen and (max-width: 992px) {
        .logo {
            padding-left: 0 !important;
        }
        .navbar-brand {
            width: 100%;
        }
        .navbar-brand img{
            width: 300px;
        }
        .navbar-collapse {
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            border-radius: 0 0 50% 50%;
            padding-left: 15%;
            background-image: linear-gradient(135deg, #1e2b5c, #0c1022 56%) !important;
        }
        .navbar-collapse.show {
            border-radius: 0 0 35px 35px !important;
            height: 80vh;
        }
        .navbar-collapse > ul {
            margin-top: 150px;
        }
        .navbar-collapse.collapsing {
            height: 0 !important;
        }
        .navbar-collapse li {
            padding-left: 0 !important;
        }
        .navbar-text {
            display: inline-block;
            margin-bottom: 20px !important;
            margin-left: 0 !important;
        }
        .navbar-toggler,
        .navbar-brand {
            position: relative;
            z-index: 999;
        }
    }
</style>