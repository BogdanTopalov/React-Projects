import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { getOneFood } from "../../services/foodService"


const FoodItemDetails = () => {
    let { foodId } = useParams()
    const [currentFood, setCurrentFood] = useState({})
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getOneFood(foodId)
            .then(result => {
                setCurrentFood(result)
            })
    }, [foodId])

    return (
        <div className="details">
            <img src={currentFood.imageUrl} alt='img' />
            <div className="info">
                <div>
                    <h1>{currentFood.name}</h1>
                    <h2>Price: &euro;{currentFood.price}</h2>
                    <h3>Type: {currentFood.type}</h3>
                </div>

                {user.email === 'admin@abv.bg'
                    ? <div className="buttons">
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default FoodItemDetails