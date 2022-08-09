import { del, get, post, put } from "./requester"

const drinksUrl = 'http://localhost:3030/jsonstore/drinks'

export const getAllDrinks = () => {
    return get(`${drinksUrl}`)
}

export const getOneDrink = (drinkId) => {
    return get(`${drinksUrl}/${drinkId}`)
}

export const addDrink = (drinkData) => {
    return post(drinksUrl, drinkData)
}

export const editDrink = (drinkId, drinkData) => {
    return put(`${drinksUrl}/${drinkId}`, drinkData)
}

export const removeDrink = (drinkId) => {
    return del(`${drinksUrl}/${drinkId}`)
}