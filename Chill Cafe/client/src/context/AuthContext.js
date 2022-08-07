import { createContext, useState } from "react";


const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key)

        return storedData ? JSON.parse(storedData) : defaultValue
    })

    const setLocalStorageValue = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
        setValue(newValue)
    }

    return [value, setLocalStorageValue]
}


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('auth', {})

    const isAuthenticated = Boolean(auth.accessToken)

    const userLogin = (data) => {
        setAuth(data)
    }

    const userLogout = () => {
        setAuth({})
    }

    return (
        <AuthContext.Provider value={{ user: auth, userLogin, userLogout, isAuthenticated }}>
            { children }
        </AuthContext.Provider>
    )
}