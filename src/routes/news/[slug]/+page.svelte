<script lang="ts">
  import {page} from '$app/state';
  import CurrentNewsPage from "$lib/pages/CurrentNewsPage.svelte";

  $: slug = page?.params?.slug ?? '';
</script>

<CurrentNewsPage slug={slug}/>
