<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml"/>
	<title>Pria Admaja</title>
	<meta
		name="description"
		content="Hi, I’m Pria Admaja. A Frontend Engineer passionate about building modern web apps with React, Next.js, and Tailwind CSS."
	/>
</svelte:head>

{@render children?.()}
