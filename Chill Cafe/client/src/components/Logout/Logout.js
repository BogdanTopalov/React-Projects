import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { logout } from "../../services/authService"


const Logout = () => {
    const { user, userLogout } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        logout(user.accesstoken)
            .then(() => {
                userLogout()
                navigate('/')
            })
    })
    return null
}

export default Logout