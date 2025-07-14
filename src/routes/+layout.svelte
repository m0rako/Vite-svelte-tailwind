<script lang="ts">

	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';
  import HeroSection from '$lib/components/sections/HeroSection.svelte';

	let { children } = $props();
</script>

<!-- Обёртка с фоном -->
<div
  class="inset-0 bg-no-repeat bg-cover bg-center -z-10"
  style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/house-dvgups.jpg');"
>
<Header />
<HeroSection />
</div>

  <main class="bg-[#F7F7F7]">
    {@render children()}
  </main>

<!--  <footer class="container mx-auto px-[118px]">-->
<!--    fas-->
<!--  </footer>-->

