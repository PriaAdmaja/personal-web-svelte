<script>
	import { DarkMode, P } from 'flowbite-svelte';
</script>

<section class="flex items-center justify-between px-6 md:px-12 lg:px-0">
	<P>&copy; {new Date().getFullYear()} Pria Admaja</P>

	<DarkMode class="cursor-pointer" />
</section>
