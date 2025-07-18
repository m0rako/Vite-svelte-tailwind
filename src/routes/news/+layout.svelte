<script>
  import SecondaryLayout from "$lib/features/layouts/SecondaryLayout.svelte";

  let {children} = $props();
</script>

<SecondaryLayout>
  {@render children()}
</SecondaryLayout>