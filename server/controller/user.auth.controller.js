import { User } from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

export const register=async(req,res)=>{
   try{
      const{username,email,password,confirmPassword}=req.body;

      if(!username || !email || !password ||!confirmPassword){
        return res.status(400).json({message:"All  fields are required"});
      }

      if(password!=confirmPassword){
        return res.send(400).json({message:"password is mismatch"});
      }

       const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

      const hashedPassword=await bcrypt.hash(password,10)
     
      const newUser=await User.create({
        username,email,password:hashedPassword
      })

      const token=jwt.sign(
        {
            id:newUser._id,
            username:newUser.username
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
      )

      return res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });

   } catch(error){
    res.status(400).json({error:error.message});
   }
}