import { useEffect, useState } from "react"
import { getAllFood } from "../../services/foodService"
import FoodItem from "./FoodItem"


const Food = () => {
    const [food, setFood] = useState([])

    useEffect(() => {
        getAllFood()
            .then(result => {
                setFood(Object.values(result))
            })
    }, [])

    return (
        <div className="catalogue">
            {food.length > 0
                ? food.map(f => <FoodItem key={f._id} item={f} />)
                : <h2>No food :/ </h2>
            }
        </div>
    )
}

export default Food