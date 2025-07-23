<script>
  import { SecondaryLayout } from "$lib/features";

  let {children} = $props();
</script>

<SecondaryLayout>
  {@render children()}
</SecondaryLayout>