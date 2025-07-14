<script lang="ts">
  import CardNotImage from '$lib/components/ui/CardNotImage.svelte';

  const cards = [
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
</script>

<section class="max-w-screen-xl mx-auto px-4 pb-10 ">
  <div class="flex gap-8 items-end pb-5  ">
    <h2 class="text-3xl font-semibold">Объявления</h2>
    <a href="#" class="text-base font-bold text-[#0d635a]">Смотреть все</a>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
    {#each cards as card}
      <CardNotImage title={card.title} date={card.date} link={card.link} />
    {/each}
  </div>
</section>
