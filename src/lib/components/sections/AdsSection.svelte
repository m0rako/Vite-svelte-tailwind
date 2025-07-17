<script lang="ts">
  import AnnouncementCard from '$lib/features/announcements/ui/AnnouncementCard.svelte'
  import { mockAnnouncements } from '$lib/features/announcements/model/mock'
</script>


<section class="max-w-screen-xl mx-auto px-4 lg:px-0  pb-10 ">
  <div class="flex gap-8 items-end pb-5  ">
    <h2 class="text-3xl font-semibold">Объявления</h2>
    <a href="/announcements" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each mockAnnouncements.slice(0, 3) as card, i}
      <div class={i === 0 ? '' : 'hidden sm:block'}>
        <AnnouncementCard title={card.title} date={card.date} link={card.link} />
      </div>
    {/each}
  </div>
</section>
