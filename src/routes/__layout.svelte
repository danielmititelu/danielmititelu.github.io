<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<section >
	<Header />
	<main class="max-w-screen-md mx-auto min-h-screen mt-6">
		<slot />
	</main>
	<Footer />
</section>
