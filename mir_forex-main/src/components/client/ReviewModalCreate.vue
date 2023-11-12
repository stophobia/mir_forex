<template>

    <div class="modal fade" id="reviewModalCreate" tabindex="-1" aria-labelledby="reviewModalCreate" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row justify-content-between w-100">
                        <div class="col-12 text-start">
                            <h4 class="mb-0 fw-bolder">Новый отзыв</h4>
                        </div>
                    </div>
                </div>
                <div class="modal-body pb-0">
                    <form>
                        <div class="row mt-3">
                            <div class="col-7">
                                <input type="text" class="form-control p-3" id="username" placeholder="ФИО">
                            </div>
                            <div class="col-5">
                                <Popper 
                                    content = "Идентификатор вы можете получить у своего куратора, данная функция используется для актуальности отзывов о нашей компании"
                                    hover = True
                                    arrow = True
                                    zIndex = 9999
                                    offsetDistance = 10px
                                    placement = top
                                    class = "w-100 m-0"
                                >
                                    <input type="text" class="form-control p-3" oninput="this.value = this.value.toUpperCase()" maxlength="7" id="code" placeholder="Идентификатор">
                                </Popper>
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-12">
                                <textarea class="form-control p-3" id="text" rows="6" placeholder="Введите отзыв"></textarea>
                            </div>
                        </div>
                        <div class="mb-5 mt-4 w-100">
                            <Popper 
                            content = "Для отправки отзыва получите идентификатор у вашего куратора, данная функция используется для акутальности отзывов о нашей компании"
                            hover = True
                            arrow = True
                            zIndex = 9999
                            offsetDistance = 10px
                            placement = top
                            class = "w-100 m-0"
                        >
                            <button type="button" class="btn btn-primary p-3 w-100 position-relative" v-on:click="createFeedback()">
                                Отправить<font-awesome-icon :icon="['fas', 'circle-exclamation']" style="color: #fff; margin-left: 5px;" />
                            </button>
                        </Popper>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .modal-content {
        background-color: rgb(12, 16, 34);
        border: 1px solid black;
        border-radius: 13px;
        color: #fff;
    }
    .modal-header {
        background-image: linear-gradient(160deg, rgb(12, 16, 34), rgb(24, 33, 70) 80.25%);
        border-bottom: none !important;
        padding: 25px;
    }
    .modal-body {
        padding: 20px 30px;
        color: rgba(255, 255, 255, .8);
    }
    input, textarea,
    input:focus, textarea:focus,
    input:active, textarea:active {
        color: rgba(255, 255, 255, .9) !important;
        background-color: rgb(12, 16, 34);
        outline: 0 !important;
        border: 1px solid rgb(28, 40, 85);
    }
    input::placeholder, textarea::placeholder {
        color: rgba(255, 255, 255, .5) !important;
    }

</style>

<script>
    export default {
        setup() {
        },
        methods: {
            sendResult(typeStr) {
                this.$emit('onReviewResult', {
                    type: typeStr
                })
            },
            async createFeedback () {

                const response = await fetch("/api.php", {
                    body: JSON.stringify({
                        "action" : "createFeedback",
                        "username" : document.getElementById('username').value,
                        "code" : document.getElementById('code').value,
                        "text" : document.getElementById('text').value
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "post"
                })

                try {
                    const data = await response.json()
                    this.sendResult(data.type)
                } catch(e) {
                    this.sendResult('error')
                }
            }
        }
    }
</script>