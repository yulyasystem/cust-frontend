import { get } from "$lib/api/base";

export const getTestData = (filter, headers) => {
	return get("/test/", filter, headers);
};