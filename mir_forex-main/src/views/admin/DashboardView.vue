<script setup>
    import GeneralPage from '@/components/admin/GeneralPage.vue' 
</script>

<template>
    <GeneralPage>
        <div class="d-flex">
            <div class="col-12">
                <h1 class="fw-bolder mb-3">Дашборд</h1>
                <div class="row">
                    <div class="col-md-4 col-6">
                        <div class="card shadow w-100">
                            <span class="count">100</span>
                            <span class="name">Заявки</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="card shadow w-100">
                            <span class="count">100</span>
                            <span class="name">Заявки</span>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="card shadow w-100">
                            <span class="count">100</span>
                            <span class="name">Заявки</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </GeneralPage>
</template>

<style scoped>
    .card {
        padding: 25px;
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
</style>