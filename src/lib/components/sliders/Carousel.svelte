<script lang="ts">
  import { onMount } from 'svelte';

  export let images: { src: string; link: string; title: string }[] = [];
  let current = 0;
  let interval: any;

  // Автоматическое листание
  onMount(() => {

    interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  });

  function prev() {
    if (current > 0) current--;
  }

  function next() {
    if (current < images.length - 5) current++;
    else current = 0;
  }

  $: translateStyle = `transform: translateX(-${current * 251}px)`; // 235 + gap 16
</script>

<div class="relative w-full overflow-hidden">
  <!-- Карусель -->
  <div
    class="flex gap-4 transition-transform duration-500"
    style={translateStyle}
  >
    {#each images as img}
      <a
        href={img.link}
        class="relative w-[235px] h-[305px] bg-cover bg-center rounded-xl flex-shrink-0 overflow-hidden transition"
        style={`background-image: url(${img.src})`}
      >
        <!-- Градиент (для читаемости текста) -->
        <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent"></div>

        <!-- Заголовок -->
        <div class="absolute bottom-0 left-0 p-3 z-10">
          <h2 class="text-white text-xl font-semibold">{img.title}</h2>
        </div>
      </a>
    {/each}

  </div>

  <!-- Кнопки под карточками -->
  <div class="flex justify-center gap-4 mt-4">
    <button
      on:click={prev}
      class="bg-white/80 hover:bg-[rgba(70,70,70,0.45)] cursor-pointer px-4 py-2 rounded-full"
      aria-label="Предыдущий"
    >
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1L2 7L8 13" stroke="#00753A" stroke-width="2" stroke-linecap="round"></path>
      </svg>
    </button>
    <button
      on:click={next}
      class="bg-white/80 hover:bg-[rgba(70,70,70,0.45)] cursor-pointer px-4 py-2 rounded-full"
      aria-label="Следующий"
    >
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L7 7L1 0.999999" stroke="#00753A" stroke-width="2" stroke-linecap="round"></path>
      </svg>
    </button>
  </div>
</div>
