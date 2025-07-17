<script lang="ts">
  import { page } from '$app/stores';
  import { mockNews } from '$lib/features/news/model/mock';

  $: slug = $page.params.slug;
  $: current = slug ? mockNews.find(n => n.slug === slug) : null;
</script>

{#if current}
  <section class="max-w-screen-xl mx-auto px-4 py-10">
    <img
      src={current.image}
      alt={current.title}
      class="mb-6 rounded-xl w-full h-full object-cover" />
    <h1 class="text-2xl font-bold mb-4">{current.title}</h1>
    <p class="text-gray-500 mb-4">{current.date}</p>
    <p>{current.description}</p>
  </section>
{:else}
  <p class="text-center text-red-600 py-20">Новость не найдена</p>
{/if}
