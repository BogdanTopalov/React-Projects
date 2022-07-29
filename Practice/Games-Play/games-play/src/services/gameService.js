import { get } from "./requester"

const baseUrl = 'http://localhost:3030'


export const getAll = () => {
    return get(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`)
}