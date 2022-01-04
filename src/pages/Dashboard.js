import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const Dashboard = ( username ) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        (
            async () => {
                await axios.get('http://localhost:8000/api/user', {
                    withCredentials: true
                }).catch(error => {
                    if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      console.log(error.response.headers);
                      alert("You are not logged in")
                      setRedirect(redirect => !redirect)
                    } else if (error.request) {
                      console.log(error.request);
                    } else {
                      console.log(error, error.res)
                    }
                })
            }
        )();
      }, []);

    document.body.style.background = "#fff"
    
    if (redirect) {
        return <Navigate to= "/login" />
    }
    return (
        <div className="Dashboard">
            <div className="up">
                <Header title = {username.username ? 'Hello ' + username.username : "You are not logged in"}/>
            </div>
            <div className="down">
                <Header title = {"Notifications"} className= "Notifications" />
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

