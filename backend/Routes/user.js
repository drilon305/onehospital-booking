import express from 'express'
import { updateUser, deletUser, getSingleUser, getAllUser } from "../Controllers/userController.js";
import { authenticate } from '../auth/verifyTokem.js';

const router = express.Router();

router.get('/:id', authenticate, getSingleUser)
router.get('/', getAllUser)
router.put('/:id', updateUser)
router.delete('/:id', deletUser)

export default router;