import React, { useEffect } from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
export default function Userauth() {
    const { login, register, error,isAuthenticated } = useKindeAuth();
    useEffect(() => {
        console.log(isAuthenticated)
    }, [])
    
    return (<>
        <div>Userauth</div>
        <h1>{isAuthenticated?"Welcome":error}</h1>
        <button onClick={register} type="button">Register</button>
        <button onClick={login} type="button">Log In</button>
    </>
    )
}
