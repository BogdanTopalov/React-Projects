import { useContext, useEffect, useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

import { MainContext } from "../../context/MainContext"
import { getAllFood } from "../../services/foodService"
import FoodItem from "./FoodItem"


const Food = () => {
    const [food, setFood] = useState([])

    const { selectedFood } = useContext(MainContext)

    useEffect(() => {
        getAllFood()
            .then(result => {
                const resultList = Object.values(result).filter(x => x.type === selectedFood)
                setFood(resultList)
            })
    }, [selectedFood])

    return (
        <div className="catalogue">
            {food.length > 0
                ? food.map(f => <FoodItem key={f._id} item={f} />)
                : <h2>Select a food type from here <FontAwesomeIcon icon={faHandPointRight}/></h2>
            }
        </div>
    )
}

export default Food