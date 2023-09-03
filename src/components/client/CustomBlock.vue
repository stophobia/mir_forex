<template>
    <div class="card">
        <div class="card-body text-center">
            <h5 class="fw-bolder mb-3 text-white">{{title}}</h5>
            <p class="text-muted">{{text}}</p>
            <button class="down" data-bs-toggle="modal" data-bs-target="#supportModal" style="z-index: 99;" v-on:click="openWindow()">
                <font-awesome-icon :icon="['fas', 'chevron-down']" size="xl" style="color: rgba(255, 255, 255, .3);"/>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted() { 
        },
        props: ['title', 'text'],
        methods: {
            openWindow() {
                this.$emit('supportDataRes', {
                    title: this.title,
                    text: this.text 
                })
            }
        }
    }
</script>

<style scoped>
    .card {
        background-color: rgb(12, 16, 34);
        border: 1px dashed rgb(35, 61, 163);
        color: #fff;
        height: 200px;
        width: 100% !important;
        overflow-y: hidden;
    }
    .card:before {
        content: '';
        top: 0;
        width: 100%;
        height: 100%;    
        position:absolute;
        left:0;
        background: linear-gradient(transparent 50.42%, rgb(12, 16, 34) 82%);
    }
    .down {
        border: none !important;
        background-color: transparent !important;
        outline: none !important;
        color: #fff;
        position: absolute;
        z-index: 999;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
    .card-body {
        padding: 20px;
        color: rgba(255, 255, 255, .5);
    }
    .text-muted {
        color: rgba(255, 255, 255, .5) !important;
    }
    h5 {
        font-size: 20px;
    }
    p {
        font-size: 12px;
    }
</style>