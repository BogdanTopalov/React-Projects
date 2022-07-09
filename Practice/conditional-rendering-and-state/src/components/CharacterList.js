import { useEffect, useState } from "react"

export const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(res => res.json())
            .then(people => {
                setCharacters(people.results)
            })
    }, [])

    let starWarsPeople = characters.map(x => (
        <li key={x.name}>{x.name}</li>
    ))

    return (
        <ul>
            {!characters.length && <li>Loading...</li>}
            {starWarsPeople}
        </ul>
    )
}
