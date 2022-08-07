import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach, faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


const TopNavigation = () => {
    const { user } = useContext(AuthContext)

    return (
        <section className="topbar">
            <Link className="logo" to='/'>
                <FontAwesomeIcon icon={faUmbrellaBeach} />
            </Link>

            {user.accessToken
                ? <ul>
                    <li><Link to='/'><FontAwesomeIcon icon={faUser} /></Link></li>
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