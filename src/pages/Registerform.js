import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../components/Header'

const Registerform = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    
    const onSubmit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:5678/api/register",
            {
            name: username,
            email: email,
            password: password
            }
        ).then(res => {
            if (res.data.status === 'fail'){
            alert("Your email and password is wrong :v")
            } else {
            setIsRegister(isRegister => !isRegister)
            }
        }).catch(error => {
            console.log(error, error.res)
        })
          
    }

    if (isRegister) {
        return <Navigate to= "/login" />
    }
    
    document.body.style.backgroundImage = "linear-gradient(#53c1a9, #fff)"

    return (
        <div className="form-box">
            <Header />
            <form id= "registerForm" onSubmit={onSubmit}>
                <input type="text" className="input-field" placeholder= "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="submit-btn" id="register" value= "Register"/>  
            </form>
            <p className ="below"> Already have an account?<Link className='regisLogin' to="/login"> Login </Link></p>   
        </div>
    )
}

export default Registerform
