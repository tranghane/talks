import express from 'express';
import { login, logout, signup } from '../controllers/auth.controllers.js';

const router = express.Router();


//whenever reach each rout, run the corresponding function
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

export default router;