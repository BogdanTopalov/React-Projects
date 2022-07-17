import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const Starships = () => {
    const [starship, setStarship] = useState({})
    const { starshipId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}`)
        .then(res => res.json())
        .then(result => {
            setStarship(result)
        })
    }, [starshipId])

    const nextStarshipHandler = () => {
        navigate(`/starships/${Number(starshipId) + 1}`)
    }

    return (
        <>
            <h1>STARSHIPS</h1>

            <h3>Starship {starshipId} Details</h3>

            <ul>
                <li>Name: {starship.name}</li>
                <li>Model: {starship.model}</li>
                <li>Max Speed: {starship.max_atmosphering_speed}</li>
                <li>Price: {starship.cost_in_credits}</li>
            </ul>

            <button onClick={nextStarshipHandler}>Next Starship</button>
        </>
    )
}