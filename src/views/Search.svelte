<script>
	import { fetchGames } from '../services/psnGames.service';
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
	<h3 class="text-center font-normal text-2xl">Search Results for <span class="font-semibold capitalize">'{decodeURI(query)}'</span></h3>
	<div id="search_results" class="flex flex-wrap justify-center">
		{#each searchResults as result}
			<div class="flex-grow flex-shrink rounded overflow-hidden shadow-lg sm:w-1/3 lg:w-1/4 mx-6 my-6 max-w-lg">
				<img class="w-full" src={result.attributes['thumbnail-url-base'] + '?w=320&h=320'} alt="Sunset in the mountains">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{result.attributes.name}</div>
					{#if result.attributes.skus[0].prices['non-plus-user']['strikethrough-price']}
						<p class="text-gray-700 line-through text-xs">
							{result.attributes.skus[0].prices['non-plus-user']['strikethrough-price'].display}
						</p>
					{/if}
					<div class="flex">
						<p class="text-gray-700 text-lg">
							{result.attributes.skus[0].prices['non-plus-user']['actual-price'].display}
						</p>
					</div>
					<div class="flex items-center">
						<img src="https://store.playstation.com/img/header-ps-plus-icon-26c842062150324f0524a4be875f8ca8.png" alt="ps-plus" class="w-3 h-3 mr-1">
						<p class="text-gray-700 text-sm">
							{result.attributes.skus[0].prices['plus-user']['actual-price'].display}
						</p>
					</div>
				</div>
				<div class="px-6 py-4">
					{#each result.attributes.genres as genre}
						<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{genre}</span>
					{/each}
				</div>
			</div>
		{:else}
			{#if loading}
				<p>Aranıyor...</p>
			{:else}
				<p>Sonuç Bulunamadı</p>
			{/if}
		{/each}
	</div>
</div>