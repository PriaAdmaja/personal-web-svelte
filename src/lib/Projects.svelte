<script>
	import { P } from 'flowbite-svelte';
	import ThumbnailPreview from './ThumbnailPreview.svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

	const projects = [
		{
			name: 'Bisajual App',
			description:
				'A seller dashboard web app to manage products, orders, warehouse and etc. Built with Next.js, Tailwind CSS and Material UI .',
			image: '/images/bisajual-app.webp',
			url: 'https://app.bisajual.com/'
		},
		{
			name: "Al-Qur'an Online",
			description:
				'A web-based application that provides access to the Quran, allowing users to read, search, and explore its contents online. Build with React and Bootstrap for styling.',
			image: '/images/alQuran-online.webp',
			url: 'https://alquran-online-pria.vercel.app/'
		}
	];
</script>

<section id="projects">
	<div class="sticky top-0 z-30 w-full bg-bg-light py-4 backdrop-blur-sm lg:hidden dark:bg-bg-dark">
		<P class="text-lg font-bold">Projects</P>
	</div>
	<div class="space-y-8">
		{#each projects as { name, description, image, url }}
			<section class="flex flex-col gap-5 sm:flex-row">
				<ThumbnailPreview alt={name} src={image} />
				<div>
					<h2 class="mb-2 w-fit text-lg font-bold text-pretty text-gray-900 dark:text-white">
						<a
							href={url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex items-center gap-2"
						>
							<span
								class="relative w-fit font-bold after:absolute after:bottom-0 after:left-0 after:-z-1 after:border-b-[2.5px] after:w-full after:origin-left after:scale-x-0 after:border-b-accent after:transition-transform after:duration-300 group-hover:after:scale-x-100"
							>
								{name}
							</span>
							<ArrowUpRightFromSquareOutline
								class="size-4 transition-transform duration-100 ease-linear group-hover:scale-125"
							/>
						</a>
					</h2>
					<p class="mb-4 text-base font-normal text-pretty text-gray-500 dark:text-gray-400">
						{description}
					</p>
				</div>
			</section>
		{/each}
	</div>
</section>
