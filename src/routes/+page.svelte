<script lang="ts">
  import '../app.css';
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import AdsSection from '$lib/components/sections/AdsSection.svelte';
  import CarouselSection from '$lib/components/sections/CarouselSection.svelte'
  import Header from '$lib/components/layout/Header.svelte';


</script>


<!-- Фон и HeroSection только для главной -->
<div
  class="inset-0 bg-no-repeat bg-cover bg-center -z-10"
  style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/house-dvgups.jpg');"
>
  <Header />
  <HeroSection />
</div>

<CarouselSection />
<AdsSection />

