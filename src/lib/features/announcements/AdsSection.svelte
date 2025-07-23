<script lang="ts">
  import { AnnouncementCard, mockAnnouncements } from '$lib/components';
</script>


<section class="max-w-screen-xl mx-auto px-4 lg:px-0  pb-10 ">
  <div class="flex gap-8 items-end pb-5 justify-between sm:justify-start">
    <h2 class="text-3xl font-semibold">Объявления</h2>
    <a href="/announcements" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each mockAnnouncements.slice(0, 3) as card}
        <AnnouncementCard title={card.title} date={card.date} link={card.link} />
    {/each}
  </div>
</section>
