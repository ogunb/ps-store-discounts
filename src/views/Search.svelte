<script>
	import { fetchGames } from '../services/games.service';
	import GameCard from '../components/GameCard.svelte';

	export let params;
	let { query } = params;
    $: query = params.query;

	let searchResults = [];
    let loading = true;
    $: fetchGames(query)
        .then((response) => {
            searchResults = response;
        })
        .finally(() => {
            loading = false;
        })
</script>

<div class="container pt-6">
	<h3 class="text-center font-normal text-2xl">
		Search Results for
		<span class="font-semibold capitalize">“{decodeURI(query)}”</span>
	</h3>
	<div
		id="search_results"
		class="flex flex-wrap justify-center">
		{#each searchResults as result}
			<GameCard {result}/>
		{:else}
			{#if loading}
				<p>Aranıyor...</p>
			{:else}
				<p>Sonuç Bulunamadı</p>
			{/if}
		{/each}
	</div>
</div>