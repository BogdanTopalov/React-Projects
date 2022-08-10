import { del, get, post, put } from "./requester"

const reservationUrl = 'http://localhost:3030/jsonstore/reservations'

export const getAllReservations = () => {
    return get(reservationUrl)
}

export const makeReservation = (reservationData) => {
    return post(reservationUrl, reservationData)
}

export const removeReservation = (reservationId) => {
    return del(`${reservationUrl}/${reservationId}`)
}