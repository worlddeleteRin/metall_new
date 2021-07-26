import axios from 'axios';

const api_host = 'http://192.168.1.145:8000'

export async function getCatalogueProducts () {
	var products_data = null;
	await axios.get(
	api_host + 
	'/products',
    ).then((response) => {
        var products = response.data.products
		products_data = products
    })
	return products_data
}
