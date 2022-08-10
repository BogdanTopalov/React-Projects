import { Link } from "react-router-dom"


const DrinksItem = ({ item }) => {
    return (
        <Link
            className="item"
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
            to={`/drinks/${item._id}`}
        >
        </Link>
    )
}

export default DrinksItem