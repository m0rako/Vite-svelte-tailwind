<script lang="ts">
  import {onDestroy, onMount} from 'svelte';
  import {Carousel} from '@fancyapps/ui/dist/carousel';
  import '@fancyapps/ui/dist/carousel/carousel.css';
  import {Autoplay} from '@fancyapps/ui/dist/carousel/carousel.autoplay.js';
  import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';
  import type {CarouseItemType} from "$lib/components/carousel/model/types";
  import type {CarouselOptions} from "@fancyapps/ui/dist/carousel/carousel";

  let {options, images}: { options: Partial<CarouselOptions>, images: CarouseItemType[] } = $props();
    let sliderRef: HTMLDivElement;
    let instance: any;
    const optionsDefault: Partial<CarouselOptions> = {
        slidesPerPage: 1,
        infinite: true,
        Autoplay: {timeout: 3000},
        center: false, // чтобы не было "по центру"
        dragFree: false, // важно!
    };
    onMount(() => {
        instance = Carousel(sliderRef, {...optionsDefault, ...options}, {Autoplay});
        instance.init();
    });

    onDestroy(() => {
        instance?.destroy();
    });
</script>

<div class="f-carousel px-1" bind:this={sliderRef}>
    {#each images as img}
        <div class=" f-carousel__slide flex justify-center">
            <a
                    href={img.link}
                    draggable="false"
                    class="block w-full h-[250px] bg-cover bg-center rounded-xl overflow-hidden"
                    style={`background-image: url(${img.src}); background-position: center;
  background-repeat: no-repeat;
  background-size: cover;`}
            >
                <div class="h-full flex items-end p-4 bg-gradient-to-t from-black/40 to-transparent">
                    <h2 class="text-white text-xl font-semibold">{img.title}</h2>
                </div>
            </a>
        </div>
    {/each}
</div>

<style>
    :global(.f-progressbar) {
        display: none !important;
    }

    .f-carousel {
        --f-carousel-gap: 8px;
        --f-carousel-slide-width: 19.5%; /* по умолчанию 5 карточек */
    }

    /* ≥1536px (2xl) — 5 карточек */
    @media (min-width: 1536px) {
      .f-carousel {
        --f-carousel-slide-width: 19.5%;
      }
    }

    /* ≥1280px (xl) — 4 карточки */
    @media (max-width: 1535px) {
        .f-carousel {
            --f-carousel-slide-width: 24.3%;
        }
    }

    /* ≥1024px (lg) — 3 карточки */
    @media (max-width: 1279px) {
        .f-carousel {
            --f-carousel-slide-width: 33%;
        }
    }

    /* ≥768px (md) — 2 карточки */
    @media (max-width: 1023px) {
        .f-carousel {
            --f-carousel-gap: 15px;
            --f-carousel-slide-width: 32%;
        }
    }

    /* <768px — 2 карточка */
    @media (max-width: 767px) {
        .f-carousel {
            --f-carousel-slide-width: 49%;
        }
    }

    @media (max-width: 480px) {
        .f-carousel {

            --f-carousel-slide-width: 100%;
        }
    }


</style>
