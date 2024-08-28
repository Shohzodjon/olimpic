<script setup>
import { ref, onMounted } from 'vue';

const text = ref(null);

onMounted(() => {
    let count = 0;
    let circles = document.querySelectorAll(".circle");
    let y = 0;

    if (text.value) {
        let textContent = text.value.textContent;
        let j = 0;
        count = Math.floor(360 / text.value.textContent.length);

        circles.forEach((circle) => {
            for (let i = 0; i < 360; i += count) {
                let letter = document.createElement("span");
                letter.className = "letter";

                if (textContent[j]) {
                    letter.innerHTML = textContent[j];
                    j++;
                }

                letter.style.transform = `rotate(${i}deg) translateY(${-106 + y}px)`;
                circle.appendChild(letter);
            }
            circle.style.zIndex = 1000 - y;
            y += 10;
        });
    }
});
</script>
<template>
    <div class="loader">
        <div class="center">
            <div class="circle" style="--delay: 0s">
                <span class="text" ref="text">{{ $t('logo') }}</span>
            </div>
            <div class="circle"></div>
            <div class="loader__logo">
                <img src="@/assets/images/logo_2.png" alt="logo">
            </div>
        </div>
    </div>
</template>
<style>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    transition: all linear .5s;
    display: none;
}

.center {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(51, 95, 169,1);
}

.loader__logo {
    position: absolute;
    width: 170px;
    height: 165px;
    border-radius: 50%;
    padding: 10px 15px;
    overflow: hidden;
    transform: rotate(1.5deg);

}

.loader__logo img {
    width: 100%;
    height: 100%;
}

.circle {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    animation: rotate 10s linear infinite;
}

.letter {
    position: absolute;
    display: block;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
}

.text {
    display: none;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
