<script>
	import { P } from 'flowbite-svelte';
	import MenuList from './MenuList.svelte';
	import { GithubSolid, LinkedinSolid, WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<header
	class="px-6 md:px-12 lg:px-0 lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
>
	<div>
		<P class="text-4xl tracking-tight"
			>Hi, I’m <strong class="group relative"
				><a
					href="/"
					class="relative inline-block font-bold after:absolute after:bottom-0 after:left-0 after:-z-1 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
					>Pria Admaja</a
				>
			</strong></P
		>

		<P class="mt-4 max-w-xs leading-normal text-pretty"
			>I craft modern web apps with React, Next.js, and TypeScript.</P
		>

		<MenuList />
	</div>

	<div class="mt-6 flex gap-4 text-text-light dark:text-text-dark">
		<a href="https://github.com/PriaAdmaja" target="_blank" rel="noopener noreferrer">
			<GithubSolid class="size-6 " />
		</a>
		<a href="https://www.linkedin.com/in/priaadmaja/" target="_blank" rel="noopener noreferrer">
			<LinkedinSolid class="size-6 " />
		</a>
		<a href="https://wa.me/6282228316811" target="_blank" rel="noopener noreferrer">
			<WhatsappSolid class="size-6 " />
		</a>
	</div>
</header>
