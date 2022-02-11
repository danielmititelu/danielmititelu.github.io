<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<section >
	<Header />
	<main class="max-w-screen-md mx-auto mt-24 min-h-screen">
		<slot />
	</main>
	<Footer />
</section>
