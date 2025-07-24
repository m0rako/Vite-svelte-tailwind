<script lang="ts">
  import '../app.css';
  import { PrimaryLayout } from "$lib";
  let {children} = $props();
</script>

<PrimaryLayout>
    {@render children()}
</PrimaryLayout>