import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";




const HomeMain = () => {
    const location = useLocation()
    const noHeaderFooter =location.pathname.includes("enter") ||location.pathname.includes("/code/")
    
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
             <Outlet></Outlet>
     
           
          
           
            
            
        </div>
    );
};

export default HomeMain;