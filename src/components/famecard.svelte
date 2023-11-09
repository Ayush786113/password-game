<script>
    export let fame
</script>

<article>
    <header>
        <img src="{fame.avatar}" alt="{fame.name}">
    </header>
    {fame.name}
    <footer>
        <span><strong>{fame.solution}</strong></span>
        <p>
            <cite>
                {#if fame.experience != null}
                    {fame.experience}
                {/if}
            </cite>
        </p>
    </footer>
</article>

<style>
    img{
        width: 250px;
        height: 250px;
    }
</style>