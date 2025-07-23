<script lang="ts">
  export let data;
</script>

{#if data.current}
  <section class="max-w-screen-xl mx-auto px-4 py-10">
    <img
      src={data.current.image}
      alt={data.current.title}
      class="mb-6 rounded-xl w-full h-full object-cover" />
    <h1 class="text-2xl font-bold mb-4">{data.current.title}</h1>
    <p class="text-gray-500 mb-4">{data.current.date}</p>
    <p>{data.current.description}</p>
  </section>
{:else}
  <p class="text-center text-red-600 py-20">Новость не найдена</p>
{/if}
