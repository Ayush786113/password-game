<script>
    import Famecard from "./famecard.svelte";
    export let famelist;
</script>

<div>
    {#if famelist.length > 0}
        {#each famelist as fame}
            <Famecard fame={fame}/>
        {/each}
    {:else}
        <h5>Nothing to show yet!</h5>
    {/if}
</div>

<style>
    div{
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        align-items: center;
        justify-content: stretch;
        flex-wrap: wrap;
    }
</style>