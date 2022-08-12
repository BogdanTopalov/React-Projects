import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { register } from "../../services/authService"
import styles from './Register.module.css'


const Register = () => {
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'

    const initialValues = { email: '', password: '', confirmPassword: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {}
        const emailRegex = /\S+@\S+\.\S+/

        if (!values.email) {
            errors.email = 'Please insert an email!'
        } else if (!emailRegex.test(values.email)) {
            errors.email = 'Wrong email format!'
        }

        if (!values.password) {
            errors.password = 'Please insert a password!'
        } else if (values.password.length < 5) {
            errors.password = 'Password must be 5 or more characters!'
        }

        if (!values.confirmPassword) {
            errors.confirmPassword = 'Please confirm your password!'
        } else if (values.confirmPassword != values.password) {
            errors.confirmPassword = 'The passwords dont\'t match!'
        }

        return errors
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setFormValues(
            { ...formValues, [name]: value }
        )
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const validateResult = validate(formValues)

        if (Object.keys(validateResult).length === 0) {
            register(formValues.email, formValues.password)
                .then(data => {
                    userLogin(data)
                    navigate('/')
                })
        } else {
            setFormErrors(validateResult)
        }
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
            {formErrors.email
                ? <p>{formErrors.email}</p>
                : <></>
            }
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={onChangeHandler}
            />
            {formErrors.password
                ? <p>{formErrors.password}</p>
                : <></>
            }
            <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={onChangeHandler}
            />
            {formErrors.confirmPassword
                ? <p>{formErrors.confirmPassword}</p>
                : <></>
            }
            <button>Submit</button>
            <p>Already have a profile? Click <Link to='/login'>here</Link></p>
        </form>
    )
}

export default Register