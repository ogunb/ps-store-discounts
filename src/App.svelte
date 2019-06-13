<script>
	import { searchGames } from './services/psnGames.service';

	let searchResults = [];
	let loading = true;
	searchGames('days gone').then((res) => {
		searchResults = res
		loading = false;
	});
</script>

<div>
	{#each searchResults as result}
		<p>{result.attributes.name}</p>
	{:else}
		{#if loading}
			<p>Aranıyor...</p>
		{:else}
			<p>Sonuç Bulunamadı</p>
		{/if}
	{/each}
</div>