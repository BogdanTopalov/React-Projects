import { get, post, put } from "./requester"

const baseUrl = 'http://localhost:3030/data/games'


export const getAll = () => {
    return get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
}

export const getOne = (gameId) => {
    return get(`${baseUrl}/${gameId}`)
}

export const create = (gameData) => {
    return post(baseUrl, gameData)
}

export const edit = (gameId, gameData) => {
    return put(`${baseUrl}/${gameId}`, gameData)
}