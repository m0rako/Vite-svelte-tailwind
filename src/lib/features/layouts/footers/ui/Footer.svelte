<script lang="ts">
  import { footerSections, footerBottomLinks } from '../model/mock'
</script>

<footer class="bg-[#017452] px-4 lg:px-0  text-white py-7 bg-gradient-to-br from-[#0d635a] to-[#07984d]">
  <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
    {#each footerSections as section}
      <div>
        <h3 class="font-semibold mb-3 text-lg">{section.title}</h3>
        <ul class="space-y-1 text-base">
          {#each section.links as link}
            <li><a href={link.href} class="hover:underline">{link.label}</a></li>
          {/each}
        </ul>
      </div>
    {/each}

    <div class="hidden md:block col-span-1">
      <img src="/svg/logo.svg" alt="Логотип" class="w-28 mx-auto mt-3" />
      <p class="text-sm text-center mt-2">
        ДАЛЬНЕВОСТОЧНЫЙ<br />
        ГОСУДАРСТВЕННЫЙ<br />
        УНИВЕРСИТЕТ ПУТЕЙ<br />
        СООБЩЕНИЯ 1937–2025
      </p>
    </div>
  </div>

  <div class=" pt-6 text-base max-w-screen-xl mx-auto space-y-2">
    <ul class="space-y-1">
    {#each footerBottomLinks as link}
      <li><a href={link.href} class="hover:underline">{link.label}</a></li>
    {/each}
    </ul>
    <p class="text-sm mt-4 text-gray-200 border-t border-white/20 pt-3">ДАЛЬНЕВОСТОЧНЫЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ПУТЕЙ СООБЩЕНИЯ, 2025</p>
  </div>
</footer>
