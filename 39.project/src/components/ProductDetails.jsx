import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext';
import { useParams } from 'react-router-dom';


const Product = () => {

  const EachProductData = useContext(ProductDataContext);
  let { productId } = useParams();

  // let selectProduct = EachProductData.find((elem) => elem.id == productId);

  console.log(EachProductData);

  return (
    <div className="Each-Product-Detail-Container-Wrapper">
      <div className="Each-Product-Details-Container">

        <h3>{EachProductData[productId].category}</h3>
        <img src={EachProductData[productId].image} alt="" />
        <p className='title'>{EachProductData[productId].title}</p>
        <p className='price'>{`Price: $${EachProductData[productId].price}`}</p>
        {/* <p>{EachProductData[productId]}</p> */}

      </div>
    </div>
  )
}

export default Product