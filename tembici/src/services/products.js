import axios from 'axios'

const PRODUCTS_URL = "https://private-3efa8-products123.apiary-mock.com/products";

export async function getProducts(){
    const products = await axios.get(PRODUCTS_URL).then((response) => { 
        return response.data.products
    })
    return products;
}