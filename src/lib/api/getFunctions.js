import { get } from "$lib/api/base";

export const getCreators = () => {
	return get("/authors/");
}

export const getProducts = () => {
	return get("/products/");
}

export const getSlug = (slug, filter, headers) => {
	return get(`/${slug}`, filter, headers);
};