import { get, post } from "./requester"

const baseUrl = 'http://localhost:3030/data/games'


export const getAll = () => {
    return get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
}

export const create = (gameData) => {
    return post(baseUrl, gameData)
}