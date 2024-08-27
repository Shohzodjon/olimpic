<script setup>
import { ref, computed } from 'vue';
import VK from '@/components/icons/VK.vue';
import Telegram from '@/components/icons/Telegram.vue';
import Twitter from '@/components/icons/Twitter.vue';
import OK from '@/components/icons/OK.vue';

const props = defineProps({
    url: {
        type: String, default: ''
    },
    title: {
        type: String, default: ""
    },
    description: {
        type: String, default: ''
    }
})

const odnoklassnikiShareLink = computed(() => {
    return `https://connect.ok.ru/offer?url=${encodeURIComponent(props.url)}&title=${encodeURIComponent(props.title)}&description=${encodeURIComponent(props.description)}`;
});

const twitterShareLink = computed(() => {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(props.url)}&text=${encodeURIComponent(props.title)}`;
});

const vkShareLink = computed(() => {
    return `https://vk.com/share.php?url=${encodeURIComponent(props.url)}&title=${encodeURIComponent(props.title)}&description=${encodeURIComponent(props.description)}`;
});
const tlShareLink = computed(() => {
    return `https://t.me/share/url?url=${encodeURIComponent(props.url)}&text=${encodeURIComponent(props.title)}`
})
</script>
<template>
    <div>
        <ul class="news-slug__social">
            <li>
                <a :href="vkShareLink" target="_blank">
                    <VK />
                </a>
            </li>
            <li>
                <a :href="odnoklassnikiShareLink" target="_blank">
                    <OK />
                </a>
            </li>
            <li>
                <a :href="tlShareLink" target="_blank">
                    <Telegram />
                </a>
            </li>
            <li>
                <a :href="twitterShareLink" target="_blank">
                    <Twitter />
                </a>
            </li>
        </ul>
    </div>
</template>