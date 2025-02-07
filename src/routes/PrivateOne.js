import React from 'react'
import { Outlet } from "react-router-dom"


const PrivateOne = ({ children }) => {
    // const location = useLocation();
    return (

        <>
            {
                // children ? children : 
                // <Navigate to="/" state={{ from: location }} replace />
                // <Navigate to="/home" state={{ from: location }} replace />
                children ? children :

                    <Outlet />
            }
        </>
    )
}

export default PrivateOne