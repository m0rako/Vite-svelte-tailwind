<script lang="ts">
  export let title: string;
  export let date: string;
  export let link: string;
  export let image: string;
  export let description: string;
</script>

<a href={link} class="bg-white rounded-2xl shadow p-3 hover:scale-[1.02] transition h-full flex flex-col justify-between">
  <img src={image} alt={title} class="rounded-lg mb-3 w-full h-60 object-cover" />
  <p class="text-base font-semibold text-green-900 line-clamp-2">{title}</p>
  <p class="text-sm text-gray-600 mt-2 line-clamp-4">{description}</p>
  <span class="text-sm text-gray-400 block mt-2">{date}</span>
</a>

