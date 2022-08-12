import { Link } from "react-router-dom"
import styles from './DrinksItem.module.css'

const DrinksItem = ({ item }) => {
    return (
        <Link
            className={styles.item}
            style={{ backgroundImage: `url("${item.imageUrl}")` }}
            to={`/drinks/${item._id}`}
        >
        </Link>
    )
}

export default DrinksItem