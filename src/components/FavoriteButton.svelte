<script>
    export let active;

    function setFavorite() {
        console.log(active);
        active = !active;
        console.log(active);
    }
</script>

<style>
svg,
svg path {
    transition: 300ms ease-in-out;
}
button, button:focus, button:active {
    outline: 0;
}
button:hover svg {
    transform: scale(1.1);
}
</style>

<button
    class="absolute top-0 right-0"
    on:click={setFavorite}>
    <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16">
        <g class="shifted">
            <g fill="none" fill-rule="evenodd" stroke="none">
                <path fill="none" d="M29.211,2.41181818 C27.7174545,0.918272727 25.732,0.0960909091 23.6205455,0.0960909091 C21.5084545,0.0960909091 19.523,0.918272727 18.0288182,2.41181818 L15.9090909,4.53218182 L13.7880909,2.41181818 C12.2945455,0.918272727 10.3090909,0.0960909091 8.19763636,0.0960909091 C6.08554545,0.0960909091 4.10009091,0.918272727 2.60654545,2.41181818 C-0.476,5.49436364 -0.476,10.5101818 2.60654545,13.5933636 L15.4585455,26.4453636 C15.5826364,26.5694545 15.7455455,26.6318182 15.9084545,26.6318182 C16.0713636,26.6318182 16.2342727,26.5694545 16.3583636,26.4453636 L29.2103636,13.5933636 C32.2935455,10.5101818 32.2935455,5.49436364 29.211,2.41181818 L29.211,2.41181818 Z" transform="translate(19.09 21.636)" stroke="none" class={!active ? 'fill-current text-teal-500' : 'fill-current text-red-400'}></path>
            </g>
        </g>
    </svg>
</button>