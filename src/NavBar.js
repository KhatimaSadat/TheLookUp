import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
   
    return (  
    <div className="navbar">
         <div className="left-side">
             <div className="menuicon" ><MenuIcon fontSize="small"/> </div>
              <div className="text">TheLookUP</div>
         </div>
         <div className="right-side">
            <Link to="/">HOME</Link> 
            <Link to="/AboutUs">ABOUT US</Link>
            <Link to="/featurs">FEATURES</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/login">LOG IN</Link>
            
         </div>

     </div>
    );
}
 
export default NavBar;