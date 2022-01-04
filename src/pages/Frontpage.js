import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer.js";
import pic1 from '../pictures/Doorbell1.jpeg';
import pic2 from '../pictures/Doorbell2.png';
import pic3 from '../pictures/Doorbell3.jpeg';
import { Link } from 'react-router-dom'

const Frontpage = () => {

    const slider = document.querySelector('.slider-inner');
    let sliderGrabbed = false;

    if(slider){
        slider.addEventListener('mousedown', (e) => {
            sliderGrabbed = true;
            slider.style.cursor = 'grabbing';
        })
        
        slider.addEventListener('mouseup', (e) => {
            sliderGrabbed = false;
            slider.style.cursor = 'grab';
        })
        
        slider.addEventListener('mouseleave', (e) => {
            sliderGrabbed = false;
        })
        
        slider.addEventListener('mousemove', (e) => {
            if(sliderGrabbed){
                slider.parentElement.scrollLeft -= e.movementX;
            }
        })
        
        slider.addEventListener('wheel', (e) =>{
            e.preventDefault()
            slider.parentElement.scrollLeft += e.deltaY;
        })
    }
    
    return (
        <div className="Frontpage">
            <div className="Top">
                <Header title= "Always Vigilant"/>
                <p> Safe House keeps you and your family and your house secure no matter where you are.</p>
                <Link to="/login"> 
                    <Button style={{
                        marginTop:'50px', 
                        width: '200px',
                        padding: '10px 20px',
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
                    <p> A notification is sent to your email </p>
                </div>
                <div className= "Tins">
                    <Header className= "Instruction" title="3"/>
                    <p> View visitor's image or live stream </p>
                </div>
                
                <Header className= "Features" title="Features"/>
                <div className='slider-wrap'>
                    <div className='slider'>
                        <div className='slider-inner'>
                            <div className='toSlide'>
                                <img src={pic1} className= "FPic"/>
                                <p className='tS'>  Sensor </p>
                                <p className='bTS one'> Detect button pressed </p>
                            </div>
                            <div className='toSlide'>
                                <img src={pic2} className= "FPic"/>
                                <p className='tS'> Notifications </p>
                                <p className='bTS two'> Recieve notifications on your phone everytime someone is by your door </p>
                            </div>
                            <div className='toSlide'>
                                <img src={pic3} className= "FPic"/>
                                <p className='tS'> Live Stream </p>
                                <p className='bTS three'> Stream live video when the doorbell button is pressed </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Frontpage
