<script>
import { link, push, location } from 'svelte-spa-router';
import active from 'svelte-spa-router/active'

import Logo from './Logo';
import { debounce } from '../utils.js';

const regex = /search\/(.+)/gi;
$: searchInput = regex.test($location) ? getSearchQuery() : '';
function getSearchQuery() {
  return decodeURI($location.replace(regex, '$1')).slice(1)
}
</script>

<div class="relative top-0 left-0 h-full w-1/4 mr-12 xl:mr-24" />
<nav class="bg-teal-500 p-6 fixed top-0 left-0 h-full w-1/4">
  <Logo />
  <div class="flex flex-col mt-6">
    <input
      class="text-white px-3 placeholder-teal-200 bg-transparent focus:outline-0 focus:shadow-outline border-0 border-b-2 border-teal-200 py-3 block w-full appearance-none leading-normal"
      type="search"
      placeholder="Search for the game you'd like to have..."
      bind:value={searchInput}
      on:input={debounce(() => push(`/search/${searchInput}`), 500)} />
    <a
      href="/"
      use:link
      use:active={'/', 'text-blue-100'}
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-lg h-15 my-6 py-3 px-3 border border-teal-200 hover:border-white border-l-0 border-r-0 block text-teal-200 hover:text-white">
          My Wishlist
    </a>
  </div>
</nav>