<script setup>
    import ReviewBlock from '@/components/client/ReviewBlock.vue'
    import BlockType10 from '@/components/client/BlockType10.vue';

    // $(".arrow").click(function() {
    //     if ($(this).hasClass("arrow-right")) {
    //         x = ((box.width() / 2)) + box.scrollLeft();
    //         box.animate({
    //             scrollLeft: x,
    //         })
    //     } else {
    //         x = ((box.width() / 2)) - box.scrollLeft();
    //         box.animate({
    //             scrollLeft: -x,
    //         })
    //     }
    // })

</script>


<template>
    <div class="block bg" id="review">
        <div class="container-fuild">
            <div class="row control justify-content-between">
                <div class="col-1 text-start ">
                    <font-awesome-icon :icon="['fas', 'angle-left']" size="2xl" class="left" v-on:click="leftScoll()"/>
                </div>
                <div class="col-1 text-end">
                    <font-awesome-icon :icon="['fas', 'angle-right']" size="2xl" class="right" v-on:click="rightScoll()"/>
                </div>
            </div>
            <div class="d-flex position-relative corusell">
                <div class="col-9 col-md-4 p-4" v-for="reviewOnce in reviewAPI" :key="reviewOnce.code">
                    <ReviewBlock @reviewData='onReviewData' 
                        data-aos = "fade-up"
                        :name = reviewOnce.username
                        :date = formatDate(reviewOnce.created_at)
                        :code = reviewOnce.code
                        :text = reviewOnce.text
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-center" data-aos="fade-up">
                    <button type="button" class="btn-dark btn" data-bs-toggle="modal" data-bs-target="#reviewModalCreate">
                        Оставить отзыв
                    </button>
                </div>
            </div>
        </div>
        <BlockType10/>
    </div>
</template>

