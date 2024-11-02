// @ts-nocheck
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'
import {createContext, useState, useEffect} from 'react'


export const AuthContext = createContext()

function AuthProvider({children}) {

    const [userData, setUserData] = useState([])
    
    useEffect(() => {
        const {employees, admin} = getLocalStorage()
        if (employees.length === 0 && admin.length === 0) {
          setLocalStorage()
        }
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
