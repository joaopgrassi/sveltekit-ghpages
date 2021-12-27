<script context="module" lang="ts">
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<script lang="ts">
	import {
		store,
		selectedLanguage,
		languages,
		filteredSignals,
		selectedSignal,
		selectedSample,
		filteredSamples
	} from '$lib/store';
	import { slide } from 'svelte/transition';
	const { allLanguages } = store;
	let rawCode: string = 'much empty, such sad.';

	selectedSample.subscribe((sample) => {
		getRawCode(sample);
	});

	async function getRawCode(sample) {
		if (!sample) {
			return;
		}
		const res = await fetch(sample.source);
		rawCode = await res.text();
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="content">
	<h1>These are the languages</h1>

	{#each $allLanguages as l, index}
		<h3>{index} - {l.lang}</h3>
		<ul>
			{#each l.signals as s}
				<li>{s.type}</li>
				<ul>
					{#each s.apps as app}
						<li>
							{app.type}
							<!-- <button on:click={() => getRawCode()}>Get Code</button> -->
						</li>
					{/each}
				</ul>
			{/each}
		</ul>
	{/each}
</div>

<div>
	<label for="lang">Language</label>
	<select name="lang" bind:value={$selectedLanguage}>
		{#each $languages as lang}
			<option value={lang}>
				{lang}
			</option>
		{/each}
	</select>
</div>

<div>
	<label for="signal">Signal</label>
	<select name="signal" bind:value={$selectedSignal}>
		{#each $filteredSignals as signal}
			<option value={signal}>
				{signal}
			</option>
		{/each}
	</select>
</div>

<div>
	<label for="sample">Sample</label>
	<select name="sample" bind:value={$selectedSample}>
		{#each $filteredSamples as sample}
			<option value={sample}>
				{sample.type}
			</option>
		{/each}
	</select>
</div>

<pre transition:slide|local>
  <code>
    {rawCode}
  </code>
</pre>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
