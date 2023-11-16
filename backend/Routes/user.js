import express from 'express'
import { updateUser, deletUser, getSingleUser, getAllUser } from "../Controllers/userController.js";
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', authenticate, restrict(['patient']), getSingleUser)
router.get('/', restrict(['admin']), getAllUser)
router.put('/:id', restrict(['patient']), updateUser)
router.delete('/:id', restrict(['patient']), deletUser)

export default router;