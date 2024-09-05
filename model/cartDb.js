import { pool } from "../config/config.js";

const getAllCartItems = async () => {
    let [cartItems] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.cart');
    return cartItems;
};

const getCartItem = async (userID, cartID) => {
    let [cartItem] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.cart WHERE userID = ? AND cartID = ?', [userID, cartID]);
    return cartItem
};

const createCartItem = async (userID, prodID) => {
    await pool.query(`INSERT INTO b7nbxqhkydsryvtfze9o.cart (userID, prodID)
        VALUES (?, ?)`, [userID, prodID]);
};

const updateCartItem = async (userID, cartID, prodID) => {
    await pool.query(`UPDATE b7nbxqhkydsryvtfze9o.cart SET prodID =? WHERE userID = ? AND cartID = ?`,[prodID,userID,cartID]);
};

const deleteAllUserCartItems = async (userID) => {
    await pool.query('DELETE FROM b7nbxqhkydsryvtfze9o.cart WHERE userID = ?', [userID]);
}

const deleteCartItem = async (userID, cartID) => {
    await pool.query('DELETE FROM b7nbxqhkydsryvtfze9o.cart WHERE userID = ? AND cartID = ?', [userID, cartID]);
};

export {getAllCartItems, getCartItem, createCartItem, updateCartItem, deleteAllUserCartItems, deleteCartItem}