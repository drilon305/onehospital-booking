import express from 'express'
import { updateUser, deleteUser, getSingleUser, getAllUser, getUserProfile, getMyAppoinments } from "../Controllers/userController.js";
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', authenticate, restrict(['patient']), getSingleUser)
router.get('/', restrict(['admin']), getAllUser)
router.put('/:id', restrict(['patient']), updateUser)
router.delete('/:id', restrict(['patient']), deleteUser)
router.get('/profile/me', restrict(['patient']), getUserProfile)
router.get('/appoinments/my-appoinments', restrict(['patient']), getMyAppoinments)

export default router;