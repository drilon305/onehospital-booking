import express from 'express'
import { updateDoctor, deletDoctor, getSingleDoctor, getAllDoctor } from "../Controllers/doctorController.js";
import { authenticate, restrict } from '../auth/verifyToken.js';

const router = express.Router();

router.get('/:id', getSingleDoctor)
router.get('/', getAllDoctor)
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor)
router.delete('/:id', authenticate, restrict(['doctor']), deletDoctor)

export default router;