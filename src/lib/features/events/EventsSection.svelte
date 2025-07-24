<script lang="ts">
  import { EventCard, mockEvents } from '$lib/entities';
</script>

<section class="max-w-screen-xl py-5 mx-auto px-4 lg:px-0 ">
  <div class="flex gap-8 items-end pb-5 justify-between sm:justify-start">
    <h2 class="text-3xl font-semibold">Мероприятия</h2>
    <a href="/events" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    {#each mockEvents as event}
        <EventCard {...event} />
    {/each}
  </div>
</section>
