import { get } from "./requester"

const drinksUrl = 'http://localhost:3030/jsonstore/drinks'

export const getAllDrinks = () => {
    return get(`${drinksUrl}`)
}

// export const getOneDrink = (drinkId) => {
//     return get(`${drinksUrl}/${drinkId}`)
// }
