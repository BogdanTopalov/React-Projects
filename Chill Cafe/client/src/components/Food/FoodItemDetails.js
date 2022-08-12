import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { getOneFood, removeFood } from "../../services/foodService"
import styles from './FoodItemDetails.module.css'


const FoodItemDetails = () => {
    let { foodId } = useParams()
    const [currentFood, setCurrentFood] = useState({})
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        getOneFood(foodId)
            .then(result => {
                setCurrentFood(result)
            })
    }, [foodId])

    const onEditHandler = () => {
        navigate(`/food/${foodId}/edit`)
    }

    const onDeleteHandler = () => {
        const confirm = window.confirm('Do you want to delete this food?')

        if (confirm) {
            removeFood(foodId)
            navigate('/food')
        }
    }

    return (
        <div className={styles.details}>
            <img src={currentFood.imageUrl} alt='img' />
            <div className={styles.info}>
                <div>
                    <h1>{currentFood.name}</h1>
                    <h2>Price: &euro;{currentFood.price}</h2>
                    <h3>Type: {currentFood.type}</h3>
                    <p>{currentFood.info}</p>
                </div>

                {user.email === 'admin@abv.bg'
                    ? <div className={styles.buttons}>
                        <button onClick={onEditHandler}>Edit</button>
                        <button onClick={onDeleteHandler}>Delete</button>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default FoodItemDetails