import './../../../styles/HeroText.css'
import { BrowserRouter, Route, Link } from "react-router-dom";


function HeroText() {
    return (
        <div className="homebutton">
            <h1>Shop the Catnip Collection</h1>
            <button>
            <Link to="/shop">Shop<h2>Shop Now</h2></Link>
            </button>
        </div>
    )

};
export default HeroText;