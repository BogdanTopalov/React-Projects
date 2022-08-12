import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editFood, getOneFood } from "../../services/foodService"
import styles from './EditFood.module.css'


const EditFood = () => {
    const [formValues, setFormValues] = useState({})
    const { foodId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneFood(foodId)
            .then(result => {
                setFormValues(result)
            })
    }, [foodId])

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            {...formValues, [name]: value}
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        editFood(foodId, formValues)
            .then(
                navigate(`/food/${foodId}`)
            )
    }

    const onCancelHandler = () => {
        navigate(`/food/${foodId}`)
    }

    return (
        <form className={styles.edit} onSubmit={onSubmitHandler}>
            <h2>Edit Drink</h2>
            <input 
                type="text"
                name="name"
                value={formValues.name}
                onChange={onChangeHandler}
            />
            <input 
                type="text"
                name="price"
                value={formValues.price}
                
                onChange={onChangeHandler}
            />
            <input 
                type="text"
                name="type"
                value={formValues.type}
                onChange={onChangeHandler}
            />
            <input 
                type="text"
                name="info"
                value={formValues.info}
                onChange={onChangeHandler}
            />
            <input 
                type="text"
                name="imageUrl"
                value={formValues.imageUrl}
                onChange={onChangeHandler}
            />
            <div className={styles.buttons}>
                <button>Submit</button>
                <button onClick={onCancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default EditFood