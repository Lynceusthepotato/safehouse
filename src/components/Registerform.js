import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header'

const Registerform = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRegister, setIsRegister] = useState(false)
    
    const onSubmit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:8000/api/register",
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
            // console.log(res)
            // console.log(res.data)
        }).catch(error => {
            console.log(error, error.res)
        })
          
    }

    if (isRegister) {
        return <Navigate to= "/login" />
    }

    return (
        <div className="registerForm">
            <Header />
            <form id= "registerForm" onSubmit={onSubmit}>
                <input type="text" className="input-field" placeholder= "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="submit-btn" id="login" value= "login"/>  
            </form>
        </div>
    )
}

export default Registerform
