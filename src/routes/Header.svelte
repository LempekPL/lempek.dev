<script lang="ts">
	import logo from "$lib/images/lempekDesign.png";
	import {t, locale} from "svelte-i18n";
	import themeColor from "$lib/store-theme";
	function toggleTheme() {
		themeColor.update(t => t === "light" ? "dark" : "light")
	}
	function toggleLanguage() {
		locale.update(l => l === "en" ? "pl-PL" : "en")
	}
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Lempek" />
		</a>
	</div>
	<nav>
		<a href="/">{$t("home.home")}</a>
		<a href="/projects">{$t("projects.projects")}</a>
	</nav>
	<div>
		<button on:click={toggleTheme}>Change theme</button>
		<button on:click={toggleLanguage}>Change language</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		/*outline: red solid 1px;*/
	}

	.logo img {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}
</style>
