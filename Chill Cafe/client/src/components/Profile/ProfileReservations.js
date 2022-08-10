import styles from './ProfileReservations.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { removeReservation } from '../../services/reservationService'


const ProfileReservations = ({ info }) => {

    const onDeleteHandler = () => {
        removeReservation(info._id)
            .then(
                window.location.reload(false)
            )
    }

    return (
        <div className={styles.info}>
            <FontAwesomeIcon icon={faStar} />
            <div>
                <h4>Date: {info.date}</h4>
                <h4>Time: {info.time}</h4>
            </div>
            <FontAwesomeIcon icon={faStar} />
            <button onClick={onDeleteHandler}><FontAwesomeIcon icon={faCircleXmark} /></button>
        </div>
    )
}

export default ProfileReservations