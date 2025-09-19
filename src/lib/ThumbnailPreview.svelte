<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="sm:max-w-3xs hover:scale-105 transition-transform duration-300">
	<div class="overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
		<!-- Browser Top Bar -->
		<div class="flex items-center gap-1 bg-gray-200 px-2 py-1">
			<span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
			<span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
			<span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
			<div class="mx-1.5 h-1.5 flex-1 rounded bg-gray-300"></div>
		</div>
		<!-- Screenshot -->
		<div class="aspect-[16/9] overflow-hidden rounded-md shadow ">
			<img {src} {alt} class="w-full" />
		</div>
	</div>
</div>
