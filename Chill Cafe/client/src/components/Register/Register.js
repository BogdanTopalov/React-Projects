import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { register } from "../../services/authService"


const Register = () => {
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
            .catch(() => {

            })
    }


    return (
        <form className="login-register" onSubmit={onSubmitHandler}>
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