<script lang="ts">
	import { Badge, Button, P, Timeline, TimelineItem } from 'flowbite-svelte';
	import { ArrowRightOutline, CalendarWeekSolid } from 'flowbite-svelte-icons';

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
			description:
				'Built and maintained features using Next.js, Tailwind CSS, Material UI, TanStack Query, and TanStack Table. Implemented authentication flow with Auth0, including secure login and session handling. Created reusable components, custom hooks, and utility functions to streamline development. Collaborated with backend engineers to integrate APIs and align frontend with system architecture. Handled frontend deployment, ensuring stable releases and smooth delivery to production.',
			location: 'Malang, East Java, Indonesia',
			tech: [
				'Next.js',
				'Tailwind',
				'Material UI',
				'React Hook Form',
				'Tanstack React Query',
				'Auth0',
				'Cloudflare'
			]
		},
		{
			companyName: 'PT. Havedev Cipta Teknologi',
			date: 'November 2023 - October 2024',
			description:
				'Built an ERP web app by continuing development from an existing codebase. Added new features and improved existing ones using Next.js, Tailwind CSS, Ant Design, React Hook Form, TanStack Query, and TanStack Table. Worked with designers, QA, and project managers to deliver a high-quality product.',
			location: 'Blitar, East Java, Indonesia',
			tech: ['Next.js', 'Tailwind', 'Ant Design', 'React Hook Form', 'Tanstack React Query']
		}
	];
</script>

<section>
	<div class="sticky top-0 z-30 w-full bg-bg-light py-4 backdrop-blur-sm lg:hidden dark:bg-bg-dark">
		<P class="text-lg font-bold">Experience</P>
	</div>
	<Timeline order="vertical" class="ml-3">
		{#each timeline as { companyName, date, description, tech }}
			<TimelineItem title={companyName} {date}>
				{#snippet orientationSlot()}
					<span
						class="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-200 ring-white"
					>
						<CalendarWeekSolid class="h-4 w-4 " />
					</span>
				{/snippet}
				<p class="my-4 text-base font-normal text-pretty text-gray-500 dark:text-gray-400">
					{description}
				</p>
				<div class="flex flex-wrap items-center gap-2">
					{#each tech as techItem}
						<Badge color="blue" border large>{techItem}</Badge>
					{/each}
				</div>
			</TimelineItem>
		{/each}
	</Timeline>
	<Button
		size="sm"
		outline
		color="gray"
		class="group flex w-fit cursor-pointer gap-2"
		href="/resume.pdf"
		target="_blank"
		><span>View Full Resume</span>
		<ArrowRightOutline
			class="transition-transform duration-200 ease-linear group-hover:translate-x-1"
		/></Button
	>
</section>
