import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { logout } from "../../services/authService"


const Logout = () => {
    const navigate = useNavigate()
    const { user, userLogout } = useContext(AuthContext)

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogout()
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    })

    return null
}

export default Logout