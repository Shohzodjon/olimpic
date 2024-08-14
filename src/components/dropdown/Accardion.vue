<script setup>
import { ref,   nextTick } from 'vue';
const props = defineProps({
    data: {
        type: Object,
        default: null
    }
});

const activeKey = ref(props.data ? props.data.id : 1);
// const handleClick = async (e) => {
//     await nextTick();
//     const items = document.querySelectorAll('.ant-collapse-item');
//     let el = e.target;
//     let parent = el.closest('.ant-collapse-header');
//     let sibling = parent.nextElementSibling;

//     items.forEach(item => {
//         let content = item.querySelector('.ant-collapse-content');
//         if (content) {
//             content.classList.remove('ant-collapse-content-active');
//             content.style.display = 'none';
//         }
//     });

//     if (sibling) {
//         sibling.classList.add('ant-collapse-content-active');
//         sibling.style.display = 'block';
//     }
// };
const handleClick = async (e) => {
    await nextTick();
    const items = document.querySelectorAll('.ant-collapse-item');
    let el = e.target;
    let parent = el.closest('.ant-collapse-header');
    let sibling = parent.nextSibling;
    items.forEach(item => {
        if (item.children.length > 1) {
            item.children[1].classList.remove('ant-collapse-content-active');
            item.children[1].style.display = 'none';
        }
    })
    sibling.classList.add('ant-collapse-content-active');
    sibling.style.display = 'block'
}

</script>
<template>
    <div style="margin-bottom: 20px;">
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" :header="data?.label" @click="(e) => handleClick(e)">
          <slot name="accardion-card"/>
            </a-collapse-panel>
        </a-collapse>
    </div>

</template>
<style scoped>
.ant-collapse-icon-position-start {
    border-radius: 4px !important;
    background: #fff !important;
    border: none !important;
    box-shadow: 0px 0px 12px rgb(56 56 56 / 5%) !important;
}

.ant-collapse-item .ant-collapse-header .ant-collapse-expand-icon .ant-collapse-arrow {
    display: none !important;
}
</style>