<script lang="ts">
  import CardNotImage from '$lib/components/ui/CardNotImage.svelte';

  const cards = [
    {
      slug: 'open-day',
      title: 'Кафедра "Таможенное право и служебная деятельность" проводит День открытых дверей',
      date: '11.07.2025',
      link: '#'
    },
    {
      title: 'Приглашаем ознакомиться с перечнем печатных и электронных периодических изданий на 2 полугодие 2025 года',
      date: '04.07.2025',
      link: '#'
    },
    {
      title: 'Мастер-класс по регистрации в Электронно-библиотечных системах',
      date: '05.06.2025',
      link: '#'
    },
    {
      title: 'Кафедра "Таможенное право и служебная деятельность" проводит День открытых дверей',
      date: '11.07.2025',
      link: '#'
    },
    {
      title: 'Приглашаем ознакомиться с перечнем печатных и электронных периодических изданий на 2 полугодие 2025 года',
      date: '04.07.2025',
      link: '#'
    },
    {
      title: 'Мастер-класс по регистрации в Электронно-библиотечных системах',
      date: '05.06.2025',
      link: '#'
    },
  ];
  cards.forEach(card => card.link = `/announcements/${card.slug}`);
</script>

<section class="max-w-screen-xl mx-auto px-4 py-10">
  <h1 class="text-3xl font-bold mb-6">Все объявления</h1>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each cards as card}
      <CardNotImage {...card} />
    {/each}
  </div>
</section>
