import express from 'express'
import {getProducts, getProduct, insertProduct, deleteProduct, updateProduct,} from '../controller/productController.js'
// import {authMiddleware} from '../middleware/authenticate.js'
const router = express.Router()

router.post('/cart,verifyAToken,addToCart')
router.
    route('/')
        .get(getProducts)
        .post(insertProduct)
router. 
    route('/:prodID')
        .get(getProduct)
        .put(updateProduct)
        .delete(deleteProduct)
    export default router