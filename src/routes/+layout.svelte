<script lang="ts">
    import "./styles.css";
    import "./fonts.css";
    import Header from "./Header.svelte";
    import ShortBio from "./ShortBio.svelte";
    import Navigation from "./Navigation.svelte";
    import storeTheme from "$lib/store-theme";
</script>

<svelte:head>
    <meta name="color-scheme" content={$storeTheme === "system" ? "light dark" : $storeTheme}/>
    <link rel="stylesheet" href={`/theme/${$storeTheme}.css`} />
</svelte:head>

<div class="app">
    <Header/>
    <ShortBio/>
    <Navigation/>

    <main>
        <slot/>
    </main>
</div>

<style lang="scss">
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--background);
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
