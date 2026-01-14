import { useContext } from 'react';
import { ProductDataContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {

  const AllProduct = useContext(ProductDataContext);

  return (
    <div className='App-wrapper'>
      <div className="All-Product-wrapper">
        {AllProduct.map(function (elem, idx) {
          return (
            <Link key={idx} to={`/product/${idx}`}>
              <div className="Each-Product-container">
                <img src={elem.image} alt="" />
                <p>{elem.title}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>

  )
}

export default Home