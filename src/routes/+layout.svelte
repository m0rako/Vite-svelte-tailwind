<script lang="ts">
  import '../app.css';
  import PrimaryLayout from "$lib/components/layouts/PrimaryLayout.svelte";

  let {children} = $props();
</script>

<PrimaryLayout>
    {@render children()}
</PrimaryLayout>