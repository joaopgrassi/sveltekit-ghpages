<script context="module" lang="ts">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import { langStore } from '$lib/store';
	const { languages } = langStore;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>These are the languages</h1>

	{#each $languages as l, index}
		<h3>{index} - {l.lang}</h3>
		<ul>
			{#each l.signals as s}
				<li>{s.type}</li>
				<ul>
					{#each s.apps as app}
						<li>{app.type}</li>
					{/each}
				</ul>
			{/each}
		</ul>
	{/each}
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
