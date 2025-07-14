<script lang="ts">
  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  const navLinks = [
    { name: 'Абитуриенту', href: '#' },
    { name: 'Студенту', href: '#' },
    { name: 'Специалисту', href: '#' },
    { name: 'Аспиранту', href: '#' },
    { name: 'Доп. образование', href: '#' },
    { name: 'Версия сайта для слабовидящих', href: '#' }
  ];

  const languages = ['RU', 'EN', '汉语'];
  const langCodes: Record<string, string> = {
    'RU': 'ru',
    'EN': 'en',
    '汉语': 'ch'
  };
  let currentLang = languages[0];

</script>

<nav class="text-sm lg:text-base text-white  relative z-50">
  <div class="max-w-screen-xl mx-auto py-4 px-2 lg:px-0 flex items-center justify-between">

    <!-- Логотипы -->
    <div class="flex flex-col md:flex-row items-start gap-5 w-full">
      <a href="">
        <img
          src="/images/logo_dvgups.svg"
          alt="Логотип университета"
          class="h-9 md:h-[36px] w-auto max-w-[280px] lg:max-w-[392px] object-contain"
        />
      </a>
      <a href="">
        <img
          src="/images/logo_prioritet.svg"
          alt="Логотип партнёра"
          class="h-9 md:h-[36px] w-auto max-w-[150px] lg:max-w-[188px] object-contain"
        />
      </a>

    </div>

    <!-- Десктоп-меню -->
    <div class="hidden md:flex items-center gap-5 font-semibold bg-[rgba(70,70,70,0.45)] py-[12px] px-[20px] rounded-2xl w-full max-w-[676px]">
      <ul class="flex flex-row flex-wrap justify-center max-w-[484px] gap-2">
        {#each navLinks as link}
          <li class="text-center">
            <a href={link.href} class="hover:text-[#181818] transition ">{link.name}</a>
          </li>
        {/each}
      </ul>

      <ul class="flex w-full max-w-[120px] gap-2 border-l-1 pl-5 flex-row flex-wrap text-center">
        {#each languages as lang}
          <li class="">
            <a href={`/?lang=${langCodes[lang]}`} class="hover:text-[#181818] {currentLang === lang ? 'font-bold' : 'text-gray-100'}"
            >{lang}</a>
          </li>
        {/each}
      </ul>
    </div>


    <button on:click={toggleMenu} class="md:hidden  text-xl text-white z-50 relative rounded-xl bg-[rgba(70,70,70,0.45)] w-10 h-9 flex items-center justify-center p-0 m-0 leading-none">
      ☰
    </button>

  </div>

  <!-- Оверлей затемнения -->
  <div
    class="fixed inset-0 bg-black/70 z-40 md:hidden transition-opacity duration-300"
    class:opacity-0={!isMenuOpen}
    class:pointer-events-none={!isMenuOpen}
    on:click={toggleMenu}
  ></div>


  <!-- Мобильное меню -->
    <div
      class="fixed top-0 left-0 w-full max-h-fit bg-white z-50 text-[#181818] px-6 py-6 flex flex-col gap-4 transition-transform duration-300 transform md:hidden"
      class:translate-y-0={isMenuOpen}
      class:-translate-y-full={!isMenuOpen}
    >
      <!-- Кнопка закрытия -->
      <button
        on:click={toggleMenu}
        class="absolute top-5 right-3 w-9 h-9 rounded-xl bg-[rgba(70,70,70,0.45)] flex items-center justify-center p-0 m-0 leading-none"
        aria-label="Закрыть меню"
      >
        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m7 5.586 4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586Z" fill="#fff"></path>
        </svg>
      </button>



      <!-- Логотип -->
      <img src="/svg/logo-dvgups-dark.svg" alt="Логотип" class="h-7 mx-auto mb-4 max-w-[220px]" />

      <!-- Навигация -->
      <ul class="flex flex-col gap-4 text-center text-lg font-semibold">
        {#each navLinks as link}
          <li>
            <a href={link.href} class="block border-b pb-2">{link.name}</a>
          </li>
        {/each}
      </ul>

      <!-- Языки -->
      <div class="mt-4 flex justify-center gap-4 text-sm font-medium">
        {#each languages as lang}
          <button
            on:click={() => currentLang = lang}
            class={currentLang === lang ? 'font-bold' : 'text-gray-500'}
          >
            {lang}
          </button>
        {/each}
      </div>
    </div>


</nav>
