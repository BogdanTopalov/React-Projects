import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { MainContext } from "../../context/MainContext"
import styles from './Filters.module.css'


const Filters = () => {
    const location = useLocation()

    const { setSelectedFood } = useContext(MainContext)
    const { setSelectedDrink } = useContext(MainContext)

    const onDrinkClickHandler = (e) => {
        e.preventDefault()
        setSelectedDrink(e.target.value)
    }

    const onFoodClickHandler = (e) => {
        e.preventDefault()
        setSelectedFood(e.target.value)
    }

    if (location.pathname === '/food') {
        return (
            <section className={styles.filters}>
                <div className={styles.buttons}>
                    <button onClick={onFoodClickHandler} value='Fast Food'>Fast Food</button>
                    <button onClick={onFoodClickHandler} value='Dessert'>Desserts</button>
                    <button onClick={onFoodClickHandler} value='Main'>Main</button>
                </div>
            </section>
        )
    } else if (location.pathname === '/drinks') {
            return (
                <section className={styles.filters}>
                    <div className={styles.buttons}>
                        <button onClick={onDrinkClickHandler} value='Coffee'>Coffee</button>
                        <button onClick={onDrinkClickHandler} value='Cocktail'>Cocktails</button>
                        <button onClick={onDrinkClickHandler} value='Cold Drink'>Cold Drinks</button>
                    </div>
                </section>
            )
        }
}

export default Filters