<script>
	import logo from '$lib/images/lempekDesign.png';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Lempek" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		height: 3rem;
	}

	.corner img {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
	}
</style>
