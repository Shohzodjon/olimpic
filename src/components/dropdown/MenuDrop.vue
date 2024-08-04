<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
defineProps({
    data: {
        type: Object,
        default: null
    }
})
</script>
<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            <span>
                {{ data?.label }}
            </span>
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <template v-for="(item, index) in data?.children" :key="index">
                    <a-menu-item v-if="!item.children" :class="{ 'custom-menu-item': true }">
                        <a>{{ item.label }}</a>
                    </a-menu-item>
                    <a-sub-menu v-else :title="item.label" :key="item.label" :class="{ 'custom-sub-menu': true }">
                        <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
                            <a-menu-item :class="{ 'custom-sub-menu-item': true }">{{ subItem.label }}</a-menu-item>
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
    gap: 10px;
}

.ant-dropdown-link svg {
    font-size: 1.4rem !important;
}

.ant-dropdown-menu-vertical {
    background: #eaeff6 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    width: 110% !important;
    max-width: 300px;
    padding: 6px 8px !important;
}


.custom-sub-menu {
    border-bottom: 1px solid #cacaca;
}
.custom-sub-menu:last-child {
    border-bottom: none;
}

.custom-sub-menu span {
    font-size: 1.6rem !important;
    font-weight: 500;
}

.custom-sub-menu-item {
    font-size: 1.6rem !important;
    font-weight: 500 !important;
    border-radius: 0 !important;
    border-bottom: 1px solid #cacaca;
}

.custom-sub-menu-item:last-child {
    border-bottom: none !important;
}

.custom-menu-item {
    color: #333 !important;
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
</style>