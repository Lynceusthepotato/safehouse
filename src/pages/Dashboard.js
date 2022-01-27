import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import pic2 from '../pictures/Doorbell2.png';

const Dashboard = ( username ) => {
    const [redirect, setRedirect] = useState(false)
    const [imgUrl, setImgUrl] = useState('https://newtestonlyjpg.s3.ap-southeast-1.amazonaws.com/')
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    
    var galPic = document.getElementsByClassName("notifPic");
    var R = document.getElementsByClassName("R");

    const getData = async(e) => {
    
        await axios.get('http://localhost:8888/api/picture'
        ).then(res => {
            console.log(res.data);
            for(var i = 0; i < galPic.length; i++){
                galPic[i].src = imgUrl + res.data[res.data.length - (i + 1)];
                let dt = res.data[res.data.length - (i + 1)].split(" ", 5)
                let det = dt[0]
                R[i].innerHTML = "Date: " + det + " Time: " + dt[2].replace('.jpg', '').replace('-', ':').replace('-', ':') ;
            }
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
              console.log(error.response)
            }
        })
    }
    document.body.style.background = "#fff"
    
    useEffect(() => {
        (
            async () => {
                await axios.get('http://localhost:8888/api/user', {
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
                      console.log(error.response)
                    }
                })
            }
        )();
        getData();
      }, []);


    if (redirect) {
        return <Navigate to= "/login" />
    }
    return (
        <div className="Dashboard">
            <div className="up">
                <Header title = {username.username ? 'Hello ' + username.username : "You are not logged in"}/>
                <img src={pic2} className ="Avatar"/>
            </div>
            <div className="down">
                <Header title = {"Notifications"} className= "Notifications" />
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
                <div className="notif">
                    <div className="notifText">
                        <div className="L">
                            <p> Someone is on your front door </p>
                        </div>
                        <div className="R"> {"Date: "+ date + " Time: "+ time} </div>
                    </div>
                    <img src = {"bruh"} className ="notifPic"/>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

