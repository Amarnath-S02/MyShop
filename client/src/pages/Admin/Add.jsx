import React, { useState } from 'react'
import newRequest from '../../utils/newRequest';
import upload from "../../utils/upload"; // adjust path if needed
import "./Add.scss"

const Add = () => {
    const[data,setData]=useState({
        productName: "",
        desc: "",
        quantity: 0,
        price: 0,
        img: ""
    });

    const [file, setFile] = useState(null);


    const handleChange=(e)=>{
        const{name,value}=e.target;
      setData((prev)=>({
        ...prev,[name]: value
      }))
    }

    const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let imgUrl = "";

    if (file) {
      imgUrl = await upload(file); // call your Cloudinary upload function
    }

    const payload = {
      ...data,
      img: imgUrl
    };

    await newRequest.post("product/add", payload);
    alert("Product added successfully!");
  } catch (err) {
    console.error("Error adding product:", err);
  }
};


  return (
    <div className="add-container">
        <div className="add">
            <form onSubmit={handleSubmit}>

                <label>
                 Product Name:
                <input type="text" name='productName' value={data.productName} onChange={handleChange} />
                </label>
                 <label>
                 Description
                   <textarea
                    name="desc"
                    placeholder="Brief description about products"
                    value={data.desc}
                    onChange={handleChange}
                    required
                    ></textarea>
                </label>
                 <label>
                 Upload Image:
                <input type="file" name='img' value={data.img} onChange={handleFileChange}/>
                </label>
                 <label>
                 Quantity
                <input type="Number" name='quantity' value={data.quantity} onChange={handleChange}/>
                </label>
                 <label>
                 Price
                <input type="number" name='price' value={data.price} onChange={handleChange}/>
                </label>

                <button type='submit'>Add</button>
            </form>
        </div>
    </div>
  )
}

export default Add