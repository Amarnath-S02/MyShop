import {register} from "../controller/user.auth.controller.js";


import express from "express";

const router=express.Router();


router.post('/register',register);

export default router;