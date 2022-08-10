import { Link, useNavigate } from 'react-router-dom'
import styles from './Reservation.module.css'
import { useContext, useState } from 'react'
import { makeReservation } from '../../services/reservationService'
import { AuthContext } from '../../context/AuthContext'


const Reservation = () => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1550293750-dde2bed30d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
    
    const date = new Date();
    const minDate = date.toJSON().slice(0, 10)
    date.setDate(date.getDate() + 7);
    const maxDate = date.toJSON().slice(0, 10)

    const { user, isAuthenticated } = useContext(AuthContext)
    const initialValues = {userId: user._id, time: '', date: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            {...formValues, [name]: value}
        )
    }

    const onReturnHandler = () => {
        navigate('/')
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        makeReservation(formValues)
            .then(navigate(`/profile/${user._id}`))
    }
    
    if (!isAuthenticated) {
        return (
            <form className={styles.reservation}>
                <h2>You need to have an account if you want to make a reservation</h2>
                <h2>&#8595;</h2>

                <Link to='/login'>Login</Link>
            </form>
        )
    }

    return (
        <form className={styles.reservation} onSubmit={onSubmitHandler}>
            <h2>Reservation</h2>

            <label>Choose Date</label>
            <input 
                type='date'
                name='date'
                min={minDate}
                max={maxDate}
                required
                value={formValues.date}
                onChange={onChangeHandler}
            />
            <label>Choose Time</label>
            <input 
                type='time'
                name='time'
                min="09:00"
                max="19:00"
                required
                value={formValues.time}
                onChange={onChangeHandler}
            />
            
            <div className={styles.buttons}>
                <button>Reserve</button>
                <button onClick={onReturnHandler}>Return</button>
            </div>
        </form>
    )
}

export default Reservation