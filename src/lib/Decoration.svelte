<script>
	import shineDecor from './shine-decor.svg';

	export let rays;
</script>

{#if rays}
	<img class="rays" src={shineDecor} alt="decor-lines" />
{/if}

<style>
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		z-index: -1;
	}
	.rays {
		transform: scale(2) translateY(-3%);
		/* animation: rays-rotate 10s both infinite; */
		/* animation-timing-function: steps(7, end); */
	}

	/* @keyframes rays-rotate {
		from {
			transform: rotate(500deg) scale(2) translateY(-3%);
		}
	} */
</style>
