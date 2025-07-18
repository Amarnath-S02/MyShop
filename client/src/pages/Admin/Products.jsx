import React, { useState } from 'react';
import './Product.scss';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: '',
    quantity: '',
    price: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Add new product
  const handleAddProduct = () => {
    if (!formData.name || !formData.category) return alert('Fill all fields');
    const newProduct = {
      ...formData,
      id: Date.now(),
    };
    setProducts([...products, newProduct]);
    setFormData({ id: null, name: '', category: '', quantity: '', price: '' });
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Edit product
  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  // Update product
  const handleUpdate = () => {
    setProducts(products.map((p) => (p.id === formData.id ? formData : p)));
    setFormData({ id: null, name: '', category: '', quantity: '', price: '' });
    setIsEditing(false);
  };

  return (
    <div className="product-page">
      <h2>Product Management</h2>

      <div className="form">
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />

        {isEditing ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>

      <div className="product-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center' }}>No products added</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}</td>
                  <td>
                    <button className="edit" onClick={() => handleEdit(product)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;

