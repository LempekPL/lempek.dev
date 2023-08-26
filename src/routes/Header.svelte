<script>
	import logo from '$lib/images/lempekDesign.png';
	import {t} from "svelte-i18n";
</script>

<header>
	<div class="logo">
		<a href="/">
			<img src={logo} alt="Lempek" />
		</a>
	</div>
	<nav>
		<a href="/projects">{$t("home.home")}</a>
		<a href="/projects">{$t("projects.projects")}</a>
	</nav>
	<div></div>
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
