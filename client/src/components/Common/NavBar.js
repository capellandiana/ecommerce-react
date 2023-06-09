import '../../styles/NavBar.css';
import logo from "../../assets/mm3-1.png";
import { Link } from "react-router-dom";


function NavBar() {
    return <div className='navbar'>
        <img className='meowmazon'src={logo} alt='meowmazon logo'></img>
        <ul className="navlist">
            <li className="listitem">
            <Link className='link' to="/">Home</Link>
                </li>
            <li className="listitem">
            <Link className='link' to="/shop">Shop</Link>
                </li>
            <li className="listitem">
            <Link className='link' to="/contact">Contact</Link>
                </li>
        </ul>
    </div>
}
export default NavBar;