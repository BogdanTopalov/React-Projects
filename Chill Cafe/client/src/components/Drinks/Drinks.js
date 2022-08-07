import { useEffect, useState } from "react"
import { getAllDrinks } from "../../services/drinksService"
import DrinksItem from "./DrinksItem"


const Drinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        getAllDrinks()
            .then(result => {
                setDrinks(Object.values(result))
            })
    }, [])

    return (
        <div className="catalogue">
            {drinks.length > 0
                ? drinks.map(d => <DrinksItem key={d._id} item={d} />)
                : <h2>No drinks :/ </h2>
            }
        </div>
    )
}

export default Drinks