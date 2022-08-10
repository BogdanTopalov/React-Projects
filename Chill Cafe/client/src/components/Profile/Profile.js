import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { getAllReservations } from "../../services/reservationService"
import styles from './Profile.module.css'
import ProfileReservations from "./ProfileReservations"


const Profile = () => {
    const { user } = useContext(AuthContext)
    const userId = user._id
    const [myReservations, setMyReservations] = useState([])

    useEffect(() => {
        getAllReservations(userId)
            .then(result => {
                const resultList = Object.values(result).filter(r => r.userId === userId)
                setMyReservations(resultList)
            })
    }, [userId])

    return (
        <div className={styles.profile}>
            <h2>{user.email}</h2>
            <h3>My Reservations</h3>
            <div className={styles.line}></div>
            {myReservations.length > 0
                ? myReservations.map(r => <ProfileReservations key={r._id} info={r} />)
                : <h4>No reservations :/</h4>
            }
        </div>
    )
}

export default Profile