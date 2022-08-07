import { get } from "./requester"

const foodUrl = 'http://localhost:3030/jsonstore/food'

export const getAllFood = () => {
    return get(`${foodUrl}`)
}

// export const getOneFood = (foodId) => {
//     return get(`${foodUrl}/${foodId}`)
// }
