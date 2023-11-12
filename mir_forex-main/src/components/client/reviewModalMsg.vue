<template>

    <div class="modal fade" id="reviewModalMsg" tabindex="-1" aria-labelledby="reviewModalMsg" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <button id="reviewModalMsgOpen" type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#reviewModalMsg">
                Открыть
            </button>
            <div class="modal-content pt-5 pb-5">
                <div class="modal-body pb-0">
                    <h3 v-if="type == 'success'">
                        <font-awesome-icon :icon="['fas', 'circle-check']" size="xl" class="me-2"/>
                        Ваш отзыв успешно отправлен
                    </h3>
                    <h3 v-if="type == 'error'">
                        <font-awesome-icon :icon="['fas', 'circle-xmark']" size="xl" class="me-2"/>
                        Произошла ошибка, пожалуйста повторите позже
                    </h3>
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
        props: ['type']
    }
</script>