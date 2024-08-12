<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import { ClockCircleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import VK from '@/components/icons/VK.vue';
import Telegram from '@/components/icons/Telegram.vue';
import Twitter from '@/components/icons/Twitter.vue';
import OK from '@/components/icons/OK.vue';
import news1 from '@/assets/images/news1.jpg'
import news2 from '@/assets/images/news2.jpg'
import news3 from '@/assets/images/news3.jpg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Yangiliklar", id: 2, url: '/oz' },
];
const images = [news1, news2, news3];
</script>
<template>
    <section class="news-slug">
        <div class="container">
            <BreadCrump :data="breads" />
            <a-row :gutter="24">
                <a-col :span="19">
                    <div class="news-slug__content">
                        <a-carousel autoplay :dots="false" :autoplaySpeed="3000" :slidesToShow="1"
                           >
                            <div v-for="(img, i) in images" :key="i">
                                <img :src="img" alt="img">
                            </div>
                        </a-carousel>
                        <div class="news-slug__flex">
                            <div class="news-slug__time">
                                <ClockCircleOutlined /> <span>14 Fevral 2022</span>
                            </div>
                            <ul class="news-slug__social">
                                <li>
                                    <a href="#" target="_blank">
                                        <VK />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <OK />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Telegram />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <Twitter />
                                    </a>
                                </li>
                            </ul>

                            <div class="news-slug__statistic">
                                <EyeOutlined /> <span>272</span>
                            </div>

                        </div>
                        <p>O‘zbekiston Milliy Olimpiya qo‘mitasi nodavlat — notijorat tashkiloti bo‘lib, o‘z faoliyatini
                            O‘zbekiston Respublikasi qonunchiligi, Xalqaro Olimpiya Qo‘mitasi Olimpiya Xartiyasi hamda
                            O‘zbekiston Milliy olimpiya qo‘mitasining Ustavi asosida amalga oshiradi.

                            O‘zbekiston Milliy Olimpiya qo‘mitasining asosiy vazifalari quyidagilardan iborat:

                            O‘zbekistonda Olimpiya xarakatini rivojlantirish, olimpizm g‘oyalarini keng targ‘ib etish;
                            Respublika sport delegatsiyalarining Olimpiada, Osiyo, Butunjahon yoshlar o‘yinlarida vakili
                            bo‘lish;
                            Xalqaro Olimpiya Qo‘mitasi, Osiyo Olimpiya Kengashi, boshqa mamlakatlar milliy olimpiya
                            qo‘mitalari, xalqaro sport federatsiyalari va uyushmalari bilan qalin hamkorlik qilish,
                            XOQning «Olimpiya birdamligi» dasturida ishtirok etish;
                            Respublika, aholisini jismoniy va ma’naviy tarbiyalashga, jismoniy tarbiya va sport,
                            ayniqsa, milliy sport turlari, nogironlar o‘rtasida sportni rivojlantirishga har taraflama
                            ko‘maklashish;
                            Mamlakat terma jamoalari va sport zaxiralarini tayyorlashda davlat, jismoniy tarbiya va
                            sport tashkilotlariga ko‘maklashish;
                            Yoshlarni boshqa mamlakatlar sportchilari bilan do‘stlik va birodarlikni mustahkamlash,
                            musobaqalarda halol sport kurashi olib borish, raqibiga olijanoblik bilan munosabatda
                            bo‘lish tamoyillari asosida tarbiyalash;
                            O‘zbekiston sportchilari yutuqlarini keng targ‘ib etish;
                            Sport kadrlari o‘rtasida tajriba ayriboshlash, ular malakalarini oshirish uchun anjumanlar,
                            seminarlar tashkil etish.

                            O‘zbekiston Milliy Olimpiya qo‘mitasi Milliy olimpiya qo‘mitalari assotsiatsiyasining teng
                            xuquqli a’zosidir.

                            O‘zbekiston Milliy Olimpiya qo‘mitasi tarkibi quyidagilardan iboratdir:

                            O‘zbekiston Milliy Olimpiya qo‘mitasi Prezidenti, Bosh kotibi, vitse-prezidentlar va
                            a’zolardan;
                            Olimpiya o‘yinlari dasturiga kiritilgan milliy sport federatsiyalari vakillaridan;
                            Cportning olimpiya turlari bo‘lmagan hamda milliy sport federatsiyalari vakillaridan;
                            Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar sport tashkilotlari
                            vakillaridan;
                            Jismoniy tarbiya va sport davlat boshqaruvi organlari, ko‘ngilli sport jamiyatlari
                            vakillaridan;
                            Olimpiya o‘yinlari ishtirokchilari bo‘lgan sportchilar vakillaridan hamda boshqa alohida
                            shaxslardan iboratdir.

                            Quyidagilar O‘zbekiston Milliy olimpiya qo‘mitasining rahbar organlari hisoblanadi:

                            Bosh assambleya;
                            Ijroiy qo‘mita;
                            Ijroiy qo‘mita byurosi.

                            Bosh assambleyalar oralig‘ida O‘zbekiston Milliy Olimpiya qo‘mitasi faoliyatiga Ijroiy
                            qo‘mita rahbarlik qiladi.

                            O‘zbekiston Milliy Olimpiya qo‘mitasining quyidagi doimiy komissiyalari mavjud:

                            Atletlar komissiyasi;
                            Ayollar va sport komissiyasi;
                            Sport va atrof muhit komissiyasi.

                            O‘zbekiston Milliy Olimpiya qo‘mitasi huzurida Olimpiya akademiyasi tashkil etilgan.

                            O‘zbekiston Milliy Olimpiya qo‘mitasining tashkiliy tuzilmasi:</p>
                    </div>
                </a-col>
                <a-col :span="5">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-img">
                            <RouterLink to="/:en">
                                <img src="@/assets/images/olimpic.png" alt="olimpic ">
                            </RouterLink>

                        </div>
                    </div>
                </a-col>
            </a-row>
        </div>
    </section>
</template>