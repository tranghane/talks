import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controlers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//run protectRoute first, if run successfully, run sendMessage (see protectRoute implement)
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
