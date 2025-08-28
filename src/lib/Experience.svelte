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
		}
	];
</script>

<Timeline order="vertical">
	{#each timeline as { companyName, date, description, tech }}
		<TimelineItem title={companyName} {date}>
			{#snippet orientationSlot()}
				<span
					class="bg-primary-200 dark:bg-primary-900 absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900"
				>
					<CalendarWeekSolid class="text-primary-600 dark:text-primary-400 h-4 w-4" />
				</span>
			{/snippet}
			<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
				and pre-order E-commerce & Marketing pages.
			</p>
			<div class="flex items-center gap-2">
				{#each tech as techItem}
					<Badge rounded color="gray" large>{techItem}</Badge>
				{/each}
			</div>
		</TimelineItem>
	{/each}
</Timeline>
