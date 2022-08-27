import {Spin as Humburger} from 'hamburger-react';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NavBar = () => {
  return (  
         <nav className='navbar'>
          <nav className="left-side">
            <div className="humburgerIcon"> <Humburger  rounded color='white' size={30} /></div>
             <h2 className="lookup">Thelookup</h2>
          </nav> 
          <nav className='right-side'>
             <Link to="/" ><span className="span-home-nav" > HOME</span> </Link>
             <Link to="/AboutUs">ABOUT US</Link>
             <Link to="/featurs">FEATURES</Link>
             <Link to="/contact">CONTACT</Link>
             <Link to="/login">LOG IN</Link>
          </nav>
          <div className="sidebare"></div>
          </nav>
    );
}
export default NavBar;





 