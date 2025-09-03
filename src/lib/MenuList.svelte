<script lang="ts">
	import { P } from 'flowbite-svelte';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	const menuList = [
		{ label: 'ABOUT', href: '#about' },
		{ label: 'EXPERIENCE', href: '#experience' },
		{ label: 'PROJECT', href: '#project' }
	];

	const ids = menuList.map((item) => item.href.replace('#', ''));

	function scrollToHash() {
		const { hash } = window.location;

		if (hash === '#about') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		if (hash) {
			const el = document.querySelector(hash);
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	onMount(() => {
		// Scroll if hash exists on first render
		scrollToHash();

		// Also scroll after client-side navigations
		afterNavigate(() => {
			scrollToHash();
		});
	});
</script>

<ul class="mt-14 hidden flex-col gap-5 lg:flex">
	{#each menuList as { href, label }}
		<li>
			<a {href}><P class={` hover:font-bold`}>{label}</P></a>
		</li>
	{/each}
</ul>
