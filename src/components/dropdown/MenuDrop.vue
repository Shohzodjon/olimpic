<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
import router from '@/router';
defineProps({
    data: {
        type: Object,
        default: null
    }
});
const handleSubMenuClick = (path) => {
    router.push({
        name: 'static-page',
        query: { alias: path }
    });
}

</script>
<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            <span>
                {{ data?.title }}
            </span>
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <template v-for="(item, index) in data?.children" :key="index">
                    <a-menu-item v-if="item.children.length == 0" :class="{ 'custom-menu-item': true }">
                        <router-link v-if="item.link" :to="{ name: item.link, query: { alias: item.alias } }"
                            >
                            {{ item.title }}
                        </router-link>
                        <router-link v-else :to="{ name: 'static-page', query: { alias: item.alias } }"
                            >
                            {{ item.title }}
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu v-else :title="`${item.title}`"  
                        :key="item.id" :class="{ 'custom-sub-menu': true }">
                        <template v-if="item.children.length != 0" v-for="subItem in item.children" :key="subItem.id">
                            <a-menu-item :class="{ 'custom-sub-menu-item': true }">
                                <router-link v-if="subItem.link" :to="{ name: subItem.link,query: { alias: subItem.alias } }"
                                    >{{
                                        subItem.title }} </router-link>
                                <router-link v-else :to="{ name: 'static-page', query: { alias: subItem.alias } }"
                                    >{{
                                        subItem.title }} </router-link>
                            </a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<style>
.ant-dropdown-link {
    font-size: 1.6rem !important;
    font-weight: 500;
    cursor: pointer;
    padding: 23px 0;
    display: flex;
    align-items: center;
    font-weight: 500 !important;
    gap: 10px;
}

.ant-dropdown-link svg {
    font-size: 1.4rem !important;
}

.ant-dropdown-menu-vertical {
    background:var(--drop-bg) !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    width: 110% !important;
    max-width: 300px;
    padding: 6px 8px !important;
}


.custom-sub-menu {
    border-bottom: 1px solid #cacaca;
}
.ant-dropdown-menu-title-content{
    font-weight: 500 !important;
}
.custom-sub-menu:last-child {
    border-bottom: none;
}

.custom-sub-menu span {
    font-size: 1.6rem !important;
    font-weight: 500 !important;
    color: var(--black-600) !important;
}

.custom-sub-menu .ant-dropdown-menu-title-content a {
    font-size: 1.6rem !important;
    font-weight: 500;
    color: var(--black-600) !important;
}

.custom-sub-menu-item {
    font-size: 1.6rem !important;
    font-weight: 500 !important;
    border-radius: 0 !important;
    border-bottom: 1px solid #cacaca;
}

.custom-sub-menu-item a {
    color: var(--black-600) !important;
    font-weight: 500 !important;
}

.custom-sub-menu-item:last-child {
    border-bottom: none !important;
}

.custom-menu-item {
    color: var(--black-600) !important;
    border-radius: 0 !important;
    border-bottom: 1px solid #cacaca;
    font-size: 1.6rem !important;
    font-weight: 500 !important;
}


.custom-menu-item:hover {
    background: none !important;
}

.custom-menu-item:last-child {
    border-bottom: none;
}
.ant-dropdown-link{
    span{
        color: var(--black-600) !important;
    }
}

</style>