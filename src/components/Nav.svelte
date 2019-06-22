<script>
import { link, push, location } from 'svelte-spa-router';
import { debounce } from '../utils.js';

$: searchInput = $location.includes('search') ? getSearchQuery() : '';
function getSearchQuery() {
  return decodeURI($location.replace(/search\/(.+)/gi, '$1')).slice(1)
}

function searchGames() {
  push(`/search/${searchInput}`)
}
</script>

<nav class="bg-teal-500 p-6 fixed top-0 left-0 h-full w-1/4">
  <div class="flex items-center text-white flex-wrap ">
    <h2 class="w-full font-light text-xl tracking-tight">PS STORE</h2>
    <h1 class="w-full font-semibold text-xl tracking-tight">DISCOUNT TRACKER</h1>
  </div>
  <div class="flex flex-col mt-6">
	<input class="text-white px-3 placeholder-teal-200 bg-transparent focus:outline-0 focus:shadow-outline border-0 border-b-2 border-teal-200 py-3 block w-full appearance-none leading-normal" type="search" placeholder="Search for the game you'd like to have..." bind:value={searchInput} on:input={debounce(searchGames, 500)}>
	<a href="/wishlist" use:link class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-lg h-15 my-6 py-6 px-3 border border-teal-200 hover:border-white border-l-0 border-r-0 block text-teal-200 hover:text-white">
        My Wishlist
	</a>
  </div>
</nav>