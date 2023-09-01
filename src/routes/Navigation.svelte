<script lang="ts">
    import {t} from "svelte-i18n";
    import {page} from "$app/stores";
    import {afterUpdate} from "svelte";
    import {tweened} from 'svelte/motion';
    import {writable} from "svelte/store";

    const left = tweened(0, {duration: 250});
    const width = tweened(0, {duration: 100});
    const cX = writable(0);
    const cY = writable(0);

    let home: HTMLAnchorElement;
    let about: HTMLAnchorElement;
    let projects: HTMLAnchorElement;

    $: path = $page.url.pathname.slice($page.url.pathname.lastIndexOf('/'));

    afterUpdate(() => {
        if (path === "/") {
            left.set(home.offsetLeft);
            width.set(home.offsetWidth);
        } else if (path === "/about") {
            left.set(about.offsetLeft);
            width.set(about.offsetWidth);
        } else if (path === "/projects") {
            left.set(projects.offsetLeft);
            width.set(projects.offsetWidth);
        }
    })

    function moveClicker(e: MouseEvent & {currentTarget: (EventTarget & HTMLAnchorElement)}) {
        cX.set(e.offsetX-16);
        cY.set(e.offsetY-16);
    }
</script>
<nav>
    <div class="selector" style="left: {$left}px; width: {$width}px;"/>
    <!--    class:selected={"/"===path}-->
    <a href="/" bind:this={home} data-sveltekit-noscroll>{$t("nav.home")}</a>
    <a href="/about" bind:this={about} data-sveltekit-noscroll>{$t("nav.about")}</a>
    <a href="/projects" bind:this={projects} data-sveltekit-noscroll>{$t("nav.projects")}</a>
</nav>

<style lang="scss">
  nav {
    z-index: 1;
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
    position: sticky;
    top: 1rem;

    &:hover {
      box-shadow: black 0 4px 8px -2px;
    }

    .selector {
      position: absolute;
      background: var(--navbar-button);
      top: 0;
      left: 0;
      bottom: 0;
      border-radius: 1000rem;
      z-index: -1;
    }

    a {
      color: var(--default-text);
      text-decoration: none;
      padding: .75rem 1rem;
      border-radius: 1000rem;
      position: relative;
      overflow: hidden;

      &:after {
        content: "";
        transition: 200ms;
        z-index: -2;
      }
      &:hover:after {
        content: "";
        transition: 200ms;
        position: absolute;
        background: #bebebe;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  //.selector {
  //
  //}

  //.selected {
  //  background: var(--navbar-button);
  //}
</style>