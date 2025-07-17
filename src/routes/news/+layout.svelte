<script>
  import SecondaryLayout from "$lib/components/layouts/SecondaryLayout.svelte";

  let {children} = $props();
</script>

<SecondaryLayout>
  {@render children()}
</SecondaryLayout>