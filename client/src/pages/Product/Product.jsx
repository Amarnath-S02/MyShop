import React, { useEffect, useState } from 'react'
import newRequest from "../../utils/newRequest"
import "./Product.scss"
const Product = () => {

    const[productData,setProductData]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            try{
            const product=await newRequest.get("product/all")
            
            setProductData(product.data)
           
            }
            catch(error){
                return console.log(error);
            }
        }
        fetchdata();
       },[]);

       
  return (
    <div className='product-container'>
      
      <div className="products">
      {productData?.map((data,index)=>(
        <div key={index} className='productCard'>
         <img src={data.img} alt="Product" width="200" />
          <p>{data.productName}</p>
          <p>{data.desc}</p>
          <p>{data.quantity}</p>
          <p>Rs {data.price}</p>


        </div>
 ))}
      </div>
         

    </div>
  )
}

export default Product