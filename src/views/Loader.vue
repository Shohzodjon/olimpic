<template>
    <transition name="fade">
        <div v-if="isLoading" class="loader">
            <div class="spinner"></div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue';

const isLoading = ref(true);
setTimeout(() => {
    isLoading.value = false;
}, 3000);
</script>

<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(158, 144, 144, 0.2);
    z-index: 9999;
}

.spinner {
    width: 100px;
    height: 100px;
    border: 7px solid #fff;
    border-top-color: #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>