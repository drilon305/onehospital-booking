import express from 'express'
import { updateUser, deletUser, getSingleUser, getAllUser } from "../Controllers/userController.js";

const router = express.Router();

router.get('/:id', getSingleUser)
router.get('/', getAllUser)
router.put('/:id', updateUser)
router.delete('/:id', deletUser)

export default router;