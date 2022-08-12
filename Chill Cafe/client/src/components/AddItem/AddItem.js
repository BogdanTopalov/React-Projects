import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addDrink } from "../../services/drinksService"
import { addFood } from "../../services/foodService"
import styles from './AddItem.module.css'


const AddItem = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'

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
        <form className={styles.add} onSubmit={onSubmitHandler}>
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
            
            <div className={styles.buttons}>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default AddItem