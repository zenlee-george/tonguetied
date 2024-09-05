import {getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb,} from '../model/productDb.js'
import { getUserDb } from '../model/usersDb.js'

 const getProducts = async(req,res)=>{
    res.json(await getProductsDb())
}
const getProduct = async(req,res)=>{
    res.json(await getProductDb(req.params.prodID))
}
const insertProduct = async(req,res)=>{
    let {prodID,prodName,quantity,description,amount,category,prodUrl} =req.body
    
    await insertProductDb(prodID,prodName,quantity,description,amount,category,prodUrl)
    res.send('Product was inserted successfully')
}
const deleteProduct = async(req,res)=>{
    await deleteProductDb(req.params.prodID)
    res.send('Product has been deleted')
}
const updateProduct = async(req,res)=>{
    let {prodName,quantity,description,amount,category,prodUrl} = req.body
    let product = await getProductDb(req.params.prodID)
    prodName ? prodName=prodName: prodName = product.prodName
    quantity ? quantity=quantity: quantity = product.quantity
    description ? description=description: description = product.description
    amount ? amount=amount: amount = product.amount
    category ? category=category: category = product.category
    prodUrl ? prodUrl=prodUrl: prodUrl = product.prodUrl
    await updateProductDb(req.params.prodID,prodName,quantity,description,amount,category,prodUrl)
    res.send('Update Product was successful')
}

const addToCart = async (req,res)=>{
    console.log(req.body);
    let {prodID} = await getUserDb(req.body.user)
    console.log(prodID);
    

    // await addToCartDB(req.body.id,id)
    res.json({message:"You've added an item to cart"})
    
}
export {getProducts, getProduct, insertProduct, deleteProduct, updateProduct,addToCart}







