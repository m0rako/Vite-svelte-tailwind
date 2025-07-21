<script lang="ts">
  import EventCard from '$lib/components/videos/ui/VideoCard.svelte';
  import { mockVideos } from '$lib/components/videos/model/mock';
  import VideoCard from "$lib/components/videos/ui/VideoCard.svelte";
</script>

<section class="max-w-screen-xl py-5 mx-auto px-4 lg:px-0 ">
  <div class="flex gap-8 items-end pb-5">
    <h2 class="text-3xl font-semibold">Видео</h2>
    <a href="/videos" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>
  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each mockVideos as video}
      <VideoCard {...video} />
    {/each}
  </div>
</section>