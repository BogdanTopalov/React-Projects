import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { getOneDrink, removeDrink } from "../../services/drinksService"


const DrinksItemDetails = () => {
    let { drinkId } = useParams()
    const [currentDrink, setCurrentDrink] = useState({})
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        getOneDrink(drinkId)
            .then(result => {
                setCurrentDrink(result)
            })
    }, [drinkId])

    const onEditHandler = () => {
        navigate(`/drinks/${drinkId}/edit`)
    }

    const onDeleteHandler = () => {
        const confirm = window.confirm('Do you want to delete this drink?')

        if (confirm) {
            removeDrink(drinkId)
            navigate('/drinks')
        }
    }

    return (
        <div className="details">
            <img src={currentDrink.imageUrl} alt='img' />
            <div className="info">
                <div>
                    <h1>{currentDrink.name}</h1>
                    <h2>Price: &euro;{currentDrink.price}</h2>
                    <h3>Type: {currentDrink.type}</h3>
                    <p>{currentDrink.info}</p>
                </div>

                {user.email === 'admin@abv.bg'
                    ? <div className="buttons">
                        <button onClick={onEditHandler}>Edit</button>
                        <button onClick={onDeleteHandler}>Delete</button>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default DrinksItemDetails
