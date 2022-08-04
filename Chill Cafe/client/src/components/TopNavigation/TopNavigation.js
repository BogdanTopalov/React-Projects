import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'


const TopNavigation = () => {
    return (
        <section className="topbar">
            <a class="logo" href="">
                <FontAwesomeIcon icon={faUmbrellaBeach} />
            </a>

            <ul>
                <li><a href="">Login</a></li>
                <li><a href="">Register</a></li>
            </ul>
        </section>
    )
}

export default TopNavigation