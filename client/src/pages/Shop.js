// import Products from './Products';
import NavBar from '../components/Common/NavBar';
import Coupon from '../components/Common/Coupon';
import Footer from '../components/Common/Footer';


function Shop() {
    return (
        <div className="App">
            <Coupon />
            <NavBar />
            {/* <Products products={products}/> */}
            <Footer />
        </div>
      );
    }
    
    export default Shop;