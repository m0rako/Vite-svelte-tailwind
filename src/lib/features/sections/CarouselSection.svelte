<script lang="ts">
  import Carousel from '$lib/components/carousel/ui/Carousel.svelte';
  import type {CarouseItemType} from "$lib/components/carousel/model/carousel";
  import type {CarouselOptions} from "@fancyapps/ui/dist/carousel/carousel";

  const imageList: CarouseItemType[] = [
    { src: '/images/cards/vakans.png', link: '#', title: 'Вакансии' },
    { src: '/images/cards/bibl.png', link: '#', title: 'Научно-техническая библиотека' },
    { src: '/images/cards/obshaga1.png', link: '#', title: 'Студенческий городок' },
    { src: '/images/cards/family_02.png', link: '#', title: '' },
    { src: '/images/cards/Z.png', link: '#', title: 'Меры поддержки участников СВО' },
    { src: '/images/cards/banner-slide-6.png', link: '#', title: 'Поступай в вуз с Госуслугами' },
    { src: '/images/cards/kiss.png', link: '#', title: 'Летняя школа (KISS)' },
    { src: '/images/cards/banner-slide-3.png', link: '#', title: 'Практика и трудоустройство' },
    { src: '/images/cards/banner-slide-5.png', link: '#', title: 'Конкурсы' },
    { src: '/images/cards/banner-slide-1.png', link: '#', title: 'Расписание' },
    { src: '/images/cards/prof.png', link: '#', title: 'Профессионалитет' },
    { src: '/images/cards/VDPO_2.png', link: '#', title: 'Пожарная безопасность' },
    { src: '/images/cards/poslednie_novosti2.png', link: '#', title: 'Последние новости' },
    { src: '/images/cards/04_banner_semia.png', link: '#', title: '' },
    { src: '/images/cards/slider-image-12.png', link: '#', title: '' },
    { src: '/images/cards/base.png', link: '#', title: '' },
    { src: '/images/cards/testkariernii_forum2.png', link: '#', title: 'Карьерный форум' },
    { src: '/images/cards/catod.png', link: '#', title: '' },
    { src: '/images/cards/banner-slide-2.png', link: '#', title: 'Филиалы' },
    { src: '/images/cards/olimp.png', link: '#', title: '' },
  ];

  const options: Partial<CarouselOptions> = {
    infinite: true,
    slidesPerPage: 1,
    Autoplay: {
      // timeout: 2000,
    },
  };
</script>

<section class="max-w-screen-xl px-4 lg:px-0 mx-auto py-10 ">
  <Carousel images={imageList} options={options}/>
</section>
