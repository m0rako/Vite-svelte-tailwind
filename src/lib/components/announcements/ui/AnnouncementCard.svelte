<script lang="ts">
  export let title: string;
  export let date: string;
  export let link: string;
</script>

<a
  href={link}
  class="bg-white rounded-2xl shadow p-5 w-full h-full transition-transform transform hover:scale-[1.02] flex flex-col justify-between"
>
  <p class="text-base font-medium text-black line-clamp-3">{title}</p>
  <span class="text-sm text-gray-400 block">{date}</span>
</a>
