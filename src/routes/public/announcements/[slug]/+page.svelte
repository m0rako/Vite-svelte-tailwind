<script lang="ts">
  import { page } from '$app/stores';

  const cards = [
    {
      slug: 'open-day',
      title: 'Кафедра "Таможенное право и служебная деятельность" проводит День открытых дверей',
      date: '11.07.2025',
      link: '#',
      description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
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

  $: slug = $page.params.slug;
  $: current = cards.find((c) => c.slug === slug);
</script>

{#if current}
  <section class="max-w-screen-xl mx-auto px-4 py-10">
    <h1 class="text-2xl font-bold mb-4">{current.title}</h1>
    <p class="text-gray-500 mb-4">{current.date}</p>
    <p>{current.description}</p>
  </section>
{:else}
  <p class="text-center text-red-600 py-20">Объявление не найдено</p>
{/if}
