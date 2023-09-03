<script setup>
    import GeneralPage from '@/components/admin/GeneralPage.vue' 
</script>

<template>
    <GeneralPage>
        <div class="d-flex">
            <div class="col-12">
                <div class="d-flex">
                    <h1 class="fw-bolder mb-3">Базовые настройки</h1>
                    <h4 id="saveButton" class="fw-bolder ms-auto me-0">Сохранить</h4>
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="card shadow w-100">
                                <h4>Контактные данные</h4>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email для обращений</label>
                                    <input type="email" class="form-control" name="email">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Номер телефона</label>
                                    <input type="phone" class="form-control" name="phone">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Адрес</label>
                                    <input type="address" class="form-control" name="address">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-12">
                            <div class="card shadow w-100">
                                <h4>Социальыне сети</h4>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Telegram</label>
                                    <input type="text" class="form-control" name="telegram">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Disqord</label>
                                    <input type="text" class="form-control" name="disqord">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">YouTube</label>
                                    <input type="text" class="form-control" name="youtube">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> 
    </GeneralPage>
</template>

<style scoped>
    .card {
        padding: 25px;
        margin-bottom: 30px;
        border: none;
    }
    .card .count{
        font-size: 32px;
        font-weight: 900;
    }
    .card .name{
        font-size: 14px;
        text-align: start;
        font-weight: 400;
    }
    #saveButton {
        opacity: .5;
        margin-top: 5px !important;
        margin-bottom: 0;
    }
    #saveButton:hover {
        opacity: .8;
    }
</style>