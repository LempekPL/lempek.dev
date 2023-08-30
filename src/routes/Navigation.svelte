<script>
    import {t} from "svelte-i18n";
</script>

<nav>
    <a href="/">{$t("home.home")}</a>
    <a href="/projects">{$t("projects.projects")}</a>
</nav>

<style lang="postcss">
    nav {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }
</style>