<style scoped>
    .block {
        padding-bottom: 100px;
        padding-top: 100px;
        overflow-x: hidden;
        position: relative;
    }
    .bg {
        background-color: rgba(12, 16, 34, 1);
        background-image: url('/bg_review.png');
        background-position: top right;
        background-repeat: none;
        background-size: contain;
    }
    .control {
        position: absolute;
        z-index: 999;
        margin-top: 135px;
        width: 100% !important;
        /* height: 50% !important; */
    }
    .corusell,
    .corusell > div {
        z-index: 500 !important;
        position: relative !important;
    }
    .control .left,
    .control .right {
        transition: .5s;
        position: relative !important;
        z-index: 9999 !important;
        color: rgba(255, 255, 255, .8);
        cursor: pointer !important;
    }
    .control .right {
        padding-right: 20px;
        margin-left: auto;
        margin-right: 0;
    }
    .control .left {
        padding-left: 20px;
    }
    .control .left:hover,
    .control .right:hover{
        color: rgba(255, 255, 255, 1);
    }
    .block > div > div {
        overflow: scroll;
        width: auto;
    }
    .block > div > div::-webkit-scrollbar {
        display: none !important;
    }
    @media screen and (min-width: 992px) {
        button {
            margin-top: 200px !important;
        }
    }
    @media screen and (max-width: 992px) {
        .control {
            display: none !important;
        }
    }
    .btn-dark {
        background-image: linear-gradient(283.54deg, #878787 -39.35%, rgba(86, 86, 86, 0) 85.21%);
        background-color: transparent;
        border: 1px solid #646464;
        margin-top: 40px;
        padding: 15px 60px;
        font-size: 16px;
        font-weight: 800;
    }
</style>

<script>

    export default {
    props: ['title'],
    data() {
        return {
            reviewDB : [
                {
                    'username': 'Митюк Виталий',
                    'created_at': "2023-08-03 17:10:29",
                    'code': '11S27BF',
                    'text': 'Пол года назад заинтересовала сфера инвестиций, так как в ней открываются хорошие финансовые возможности, но чтобы в этой сфере добиться каких либо результатов надо эту сферу детально изучить, я начал искать кто мне может помочь в этом вопросе, очень много информации на различных площадках в интернете и много сайтов я поситил в итоге я попал в "Международный институт рынка". Со мной связался Дмитрий Евгеньевич, мы нашли обший язык, общее понимание и мы приступили к занятиям, обучение длилось 10 занятий по часу, в течении котрых мне был предоставлен дэмо счет и материалы для обучения. В ходе занятий Дмитрий мне рассказал большое количество стратегий из которых мы подобрали стратегии под мой график работы и восхитил меня своей скурпулезностью и подходом к каждому фрагменту обучения. Выражаю большую благодарность! В данный момент уже применяю данные методики на реальном счете и продалжаю работать с данным институтом! Рекомендую!'
                },
                {
                    'username': 'Митюк Виталий',
                    'created_at': "2023-08-03 17:10:29",
                    'code': '11S27BF',
                    'text': 'Пол года назад заинтересовала сфера инвестиций, так как в ней открываются хорошие финансовые возможности, но чтобы в этой сфере добиться каких либо результатов надо эту сферу детально изучить, я начал искать кто мне может помочь в этом вопросе, очень много информации на различных площадках в интернете и много сайтов я поситил в итоге я попал в "Международный институт рынка". Со мной связался Дмитрий Евгеньевич, мы нашли обший язык, общее понимание и мы приступили к занятиям, обучение длилось 10 занятий по часу, в течении котрых мне был предоставлен дэмо счет и материалы для обучения. В ходе занятий Дмитрий мне рассказал большое количество стратегий из которых мы подобрали стратегии под мой график работы и восхитил меня своей скурпулезностью и подходом к каждому фрагменту обучения. Выражаю большую благодарность! В данный момент уже применяю данные методики на реальном счете и продалжаю работать с данным институтом! Рекомендую!'
                },
                {
                    'username': 'Митюк Виталий',
                    'created_at': "2023-08-03 17:10:29",
                    'code': '11S27BF',
                    'text': 'Пол года назад заинтересовала сфера инвестиций, так как в ней открываются хорошие финансовые возможности, но чтобы в этой сфере добиться каких либо результатов надо эту сферу детально изучить, я начал искать кто мне может помочь в этом вопросе, очень много информации на различных площадках в интернете и много сайтов я поситил в итоге я попал в "Международный институт рынка". Со мной связался Дмитрий Евгеньевич, мы нашли обший язык, общее понимание и мы приступили к занятиям, обучение длилось 10 занятий по часу, в течении котрых мне был предоставлен дэмо счет и материалы для обучения. В ходе занятий Дмитрий мне рассказал большое количество стратегий из которых мы подобрали стратегии под мой график работы и восхитил меня своей скурпулезностью и подходом к каждому фрагменту обучения. Выражаю большую благодарность! В данный момент уже применяю данные методики на реальном счете и продалжаю работать с данным институтом! Рекомендую!'
                },
                {
                    'username': 'Митюк Виталий',
                    'created_at': "2023-08-03 17:10:29",
                    'code': '11S27BF',
                    'text': 'Пол года назад заинтересовала сфера инвестиций, так как в ней открываются хорошие финансовые возможности, но чтобы в этой сфере добиться каких либо результатов надо эту сферу детально изучить, я начал искать кто мне может помочь в этом вопросе, очень много информации на различных площадках в интернете и много сайтов я поситил в итоге я попал в "Международный институт рынка". Со мной связался Дмитрий Евгеньевич, мы нашли обший язык, общее понимание и мы приступили к занятиям, обучение длилось 10 занятий по часу, в течении котрых мне был предоставлен дэмо счет и материалы для обучения. В ходе занятий Дмитрий мне рассказал большое количество стратегий из которых мы подобрали стратегии под мой график работы и восхитил меня своей скурпулезностью и подходом к каждому фрагменту обучения. Выражаю большую благодарность! В данный момент уже применяю данные методики на реальном счете и продалжаю работать с данным институтом! Рекомендую!'
                },
                {
                    'username': 'Митюк Виталий',
                    'created_at': "2023-08-03 17:10:29",
                    'code': '11S27BF',
                    'text': 'Пол года назад заинтересовала сфера инвестиций, так как в ней открываются хорошие финансовые возможности, но чтобы в этой сфере добиться каких либо результатов надо эту сферу детально изучить, я начал искать кто мне может помочь в этом вопросе, очень много информации на различных площадках в интернете и много сайтов я поситил в итоге я попал в "Международный институт рынка". Со мной связался Дмитрий Евгеньевич, мы нашли обший язык, общее понимание и мы приступили к занятиям, обучение длилось 10 занятий по часу, в течении котрых мне был предоставлен дэмо счет и материалы для обучения. В ходе занятий Дмитрий мне рассказал большое количество стратегий из которых мы подобрали стратегии под мой график работы и восхитил меня своей скурпулезностью и подходом к каждому фрагменту обучения. Выражаю большую благодарность! В данный момент уже применяю данные методики на реальном счете и продалжаю работать с данным институтом! Рекомендую!'
                }
            ],
            reviewAPI : []
        }
    },
    mounted() {
        this.loadData()
    },
    methods: {
        leftScoll() {
            var box = document.getElementsByClassName('corusell')[0]
            box.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        },
        rightScoll() {
            var box = document.getElementsByClassName('corusell')[0]
            box.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        },
        onReviewData (data) {
            this.$emit('reviewWindow', {
                name: data.name,
                date: data.date,
                text: data.text 
            })
        },
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
                    this.reviewAPI = data
                } else {
                    this.reviewAPI = this.reviewDB
                }
            } catch(e) {
                this.reviewAPI = this.reviewDB
            }
        }
    }
}
</script>