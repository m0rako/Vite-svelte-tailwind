<script lang="ts">
  import EventCard from '$lib/components/events/ui/EventCard.svelte';
  import { mockEvents } from '$lib/components/events/model/mock';
</script>

<section class="max-w-screen-xl py-5 mx-auto px-4 lg:px-0 ">
  <div class="flex gap-8 items-end pb-5">
    <h2 class="text-3xl font-semibold">Мероприятия</h2>
    <a href="/events" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>
  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
    {#each mockEvents as event, i}
      <div class={i === 0 ? '' : 'hidden sm:block'}>
        <EventCard {...event} />
      </div>
    {/each}
  </div>
</section>
