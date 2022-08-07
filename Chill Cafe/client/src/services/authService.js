import { post } from "./requester";

const usersUrl = 'http://localhost:3030/users'

export const login = (email, password) => {
    return post(`${usersUrl}/login`, {email, password})
}

export const register = (email, password) => {
    return post(`${usersUrl}/register`, {email, password})
}

export const logout = async (accessToken) => {
    try {
        const response = await fetch(
            `${usersUrl}/logout`,
            {
                headers: {
                    'X-Authorization': accessToken
                }
            }
        )
        return response

    } catch (error) {}
}