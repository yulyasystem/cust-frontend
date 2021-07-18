import { get } from "$lib/api/base";

export const getCreators = () => {
	return get("/authors/");
}

export const getProducts = () => {
	return get("/products/");
};