import express from "express";
import { sendMessage } from "../controllers/message.controlers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//run protectRoute first, if run successfully, run sendMessage (see protectRoute implement)
router.post("/send/:id", protectRoute, sendMessage)

export default router;