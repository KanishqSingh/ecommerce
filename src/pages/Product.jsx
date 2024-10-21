import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productID}=useParams();
  const product=all_product.find((e)=>e.id===Number(productID))
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product