import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


const PrivateRoute = () => {
    const { user } = useContext(AuthContext)

    if (user.email != 'admin@abv.bg') {
        return <Navigate to='/' replace />
    }

    return <Outlet />
}

export default PrivateRoute