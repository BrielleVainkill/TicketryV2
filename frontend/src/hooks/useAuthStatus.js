import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const { user } = useSelector(state => state.auth)

  console.log(user);
  console.log("loggedIn:", loggedIn);
  console.log("isAdmin:", isAdmin);

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
      setIsAdmin(user.isAdmin) 
    } else {
      setLoggedIn(false)
      setIsAdmin(false)
    }
    setCheckingStatus(false)
  }, [user])
  return { loggedIn, checkingStatus, isAdmin }
}
