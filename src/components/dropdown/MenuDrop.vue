<script setup>
dfineProps({
    data: {
        type: Array,
        default: []
    }
})
</script>
<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            Qo'mita
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <template v-for="(item, index) in menuItems" :key="index">
                    <a-menu-item v-if="!item.children">
                        <a>{{ item.label }}</a>
                    </a-menu-item>
                    <a-sub-menu v-else :title="item.label" :key="item.label">
                        <template v-for="(subItem, subIndex) in item.children" :key="subIndex">
                            <a-menu-item>{{ subItem.label }}</a-menu-item>
                        </template>
                    </a-sub-menu>
                </template>
            </a-menu>
        </template>
    </a-dropdown>
</template>