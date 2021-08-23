import { Router } from "express";
import productRouter from "./products.routes";
import userRouter from "./users.routes"


const router = Router();
router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;