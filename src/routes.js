import Wishlist from './views/Wishlist.svelte';
import Search from './views/Search.svelte';
export default {
    '/wishlist': Wishlist,
    '/search/:query': Search,
}