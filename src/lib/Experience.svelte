<script lang="ts">
	type TimelineType = {
		companyName: string;
		location: string;
		date: string;
		description: string;
		tech: string[];
	};

	const timeline: TimelineType[] = [
		{
			companyName: 'PT. Inovasi Bisnis Berteknologi',
			date: 'October 2024 - Now',
			description: '',
			location: 'Malang, East Java, Indonesia',
			tech: ['Next JS', 'Material UI', 'React Hook Form', 'Tanstack React Query']
		}
	];
</script>

<ol class="relative border-s border-gray-200 dark:border-gray-700">
	{#each timeline as { companyName, date, description, tech }}
		<li class="ms-6 mb-10">
			<span
				class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
			>
				<svg
					class="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
					/>
				</svg>
			</span>
			<h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
				{companyName}
			</h3>
			<time class="mb-2 block text-sm leading-none font-normal text-gray-400 dark:text-gray-500"
				>{date}</time
			>
			<p class="text-base font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
			<div class="flex items-center gap-2">
				{#each tech as t}
					<span
						class=" rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
						>{t}</span
					>
				{/each}
			</div>
		</li>
	{/each}
</ol>
