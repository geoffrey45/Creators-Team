import React from 'react'
import {laptops} from "./lappy.js"
import ProductComponent from './products';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const myElements = laptops.map((item) => {
    return <ProductComponent key={item.model} item={item} />;
  });
  return (
    <div className='text-centers'>Products Page
      <div className="flex flex-row justify-between  w-[80%] mx-auto ">
        {myElements}
      </div>
    </div>
  )
}
export default ProductPage;


//  WILL USE THIS FILE FOR PRODUCTS