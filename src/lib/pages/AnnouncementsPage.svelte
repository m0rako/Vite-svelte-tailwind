<script lang="ts">
    import AnnouncementCard from '$lib/features/announcements/ui/AnnouncementCard.svelte'
    import { mockAnnouncements } from '$lib/features/announcements/model/mock'
    import type { Announcement } from '$lib/features/announcements/model/types'

    const cards: Announcement[] = mockAnnouncements;
</script>

<section class="max-w-screen-xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold mb-6">Все объявления</h1>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {#each cards as card}
            <AnnouncementCard {...card} />
        {/each}
    </div>
</section>
