/**
 * ========================================
 * File:        router.js
 * Description: Defining All the Name of the router and adding event handler to it.
 * Created:     2025-07-16
 * ========================================
 */

const express=require('express');
const commonRouter=express.Router();
const productController=require('../controller/productController');

commonRouter.get('CA/getProducts',productController.getAllProduct);



module.exports = commonRouter;