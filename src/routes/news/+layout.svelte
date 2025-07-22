<script>
  import SecondaryLayout from "$lib/features/layouts/SecondaryLayout.svelte";  //todo export через index.ts

  let {children} = $props();
</script>

<SecondaryLayout>
  {@render children()}
</SecondaryLayout>