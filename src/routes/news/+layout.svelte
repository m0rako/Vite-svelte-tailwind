<script>
  import { SecondaryLayout } from "$lib";

  let {children} = $props();
</script>

<SecondaryLayout>
  {@render children()}
</SecondaryLayout>