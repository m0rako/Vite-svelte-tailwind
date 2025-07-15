<script lang="ts">

	import '../app.css';
	import Header from '$lib/components/layout/Header.svelte';

  import { page } from '$app/state';

	let { children } = $props();
</script>

{#if page.url.pathname !== '/'}
  <Header isMainPage={false} />
{/if}

<main class="bg-[#F7F7F7]">
  {@render children()}
</main>

<!--  <footer class="container mx-auto px-[118px]">-->
<!--    fas-->
<!--  </footer>-->

