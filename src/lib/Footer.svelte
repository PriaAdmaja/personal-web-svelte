<script>
	import { DarkMode, P } from 'flowbite-svelte';
	import ExternalLink from './ExternalLink.svelte';
</script>

<section class="flex items-center justify-between">
	<P class="text-sm">&copy; {new Date().getFullYear()} Pria Admaja</P>

	<DarkMode class="cursor-pointer" />
</section>
