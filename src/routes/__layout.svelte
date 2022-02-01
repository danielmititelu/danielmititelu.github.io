<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<section class="max-w-screen-md mx-auto">
	<Header />
	<slot />
</section>
