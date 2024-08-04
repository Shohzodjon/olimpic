<script setup>
defineProps({
    content: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: 'home'
    }
})
</script>
<template>
    <RouterLink :to="{name:url}" class="ability">
        <div class="div-hide">
            <div class="button-label-absolute-wrapper unactive">
                <div class="button-small-text">{{ content }}</div>
            </div>
            <div class="button-label-relative-wrapper active">
                <div class="button-small-text ">{{ content }}</div>
            </div>
        </div>
    </RouterLink>

</template>