import express from 'express';
import {getCartItems, getCartItemID, addCartItem, editCartItem, deleteItems, deleteItem} from '../controller/cartController.js';

const router = express.Router();

router.
    route('/:userID/carts')
        .get(getCartItems)
        .post(addCartItem)
        .delete(deleteItems)

router.
    route('/:userID/carts/:cartID')
        .get(getCartItemID)
        .patch(editCartItem)
        .delete(deleteItem)

export default router;
