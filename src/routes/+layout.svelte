<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>


  <div class="relative text-white">
    <!-- Фоновый слой -->
    <div
      class="absolute inset-0 bg-no-repeat bg-cover bg-center -z-10"
      style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/house-dvgups.jpg');"
    ></div>

    <!-- Контент -->
    <header class="container px-[118px] mx-auto relative z-10  font-semibold py-6 flex gap-5 justify-between "> <!-- pb-[1000px] ВРЕМЕННАЯ ПРОВЕРКА -->
      <div class="header__logo flex items-center gap-5 ">
        <a class="header__logo-dvgups" href="/">
          <img
            class="logo-dvgups w-[392px] h-[36px]"
            src="/logo_dvgups.svg"
            alt="Логотип университета"
          />
        </a>
        <a class="header__logo-prioritet" href="/">
          <img
            class="logo-prioritet w-[188px] h-[36px]"
            src="/logo_prioritet.svg"
            alt="Логотип приоритета"
          >
        </a>
      </div>

      <div class="header__menu my-auto bg-[rgba(70,70,70,0.45)] py-[12px] px-[20px] rounded-2xl">
        <nav class="menu-nav flex items-center max-w-[676px]">
          <ul class="menu-nav__list flex flex-wrap justify-center max-w-[483px] min-h-[53px] leading-none mx-auto mr-5">
            <li class="menu-nav__item p-1"><a class="menu-nav__link block" href="/">Абитуриенту</a></li>
            <li class="menu-nav__item p-1"><a class="menu-nav__link break-keep" href="/">Студенту</a></li>
            <li class="menu-nav__item p-1"><a class="menu-nav__link break-keep" href="/">Специалисту</a></li>
            <li class="menu-nav__item p-1"><a class="menu-nav__link break-keep" href="/">Аспиранту</a></li>
            <li class="menu-nav__item p-1"><a class="menu-nav__link break-keep" href="/">Доп. образование</a></li>
            <li class="menu-nav__item p-1"><a class="menu-nav__link break-keep" href="/">Версия сайта для слабовидящих</a></li>
          </ul>

          <ul class="menu-nav__list select-language flex gap-2 border-l-1 pl-5">
            <li class="menu-nav__item"><a class="menu-nav__link" href="/">RU</a></li>
            <li class="menu-nav__item"><a class="menu-nav__link" href="/">ENG</a></li>
            <li class="menu-nav__item"><a class="menu-nav__link" href="/">汉语</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <div class="header__hero container px-[118px] mx-auto grid grid-cols-2 rounded-2xl mt-[85px]">
      <a href="#" class="col-span-2">
        <div class="bg-[#0D635A] rounded-2xl w-[585px] py-4 items-center flex flex-col gap-2 text-center ">
          <img
            class="logo-dvgups w-[392px] h-[36px]"
            src="/logo_dvgups.svg"
            alt="Логотип университета"
          />
          <p class="text-3xl font-medium">Как поступить в университет</p>
          <p class="text-2xl font-medium">Приемная компания 2025</p>

        </div>
      </a>

      <h2 class="hero__title text-[44px] font-medium uppercase col-span-2 w-1/2 mb-[15px] mt-[25px]">Двгупс награждён за участие во всероссийском флешмобе "Вальс победы"</h2>
      <p class="hero__text text-[16px] col-span-2 w-1/2">Дальневосточный государственный университет путей сообщения получил сертификат участника масштабного патриотического флешмоба «Вальс Победы», посвящённого 80-летию Победы в Великой Отечественной войне.</p>

      <div class="hero__menu mt-14 mb-18 flex flex-col gap-10 col-span-2">
        <div>
          <ul class="flex gap-2 ">
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px] bg-[rgba(13,99,90,0.5)]">Свободные бюджетные места (высшее образование)</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-2">
            <li class=" h-full">
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Приказы о зачислении</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Как оплатить обучение</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]" >Личный кабинет студента</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px] bg-[rgba(13,99,90,0.5)]">Личный кабинет абитуриента (подать заявление в ДВГУПС)</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px] bg-[rgba(13,99,90,0.5)]">Как пройти вступительные испытания дистанционно</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Расписание</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Рейтинг</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Структура организации</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Конференции и мероприятия</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Институты и факультеты</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Подразделения</a>
            </li>
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Международная деятельность</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex gap-2">
            <li>
              <a href="#" class="border-1 rounded-2xl py-[15px] px-[25px]">Конкурс дипломных проектов</a>
            </li>
          </ul>
        </div>
      </div>

    </div>

  </div>

  <main class="container mx-auto px-[118px]">
    {@render children()}
  </main>

<!--  <footer class="container mx-auto px-[118px]">-->
<!--    fas-->
<!--  </footer>-->

