import styles from './ProfileReservations.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { removeReservation } from '../../services/reservationService'


const ProfileReservations = ({ info }) => {

    const onDeleteHandler = () => {
        const confirm = window.confirm('Do you want to cancel your reservation?')
        if (confirm) {
            removeReservation(info._id)
            .then(
                window.location.reload(false)
            )
        }
    }

    return (
        <div className={styles.info}>
            <FontAwesomeIcon icon={faStar} />
            <div>
                <h4>Date: {info.date}</h4>
                <h4>Time: {info.time}</h4>
            </div>
            <FontAwesomeIcon icon={faStar} />
            <button onClick={onDeleteHandler}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    )
}

export default ProfileReservations