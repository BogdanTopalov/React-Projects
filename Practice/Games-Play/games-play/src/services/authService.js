import { post } from "./requester"

const baseUrl = 'http://localhost:3030'

export const login = (email, password) => {
    return post(`${baseUrl}/users/login`, { email, password })
}