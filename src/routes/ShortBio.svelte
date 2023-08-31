<script>
    import lempek from "$lib/images/lempekIRL.png";
    import { t } from "svelte-i18n";
    const years = Math.abs(new Date(Date.now()-new Date(2004, 2, 29).getTime()).getUTCFullYear() - 1970);
    const programmingYears = Math.abs(new Date(Date.now()-new Date(2018, 8, 16).getTime()).getUTCFullYear() - 1970);
</script>

<div class="short-bio">
    <div class="main-info">
        <div class="picture-irl">
            <img src={lempek} alt="Piotr Lempkowski">
        </div>
        <div>
            <p>Piotr Lempkowski</p>
            <p>Lempek</p>
        </div>
        <div>
            {$t("bio.short", { values: {years , programmingYears} })}
        </div>
    </div>
</div>

<style lang="scss">
  .short-bio {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas: ". content .";
  }

  .main-info {
    grid-area: content;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 3fr;
    background-color: var(--bio-background);
    padding: 1rem 1rem 1.5rem;
    border-radius: 0 0 1rem 1rem;
  }

  .picture-irl {
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
    height: 10rem;
    justify-self: center;

    img {
      height: inherit;
      border-radius: 100%;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: inset 0 0 1rem 0 black;
      border-radius: 100%;
    }
  }
</style>