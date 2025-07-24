<script lang="ts">
  import { NewsCard, mockNews } from '$lib/entities';
</script>

<section class="max-w-screen-xl mx-auto pb-5 px-4 lg:px-0 ">
  <div class="flex gap-8 items-end pb-5 justify-between sm:justify-start">
    <h2 class="text-3xl font-semibold">Новости</h2>
    <a href="/news" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each mockNews.slice(0, 3) as news}
      <NewsCard {...news} />
    {/each}
  </div>
</section>
