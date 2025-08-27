<script lang="ts">
	import { P } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	const menuList = [
		{ label: 'ABOUT', href: '#about' },
		{ label: 'EXPERIENCE', href: '#experience' },
		{ label: 'PROJECT', href: '#project' }
	];

	const ids = menuList.map((item) => item.href.replace('#', ''));
	let visibility: Record<string, boolean> = {};

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					visibility = {
						...visibility,
						[entry.target.id]: entry.isIntersecting
					};
				});
			},
			{ threshold: 0.5 }
		);

		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});
</script>

<ul class="mt-14 hidden flex-col gap-5 lg:flex">
	{#each menuList as { href, label }}
		<li>
			<a {href}><P class={`${visibility[href.replace('#', '')]} hover:font-bold`}>{label}</P></a>
		</li>
	{/each}
</ul>
