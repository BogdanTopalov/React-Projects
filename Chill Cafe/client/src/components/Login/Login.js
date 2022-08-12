import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { login } from "../../services/authService"
import styles from './Login.module.css'


const Login = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'

    const initialValues = { email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            {...formValues, [name]: value}
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        login(formValues.email, formValues.password)
            .then(data => {
                userLogin(data)
                navigate('/')
            })
    }

    return (
        <form className={styles.login} onSubmit={onSubmitHandler}>
            <h2>Login</h2>
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={ formValues.email } 
                onChange={onChangeHandler} 
            />
            {/* <p>{formErrors.email}</p> */}
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={ formValues.password } 
                onChange={onChangeHandler} 
            />
            {/* <p>{formErrors.password}</p> */}
            <button>Submit</button>
            <p>No profile? Click <Link to='/register'>here</Link></p>
        </form>
    )
}

export default Login