import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom';
import './BottomNavbar.css'

const BottomNavbar = () => {
    return (
        <div>
            <nav className='BottomNav'>
                <ul className='navul'>
                    <li className = "navLink active">
                        <Link to= "/dashboard">
                            <FaIcons.FaBell /> 
                            <span> Notifications </span>
                        </Link>
                    </li>
                    <li className = "navLink">
                        <Link to= "/live">
                            <FaIcons.FaBullseye /> 
                            <span> Live View </span>
                        </Link>
                    </li>
                    <li className = "navLink">
                        <Link to= "/settings">
                            <FaIcons.FaCog /> 
                            <span> Settings </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default BottomNavbar
