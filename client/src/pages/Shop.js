// import Products from './Products';
import NavBar from '../components/Common/NavBar';
import Coupon from '../components/Common/Coupon';
import Footer from '../components/Common/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../styles/Shop.css'
import SearchBar from '../components/Shop/Search';


function Shop() {
  const [Products2, setProducts2] = useState([]);
  

  useEffect(() => {
    const fetchAllProducts2 = async () => {
      try {
        const res = await axios.get("http://localhost:8800/shop")

        setProducts2(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllProducts2()
  }, [])


  return (
    <div>
      <Coupon />
      <NavBar />
      <h1>testing</h1>
      <SearchBar />
      <div className="shoppingcontainer">
{Products2.map(Products2=>(
  <div className='item' key={Products2.id}>
    {Products2.image && <img src={Products2.image} alt="" />}
    <h2>{Products2.title}</h2>
    <p>{Products2.info}</p>
    <p>${Products2.price}</p>
  </div>
))}
      </div>

      <Footer />
    </div>
  );
}

export default Shop;