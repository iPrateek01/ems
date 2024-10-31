import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import React, {createContext, useState, useEffect} from 'react'


export const AuthContext = createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        setLocalStorage()
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin}) 
    }, [])
     


  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider