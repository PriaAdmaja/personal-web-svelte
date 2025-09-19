<script>
	import { P } from 'flowbite-svelte';
	import ExternalLink from './ExternalLink.svelte';
</script>

<section>
	<div class="sticky top-0 z-30 w-full lg:hidden py-4 bg-bg-light dark:bg-bg-dark backdrop-blur-sm">
		<P class="text-lg font-bold">About</P>
	</div>
	<div class="space-y-4">
		<P class="text-base text-pretty"
			>I’m a Frontend Engineer with a strong focus on building modern, scalable, and user-centric
			web applications. My expertise lies in <ExternalLink href="https://react.dev/"
				><strong>React</strong></ExternalLink
			>, <ExternalLink href="https://nextjs.org/"><strong>Next.js</strong></ExternalLink>, and <ExternalLink
				href="https://www.typescriptlang.org/"><strong>TypeScript</strong></ExternalLink
			>, and I enjoy turning complex ideas into intuitive digital experiences.
		</P>
		<P class="text-base text-pretty"
			>I have hands-on experience with a wide range of technologies and libraries, including
			<ExternalLink href="https://tailwindcss.com/"><strong>Tailwind CSS</strong></ExternalLink>,
			<ExternalLink href="https://ant.design/"><strong>Ant Design</strong></ExternalLink>,
			<ExternalLink href="https://mui.com/"><strong>Material UI</strong></ExternalLink>,
			<ExternalLink href="https://tanstack.com/"
				><strong>TanStack React Query & Table</strong></ExternalLink
			>, <ExternalLink href="https://dndkit.com/"><strong>dnd-kit</strong></ExternalLink>, and
			<ExternalLink href="https://auth0.com/"><strong>Auth0</strong></ExternalLink>. I’m also
			comfortable working with backend integrations and development workflows, using
			<ExternalLink href="https://expressjs.com/"><strong>Express.js</strong></ExternalLink> and
			<ExternalLink href="https://www.docker.com/"><strong>Docker Compose</strong></ExternalLink>.
		</P>
		<P class="text-base text-pretty">
			What drives me is the challenge of solving real-world problems through code. I believe that
			great software is not just functional—it should be efficient, accessible, and delightful to
			use.
		</P>
		<P class="text-base text-pretty">
			Outside of work, I like to keep an active lifestyle—jogging in the morning helps me stay
			energized and maintain focus throughout the day.</P
		>
	</div>
</section>
