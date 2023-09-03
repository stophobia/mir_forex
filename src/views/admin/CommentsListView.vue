<script setup>
    import GeneralPage from '@/components/admin/GeneralPage.vue' 
</script>

<template>
    <GeneralPage>
        <div class="d-flex">
            <div class="col-12">
                <h1 class="fw-bolder mb-3">Отзывы</h1>

                <form>
                    <div class="row">
                        <div class="col-12">
                            <div class="card shadow w-100">
                                <div class="mb-4 d-flex">
                                    <!-- <div class="col-8 pe-4">
                                        <input type="text" class="form-control" placeholder="Поиск" />
                                    </div> -->
                                </div>
                                <div class="mb-0">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">ФИО</th>
                                            <th scope="col">Код</th>
                                            <th scope="col">Опубликованный</th>
                                            <th scope="col">Созданно</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="feed in data" :key="feed.id" v-on:click="open(feed.id)">
                                                <th scope="row">{{feed.id}}</th>
                                                <td>{{ feed.username }}</td>
                                                <td>{{ feed.code }}</td>
                                                <td>
                                                    <span v-if="feed.active">🟢 Да</span>
                                                    <span v-if="!feed.active">🔴 Нет</span>
                                                </td>
                                                <td>{{ formatDate(feed.created_at) }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
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
    tr {
        cursor: pointer !important;
    }
</style>

<script>

    export default {
    data() {
        return {
            data : []
        }
    },
    mounted() {
        this.loadData()
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
        open(id) {
            window.location.href = "/admin/feedback/" + id;
        },
        async loadData() {
            const response = await fetch("/api.php?action=getAllFeedback", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "get"
            })

            try {
                const data = await response.json()
                if (data.length > 0) {
                    this.data = data
                }
            } catch(e) {
                console.log('error')
            }
        }
    }
}
</script>