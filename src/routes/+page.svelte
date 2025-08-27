<script>
	import About from '$lib/About.svelte';
	import Experience from '$lib/Experience.svelte';
	import Header from '$lib/Header.svelte';
</script>

<section
	class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-roboto md:px-12 md:py-16 lg:py-0"
>
	<section class="lg:flex lg:justify-between lg:gap-4">
		<Header />

		<section class="space-y-5 lg:w-[52%] lg:py-24">
			<About />
			<Experience />
		</section>
	</section>
</section>
