<script lang="ts">
    import {t} from "svelte-i18n";
    import {page} from "$app/stores";
</script>

<nav>
    <a href="/"
       class:selected={"/"===$page.url.pathname.slice($page.url.pathname.lastIndexOf('/'))}>{$t("nav.home")}</a>
    <a href="/about"
       class:selected={"/about"===$page.url.pathname.slice($page.url.pathname.lastIndexOf('/'))}>{$t("nav.about")}</a>
    <a href="/projects"
       class:selected={"/projects"===$page.url.pathname.slice($page.url.pathname.lastIndexOf('/'))}>{$t("nav.projects")}</a>
</nav>

<style lang="scss">
  nav {
    width: fit-content;
    margin: 1rem auto;
    border-radius: 1000rem;
    display: flex;
    flex-wrap: nowrap;
    gap: 1rem;
    justify-content: center;
    background: var(--header);
    border: .25rem solid var(--header);
    box-shadow: black 0 4px 8px -4px;
    transition: 200ms;

    &:hover {
      box-shadow: black 0 4px 8px -2px;
    }

    a {
      color: var(--default-text);
      text-decoration: none;
      padding: .75rem 1rem;
      border-radius: 1000rem;

    }
  }

  .selected {
    background: var(--navbar-button);
  }
</style>