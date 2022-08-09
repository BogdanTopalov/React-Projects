import { del, get, post, put } from "./requester"

const foodUrl = 'http://localhost:3030/jsonstore/food'

export const getAllFood = () => {
    return get(`${foodUrl}`)
}

export const getOneFood = (foodId) => {
    return get(`${foodUrl}/${foodId}`)
}

export const addFood = (foodData) => {
    return post(foodUrl, foodData)
}

export const editFood = (foodId, foodData) => {
    return put(`${foodUrl}/${foodId}`, foodData)
}

export const removeFood = (foodId) => {
    return del(`${foodUrl}/${foodId}`)
}