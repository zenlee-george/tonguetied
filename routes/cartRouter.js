import express from 'express';
import {getCartItems, getCartItemID, addCartItem, editCartItem, deleteItems, deleteItem} from '../controller/cartController.js';
import {authMiddleware} from '../middleware/authenticate.js'

const router = express.Router();
router.use(authMiddleware)

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
