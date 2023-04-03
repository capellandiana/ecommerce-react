import './../../../styles/HeroText.css'
import { Link } from "react-router-dom";


function HeroText() {
    return (
        <div className="homebutton">
            <h1>Shop the Catnip Collection</h1>
            <button>
            <Link className='shopNow'to="/shop">Shop<h2>Shop Now</h2></Link>
            </button>
        </div>
    )

};
export default HeroText;