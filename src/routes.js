import Wishlist from './views/Wishlist.svelte';
import Search from './views/Search.svelte';

export default {
    '/': Wishlist,
    '/search/:query': Search,
}