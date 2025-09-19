import React, { createContext, useContext, useEffect, useState } from "react"
import { checkAuth, logoutUser } from "../utils/authUtils"

interface AuthContextType {
  isAuthenticated: boolean
  loading: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated")
    if (storedAuth === "true") {
      setIsAuthenticated(true)
      setLoading(false)
    } else {
      checkAuth().then((result) => {
        setIsAuthenticated(result)
        setLoading(false)
        localStorage.setItem("isAuthenticated", String(result))
      })
    }
  }, [])

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem("isAuthenticated", "true")
  }

  const logout = async () => {
    try {
      await logoutUser()
    } catch (err) {
      console.warn("Erro ao deslogar:", err)
    } finally {
      setIsAuthenticated(false)
      localStorage.removeItem("isAuthenticated")
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
