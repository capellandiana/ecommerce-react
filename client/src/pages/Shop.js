// import Products from './Products';
import NavBar from "../components/Common/NavBar";
import Coupon from "../components/Common/Coupon";
import Footer from "../components/Common/Footer";
import "../styles/Shop.css";
import DBProducts from "../components/Shop/DBProducts";
import ProductsArray from "../components/Shop/ProductArray";

function Shop() {


  return (
    <div>
      <Coupon />
      <NavBar />
      <h1 className="title">Buy Meow!</h1>
      {/* <DBProducts /> */}
<ProductsArray />
      <Footer />
    </div>
  );
}

export default Shop;
