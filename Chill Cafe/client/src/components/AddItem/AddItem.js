import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addDrink } from "../../services/drinksService"
import { addFood } from "../../services/foodService"


const AddItem = () => {
    const [formValues, setFormValues] = useState({})
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        let { name, value } = e.target
        if (name === '') {
            name = 'category'
        }
        setFormValues(
            { ...formValues, [name]: value }
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (formValues.category === '/food') {
            addFood(formValues)
                .then(
                    navigate('/food')
                )
        } else if (formValues.category === '/drinks') {
            addDrink(formValues)
                .then(
                    navigate('/drinks')
                )
        }
    }

    return (
        <form className="add" onSubmit={onSubmitHandler}>
            <h2>Add Item</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formValues.name}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="price"
                placeholder="Price"
                value={formValues.price}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="type"
                placeholder="Type"
                value={formValues.type}
                onChange={onChangeHandler}
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image Url"
                value={formValues.imageUrl}
                onChange={onChangeHandler}
            />
            <label>
                Select category:
            </label>
            
            <select onChange={onChangeHandler}>
                <option value="/food">Food</option>
                <option value="/drinks">Drinks</option>
            </select>
            
            <div className="buttons">
                <button>Submit</button>
            </div>
        </form>
    )
}

export default AddItem