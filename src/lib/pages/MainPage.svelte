<script>
    import {
        AdsSection,
        HeroSection,
        CarouselSection,
        PrimaryHeader,
        NewsSection,
        SourcesSection,
        EventsSection,
        VideosSection,
        ArticleSection,
        ContactsSection
    } from "$lib/features";
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
