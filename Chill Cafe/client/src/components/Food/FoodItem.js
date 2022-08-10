import { Link } from "react-router-dom"


const FoodItem = ({ item }) => {
    return (
        <Link
            className="item"
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
            to={`/food/${item._id}`}
        >
        </Link>
    )
}

export default FoodItem