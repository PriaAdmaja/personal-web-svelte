<script>
	import { DarkMode, P } from 'flowbite-svelte';
	import { inView } from '../utils/inView';
</script>

<section class="flex items-center justify-between px-6 md:px-12 lg:px-0" use:inView={"footer"}>
	<P>&copy; {new Date().getFullYear()} Pria Admaja</P>

	<DarkMode class="cursor-pointer" />
</section>
