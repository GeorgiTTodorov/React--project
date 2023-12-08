import { Navigate } from "react-router-dom";

export default function AuthGuard (props) {

    const userData = localStorage.getItem('user');

    if (userData === null) {
        return <Navigate to='/login'/>
    }

    return (
        <>
        {props.children}
        </>
    )
}