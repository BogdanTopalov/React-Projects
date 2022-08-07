import { Link } from "react-router-dom"


const FoodItem = ({ item }) => {
    return (
        <Link
            className="item"
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
            to={`/food/${item._id}`}
        >
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.price}$</p>
            </div>
        </Link>
    )
}

export default FoodItem