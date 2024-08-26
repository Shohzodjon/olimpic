<script setup>
import { lang } from '@/uitiles/currentLang';
import { useFooterStore } from '@/stores/footer';
import { ref, onMounted } from 'vue';
const isLoad = ref(false);
const footerStore = useFooterStore();
onMounted(async () => {
    await footerStore.fetchList();
    isLoad.value = true
})
</script>
<template>
    <footer class="footer">
        <div class="container" v-if="isLoad">
            <div class="footer-flex">
                <div class="footer-header">
                    <div class="left">
                        <RouterLink :to="`/${lang}`" class="footer-logo">
                            <div class="footer-logo__img">
                                <img src="@/assets/images/logo.png" alt="logo ">
                            </div>
                            <div class="footer-logo__info">
                                <h3>{{ $t('logo') }}</h3>
                                <ul>
                                    <li>citius</li>
                                    <li>altius</li>
                                    <li>fortius</li>
                                </ul>
                            </div>
                        </RouterLink>

                        <div class="footer-social">
                            <p>{{ $t('social') }}:</p>
                            <ul>
                                <li><a href="https://www.facebook.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z" />
                                        </svg>
                                    </a></li>
                                <li><a href="https://www.facebook.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 256 256">
                                            <path fill="currentColor"
                                                d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24m48-132H80a60.07 60.07 0 0 0-60 60v96a60.07 60.07 0 0 0 60 60h96a60.07 60.07 0 0 0 60-60V80a60.07 60.07 0 0 0-60-60m36 156a36 36 0 0 1-36 36H80a36 36 0 0 1-36-36V80a36 36 0 0 1 36-36h96a36 36 0 0 1 36 36ZM196 76a16 16 0 1 1-16-16a16 16 0 0 1 16 16" />
                                        </svg>
                                    </a></li>
                                <li><a href="https://www.facebook.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" stroke-linecap="round"
                                                stroke-linejoin="round" stroke-width="2"
                                                d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
                                        </svg>
                                    </a></li>
                                <li>
                                    <a href="#" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M14.058 3.41c-1.807.767-2.995 2.453-3.056 4.38L11 7.972l-.243-.023C8.365 7.68 6.259 6.437 4.813 4.418a1 1 0 0 0-1.685.092l-.097.186l-.049.099c-.719 1.485-1.19 3.29-1.017 5.203l.03.273c.283 2.263 1.5 4.215 3.779 5.679l.173.107l-.081.043c-1.315.663-2.518.952-3.827.9c-1.056-.04-1.446 1.372-.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06-1.18 7.152-4.223 8.335-8.433l.127-.495c.238-.993.372-2.006.401-3.024l.003-.332l.393-.779l.44-.862l.214-.434l.118-.247c.265-.565.456-1.033.574-1.43l.014-.056l.008-.018c.22-.593-.166-1.358-.941-1.358l-.122.007a1 1 0 0 0-.231.057l-.086.038a8 8 0 0 1-.88.36l-.356.115l-.271.08l-.772.214c-1.336-1.118-3.144-1.254-5.012-.554l-.211.084z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <ul class="footer-middle">
                        <li><a href="#" target="_blank">{{ $t('address') }}: {{ footerStore.list[0]?.title }}</a>
                        </li>
                        <li><a :href="`mailto:${footerStore.list[1]?.title}`" target="_blank">{{ $t('email') }}:
                                {{ footerStore.list[1]?.title }}, {{ footerStore.list[2]?.title }}</a></li>
                        <li><a href="tel:++99871 205 5205" target="_blank">{{ $t('phone') }}:
                                {{ footerStore.list[3]?.html_content }}</a></li>
                        <li><a href="tel:+99871 244 4141" target="_blank">{{ $t('committee') }}:
                                {{ footerStore.list[4]?.html_content }}</a>
                        </li>
                        <li><a href="tel:+99855 502 8844" target="_blank"> {{ $t('medicalCenter') }}:
                                {{ footerStore.list[7]?.html_content }}</a></li>
                    </ul>
                    <div class="footer-right">
                        <p>{{ $t('subscribe') }}</p>
                        <a :href="`${footerStore.list[5]?.html_content}`" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m15 10l-4 4l6 6l4-16l-18 7l4 2l2 6l3-4" />
                            </svg> <span>Telegram bot</span>
                        </a>
                        <img src="@/assets/images/collect.png" alt="collect png" class="colllect-img">
                    </div>
                </div>
                <div class="footer-line"></div>
                <div class="footer-bottom">
                    <div>
                        <img src="https://i.creativecommons.org/l/by/4.0/80x15.png" alt="img">
                        <p>{{ $t('licence') }}: Creative
                            Commons Attribution 4.0 International.</p>
                    </div>
                    <a href="https://osg.uz/" target="_blank">{{ $t('owner') }}: Online Service Group</a>
                </div>
            </div>
        </div>
    </footer>
</template>