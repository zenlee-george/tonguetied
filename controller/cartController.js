import {getAllCartItems, getCartItem, createCartItem, updateCartItem, deleteAllUserCartItems, deleteCartItem} from '../model/cartDb.js'
import {hash} from 'bcrypt'
const getCartItems = async(req,res)=>{
    res.json(await getAllCartItems())
}
const getCartItemID = async(req,res)=>{
    res.json(await getCartItem(req.params.userID,req.params.cartID))
}
const addCartItem = async(req,res)=>{
    let {prodID} =req.body
        await createCartItem(req.params.userID,prodID)
        res.send('Item was inserted successfully')
    }
    
const deleteItems = async(req,res)=>{
    await deleteAllUserCartItems(req.params.userID)
    res.send('All items have been deleted')
}
const deleteItem = async(req,res)=>{
    await deleteCartItem(req.params.userID,req.params.cartID)
    res.send('Item has been deleted')
}
const editCartItem = async (req,res) => {
    const existingCartItem = await getCartItem(req.params.userID, req.params.cartID);
    const { prodID } = req.body;
    const updatedProdID = prodID || existingCartItem.prodID;
    await updateCartItem(req.params.userID, req.params.cartID, updatedProdID);
    res.send('Item has been updated succesfully')
};
// const loginUser = (req,res)=>{
//     res.json({message:"You have signed in! !",token:req.body.token})
// }
export {getCartItems, getCartItemID, addCartItem, deleteItems, deleteItem, editCartItem}