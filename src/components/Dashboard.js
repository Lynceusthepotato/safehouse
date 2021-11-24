import Header from './Header';

const Dashboard = ( username ) => {
    return (
        <div className="Dashboard">
            <Header title = {username.username ? 'Hello ' + username.username : "You are not logged in"}/>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

