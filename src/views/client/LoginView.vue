<script setup>

</script>

<template>
  <div class="main">
    <div class="d-flex align-items-center">
        <div class="col-md-4 header">
            <div class="text-center">
                <img src="/logo_white.png" class="w-60">
                <h4>Если вы попали сюда <span class="h1">случайно</span>, просто уходите, тут ничего нет</h4>
            </div>
        </div>
        <div class="col-md-8 col-12">
            <div class="d-flex align-items-center">
                <div class="col-12">
                    <h1 class="fw-bolder">Авторизация</h1>
                    <form>
                        <div class="mb-3">
                            <input type="email" class="form-control p-3" id="login" placeholder="Введите ваш email">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control p-3" id="password" placeholder="Введите ваш пароль">
                        </div>
                        <button type="button" class="w-100 btn btn-primary p-3 mt-3" v-on:click="login()">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="logo">
        <img src="/logo_white.png" alt="">
    </div> -->
  </div>
</template>

<style scoped>
.main {
    background-image: linear-gradient(-80deg, rgb(22,43,89), rgb(10,16,34));
    width: 100wv !important;
    height: 100vh !important;
    overflow: hidden;
}
.main {
  /* padding-left: 10%;
  padding-right: 10%; */
}
.header {
    padding: 20px;
}
.header img {
    margin-top: -20px;
    margin-bottom: -20px;
}
.header h4 {
    font-size: 20px;
    font-weight: 300;
    color: #ffffffb3;
}
.header h4 > span {
    font-size: 20px;
    font-weight: 300;
    color: rgba(0, 80, 255, 0.71)
}
.main > div > div:nth-of-type(1) {
    /* height: 100vh !important; */
}
.main > div > div:nth-of-type(2) {
    padding-left: 15%;
    padding-right: 15%;
    height: 100vh;
    background-color: white;
    border-radius: 30px 0 0 30px;
}
.main > div > div:nth-of-type(2) > div {
    height: 100vh;
}
.header {
  padding-top: 20px;
  padding-bottom: 100px;
}
</style>

<script>
    export default {
        setup() {
        },
        methods: {
            async login () {

                const login = document.getElementById('login').value;
                const password = document.getElementById('password').value;

                const response = await fetch("/api.php", {
                    body: JSON.stringify({
                        "login" : login,
                        "password" : password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "post"
                })

                try {
                    const data = await response.json()
                    if (data.type == 'success') {
                        window.location.href = "/admin";
                    } else {
                        alert('Ошибка авторизации')
                    }
                } catch(e) {
                    alert('Ошибка авторизации')
                }
            }
        }
    }
</script>