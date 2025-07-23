<script lang="ts">
  export let url: string;
  export let date: string;
  export let image: string;
</script>

<a
  href="{url}"
  class="block w-full h-[333px] rounded-2xl overflow-hidden bg-cover bg-center relative shadow hover:scale-[1.02] transition"
  style={`background-image: url(${image}); background-size: cover; background-position: center; background-repeat: no-repeat;`}
>
  <!-- затемнение сверху + дата -->
  <div class="absolute inset-0 flex items-start justify-between p-3 bg-gradient-to-b from-black/40 to-transparent">
    <p class="text-white font-semibold text-md">{date}</p>
  </div>
</a>
