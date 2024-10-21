import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {

 const {product}=props;
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
         <div className="productdisplay-img-list">
                 <img src={product.image} alt=''></img>
                 <img src={product.image} alt=''></img>
                 <img src={product.image} alt=''></img>
                 <img src={product.image} alt=''></img>
         </div>
           <div className='product-display-img'>
            <img className="product-display-main-img" src={product.image} alt=""></img>
           </div>
         </div>
         <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="product-display-right-star">
            <img src={star_icon} alt=""></img>
            <img src={star_icon} alt=""></img>
            <img src={star_icon} alt=""></img>
            <img src={star_icon} alt=""></img>
            <img src={star_dull_icon} alt=""></img>
            <p>122</p>
          </div>
          <div className='productdisplay-right-prices-old'>${product.old_prices}</div>
          <div className='productdisplay-right-prices-new'>${product.new_prices}</div>

       </div>
       <div className="productdisplay-right-description">
        A lightweight dkfnefjinfenfenfnerfnefernfrejnjfn
        ejfnefnefejfnefjernfeijnfnerf
       </div>
       <div className="productdisplay-right-size">
        <h1>Select Size</h1>
        <div className='productdisplay-right-size'>
          <div>S</div>
          <div>M</div>
          <div>l</div>
          <div>xl</div>
          <div>xxl</div>
        </div>
       </div>
       <button>ADD TO CART</button>
       <p className='product-display-right-category'><span>Category:</span>Women,tshirt,top</p>
       <p className='product-display-right-category'><span>Tags:</span>Women,tshirt,top</p>
    </div>
  )
}

export default ProductDisplay