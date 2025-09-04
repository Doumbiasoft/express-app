import { Router } from "express";
import { getForm, getHome, postForm } from "../controllers/appController";
import { catchAsync } from "../utils/catchAsync";
const router = Router();

router.get("/home/:firstName", catchAsync(getHome));
router.get("/form", catchAsync(getForm));
router.post("/form", catchAsync(postForm));

export default router;
