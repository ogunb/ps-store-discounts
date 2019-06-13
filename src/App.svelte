<script>
	import { searchGames } from './services/psnGames.service';

	let searchResults = [];
	let loading = true;
	searchGames('south park').then((res) => {
		searchResults = res
		loading = false;
	});
</script>

<div class="container">
	<div class="flex flex-wrap-reverse justify-center">
		{#each searchResults as result}
			<div class="flex-grow flex-shrink rounded overflow-hidden shadow-lg w-1/5 mx-6 my-6 max-w-lg">
				<img class="w-full" src={result.attributes['thumbnail-url-base'] + '?w=376&h=376'} alt="Sunset in the mountains">
				<div class="px-6 py-4">
					<div class="font-bold text-xl mb-2">{result.attributes.name}</div>
					<p class="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
					</p>
				</div>
				<div class="px-6 py-4">
					<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#action</span>
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
