<script lang="ts">
  import type {CarouselOptions} from "@fancyapps/ui/dist/carousel/carousel";
  import { Carousel, imageList } from '$lib/components';

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
