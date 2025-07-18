<script lang="ts">
  import NewsCard from '$lib/components/news/ui/NewsCard.svelte';
  import { mockNews } from '$lib/components/news/model/mock';
</script>

<section class="max-w-screen-xl mx-auto pb-5 px-4 lg:px-0 ">
  <div class="flex gap-8 items-end pb-5">
    <h2 class="text-3xl font-semibold">Новости</h2>
    <a href="/news" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each mockNews.slice(0, 3) as news}
      <NewsCard {...news} />
    {/each}
  </div>
</section>
