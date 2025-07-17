<script lang="ts">
  import type { Video } from '$lib/features/videos/model/types';
  export let title: Video['title'];
  export let preview: Video['preview'];
  export let url: Video['url'];
</script>

<a href={url} class="hover:scale-[1.02] transition flex flex-col">
  <img src={preview} alt={title} class="rounded-lg mb-3 w-full h-60 object-cover" />
  <p class="text-base font-semibold text-black line-clamp-3">{title}</p>
</a>