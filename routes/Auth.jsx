
import { Navigate } from 'react-router-dom'

const Auth = ({ children }) => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return (
        user.role == "admin" ? children : <Navigate to='/login' />
    )
}

export default Auth
