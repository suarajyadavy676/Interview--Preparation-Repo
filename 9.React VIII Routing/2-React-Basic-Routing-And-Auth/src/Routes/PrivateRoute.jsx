import React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContextProvider'
function PrivateRoute({children}) {
  const {isAuth} = React.useContext(AuthContext)
  if(!isAuth){
    return <Navigate to="/login"/>
  }
  return (children)
}

export default PrivateRoute
