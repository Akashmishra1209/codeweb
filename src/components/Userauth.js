import React from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
export default function Userauth() {
    const { login, register,isAuthenticated } = useKindeAuth();
    return (<>
        <div>Userauth</div>
        <button onClick={register} type="button">Register</button>
        <button onClick={login} type="button">Log In</button>
    </>
    )
}
