<script>
	import About from '$lib/About.svelte';
	import Experience from '$lib/Experience.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Projects from '$lib/Projects.svelte';
</script>

<section
	class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-figtree md:px-12 md:py-16 lg:py-0"
>
	<section class="lg:flex lg:justify-between lg:gap-4">
		<Header />

		<section class="lg:w-[60%] lg:pb-20">
			<div id="about" class="pt-10 lg:pt-20">
				<About />
			</div>
			<div id="experience" class="pt-10 lg:pt-20">
				<Experience />
			</div>
			<div id="experience" class="pt-10 lg:pt-20">
				<Projects />
			</div>
			<div class="pt-14 lg:pt-20">
				<Footer />
			</div>
		</section>
	</section>
</section>
