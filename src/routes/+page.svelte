<script lang="ts">
	import { t } from "svelte-i18n"
</script>

<svelte:head>
    <title>Lempek</title>
</svelte:head>

<p>Testing</p>

<p>{$t("test.test", {values: {test: "app"}})}</p>

<style>

</style>
