import  express, { Router } from "express";
import { AddMeme, getMeme,getAllMeme, deleteMeme, updateMeme } from "../controllers/MemeController.js";
import { authenticate,checkRole } from "../middlewares/authMidellware.js";
const router = express.Router();

router.post('/add',AddMeme);
router.get('/get/:id',getMeme)
router.delete("/delete", deleteMeme);
router.put("/edit", updateMeme);
router.get('/get',authenticate,checkRole(['chef','admin']),getAllMeme)


export default router 