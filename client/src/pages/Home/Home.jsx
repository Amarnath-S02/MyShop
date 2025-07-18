import React from 'react';
import './Home.scss';
import banner from './banner.jpg';


const Home = () => {
  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${banner})` }}>
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices!</p>
        <button>Shop Now</button>
      </section>

     <section className="featured-categories">
  <h2>Shop by Category</h2>
  <div className="categories">
    <div className="category-card">
        <img src="/assets/electronics.jpg" alt="Electronics" />
      <h3>Electronics</h3>
    </div>
    <div className="category-card">
      <img src="/assets/fashion.jpg" alt="Fashion" />
      <h3>Fashion</h3>
    </div>
    <div className="category-card">
      <img src="/assets/books.jpg" alt="Books" />
      <h3>Books</h3>
    </div>
    <div className="category-card">
      <img src="/assets/toys.jpg" alt="Toys" />
      <h3>Toys</h3>
    </div>
  </div>
</section>


      <section className="products">
  <h2>Popular Products</h2>
  <div className="product-grid">
    <div className="product-card">
      <img src="/assets/shoe.jpg" alt="Shoe" />
      <h3>Running Shoes</h3>
      <p>₹2,499</p>
      <button>Buy Now</button>
    </div>

    <div className="product-card">
      <img src="/assets/headphone.jpg" alt="Headphones" />
      <h3>Wireless Headphones</h3>
      <p>₹1,799</p>
      <button>Buy Now</button>
    </div>

    <div className="product-card">
      <img src="/assets/book.jpg" alt="Book" />
      <h3>Novel - Fiction</h3>
      <p>₹399</p>
      <button>Buy Now</button>
    </div>

    <div className="product-card">
      <img src="/assets/watch.jpg" alt="Watch" />
      <h3>Smart Watch</h3>
      <p>₹3,999</p>
      <button>Buy Now</button>
    </div>
  </div>
</section>


      <section className="newsletter">
        <h2>Join Our Newsletter</h2>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section>
    </div>
  );
};

export default Home;
