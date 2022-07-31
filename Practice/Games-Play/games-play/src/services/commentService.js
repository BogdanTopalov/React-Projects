import { post } from "./requester"


const baseUrl = 'http://localhost:3030/data/comments'

export const createComment = (gameId, comment) => {
    return post(baseUrl, {gameId, text: comment})
}
