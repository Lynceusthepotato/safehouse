import { useState } from 'react'
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

const Loginform = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="loginForm">
            <form id= "LoginForm">
                <input type="text" className="input-field" placeholder= "Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="text" className="input-field" placeholder= "Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" className="submit-btn" id="login" value= "login"/>  
            </form>
        </div>
    )
}

export default Loginform
