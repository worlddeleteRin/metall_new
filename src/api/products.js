import axios from 'axios';

const api_host = 'http://192.168.1.107:8000'

export async function APIgetCatalogueProducts (pr_params) {
	var products_data = null;
	await axios.get(
	api_host + 
	'/products',
	{ params: pr_params.query},
    ).then((response) => {
		var resp_data  = response.data
		// var response_status = resp_data.status
		products_data = resp_data["data"]
    })
	return products_data 
}

export async function APIgetProductById (pr_id) {
	var product_data = null;
	await axios.get(
	api_host + 
	'/product/' + pr_id,
    ).then((response) => {
		var resp_data  = response.data
		// var response_status = resp_data.status
		product_data = resp_data["data"]
    })
	return product_data 
}
