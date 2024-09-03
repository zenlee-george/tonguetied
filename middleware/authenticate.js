import {compare} from 'bcrypt';
import { getUserDb } from '../model/usersDb.js';
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()


const checkUser = async(req,res,next)=>{
    const {emailAdd,password} = req.body;
    let hashedPassword = (await getUserDb(emailAdd)).password
    
    
    let result = await compare(password,hashedPassword)
        if(result==true){
            let token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1h'})
            req.body.token = token
            // console.log(token);
            
            next()
        }else{
        res.send('Password incorrect')
        }
    }

const verifyAToken = (req,res,next)=>{
    let {cookie} = req.headers
    // checks if token exists first


    let token = cookie && cookie.split('=')[1]
    // console.log(token);
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded) =>{
        if(err){
            res.json({message:'Token has expired'})
            return
        }
        req.body.user = decoded.emailAdd
        console.log(decoded);
        
    })
     next()
}

const checkAdmin = async (req, res, next) => {
    try {
      const { userID } = req.body; // Assume admin's userID is sent in the body or fetched from a token
      // Fetch user from the database (assuming you have a function to get user by ID)
      const user = await getUserById(userID); // Adjust function as needed
      if (user && user.userRole === 'admin') {
        next(); // User is admin, proceed to the registration route
      } else {
        res.status(403).json({ message: 'Only admins can add new users' });
      }
    } catch (error) {
      console.error('Error checking admin status:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
export {checkUser,verifyAToken, checkAdmin}