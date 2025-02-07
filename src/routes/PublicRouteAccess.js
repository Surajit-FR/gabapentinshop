import React from 'react'
// import { Navigate, useLocation } from "react-router-dom";

function PublicRouteAccess({children}) {
    // const location= useLocation()
  return (
    <>
    {/* <Navigate to={location.state?.from?.pathname || "/"} state={{ from: location }} replace />; */}
    {
    // children? children : 
    // <Navigate to={location.state?.from?.pathname || "/home"} state={{ from: location }} replace />
    children
    }
    </>
  )
}

export default PublicRouteAccess