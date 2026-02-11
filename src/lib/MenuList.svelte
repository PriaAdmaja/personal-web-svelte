<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { visibilityStore } from '../utils/visibilityStore';

	$: visibility = $visibilityStore;

	const menuList = [
		{ label: 'ABOUT', href: '#about' },
		{ label: 'EXPERIENCE', href: '#experience' },
		{ label: 'PROJECT', href: '#projects' }
	];

	let currentHash = '';

	function updateHash() {
		currentHash = window.location.hash;
	}

	onMount(() => {
		// set awal
		updateHash();

		window.addEventListener('hashchange', updateHash);

		return () => {
			window.removeEventListener('hashchange', updateHash);
		};
	});

	afterNavigate(() => {
		updateHash(); // setiap kali pindah halaman / klik link
	});

	$: activeId = visibility.about ? 'about' : visibility.experience && visibility.footer === false ? 'experience' : visibility.projects || visibility.footer ? 'projects' : '';
</script>

<ul class="mt-14 hidden flex-col gap-2 lg:flex">
	{#each menuList as { href, label }}
		<li>
			<a {href} class="group flex w-fit items-center py-2">
				<span
					class={` ${activeId === href.slice(1) ? 'w-20 border-t-accent' : 'border-t-text-light-secondary dark:border-t-text-dark-secondary'} mr-4 w-10 border-t-[2.5px] transition-all duration-200 ease-out group-hover:w-20 group-focus-visible:w-20  `}
				></span>
				<span
					class={` ${activeId === href.slice(1) ? 'text-accent' : 'text-text-light dark:text-text-dark'}`}
				>
					{label}
				</span>
			</a>
		</li>
	{/each}
</ul>
