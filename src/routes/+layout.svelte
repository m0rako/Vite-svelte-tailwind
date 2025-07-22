<script lang="ts">
  import '../app.css';
  import PrimaryLayout from "$lib/features/layouts/PrimaryLayout.svelte";  //todo export через index.ts

  let {children} = $props();
</script>

<PrimaryLayout>
    {@render children()}
</PrimaryLayout>