import express from 'express';
import {getCartItems, getCartItemID, addCartItem, editCartItem, deleteItems, deleteItem} from '../controller/cartController.js';
import {authMiddleware} from '../middleware/authenticate.js'

const router = express.Router();

router.
    route('/:userID/carts')
        .get(authMiddleware,getCartItems)
        .post(authMiddleware,addCartItem)
        .delete(authMiddleware,deleteItems)

router.
    route('/:userID/carts/:cartID')
        .get(authMiddleware,getCartItemID)
        .patch(authMiddleware,editCartItem)
        .delete(authMiddleware,deleteItem)

export default router;
