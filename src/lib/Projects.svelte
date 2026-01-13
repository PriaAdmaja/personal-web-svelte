<script>
	import { P } from 'flowbite-svelte';
	import ThumbnailPreview from './ThumbnailPreview.svelte';
	import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
	import SectionHeader from './SectionHeader.svelte';
	import { inView } from '../utils/inView';

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

<section id="projects" use:inView={"projects"}>
	<SectionHeader>Projects</SectionHeader>
	<div class="space-y-8 px-6 md:px-12 lg:px-0">
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
								class="relative w-fit font-bold after:absolute after:bottom-0 after:left-0 after:-z-1 after:w-full after:origin-left after:scale-x-0 after:border-b-[2.5px] after:border-b-accent after:transition-transform after:duration-300 group-hover:after:scale-x-100"
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
