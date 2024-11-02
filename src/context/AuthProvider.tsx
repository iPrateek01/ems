// @ts-nocheck
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import {createContext, useState, useEffect} from 'react'


export const AuthContext = createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        if(userData.length === 0) {
          setLocalStorage()
        }
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