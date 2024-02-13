import React from 'react'
import { useState } from 'react'

export const AuthContext = React.createContext()
function AuthContextProvider({children}) {
  const [isAuth,setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{isAuth,setIsAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
