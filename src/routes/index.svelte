<script context="module">
	import { getTestData } from '$lib/api/getFunctions';
	import stripe from '$lib/stripe.png';

	import Card from '$lib/Card.svelte';
	import Decoration from '$lib/Decoration.svelte';

	export const prerender = false;

	export async function load() {
		const response = await getTestData();
		if (response.error) return { error: response.error };

		return { props: { testData: response } };
	}
</script>

<script>
	export let testData;

	let [firstItem, ...restItems] = JSON.parse(testData);
</script>

<svelte:head>
	<title>Cust – місце унікальних речей | Головна</title>
</svelte:head>

<section class="lead has-max-width">
	<div class="left">
		<h1>Місце унікальних речей</h1>
		<div class="subinfo">
			<a href="/upcycle" class="reset-link know-more">Дізнатись більше</a>
			<p>Платформа для митців кастомного одягу та аксесуарів, з акцентом на апсайкл</p>
		</div>
	</div>
	<div class="right">
		<div class="center">
			<Decoration rays />
			<Card shifted data={firstItem} />
		</div>
	</div>
</section>

<section class="products has-max-width">
	<header>
		<h2>ТОВАРИ <img class="stripe" src={stripe} alt="decorative stripe" /></h2>
		<div class="filters">СКОРО МИ ДОДАМО СЮДИ ФІЛЬТРИ</div>
	</header>
	<div class="cards">
		{#each restItems as item}
			<Card data={item} />
		{/each}
	</div>
</section>

<style>
	.lead {
		display: flex;
		flex: 1;
		margin-top: 100px;
	}

	.left {
		width: 40%;
	}

	.right {
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.center {
		width: 100%;
		max-width: 500px;
		position: relative;
	}

	/* .center :global(.rays) {
		animation: backwards rays-fade-in 2s cubic-bezier(0.215, 0.61, 0.355, 1);
	} */
	.center :global(.card .to-product) {
		animation: backwards img-fade-in 2s 1500ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.center :global(.card .info) {
		animation: backwards info-fade-in 2s 1800ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	h1 {
		font-size: 100px;
		margin-top: -10px;
		margin-bottom: 30px;
		font-weight: 600;
		line-height: 0.9;
		letter-spacing: -0.03em;
		animation: backwards fade-in 1s 700ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.subinfo {
		display: flex;
		align-items: flex-end;
	}

	.subinfo a.know-more {
		flex-shrink: 0;
		background-color: black;
		padding: 15px 25px;
		color: white;
		border-radius: 15px;
		margin-right: 55px;
		animation: backwards fade-in 1s 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	.subinfo p {
		margin: 0;
		font-size: 20px;
		opacity: 0.5;
		max-width: 370px;
		animation: backwards fade-in 1s 1100ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.products header {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		width: 100%;
	}
	h2 {
		font-size: 60px;
		margin: 0;
		font-weight: 600;
		position: relative;
		letter-spacing: -0.03em;
	}
	h2 img.stripe {
		position: absolute;
		right: 0;
		top: 50%;
		width: 170px;
		transform: translate(50%, -50%);
		z-index: -1;
	}
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 30px;
	}

	@keyframes img-fade-in {
		from {
			opacity: 0;
			transform: translateY(50px);
		}
	}

	@keyframes info-fade-in {
		from {
			opacity: 0;
			transform: translate(70px, -70%) scale(0.9);
		}
	}

	@keyframes rays-fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
	}
</style>
