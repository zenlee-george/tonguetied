import { pool } from "../config/config.js";
const getProductsDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.products')
    return data
}
const getProductDb = async (prodID) =>{
    let [[data]] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.products WHERE prodID = ?',[prodID])
    return data
}
const insertProductDb = async(prodID,prodName,quantity,description,amount,category,prodUrl) =>{
    await pool.query(`
        INSERT INTO b7nbxqhkydsryvtfze9o.products
        (prodID,prodName,quantity,description,amount,category,prodUrl)
        VALUES (?,?,?,?,?,?,?)
        `,[prodID,prodName,quantity,description,amount,category,prodUrl]) 
}
const deleteProductDb = async(prodID) =>{
    await pool.query('DELETE FROM b7nbxqhkydsryvtfze9o.products WHERE prodID = ?', [prodID])
}
const updateProductDb = async (prodID,prodName,quantity,description,amount,category,prodUrl)=>{
    await pool.query('UPDATE b7nbxqhkydsryvtfze9o.products SET prodName = ?, quantity = ?, description = ?, amount = ?,category = ?,prodUrl = ?   WHERE prodID = ?',[prodName,quantity,description,amount,category,prodUrl,prodID]
    )
}


export {getProductsDb, getProductDb, insertProductDb, deleteProductDb, updateProductDb,}
