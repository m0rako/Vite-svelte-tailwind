<script lang="ts">
    import {mockNews, type NewsItem} from "$lib";

    let {slug}: { slug: string } = $props();

    let current: NewsItem | null = slug.length > 0 ? mockNews.find(n => n.slug === slug) ?? null : null;
</script>

{#if current}
    <section class="max-w-screen-xl mx-auto px-4 py-10">
        <img
                src={current.image}
                alt={current.title}
                class="mb-6 rounded-xl w-full h-full object-cover"/>
        <h1 class="text-2xl font-bold mb-4">{current.title}</h1>
        <p class="text-gray-500 mb-4">{current.date}</p>
        <p>{current.description}</p>
    </section>
{:else}
    <p class="text-center text-red-600 py-20">Новость не найдена</p>
{/if}
