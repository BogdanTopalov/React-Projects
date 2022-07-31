import { createContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

//Option #1
const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = createContext(AuthContext)

    if (!isAuthenticated) {
        return <Navigate to='/login' replace />
    }

    return children
}

export default PrivateRoute

// Use #1
// <Route path="/create" element={<PrivateRoute> <CreateGame /> </PrivateRoute>} />



// Option #2
// import { createContext } from "react"
// import { Navigate, Outlet } from "react-router-dom"
// import { AuthContext } from "../../context/AuthContext"

// const PrivateRoute = () => {
//     const { isAuthenticated } = createContext(AuthContext)

//     if (!isAuthenticated) {
//         return <Navigate to='/login' replace />
//     }

//     return <Outlet />
// }

// export default PrivateRoute

// Use #2
// <Route element={<PrivateRoute />}>
//     <Route path="/create" element={<CreateGame />} />
//     <Route path="/games/:gameId/edit" element={<EditGame />} />
// </Route>