<script lang="ts">
	import { Badge, Timeline, TimelineItem } from 'flowbite-svelte';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';

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
			tech: ['Next JS', 'Tailwind', 'Material UI', 'React Hook Form', 'Tanstack React Query']
		},
		{
			companyName: 'PT. Havedev Cipta Teknologi',
			date: 'November 2023 - October 2024',
			description: '',
			location: 'Blitar, East Java, Indonesia',
			tech: ['Next JS', 'Tailwind', 'Ant Design', 'React Hook Form', 'Tanstack React Query']
		}
	];
</script>

<Timeline order="vertical" id="experience" class='ml-3'>
	{#each timeline as { companyName, date, description, tech }}
		<TimelineItem title={companyName} {date}>
			{#snippet orientationSlot()}
				<span
					class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 ring-white"
				>
					<CalendarWeekSolid class="h-4 w-4 " />
				</span>
			{/snippet}
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{description}
			</p>
			<div class="flex flex-wrap items-center gap-2">
				{#each tech as techItem}
					<Badge rounded color="gray" large>{techItem}</Badge>
				{/each}
			</div>
		</TimelineItem>
	{/each}
</Timeline>
