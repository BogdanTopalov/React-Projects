import { Link } from "react-router-dom"
import styles from './FoodItem.module.css'


const FoodItem = ({ item }) => {
    return (
        <Link
            className={styles.item}
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
            to={`/food/${item._id}`}
        >
        </Link>
    )
}

export default FoodItem