<script>
	import Router, { push } from 'svelte-spa-router';
	import routes from './routes';

	import Nav from './components/Nav.svelte';
</script>

<div class="relative top-0 left-0 h-full w-1/4 mr-12 xl:mr-24"></div>
<Nav />
<Router {routes} />
