import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={styles['nav']}>
            <ul className={styles['nav-ul']}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/books">Books</Link></li>
            </ul>
        </div>
    )
}