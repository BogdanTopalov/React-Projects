import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editDrink, getOneDrink } from "../../services/drinksService"
import styles from './EditDrink.module.css'


const EditDrink = () => {
    const [formValues, setFormValues] = useState({})
    const { drinkId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneDrink(drinkId)
            .then(result => {
                setFormValues(result)
            })
    }, [drinkId])

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            {...formValues, [name]: value}
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        
        editDrink(drinkId, formValues)
            .then(
                navigate(`/drinks/${drinkId}`)
            )
    }

    const onCancelHandler = () => {
        navigate(`/drinks/${drinkId}`)
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
                name="imageUrl"
                value={formValues.imageUrl}
                onChange={onChangeHandler}
            />
            <input 
                type="text"
                name="info"
                value={formValues.info}
                onChange={onChangeHandler}
            />
            <div className={styles.buttons}>
                <button>Submit</button>
                <button onClick={onCancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default EditDrink