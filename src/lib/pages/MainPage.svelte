<script>
    import AdsSection from "$lib/components/sections/AdsSection.svelte";
    import HeroSection from "$lib/components/sections/HeroSection.svelte";
    import CarouselSection from "$lib/components/sections/CarouselSection.svelte";
    import PrimaryHeader from "$lib/components/layouts/headers/PrimaryHeader.svelte";
    import NewsSection from "$lib/components/sections/NewsSection.svelte";
    import SourcesSection from "$lib/components/sections/SourcesSection.svelte";
    import EventsSection from "$lib/components/sections/EventsSection.svelte";
    import VideosSection from "$lib/components/sections/VideosSection.svelte";
    import ArticleSection from "$lib/components/sections/ArticleSection.svelte";
    import ContactsSection
        from "$lib/components/sections/ContactsSection.svelte";
</script>

<div>
    <div
            class="inset-0 bg-no-repeat bg-cover bg-center -z-10"
            style="background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/house-dvgups.jpg');"
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
