import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { register } from "../../services/authService"
import styles from './Register.module.css'


const Register = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'

    const { userLogin } = useContext(AuthContext)
    const initialValues = { email: '', password: '', confirmPassword: ''}
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            {...formValues, [name]: value}
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if (formValues.password !== formValues.confirmPassword) {
            return
        }

        register(formValues.email, formValues.password)
            .then(data => {
                userLogin(data)
                navigate('/')
            })
    }

    return (
        <form className={styles.register} onSubmit={onSubmitHandler}>
            <h2>Register</h2>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formValues.email}
                onChange={onChangeHandler}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={formValues.password}
                onChange={onChangeHandler}
            />
            <input 
                type="password" 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                value={formValues.confirmPassword}
                onChange={onChangeHandler}
            />
            <button>Submit</button>
            <p>Already have a profile? Click <Link to='/login'>here</Link></p>
        </form>
    )
}

export default Register