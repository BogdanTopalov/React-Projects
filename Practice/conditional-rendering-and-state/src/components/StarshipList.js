import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const StarshipList = () => {
    const [starships, setStarships] = useState([])
    useEffect(() => {
        fetch(`https://swapi.dev/api/starships`)
            .then(res => res.json())
            .then(result => {
                setStarships(result.results)
            })
    }, [])
    
    return (
        <ul>
            {starships.map((x, i) => <li key={x.name}><Link to={`/starships/${x.url.split('/')[5]}`}>{x.name}</Link></li>)}
        </ul>
    )
}