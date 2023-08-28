<script>
    import Header from './Header.svelte';
    import './styles.css';
    import './fonts.css'
    import storeTheme from "$lib/store-theme.ts";
</script>

<div class="app"
     class:light={$storeTheme === "light"}
     class:dark={$storeTheme === "dark"}
>
    <Header/>

    <main>
        <slot/>
    </main>

    <footer>

    </footer>
</div>

<style lang="postcss">
    .light {
        background-color: white;
    }

    .dark {
        background-color: grey;
    }

    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
