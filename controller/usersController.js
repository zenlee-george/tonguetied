import {getUsersDb, getUserDb, insertUserDb, deleteUserDb, updateUserDB,findUserByEmail} from '../model/usersDb.js'
import {hash} from 'bcrypt'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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
const loginUser = async (req, res) => {
    const { emailAdd, password } = req.body;
    try {
      const normalizedEmail = emailAdd.toLowerCase();
      const user = await findUserByEmail(normalizedEmail);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const isMatch = await bcrypt.compare(password, user.userPass);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      const token = jwt.sign(
        { emailAdd: user.emailAdd, userRole: user.userRole },
        process.env.SECRET_KEY,
        { expiresIn: '1h' }
      );
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'None',
        maxAge: 60 * 60 * 1000 // 1 hour
      });
      res.status(200).json({ message: 'Login successful',token: token, userID: user.userID });
    } catch (error) {
      console.error('Login Error:', error);
      res.status(500).json({ message: 'Error logging in', error: error.message });
    }
  };
  const registerUser = async (req, res) => {
    const { firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(userPass, 10);
      const role = userRole === 'admin' ? 'admin' : 'user';
      await insertUserDb(firstName, lastName, userAge, Gender, role, emailAdd, hashedPassword, userProfile);
      const token = jwt.sign({ emailAdd, userRole: role }, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
      console.error('Error registering user:', error.message);
      res.status(500).json({ message: 'Error registering user', error: error.message });
    }
  };
  
    
export {getUsers, getUser, insertUser, deleteUser, updateUser,loginUser,registerUser}