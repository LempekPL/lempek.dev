<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Lempek</title>
	<meta name="title" content="Lempek" />
	<meta name="description" content="Learn everything about Lempek." />
	<meta name="theme-color" content="#69E621">

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://lempek.dev/" />
	<meta property="og:title" content="Lempek" />
	<meta property="og:description" content="Learn about more about Lempek." />
	<meta property="og:image" content="$lib/LEMPEKbanner.png" />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://metatags.io/" />
	<meta property="twitter:title" content="Lempek" />
	<meta property="twitter:description" content="Learn about more about Lempek." />
	<meta property="twitter:image" content="$lib/images/LEMPEKbanner.png" />
</svelte:head>

<!--<section>-->
<!--	<h1>-->
<!--		<span class="welcome">-->
<!--			<picture>-->
<!--				<source srcset={welcome} type="image/webp" />-->
<!--				<img src={welcome_fallback} alt="Welcome" />-->
<!--			</picture>-->
<!--		</span>-->

<!--		to your new<br />SvelteKit app-->
<!--	</h1>-->

<!--	<h2>-->
<!--		try editing <strong>src/routes/+page.svelte</strong>-->
<!--	</h2>-->

<!--	<Counter />-->
<!--</section>-->

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
