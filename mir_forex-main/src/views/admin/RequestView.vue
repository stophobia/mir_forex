<script setup>
    import GeneralPage from '@/components/admin/GeneralPage.vue' 
</script>

<template>
    <GeneralPage>
        <div class="d-flex">
            <div class="col-12">
                <h1 class="fw-bolder mb-3">Заявка #{{ number }}</h1>

                <div class="btn-group mb-4" v-if="data.phone_number">
                    <a :href="'tel:' + data.phone_number" class="btn btn-primary active" aria-current="page">Позвонить</a>
                </div>

                <form>
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="card shadow w-100">
                                <h4 class="mb-4">Обащая информация</h4>
                                <div class="mb-0">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <th>ФИО</th>
                                                <td>{{ data.username }}</td>
                                            </tr>
                                            <tr>
                                                <th>Тип</th>
                                                <td>{{ data.type }}</td>
                                            </tr>
                                            <tr>
                                                <th>Номер телефона</th>
                                                <td>{{ data.phone_number }}</td>
                                            </tr>
                                            <tr>
                                                <th>Дата создания</th>
                                                <td>{{ formatDate(data.created_at) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="card shadow w-100" v-if="data.description">
                                <h4 class="mb-4">Комментарий</h4>
                                <div class="mb-0">
                                    <p>{{ data.description }}</p>
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
    tr, td, th {
        border: none !important;
        border-style: none !important;
    }
</style>

<script>
    export default {
    data() {
        return {
            data : {},
            number : null
        }
    },
    mounted() {
        this.number = this.$route.params.number
        this.loadData(this.number)
    },
    methods: {
        formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2) 
                month = '0' + month;
            if (day.length < 2) 
                day = '0' + day;

            return [year, month, day].join('/');
        },
        async loadData(id) {
            const response = await fetch("/api.php?action=getRequest&id=" + id, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "get"
            })

            try {
                const data = await response.json()
                if (data.length > 0) {
                    this.data = data[0]
                }
            } catch(e) {
                console.log('error')
            }
        }
    }
}
</script>