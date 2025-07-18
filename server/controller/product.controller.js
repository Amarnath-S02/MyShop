import { Product } from "../models/product.model.js";

export const getData= async (req,res,next)=>{
   
   try{ const product=req.params.name
    const data= await Product.findOne({productName:product});
    if(!data){
     return   res.status(404).json({message:"Product is Unavailable"})
    }

    return res.status(202).json(data);
}
catch(error){
    res.status(400).json({message:error.message});

}
}


export const addProduct= async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


export const getAllProducts=async(req,res)=>{
    try{
        const Products=await Product.find();
        res.status(200).json(Products);
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}



  
