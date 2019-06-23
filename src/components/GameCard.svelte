<script>
    import FavoriteButton from './FavoriteButton.svelte';

    export let result;
    const psPlusImageSrc = 'https://store.playstation.com/img/header-ps-plus-icon-26c842062150324f0524a4be875f8ca8.png';
    const gameImageSrc = result.attributes['thumbnail-url-base'] + '?w=320&h=320';
    const nonPlusStrikethroughPrice = result.attributes.skus[0].prices['non-plus-user']['strikethrough-price'];
    const nonPlusActualPrice = result.attributes.skus[0].prices['non-plus-user']['actual-price'];
    const plusActualPrice = result.attributes.skus[0].prices['plus-user']['actual-price'];
</script>

<div class="flex-grow flex-shrink rounded overflow-hidden shadow-lg sm:w-1/3 lg:w-1/4 mx-6 my-6 max-w-lg relative">
    <FavoriteButton />
    <img
        class="w-full"
        src={gameImageSrc}
        alt={result.attributes.name + ' game.'} />
    <div class="px-6 py-4">
        <p class="font-bold text-xl mb-2">{result.attributes.name}</p>
        {#if nonPlusStrikethroughPrice}
            <p class="text-gray-700 line-through text-xs">
                {nonPlusStrikethroughPrice.display}
            </p>
        {/if}
        <div class="flex">
            <p class="text-gray-700 text-lg">
                {nonPlusActualPrice.display}
            </p>
        </div>
        <div class="flex items-center">
            <img
                src={psPlusImageSrc}
                alt="ps-plus"
                class="w-3 h-3 mr-1">
            <p class="text-gray-700 text-sm">
                {plusActualPrice.display}
            </p>
        </div>
    </div>
</div>