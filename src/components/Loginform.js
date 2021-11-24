import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios';
import Header from './Header'

const Loginform = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(false)
    
    const onSubmit = async (e) => {

        e.preventDefault()

        await axios.post("http://localhost:8000/api/login",
            {
            email: username,
            password: password
            },
            { withCredentials: true }
        ).then(res => {
            if (res.data.status === 'fail'){
            alert("Your email and password is wrong :v")
            } else {
            setIsLogin(isLogin => !isLogin)
            }
            // console.log(res)
            // console.log(res.data)
        }).catch(error => {
            console.log(error, error.res)
        })
          
    }

    if (isLogin) {
        return <Navigate to= "/dashboard" />
    }

    return (
        <div className="loginForm">
            <Header />
            <form id= "LoginForm" onSubmit={onSubmit}>
                <input type="text" className="input-field" placeholder= "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="submit-btn" id="login" value= "login"/>  
            </form>
        </div>
    )
}

export default Loginform
