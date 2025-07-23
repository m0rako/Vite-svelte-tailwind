<script lang="ts">
  import '../app.css';
  import { PrimaryLayout } from "$lib/features";
  let {children} = $props();
</script>

<PrimaryLayout>
    {@render children()}
</PrimaryLayout>