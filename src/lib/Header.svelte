<script>
	import { P } from 'flowbite-svelte';
	import MenuList from './MenuList.svelte';
	import { GithubSolid, LinkedinSolid, WhatsappSolid } from 'flowbite-svelte-icons';
</script>

<header
	class="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"
>
	<div>
		<P class="text-4xl tracking-tight">Hi, I’m <a href="/" class="font-bold">Pria Admaja</a></P>

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
