<script>
	import { fetchGames } from './services/psnGames.service';
	import { debounce } from './utils.js';

	let searchResults = [];
	let loading = true;
	let searchInput = '';

	async function searchGames() {
		searchResults = await fetchGames(searchInput);
		loading = false;
	}
</script>

<div class="relative top-0 left-0 h-full w-1/4 mr-12 xl:mr-24"></div>
<nav class="bg-teal-500 p-6 fixed top-0 left-0 h-full w-1/4">
  <div class="flex items-center text-white flex-wrap ">
    <h2 class="w-full font-light text-xl tracking-tight">PS STORE</h2>
    <h1 class="w-full font-semibold text-xl tracking-tight">DISCOUNT TRACKER</h1>
  </div>
  <div class="flex flex-col mt-6">
	<input class="text-white px-3 placeholder-teal-200 bg-transparent focus:outline-0 focus:shadow-outline border-0 border-b-2 border-teal-200 py-3 block w-full appearance-none leading-normal" type="search" placeholder="Search for the game you'd like to have..." bind:value={searchInput} on:input={debounce(searchGames, 500)}>
	<a href="#responsive-header" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-lg h-15 my-6 py-6 px-3 border border-teal-200 hover:border-white border-l-0 border-r-0 block text-teal-200 hover:text-white">
        My Wishlist
	</a>
  </div>
</nav>
<div class="container pt-6">
	<h3 class="text-center font-normal text-2xl">Search Results for <span class="font-semibold">'{searchInput}'</span></h3>
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
