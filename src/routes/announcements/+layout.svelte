<script>
    import SecondaryLayout from "$lib/components/layouts/SecondaryLayout.svelte";  //todo export через index.ts, проверь существование

    let {children} = $props();
</script>

<SecondaryLayout>
    {@render children()}
</SecondaryLayout>