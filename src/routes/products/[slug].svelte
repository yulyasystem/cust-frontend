<script context="module">
	import { getSlug } from '$lib/api/getFunctions';
	import stripe from '$lib/stripe.png';
	import Tag from '$lib/Tag.svelte';

	export const prerender = false;

	export async function load({
		page: {
			params: { slug }
		}
	}) {
		const response = await getSlug(slug);
		if (response.error) return { error: response.error };
		return { props: { data: JSON.parse(response) } };
	}
</script>

<script>
	export let data;

	const tags = [
		{ name: 'Апсайкл', color: '#A27CCA' },
		{ name: 'Унісекс', color: '#F4C467' }
	];
</script>

<div class="productDetails">
	<img
		class="image"
		src={data.image + '-/resize/800x/-/quality/smart/-/progressive/yes/'}
		alt={data.name}
	/>
	<img
		class="image"
		src={data.image + '-/resize/800x/-/quality/smart/-/progressive/yes/'}
		alt={data.name}
	/>
	<div class="details">
		<h3>{data.name}</h3>
		{#each tags as { name, color }}
			<Tag {name} {color} />
		{/each}
		<p>{data.description}</p>
		<p class="size">Розмір: XL</p>
        <p class="link">Таблиця розмірів</p>
        <p class="link">Деталі доставки</p>
        <div class="priceText">
            <p>Додати у кошик за <span class="price">{data.price}₴</span></p>
        </div>
	</div>
</div>

<style>
	.productDetails {
		display: flex;
		padding: 80px 75px;
		letter-spacing: -0.03em;
	}
	.image {
		max-width: 495px;
		margin-right: 20px;
        border: 1px solid #000;
	}
	h3 {
		font-size: 60px;
		font-weight: 500;
		margin: 0;
	}
	p {
		color: #696871;
	}
    .size {
        margin-top: 10px;
    }
    .link {
        text-decoration: underline;
        margin: 5px;
    }
    .priceText p {
        font-size: 20px;
        color:#000;
        font-weight: 500;
    }

    .price {
        font-size: 40px;
    }

</style>
