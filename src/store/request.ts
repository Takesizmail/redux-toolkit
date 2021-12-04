
type Method = "GET" | "DELETE" | "POST" | "PUT" | "PATCH";

const API = 'http://173.212.193.40:5486/';

const getBaseOptions = (method: string, customOption: any) => {
	let options: any = {
		headers: {
			accept: "application/json",
			"content-Type": "application/json",
		},
		...customOption
	};

	options.method = method;

	return options;
}

const  getPathWithQueryString = (path: string, params: any = {}): string => {
	const esc = encodeURIComponent;
	const query = Object.keys(params)
		.filter((k) => params[k])
		.map((k) => `${esc(k)}=${esc(params[k])}`)
		.join("&");
	return query ? `${path}?${query}` : path;
}

const getRequestUrl = (api: string, path: string): string => {
	return `${api}/${path}`;
};

const base: Function = async (
	path: string,
	method: Method,
	customOptions: any,
) => {
	let options: any = getBaseOptions(method, customOptions);

	return fetch(getRequestUrl(API!, path), options)
		.then(async (response) => {
			if (response.ok) {
				return response?.json();
			}
			return response;
		})
		.catch((err) => {
			console.log(err);
		});
};

const request = {
	get: (path: string, params?: any) => {
		const pathWithParams = getPathWithQueryString(path, params);
		return base(pathWithParams, "GET", {});
	},
	delete: (path: string, params?: any) => {
		const pathWithParams = getPathWithQueryString(path, params);
		return base(pathWithParams, "DELETE", {});
	},
	post: (path: string, params?: any) => {
		const options = { body: JSON.stringify(params) };
		return base(path, "POST", options);
	},
	put: (path: string, params?: any) => {
		const options = { body: JSON.stringify(params) };
		return base(path, "PUT", options);
	},
	patch: (path: string, params?: any) => {
		const options = { body: JSON.stringify(params) };
		return base(path, "PATCH", options);
	},
};

export default request;
