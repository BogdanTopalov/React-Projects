import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'


const Footer = () => {
    return (
        <section className={styles.footer}>
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
        </section>
    )
}

export default Footer