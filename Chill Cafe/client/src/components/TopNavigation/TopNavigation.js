import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import styles from './TopNavigation.module.css'


const TopNavigation = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const profilePath = `/profile/${user._id}`

    const onClickHandler = () => {
        navigate('/add')
    }

    return (
        <section className={styles.topbar}>
            <Link className={styles.logo} to='/'>
                <FontAwesomeIcon icon={faUmbrellaBeach} />
            </Link>
            {user.email === 'admin@abv.bg'
                ? <div className={styles.buttons}>
                    <button onClick={onClickHandler}>Add Item</button>
                </div>
                : <></>
            }

            {user.accessToken
                ? <ul>
                    <li><Link to={profilePath}><FontAwesomeIcon icon={faUser} /></Link></li>
                    <li><Link to='/logout'><FontAwesomeIcon icon={faRightFromBracket} /></Link></li>
                </ul>
                : <ul>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            }
        </section>
    )
}

export default TopNavigation