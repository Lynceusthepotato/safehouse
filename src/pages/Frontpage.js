import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer.js";
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
                                <p className='tS'> a </p>
                            </div>
                            <div className='toSlide'>
                                <p className='tS' > a </p>
                            </div>
                            <div className='toSlide'>
                                <p className='tS'> a </p>
                            </div>
                            <div className='toSlide'>
                                <p className='tS'> a </p>
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
