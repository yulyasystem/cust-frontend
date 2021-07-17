import { browser } from "$app/env";

const browserBaseURL = "https://cust-backend.herokuapp.com";
const serverBaseURL = "https://cust-backend.herokuapp.com";

const base = `${browser ? browserBaseURL : serverBaseURL}/api`;

async function send({ method, path, data, params, headers = { cookie: "" } }) {
	const opts = {
		method,
		headers: {
			"Content-Type": "application/json",
			accept: "application/json",
			cookie: headers.cookie,
		},
	};
	const url = new URL(`${base}${path}`);

	if (params) {
		Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
	}
	if (data) {
		opts.body = JSON.stringify(data);
	}

	const fetch =
		typeof window !== "undefined"
			? window.fetch
			: await import("node-fetch").then((mod) => mod.default);

	return fetch(url, opts)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
}

export function get(path, params, headers) {
	return send({ method: "GET", path, params, headers });
}

export function del(path, headers) {
	return send({ method: "DELETE", path, headers });
}

export function post(path, data, headers) {
	return send({ method: "POST", path, data, headers });
}

export function put(path, data, headers) {
	return send({ method: "PUT", path, data, headers });
}

function getCookie(name, cookieString) {
	try {
		if (typeof document !== "object" && typeof cookieString !== "string") return;

		let matches = (cookieString || document.cookie).match(
			new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)")
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	} catch (e) {}
}