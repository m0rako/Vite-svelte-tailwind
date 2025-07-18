<script lang="ts">
  import NewsCard from '$lib/components/news/ui/NewsCard.svelte'
  import { mockNews } from '$lib/components/news/model/mock'
  import type { News } from '$lib/components/news/model/types'

  const cards: News[] = mockNews;
</script>

<section class="max-w-screen-xl mx-auto px-4 py-10">
  <h1 class="text-3xl font-bold mb-6">Все новости</h1>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each cards as card}
      <NewsCard {...card} />
    {/each}
  </div>
</section>