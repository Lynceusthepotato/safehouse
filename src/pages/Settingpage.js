import { Link } from "react-router-dom"
import Header from "../components/Header"
import pic2 from '../pictures/Doorbell2.png';


const Settingpage = ({username, email}) => {
    return (
        <div className="Settingpage">
            <Header title={"Settings"} className="Settings" />
            <div className="Top" >
                <Link to="/editProfile" className="greenText"> Edit Profile</Link>
                <div className="ForNameEmail">
                    <p> {username} </p>
                    <p> {email} </p>
                </div>
                <img src={pic2} className="Avatar" />
            </div>
            <div className="Bottom">
                <Header title={"General"} className="Settings" />
                <Link to="/about" className="Linkto"> About </Link>
                <Link to="/helpAndSupport" className="Linkto"> Help and Support </Link>
                <Link to="/sendFeedback" className="Linkto"> Send Feedback </Link>
                <Link to="/frontpage" className="greenText Linkto"> Logout </Link>
            </div>
        </div>
    )
}

export default Settingpage
