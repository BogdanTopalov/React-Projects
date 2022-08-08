import { useContext, useEffect, useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

import { MainContext } from "../../context/MainContext"
import { getAllDrinks } from "../../services/drinksService"
import DrinksItem from "./DrinksItem"


const Drinks = () => {
    const [drinks, setDrinks] = useState([])

    const { selectedDrink } = useContext(MainContext)

    useEffect(() => {
        getAllDrinks()
            .then(result => {
                const resultList = Object.values(result).filter(x => x.type === selectedDrink)
                setDrinks(resultList)
            })
    }, [selectedDrink])

    return (
        <div className="catalogue">
            {drinks.length > 0
                ? drinks.map(d => <DrinksItem key={d._id} item={d} />)
                : <h2>Select a drink type from here <FontAwesomeIcon icon={faHandPointRight}/></h2>
            }
        </div>
    )
}

export default Drinks