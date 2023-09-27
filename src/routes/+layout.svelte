<script lang="ts">
    import "./styles.css";
    import "./fonts.css";
    import Header from "./Header.svelte";
    import ShortBio from "./ShortBio.svelte";
    import Navigation from "./Navigation.svelte";
    import storeTheme from "$lib/store-theme";
    import {fade} from "svelte/transition";
    import {afterNavigate} from "$app/navigation";

    afterNavigate(() => {
        window.scrollTo({top: 0, behavior: "smooth"})
    })

    export let data;
</script>

<svelte:head>
    <meta name="color-scheme" content={$storeTheme === "system" ? "light dark" : $storeTheme}/>
    <link rel="stylesheet" href={`/theme/${$storeTheme}.css`}/>
</svelte:head>

<div class="app">
    <Header/>
    <ShortBio/>
    <Navigation/>

    <main>
        {#key data.url}
            <div in:fade={{ duration: 500, delay: 500 }}
                 out:fade={{ duration: 500 }}>
                <slot/>
            </div>
        {/key}
    </main>
</div>

<style lang="scss">
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--background);
    overflow: clip;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;

    div:nth-child(n+2) {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
</style>
