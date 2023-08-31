<script lang="ts">
    import logo from "$lib/images/lempekDesign.png";
    import {locale} from "svelte-i18n";
    import themeName from "$lib/store-theme";
    import {ALL_THEMES} from "$lib/themes";

    function toggleTheme() {
        themeName.update(t => t === "light" ? "dark" : "light")
    }

    function toggleLanguage() {
        locale.update(l => l === "en" ? "pl-PL" : "en")
    }
</script>

<header>
    <div class="logo">
        <a href="/">
            <img src={logo} alt="Lempek"/>
        </a>
    </div>
    <div></div>
    <div>
<!--        TODO: dropdown select but with divs -->
<!--        <select bind:value="{$themeName}">-->
<!--            {#each ALL_THEMES as theme}-->
<!--                <option value={theme}>{theme.toUpperCase()}</option>-->
<!--            {/each}-->
<!--        </select>-->
        <button on:click={toggleTheme}>Change theme</button>
        <button on:click={toggleLanguage}>Change language</button>
    </div>
</header>

<style lang="postcss">
    header {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: var(--header);
        position: sticky;
        top: 0;
        z-index: 1;
    }

    .logo img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
    }
</style>
