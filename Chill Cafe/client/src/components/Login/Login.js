import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { login } from "../../services/authService"


const Login = () => {
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
            .catch(() => {

            })
    }

    return (
        <form className="login-register" onSubmit={onSubmitHandler}>
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