import { pool } from "../config/config.js";

const getUsersDb = async ()=>{
    let [data] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.users')
    return data
}
const getUserDb = async (userID) =>{
    let [[data]] = await pool.query('SELECT * FROM b7nbxqhkydsryvtfze9o.users WHERE userID = ?',[userID])
    return data
}
const insertUserDb = async(firstName,lastName,userAge,Gender,userRole,emailAdd,userPass, userProfile) =>{
    await pool.query(`
        INSERT INTO users
        (firstName,lastName,userAge,Gender,userRole,emailAdd,userPass, userProfile)
        VALUES (?,?,?,?,?,?,?,?)
        `,[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass, userProfile])
}
const deleteUserDb = async(userID) =>{
    await pool.query('DELETE FROM b7nbxqhkydsryvtfze9o.users WHERE userID = ?', [userID])
}
const updateUserDB = async (userID,firstName,lastName,userAge,Gender,userRole,emailAdd,userPass, userProfile)=>{
    await pool.query('UPDATE b7nbxqhkydsryvtfze9o.users SET firstName = ?,lastName = ?, userAge = ?,Gender = ?,userRole = ?, emailAdd = ?,userPass = ? ,userProfile = ? WHERE userID = ?',[firstName,lastName,userAge,Gender,userRole,emailAdd,userPass, userProfile,userID]
    )
}
// console.log(await insertUser('Matthew','23','purple','gatsby'))
console.log(await getUsersDb());
// console.log(await getUser(1));
export {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB}







