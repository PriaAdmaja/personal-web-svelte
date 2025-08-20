<script>
	import { Heading, P } from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
</script>

<section
	class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-roboto md:px-12 md:py-16 lg:py-0"
>
	<section class="lg:flex lg:justify-between lg:gap-4">
		<header
			class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
		>
			<div>
				<Heading tag="h1" class="text-4xl font-bold tracking-tight"
					><a href="/">Pria Admaja</a></Heading
				>
				<Heading tag="h2" class="mt-3 text-lg font-medium tracking-tight sm:text-xl"
					>Front End Engineer</Heading
				>
				<P class="mt-4 max-w-xs leading-normal text-pretty"
					>I build fast, accessible, and scalable front-end applications</P
				>
			</div>
			<div class="flex gap-4">
				<a href="https://github.com/PriaAdmaja" target="_blank" rel="noopener noreferrer">
					<GithubSolid class="size-6" />
				</a>
				<a href="https://www.linkedin.com/in/priaadmaja/" target="_blank" rel="noopener noreferrer">
					<LinkedinSolid class="size-6" />
				</a>
			</div>
		</header>
	</section>
</section>
