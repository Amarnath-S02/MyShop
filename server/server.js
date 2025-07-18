import express from 'express'
import mongoose from 'mongoose';
import productRoute from './routes/product.route.js';
import cors from 'cors'
import dotenv from 'dotenv'
const app=express();
dotenv.config(); 

mongoose.connect(process.env.MongoDb)
  .then(() => console.log("MongoDb is Connected"))
  .catch((error) => console.log(`MongoDb Connection Error ${error}`));


app.use(cors({origin:"http://localhost:3000",credentials:true}))
app.use(express.json());




const port=process.env.PORT || 5000;


app.use('/api/product',productRoute);




app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})