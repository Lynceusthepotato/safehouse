import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const Frontpage = () => {
    return (
        <div className="Frontpage">
            <Header title= "Always Vigilant"/>
            <p> Safe House keeps you and your family and your house secure no matter where you are.</p>
            <Link to="/login"> 
                <Button />
            </Link>
        </div>
    )
}

export default Frontpage
