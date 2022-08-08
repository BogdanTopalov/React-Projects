import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const Profile = () => {
    const { user } = useContext(AuthContext)


    return(
        <div className="profile">
            <img src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lsaG91ZXR0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="img"/>
            <h2>{user.email}</h2>
        </div>
    )
}

export default Profile