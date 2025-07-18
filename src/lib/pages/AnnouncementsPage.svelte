<script lang="ts">
    import AnnouncementCard from '$lib/components/announcements/ui/AnnouncementCard.svelte'
    import { mockAnnouncements } from '$lib/components/announcements/model/mock'
    import type { Announcement } from '$lib/components/announcements/model/types'

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
