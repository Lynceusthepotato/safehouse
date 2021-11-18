import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import Header from './Header'

const Loginform = ({login}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const onSubmit = (e) => {
        e.preventDefault()

        login({username, password})
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
