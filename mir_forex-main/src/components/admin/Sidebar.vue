<template>
    <div class="text-center h-100 row">
        <div class="col-12">
            <img src="/logo_white.png" class="w-80">
            <ul class="nav flex-column text-start mt-5">
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/admin"><font-awesome-icon :icon="['fas', 'table-columns']" size="2xl" style="color: #ffffff;" /> Дашборд</a>
                </li> -->
                <li class="nav-item">
                    <a class="nav-link" href="/"><font-awesome-icon :icon="['fas', 'house']" size="2xl" style="color: #ffffff;" /> Вернуться на сайт</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/request"><font-awesome-icon :icon="['fas', 'user']" size="2xl" style="color: #ffffff;" /> Заявки</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/feedback"><font-awesome-icon :icon="['fas', 'comment']" size="2xl" style="color: #ffffff;" /> Отзывы</a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="/admin/settings"><font-awesome-icon :icon="['fas', 'cog']" size="2xl" style="color: #ffffff;" /> Настройки</a>
                </li> -->
            </ul>
        </div>
        <div class="col-12 align-self-end">    
            <div class="user align-items-end">
                <div class="d-flex">
                    <div class="img">
                        <font-awesome-icon :icon="['fas', 'user']" size="2xl" style="color: #ffffff;" /> 
                    </div>
                    <div class="name text-white mt-1 ms-4">
                        Администратор
                        <font-awesome-icon :icon="['fas', 'right-from-bracket']" class="ms-2"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    a {
        font-size: 16px;
        color: #fff;
    }
    a > svg {
        margin-right: 15px;
    }
    .user {
        margin-top: auto;
        margin-bottom: 0;
    }
</style>