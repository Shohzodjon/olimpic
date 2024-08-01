<script setup>
import { ref } from 'vue';
const activeKey = ref([]);
const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
</script>
</script>
<template>
    <div>
        <a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="This is panel header 1">
                <slot name="content" />
            </a-collapse-panel>
        </a-collapse>
    </div>

</template>