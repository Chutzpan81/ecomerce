const express = require('express');
const router = express.Router();
const ProductsService = require('../../services/products');
const productsService = new ProductsService();

router.get('/',async function(req,res,next){
    const { tags } = req.query;
    console.log('req', req);
    try{
        const products = await productsService.getProducts({ tags });
        res.status(200).json({
            data: products,
            message:'products listed'
        });
    }catch(err){
        next(err);
    }
});

router.get('/:productId',async function(req,res,next){
    const { productId } = req.params;
    console.log("req", req.params);
    try{
        const products = await productsService.getProduct({ productId });
        res.status(200).json({
            data: products,
            message:'products retrived'
        });
    }catch(err){
        next(err);
    }
})


router.post('/',async function(req,res,next){
    const { body:product } = req;
    console.log("req", req);
    try{
        const createProduct = await productsService.createProduct({ product });
        res.status(201).json({
            data: createProduct,
            message:'products listed'
        });
    }catch(err){
        next(err);
    }
})

router.put('/:productId',async function(req,res,next){
    const { productId } = req.params;
    const { body:product } = req;
    console.log("req", req.params);
    try{
        const updateProduct = await productsService.updateProduct({ productId,product });
        res.status(200).json({
            data: updateProduct,
            message:'products update'
        });
    }catch(err){
        next(err);
    }
});

router.delete('/:productId',async function(req,res,next){
    const { productId } = req.params;
    const deleteProduct = await productsService.deleteProduct({ productId });
    console.log("req", req.params);
    try{
        res.status(200).json({
            data: deleteProduct,
            message:'products delete'
        });
    }catch(err){
        next(err);
    }
});

module.exports = router;