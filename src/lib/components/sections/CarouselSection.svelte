<script lang="ts">
  import Carousel from '$lib/components/sliders/Carousel.svelte';

  const imageList = [
    { src: '/images/cards/vakans.png', link: '/page1', title: 'Вакансии' },
    { src: '/images/cards/bibl.png', link: '/page2', title: 'Научно-техническая библиотека' },
    { src: '/images/cards/obshaga1.png', link: '/page3', title: 'Студенческий городок' },
    { src: '/images/cards/family_02.png', link: '/page4', title: '' },
    { src: '/images/cards/Z.png', link: '/page5', title: 'Меры поддержки участников СВО' },
    { src: '/images/cards/banner-slide-6.png', link: '/page6', title: 'Поступай в вуз с Госуслугами' },
    { src: '/images/cards/kiss.png', link: '/page6', title: 'Летняя школа (KISS)' },
    { src: '/images/cards/banner-slide-3.png', link: '/page6', title: 'Практика и трудоустройство' },
    { src: '/images/cards/banner-slide-5.png', link: '/page6', title: 'Конкурсы' },
    { src: '/images/cards/banner-slide-1.png', link: '/page6', title: 'Расписание' },
    { src: '/images/cards/prof.png', link: '/page6', title: 'Профессионалитет' },
    { src: '/images/cards/VDPO_2.png', link: '/page6', title: 'Пожарная безопасность' },
    { src: '/images/cards/poslednie_novosti2.png', link: '/page6', title: 'Последние новости' },
    { src: '/images/cards/04_banner_semia.png', link: '/page6', title: 'Это что за люди' },
    { src: '/images/cards/slider-image-12.png', link: '/page6', title: '' },
    { src: '/images/cards/base.png', link: '/page6', title: '' },
    { src: '/images/cards/testkariernii_forum2.png', link: '/page6', title: 'Карьерный форум' },
    { src: '/images/cards/catod.png', link: '/page6', title: '' },
    { src: '/images/cards/banner-slide-2.png', link: '/page6', title: 'Филиалы' },
    { src: '/images/cards/olimp.png', link: '/page6', title: '' },
  ];
</script>

<section class="max-w-screen-xl mx-auto px-4 py-10 ">

  <Carousel images={imageList} />
</section>
