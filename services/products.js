const productMocks = require('../utils/moks/products');

class ProductsService {
    constructor(){}

    getProducts({tags}){
        return Promise.resolve(productMocks);
    }

    getProduct({productId}){
        return Promise.resolve(productMocks[0]);
    }

    createProduct({product}){
        return Promise.resolve(productMocks[0]);
    }

    updateProduct({productId,product}){
        return Promise.resolve(productMocks[0]);
    }

    deleteProduct({productId}){
        return Promise.resolve(productMocks[0]);
    }


}

module.exports = ProductsService;