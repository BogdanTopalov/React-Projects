import { useContext, useEffect, useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

import { MainContext } from "../../context/MainContext"
import { getAllDrinks } from "../../services/drinksService"
import DrinksItem from "./DrinksItem"


const Drinks = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1530064161350-7824b8cdeee9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
    
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
                : !selectedDrink
                    ? <h2>Select a drink type from here <FontAwesomeIcon icon={faHandPointRight}/></h2>
                    : <h2>No {selectedDrink}s at the moment, select another <FontAwesomeIcon icon={faHandPointRight}/></h2>
                    
            }
        </div>
    )
}

export default Drinks