import Header from './Header';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='forFooter'>
            <Header className= "Foot" title='Safe House'/>
            <div className='cFooter'>
                <div className='left'>
                    <h1> Company </h1>
                    <Link to ='/about'> About us </Link>
                    <Link to ='/termOfUse'> Terms of Service </Link>
                </div>
                <div className='right'>
                    <h1> Help </h1>
                        <Link to ='/helpAndSupport'> Contact us </Link>
                        <Link to ='/'> How it works </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
