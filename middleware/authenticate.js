import {compare} from 'bcrypt';
import { getUserDb } from '../model/usersDb.js';
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

const authMiddleware = (req,res, next ) => {
  const token = req.cookies.jwt;

  if(!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided'});
  }
  try{
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token', error: error.message});
  }
}

const verifyAToken = (roles = []) => {
  return async (req, res, next) => {
      try {
          // Get token from Authorization header
          const authHeader = req.headers.authorization;
          if (!authHeader) {
              return res.status(401).json({ message: 'No token provided' });
          }
          // Extract token from the header
          const token = authHeader.split(' ')[1]; // 'Bearer <token>'
          if (!token) {
              return res.status(401).json({ message: 'No token provided' });
          }
          // Verify token
          const decoded = await jwt.verify(token, process.env.SECRET_KEY);
          // Attach decoded token to request object
          req.user = decoded;
          // Check if user role is authorized
          if (roles.length && !roles.includes(decoded.userRole)) {
              return res.status(403).json({ message: 'Access denied' });
          }
          // Proceed to next middleware or route handler
          next();
      } catch (err) {
          // Handle verification errors
          res.status(403).json({ message: 'Token is invalid or has expired' });
      }
  };
};

const generateToken = (user) => {
  const payload = {
      emailAdd: user.email,
      userRole: user.userRole // Add userRole to the payload
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });
  return token;
};

function adminMiddleware(req, res, next) {
  console.log('User:', req.user); // Log user object
  if (req.user && req.user.userRole === 'admin') {
    return next();
  } else {
    return res.status(403).json({ message: 'Forbidden: Admin access only' });
  }
}

export {authMiddleware,verifyAToken,generateToken,adminMiddleware}