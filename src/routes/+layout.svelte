<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>DoughCulator</title>
	<meta name="description" content="DoughCulator — formula, timing, and schedule for your sourdough bake" />
</svelte:head>

{@render children()}
