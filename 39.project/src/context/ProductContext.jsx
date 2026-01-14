import { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const ProductDataContext = createContext();

const ProductContext = (props) => {

  const [AllProduct, setAllProduct] = useState([])

  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    setAllProduct(response.data)
  }
  
  useEffect(function () {
    getData();
  }, [])

  return (
    <div className='Data-Provider'>
      <ProductDataContext.Provider value={AllProduct}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext