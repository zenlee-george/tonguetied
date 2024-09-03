import {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB} from '../model/usersDb.js'
import {hash} from 'bcrypt'
const getUsers = async(req,res)=>{
    res.json(await getUsersDb())
}
const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.userID))
}
const insertUser = async(req,res)=>{
    let {firstName,lastName,userAge,Gender,userRole,emailAdd, userProfile,userPass} =req.body
    let hashedP = await hash(userPass,10)
        console.log(hashedP);
        await insertUserDb(firstName,lastName,userAge,Gender,userRole,emailAdd,hashedP, userProfile)
        res.send('Data was inserted successfully')
    }
    
const deleteUser = async(req,res)=>{
    await deleteUserDb(req.params.userID)
    res.send('User has been deleted')
}
const updateUser = async(req,res)=>{
    let {firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile} = req.body
    let user = await getUserDb(req.params.userID)
    firstName ? firstName=firstName: firstName = user.firstName
    lastName ? lastName=lastName: lastName = user.lastName
    userAge ? userAge=userAge: userAge = user.userAge
    Gender ? Gender=Gender: Gender = user.Gender
    userRole ? userRole=userRole: userRole = user.userRole
    emailAdd ? emailAdd=emailAdd: emailAdd = user.emailAdd
    userPass ? userPass=userPass: userPass = user.userPass
    userProfile ? userProfile=userProfile: userProfile = user.userProfile
    await updateUserDB(req.params.userID,firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile)
    res.send('Update was successful')
}
const loginUser = (req,res)=>{
    res.json({message:"You have signed in! !",token:req.body.token})
}
export {getUsers, getUser, insertUser, deleteUser, updateUser,loginUser}