<script lang="ts">
  import { NewsCard, mockNews } from '$lib/components';
  import type { NewsItem } from '$lib/components';

  const cards: NewsItem[] = mockNews;
</script>

<section class="max-w-screen-xl mx-auto px-4 py-10">
  <h1 class="text-3xl font-bold mb-6">Все новости</h1>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each cards as card}
      <NewsCard {...card} />
    {/each}
  </div>
</section>