import { Link } from 'react-router-dom'

const Aboutpage = () => {
    return (
        <div className="aboutPage">
            <div className ="Top">
                <Link to="/dataPolicy"> Data Policy </Link>
            </div>
            <div className ="Bottom">
                <Link to="/termOfUse"> Term of Use </Link>
            </div>
        </div>
    )
}

export default Aboutpage
