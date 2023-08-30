<script lang="ts">
	import logo from "$lib/images/lempekDesign.png";
	import {locale} from "svelte-i18n";
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
	<div></div>
	<div>
		<button on:click={toggleTheme}>Change theme</button>
		<button on:click={toggleLanguage}>Change language</button>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		/*background-color: var(--background);*/
		position: sticky;
		top: 0;
		z-index: 1;
		backdrop-filter: blur(.2rem);
	}

	.logo img {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}
</style>
