<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<section class="min-h-screen flex flex-col">
	<Header />
	<main class="max-w-screen-md mx-auto">
		<slot />
	</main>
	<div class="mt-auto">
		<Footer />
	</div>
</section>
