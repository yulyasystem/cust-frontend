import { get } from "$lib/api/base";

export const getTestData = (filter, headers) => {
	return get("/products/", filter, headers);
};

export const getSlug = (slug, filter, headers) => {
	return get(`/${slug}`, filter, headers);
};