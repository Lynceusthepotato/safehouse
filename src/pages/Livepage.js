import Jitsi from "react-jitsi";



const Livepage = () => {
    const roomName = 'https://meet.jit.si/PervasiveFive'
    const userFullName = 'SafeHouse'

    return (
        <div>
            <Jitsi roomName={roomName} displayName={userFullName} />
        </div>
    )
}

export default Livepage
