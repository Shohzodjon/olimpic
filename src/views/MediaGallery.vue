<script setup>
import BreadCrump from '@/components/menu/BreadCrump.vue';
import GalleryCard from '@/components/card/GalleryCard.vue';
import hero_4 from '@/assets/images/hero_4.jpg'
import gallery from '@/assets/images/gallery.jpg'
const breads = [
    { label: 'Home', url: '/:en', id: 1 },
    { label: "Media galereya", id: 2 },
];
const list = [
    { img: gallery, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 1, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 2, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 3, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 4, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 5, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 6, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 7, },
    { img: hero_4, desc: 'ХОҚ Миллий олимпия қўмиталари ва халқаро федерацияларини тан олиш тўғрисида қарорлар қабул қилади, улар билан қалин ҳамкорлик қилади.', id: 8, },
]
</script>
<template>
    <section class="gallery-page">
        <div class="container">
            <BreadCrump :data="breads" />
            <div class="gallery-page__flex">
                <h2>Media galereya</h2>
                <ul>
                    <li>
                        <RouterLink to="/oz/gallery">Rasmlar</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/oz/video">Videolar</RouterLink>
                    </li>
                </ul>
            </div>
            <a-row :gutter="24">
                <a-col :span="24">
                    <div class="gallery-page__content">
                        <a-row :gutter="[22, 22]">
                            <a-col v-for="item in list" :key="item.id" :span="6">
                                <GalleryCard :desc="item.desc" :img="item.img" :url="`/oz/gallery-slug/${item.id}`" />
                            </a-col>
                        </a-row>
                    </div>
                </a-col>

            </a-row>
        </div>
    </section>
</template>