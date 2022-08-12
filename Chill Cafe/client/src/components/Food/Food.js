import { useContext, useEffect, useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons'

import { MainContext } from "../../context/MainContext"
import { getAllFood } from "../../services/foodService"
import FoodItem from "./FoodItem"
import styles from './Food.module.css'


const Food = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1609768735025-ebb11f2217d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")'

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
        <div className={styles.catalogue}>
            {food.length > 0
                ? food.map(f => <FoodItem key={f._id} item={f} />)
                : <h2>Select a food type from here <FontAwesomeIcon icon={faHandPointRight}/></h2>
            }
        </div>
    )
}

export default Food