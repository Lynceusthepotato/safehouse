import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const Frontpage = () => {
    return (
        <div className="Frontpage">
            <div className="Top">
                <Header title= "Always Vigilant"/>
                <p> Safe House keeps you and your family and your house secure no matter where you are.</p>
                <Link to="/login"> 
                    <Button style={{
                        marginTop:'50px', 
                        width: '22%',
                        padding: '2% 5%',
                        cursor: 'pointer',
                        background: 'linear-gradient(to right, #53c1a9, #53c1a9)',
                        border: '0',
                        outline: 'none',
                        borderRadius: '30px'
                        }}/>
                </Link>
            </div>
            <div className="Bottom">
                <Header className= "Head" title="How It Works" />
                <div className= "Fins">
                    <Header className= "Instruction" title="1"/>
                    <p> Visitor presses the door bell button </p>
                </div>
                <div className= "Sins">
                    <Header className= "Instruction" title="2"/>
                    <p> Visitor presses the door bell button </p>
                </div>
                <div className= "Tins">
                    <Header className= "Instruction" title="3"/>
                    <p> Visitor presses the door bell button </p>
                </div>

                <Header className= "Features" title="Features"/>
            </div>
        </div>
    )
}

export default Frontpage
