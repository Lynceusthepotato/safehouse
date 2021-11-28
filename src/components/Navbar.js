import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from "./NavbarData";

function Navbar( {logout} ) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return (
        <div>
            <div className="navbar">
                <Link to= "#" className="menu-button">
                    <FaIcons.FaBars onClick = {showSidebar}/>
                </Link>
            </div>
            <nav className= {sidebar ? "navOn" : "NavOff"}>
                <ul className = "nav-items" onClick={showSidebar}>
                    <li className = "navbar-toggle">
                        <Link to= "#" className="menu-button">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {NavbarData.map((item, index) => {
                        return item.function === "redirect" ? 
                        (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                <span>{item.title}</span>
                              </Link>
                            </li> 
                        ) 
                        :
                        (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                <span onClick={logout}>{item.title}</span>
                              </Link>
                            </li> 
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
