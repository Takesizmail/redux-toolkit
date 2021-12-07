import { RequestQueryBuilder } from '@nestjsx/crud-request'

type Method = "GET" | "DELETE" | "POST" | "PUT" | "PATCH";

/**
 * Move to .env file
 */
const API = 'http://localhost:3000/api';

const getBaseOptions = (method: string, customOptions = {}) => {
	let options = {
		method,
		headers: { 'Content-Type': 'application/json' }
	};

	return Object.assign(options, customOptions);
}

const getPathWithQueryString = (path: string, params: any = {}): string => {
	/**
	 * Find more scalable decision
	 */
	const search = params?.s 
		? { search: { symbol: { $contL: params.s } } } 
		: {}

	const query = RequestQueryBuilder
		.create({ ...params, ...search })
		.query()

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

	return fetch(getRequestUrl(API, path), options)
		.then(async (response) => {
			if (response.ok) {
				return response?.json();
			}
			return response;
		})
		.catch((err) => {
			console.log(err);
			throw new Error(err)
		});
};

const request = {
	get: (path: string, params?: any) => {
		const pathWithParams = getPathWithQueryString(path, params);
		console.log(pathWithParams)
		return base(pathWithParams, "GET", {});
	},
	delete: (path: string) => {
		return base(path, "DELETE", {});
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
