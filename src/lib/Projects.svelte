<script>
	import ThumbnailPreview from './ThumbnailPreview.svelte';

	const projects = [
		{
			name: "Al-Qur'an Online",
			description:
				'A web-based application that provides access to the Quran, allowing users to read, search, and explore its contents online. Build with React and Bootstrap for styling.',
			image: '/images/alQuran-online.webp',
			url: 'https://alquran-online.vercel.app/'
		},
		{
			name: 'Bisajual App',
			description:
				'A seller dashboard web app to manage products, orders, warehouse and etc. Built with Next.js, Tailwind CSS and Material UI .',
			image: '/images/bisajual-app.webp',
			url: 'https://app.bisajual.com/'
		}
	];
</script>

<section id="projects" class="space-y-8">
	{#each projects as { name, description, image, url }}
		<section class="flex gap-5">
			<ThumbnailPreview alt={name} src={image} />
			<div>
				<h2 class="mb-2 text-lg font-bold text-pretty text-gray-900 dark:text-white">
					{name}
				</h2>
				<p class="mb-4 text-base font-normal text-pretty text-gray-500 dark:text-gray-400">
					{description}
				</p>
			</div>
		</section>
	{/each}
</section>
