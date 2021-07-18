<script>
	export let data;
	export let shifted;
	export let creator;

	export function showAfterLoaded(node) {
		if (node.complete) {
			node.classList.remove('loading');
		} else {
			node.addEventListener('load', onLoadComplete);
		}

		function onLoadComplete() {
			node.classList.remove('loading');
		}

		return {
			destroy() {
				node.removeEventListener('load', onLoadComplete);
			}
		};
	}
</script>

<div class="card" class:shifted>
	<a
		class="reset-link to-product non-text"
		href={creator ? '#' : '/products/' + data.slug}
		style="background-color: rgb({data.color});"
	>
		<img
			class="loading"
			use:showAfterLoaded
			src={data.image + '-/resize/800x/-/quality/smart/-/progressive/yes/'}
			alt={data.name}
		/>
	</a>
	<button class="info">
		<span class="name">{data.name || data.username}</span>
		<span class="descr">{data.description}</span>
		{#if creator}
			<b>Подивитись роботи →</b>
		{:else}
			<b>Додати до кошику за <span class="price">{data.price}₴</span></b>
		{/if}
	</button>
</div>

<style>
	.card {
		width: calc(33.33% - 10px);
	}
	.card.shifted {
		max-width: 500px;
		width: 100%;
	}

	a.to-product {
		z-index: 1;
		display: block;
		border: 1px solid black;
		cursor: url("data:image/svg+xml,%3Csvg width='65' height='65' viewBox='0 0 65 65' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32.5' cy='32.5' r='32' stroke='%2383BF03'/%3E%3Cpath d='M13.2363 45.7304C20.3583 38.7034 28.4758 33.778 36.8755 28.4582C39.7353 26.647 42.0694 24.2867 44.8343 22.3283C48.5317 19.7092 47.5619 19.1946 43.3102 19.856C39.3057 20.4789 35.3131 21.1834 31.2536 21.3123C28.3514 21.4044 25.084 20.9038 22.245 21.6509C13.4182 23.9738 40.216 17.3942 49.3386 17.6885C50.2109 17.7166 46.9224 30.7741 46.6292 32.1836C45.9129 35.6275 46.3258 41.5119 44.3262 44.5112' stroke='%2383BF03' stroke-linecap='round'/%3E%3C/svg%3E%0A")
				32 32,
			pointer;
	}

	img {
		object-fit: cover;
		aspect-ratio: 1;
		background-color: white;
		opacity: 1;
		transition: opacity 500ms;
	}

	.loading {
		opacity: 0;
	}

	.info {
		text-align: left;
		display: block;
		width: 100%;
		background: #fff;
		border: 1px solid black;
		padding: 10px;
		box-shadow: 0 20px 40px #197a973b;
		transform: translateY(-50%) scale(0.9);
		transition: all 350ms;
	}
	.info:hover {
		background-color: black;
		color: white;
		transition: all 100ms;
		cursor: pointer;
	}
	.name,
	.descr {
		display: block;
	}
	.name {
		margin: 0;
		margin-left: -0.05em;
		margin-bottom: 5px;
		font-size: 40px;
		font-weight: 500;
		line-height: 0.8;
	}
	.descr {
		margin: 0;
		margin-bottom: 10px;
	}
	b {
		width: 100%;
		display: block;
		text-align: right;
		font-weight: 500;
	}
	.price {
		font-size: 35px;
		font-weight: 600;
	}

	.shifted .info {
		transform: translate(70px, -50%) scale(0.9);
	}
</style>
