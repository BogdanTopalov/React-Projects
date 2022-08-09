import { text } from "@fortawesome/fontawesome-svg-core"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editDrink, getOneDrink } from "../../services/drinksService"


const EditDrink = () => {
    const [currentDrink, setCurrentDrink] = useState({})
    const [formValues, setFormValues] = useState({})
    const { drinkId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneDrink(drinkId)
            .then(result => {
                setCurrentDrink(result)
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

    const onCencelHandler = () => {
        navigate(`/drinks/${drinkId}`)
    }

    return (
        <form className="edit" onSubmit={onSubmitHandler}>
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
            <div className="buttons">
                <button>Submit</button>
                <button onClick={onCencelHandler}>Cencel</button>
            </div>
        </form>
    )
}

export default EditDrink