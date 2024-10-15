import express from "express";
import { sendMessage } from "../controller/MessageController.js";
import e from "express";

const router=express.Router();

router.post('/send',sendMessage);

export default router;