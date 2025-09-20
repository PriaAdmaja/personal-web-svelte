<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml"/>
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
		rel="stylesheet"
	/>
	<title>Pria Admaja</title>
	<meta
		name="description"
		content="Hi, I’m Pria Admaja. A Frontend Engineer passionate about building modern web apps with React, Next.js, and Tailwind CSS."
	/>
</svelte:head>

{@render children?.()}
