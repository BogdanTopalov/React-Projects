import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCircleInfo, faUtensils, faMartiniGlass, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import styles from './SideNavigation.module.css'


const SideNavigation = () => {
    return (
        <section className={styles.sidebar}>
            <ul>
                <li><Link to='/'><FontAwesomeIcon icon={faHome} /></Link></li>
                <li><Link to='/about'><FontAwesomeIcon icon={faCircleInfo} /></Link></li>
                <li><Link to='/food'><FontAwesomeIcon icon={faUtensils} /></Link></li>
                <li><Link to='/drinks'><FontAwesomeIcon icon={faMartiniGlass} /></Link></li>
                <li><Link to='/reservation'><FontAwesomeIcon icon={faAddressBook} /></Link></li>
            </ul>
        </section>
    )
}

export default SideNavigation