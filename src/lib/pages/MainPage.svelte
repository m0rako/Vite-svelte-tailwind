<script>
    import AdsSection from "$lib/features/sections/AdsSection.svelte";
    import HeroSection from "$lib/features/sections/HeroSection.svelte";
    import CarouselSection from "$lib/features/sections/CarouselSection.svelte";
    import PrimaryHeader from "$lib/features/layouts/headers/PrimaryHeader.svelte";
    import NewsSection from "$lib/features/sections/NewsSection.svelte";
    import SourcesSection from "$lib/features/sections/SourcesSection.svelte";
    import EventsSection from "$lib/features/sections/EventsSection.svelte";
    import VideosSection from "$lib/features/sections/VideosSection.svelte";
    import ArticleSection from "$lib/features/sections/ArticleSection.svelte";
    import ContactsSection
        from "$lib/features/sections/ContactsSection.svelte";
</script>

<div>
    <div
            class="inset-0 bg-no-repeat bg-cover bg-top  -z-10"
            style="background-image: linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.5)), url('/images/house-dvgups.jpg');"
    >
        <PrimaryHeader/>
        <HeroSection/>
    </div>

    <CarouselSection/>
    <AdsSection/>
    <NewsSection />
    <SourcesSection />
    <EventsSection />
    <VideosSection />
    <ArticleSection />
    <ContactsSection />
</div>
