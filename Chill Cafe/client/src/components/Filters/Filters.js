import { useContext } from "react"
import { useLocation } from "react-router-dom"
import { MainContext } from "../../context/MainContext"

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
            <section className="filters">
                <div className="buttons">
                    <button onClick={onFoodClickHandler} value='Fast Food'>Fast Food</button>
                    <button onClick={onFoodClickHandler} value='Dessert'>Desserts</button>
                </div>
            </section>
        )
    } else if (location.pathname === '/drinks') {
            return (
                <section className="filters">
                    <div className="buttons">
                        <button onClick={onDrinkClickHandler} value='Coffee'>Coffee</button>
                        <button onClick={onDrinkClickHandler} value='Cocktail'>Cocktails</button>
                    </div>
                </section>
            )
        }
}

export default Filters