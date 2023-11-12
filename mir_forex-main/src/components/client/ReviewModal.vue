<template>

    <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="row justify-content-between w-100">
                        <div class="col-12 text-start">
                            <h4 class="fw-bolder mb-0">{{name}}</h4>
                            <span class="text-muted">{{date}}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-body text-start">
                    <p>{{text}}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .modal-content {
        background-color: rgb(12, 16, 34);
        border: 1px solid rgb(35, 61, 163);
        color: #fff;
    }
    .modal-header {
        background-image: linear-gradient(160deg, rgb(12, 16, 34), rgb(24, 33, 70) 80.25%);
        border-bottom: 1px solid rgb(35, 61, 163);
        padding: 25px;
    }
    .modal-body {
        padding: 40px 30px;
        color: rgba(255, 255, 255, .8);
    }
    .text-muted {
        color: rgba(255, 255, 255, .5) !important;
    }
</style>

<script>

    export default {
        props: ['name', 'date', 'text'],
        setup() {
        },
        methods: {}
    }
</script>