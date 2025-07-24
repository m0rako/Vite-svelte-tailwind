<script lang="ts">
    const navLinks = [
        {name: 'Свободные бюджетные места (высшее образование)', href: '#', checkBackground: true},
        {name: 'Приказы о зачислении', href: '#', checkBackground: false},
        {name: 'Как оплатить обучение', href: '#', checkBackground: false},
        {name: 'Личный кабинет студента', href: '#', checkBackground: false},
        {name: 'Личный кабинет абитуриента (подать заявление в ДВГУПС)', href: '#', checkBackground: true},
        {name: 'Как пройти вступительные испытания дистанционно', href: '#', checkBackground: true},
        {name: 'Расписание', href: '#', checkBackground: false},
        {name: 'Рейтинг', href: '#', checkBackground: false},
        {name: 'Структура организации', href: '#', checkBackground: false},
        {name: 'Конференции и мероприятия', href: '#', checkBackground: false},
        {name: 'Институты и факультеты', href: '#', checkBackground: false},
        {name: 'Подразделения', href: '#', checkBackground: false},
        {name: 'Международная деятельность', href: '#', checkBackground: false},
        {name: 'Конкурс дипломных проектов', href: '#', checkBackground: false}
    ];
</script>

<div class="max-w-screen-xl px-2 lg:px-0 mx-auto text-white grid grid-cols-2 gap-y-10 font-medium">

    <!-- Блок с логотипом -->
    <div class="col-span-2 ">
        <a href="#"
           class="group  bg-[#0D635A] hover:bg-white hover:text-[rgba(13,99,90)] rounded-2xl max-w-[585px] py-4 flex flex-col items-center gap-2 text-center transition cursor-pointer">
            <!-- Обычное лого -->
            <img
                    src="/images/logo_dvgups.svg"
                    alt="Логотип университета"
                    class="h-9 md:h-[36px] w-auto max-w-[280px] lg:max-w-[392px] object-contain block group-hover:hidden"
            />
            <!-- Лого при наведении -->
            <img
                    src="/svg/logo-dvgups-dark.svg"
                    alt="Логотип при наведении"
                    class="h-9 md:h-[36px] w-auto max-w-[280px] lg:max-w-[392px] object-contain hidden group-hover:block transition"
            />

            <p class="text-3xl transition">Как поступить в университет</p>
            <p class="text-2xl transition">Приемная компания 2025</p>
        </a>
    </div>

    <!-- Заголовок и текст -->
    <div class="col-span-2">
        <h2 class="text-[22px] md:text-[44px] uppercase mb-4">Двгупс награждён за участие во всероссийском флешмобе
            "Вальс победы"</h2>
        <p class="text-[14px] md:text-[16px] max-w-[80%]">Дальневосточный государственный университет путей сообщения
            получил сертификат участника масштабного патриотического флешмоба «Вальс Победы», посвящённого 80-летию
            Победы в Великой Отечественной войне.</p>
    </div>

    <!-- Ссылки -->
    <div class="col-span-2 pb-15">
        <ul class="flex flex-wrap gap-2">
            {#each navLinks as link}
                <li>
                    <a
                            href={link.href}
                            class="block rounded-2xl transition py-[15px] px-[25px] border-1
              hover:bg-white hover:text-[rgba(13,99,90)]
              {link.checkBackground ? 'bg-[rgba(13,99,90,0.5)] text-white' : ''}"
                    >
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
    </div>

</div>
