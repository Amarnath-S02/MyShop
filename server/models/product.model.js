import mongoose  from "mongoose";

const productSchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
      
})

export const Product=mongoose.model("Product",productSchema);