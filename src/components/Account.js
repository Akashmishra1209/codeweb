import React from 'react'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'
import { Navigate } from 'react-router-dom'
export default function Account() {
    const { isAuthenticated } = useKindeAuth()
    return (
        <div className='text-center bg-black'>
         {isAuthenticated ? "Welcome":<Navigate to="/userlogin"/>}
        </div>
    )
}
