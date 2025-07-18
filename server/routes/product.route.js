import { getData ,addProduct,getAllProducts} from "../controller/product.controller.js";
import express, { Router } from "express";

const router=express.Router();


router.get('/all',getAllProducts);
router.get('/:name',getData)
router.post('/', addProduct); // ✅ This maps to POST /api/product


export default router;