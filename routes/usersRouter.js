import express from 'express'
import {getUsers, getUser, insertUser, deleteUser, updateUser,loginUser, registerUser} from '../controller/usersController.js'
import { adminMiddleware } from '../middleware/authenticate.js'
const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.
    route('/')
        .get(getUsers)
        .post(adminMiddleware,insertUser)

router.
    route('/:userID')
        .get(getUser)
        .delete(deleteUser)
        .patch(adminMiddleware,updateUser)
export default router