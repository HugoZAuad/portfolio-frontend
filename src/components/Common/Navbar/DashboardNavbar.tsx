import React from "react"
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout"
import { useAuth } from "../../../contexts/AuthContext"
import { useFeedback } from "../../../contexts/FeedbackContext"
import { useNavigate } from "react-router-dom"

const DashboardNavbar: React.FC = () => {
  const { logout } = useAuth()
  const { showFeedback } = useFeedback()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      showFeedback("Logout realizado com sucesso!", "success")
      navigate("/login")
    } catch {
      showFeedback("Erro ao deslogar.", "error")
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1a1a2e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Painel de Hugo
        </Typography>
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default DashboardNavbar
