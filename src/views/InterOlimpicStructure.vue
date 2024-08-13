<script setup>
import { ref } from 'vue';
import BreadCrump from '@/components/menu/BreadCrump.vue';
import AccardionFed from '@/components/dropdown/AccardionFed.vue'
const activeKey = ref('1');
const breads = [
    { label: 'Home', url: '/oz', id: 1 },
    { label: "Federatsiyalar", id: 2 },
    { label: "XOQ tuzilmasi", id: 3 },
];
const employList = [
    {
        label: "O'zbekiston bosk federatsiyasi ", id: 1, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston valeybol federatsiyasi ", id: 2, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston ganbol federatsiyasi ", id: 3, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston tennis federatsiyasi ", id: 4, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston futbol federatsiyasi ", id: 5, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    },
    {
        label: "O'zbekiston yengil atletika federatsiyasi ", id: 6, children: "<p>Rais: Ramatov Achilboy Jumaniyozovich</p> <p>Raisning birinchi o‘rinbosari: Polatov Saken Djetibaevich</p> <p>Bosh kotib: Shohid Tillaboyev</p> <p>Tashkil topgan yili: 1992 yil</p><p>Manzil: 100066, Toshkent shahar, Turob To‘la ko‘chasi, 126-uy</p><p>     <span>     Telefon: <a href='tel:+99871-2457015'>+99871-2457015</a> </span> </p> <p>     <span>         Faks: <a href='fax:+99871-2457015'>+99871-2457015</a>     </span> </p> <p>     E-mail: <a href='mailto:boxing.uzbekistan@gmail.com'>boxing.uzbekistan@gmail.com</a> </p> <p>     <a href='http://olympicboxing.uz/uz' target='_blank' rel='noopener'>         <span>www.olympicboxing.uz</span>     </a> </p>"
    }
]
</script>
<template>
    <section class="committee-page global-federation">
        <div class="container">
            <BreadCrump :data="breads" />
            <h2>XOQ tuzilmasi</h2>
            <a-row :gutter="[20,20]">
                <a-col :xs="24" :sm="24" :md="24" :lg="18" :xl="18">
                    <a-row :gutter="[20, 20]">
                        <a-col :span="24">
                            <div class="global-federation__tab">
                                <a-tabs v-model:activeKey="activeKey">
                                    <a-tab-pane key="1" tab="XOQ prezidentlari">
                                        <p>Халқаро Олимпия Қўмитаси (ХОҚ) президенти ХОҚ аъзолари томонидан яширин овоз
                                            бериш йўли орқали саккиз йиллик муддатга сайланади. Ушбу муддат якунига
                                            етгач ХОҚ раҳбари яна тўрт йиллик муддатга қайта сайланиши мумкин.

                                            ХОҚнинг амалдаги президенти Томас Бах (Германия). У 2013 йилнинг 10 —
                                            сентябрь куни Халқаро Олимпия қўмитасининг Буэнос-Айрес шаҳрида (Аргентина)
                                            бўлиб ўтган 125-сессиясида ХОҚнинг президенти этиб сайланган.

                                            Томас Бах ҳақида

                                            Томас Бах (Thomas Bach) 1953 йилнинг 29 декабрида Вюрцбург шаҳрида туғилган.
                                            Вюрцбург Университетини тамомлаган. Мутахассислиги – ҳуқуқшунос,
                                            ҳуқуқшунослик фанлари доктори унвонига эга.

                                            1976 йилда Монреалда ўтказилган XXI Олимпия ўйинлари Томас Бах
                                            қиличбозликнинг рапира йўналишида жамоавий баҳсларда олтин медални қўлга
                                            киритган.

                                            Спортчилик фаолиятини якунлаганидан сўнг у спорт бошқарувчиси (функционер)
                                            сифатида ишлай бошлаган.

                                            1981 йили Баден-Бадендаги XI Олимпия Конгрессида спортчилар вакили сифатида
                                            ХОҚнинг комиссияси таркибига киритилган.

                                            2013 йилнинг 10 сентябрида Халқаро олимпия қўмитаси президенти лавозимини
                                            эгаллаган.

                                            Халқаро олимпия қўмитасининг Президентлари (1894-2013 йиллар)

                                            Деметриус Викелас, 1894 – 1896 йиллар

                                            Деметриус Викелас, 1894 – 1896 йиллар

                                            Пьер Дэ Кубэртен, 1896 – 1925 йиллар

                                            Анри Дэ Байе-Лятур, 1925 – 1942 йиллар

                                            Ж. Зигфрид Эдстрём, 1946 – 1952 йиллар

                                            Авэри Брюндаж, 1952 – 1972 йиллар

                                            Лорд Килланин, 1972 – 1980 йиллар

                                            Хуан Антонио Самаранч, 1980 – 2001 йиллар

                                            Жак Рюгге, 2001 – 2013 йиллар</p>
                                    </a-tab-pane>
                                    <a-tab-pane key="2" tab="Ijroiya qomitasi">
                                        <p>ХОҚ ижроия қўмитаси 1921 йилда ташкил топган. У ХОҚ Президенти, тўрт нафар
                                            вице-президентлар ва ўн нафар аъзодан иборат. Ижроия қўмитасининг аъзолари
                                            Сессияда яширин овоз бериш йўли билан сайланади. Вице-президент ва ўн нафар
                                            ижроқўм аъзосининг ваколат муддати тўрт йилни ташкил этади.

                                            ХОҚ Ижроия қўмитаси таркиби
                                            ПРЕЗИДЕНТ
                                            Томас Бах (Германия)


                                            ВИЦЕ-ПРЕЗИДЕНТЛАР

                                            Хуан Антонио Самаранч-младший (Испания)

                                            Угур Эрденер (Турция)

                                            Анита Дефрантц (США)

                                            Юй Цзайцин (Китай)


                                            Ижроия қўмитаси аъзолари


                                            Кристоф Де Кеппер (Бельгия)

                                            Гунилла Линдберг (Швеция)

                                            Сергей Бубка (Украина)

                                            Хуан Симянь (Сингапур)

                                            Вилли Кальтшмитт Лухан (Гватемала)

                                            Робин Митчелл (Фиджи)

                                            Николь Хёвертш (Аруба)

                                            Денис Освальд (Швейцария)

                                            Ненад Лалович (Сербия)

                                            Кирсти Ковентри (Зимбабве)

                                            Иво Ферриани (Италия)</p>
                                    </a-tab-pane>
                                    <a-tab-pane key="3" tab="Doimiy komissiya">
                                        <p>Маданият ва Олимпия таълимоти бўйича Комиссия.
                                            Спортчилар Комиссияси.
                                            Аҳлоқ Комиссияси.
                                            Йўналишлар бўйича Комиссия.
                                            «Аёллар ва спорт» ишчи гуруҳи.
                                            Молиявий комиссия.
                                            Юридик Комиссия.
                                            Маркетинг бўйича Комиссия.
                                            Тиббий Комиссия.
                                            Пресс Комиссия;
                                            Олимпия дастурлари бўйича Комиссия.
                                            Радио ва Телевидения бўйича Комиссия.
                                            Олимпия бирдамлиги Комиссияси.
                                            «Спорт ва ҳуқуқ» Комиссияси.
                                            «Спорт ва атроф» Комиссияси.
                                            «Спорт барча учун» Комиссияси.
                                            Олимпия Филателияси, Нумизматика ва Меморабилияси бўйича Комиссия.
                                            Халқаро алоқалар бўйича Комиссия.
                                            Телевизион ва Интернет ҳуқуқлар бўйича Комиссияю
                                            Олимпия ўйинларини ўрганиш бўйича Комиссия.
                                            Олимпия кенгаши ордени.</p>
                                    </a-tab-pane>
                                </a-tabs>
                            </div>
                        </a-col>
                    </a-row>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="committee-page__sidebar">
                        <div class="committee-page__sidebar-menu">Menu</div>
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