<script lang="ts">
	import type { HTMLAttributeAnchorTarget } from 'svelte/elements';

	export let href: string;
	export let className: string = '';
	export let target: HTMLAttributeAnchorTarget = '_blank';
</script>

<a {href} {target} class={`hover:text-accent ${className}`}><slot /></a>
