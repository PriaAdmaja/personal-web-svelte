<script lang="ts">
	import { P } from 'flowbite-svelte';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	const menuList = [
		{ label: 'ABOUT', href: '#about' },
		{ label: 'EXPERIENCE', href: '#experience' },
		{ label: 'PROJECT', href: '#projects' }
	];

	const selectMenu = (href: string) => {
		const id = href.replace('#', '');
		const node = document.getElementById(id);
		if (node) {
			node.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};
</script>

<ul class="mt-14 hidden flex-col gap-5 lg:flex">
	{#each menuList as { href, label }}
		<li>
			<button
				type="button"
				class="m-0 cursor-pointer border-none bg-transparent p-0"
				on:click={() => selectMenu(href)}
			>
				<P class={` hover:font-bold`}>{label}</P>
			</button>
		</li>
	{/each}
</ul>
