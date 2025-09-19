import React, { useState } from "react"
import { Box, TextField, useTheme, Typography } from "@mui/material"
import Button from "../../Common/Button/Button"
import axios from "axios"

const LoginForm: React.FC = () => {
  const theme = useTheme()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    try {
      const response = await axios.post(
        "https://portfolio-backend-dqxo.onrender.com/auth/login",
        formData,
        { withCredentials: true }
      )

      if (response.data.access_token) {
        console.log("Login bem-sucedido:", response.data)
      } else {
        setError(response.data.message || "Erro ao fazer login")
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Erro inesperado")
      } else {
        setError("Erro inesperado")
      }
    }
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
        sx={{
          mb: 2,
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      />

      <TextField
        fullWidth
        label="Senha"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
        sx={{
          mb: 3,
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.background.paper,
          },
        }}
      />

      {error && (
        <Typography
          variant="body2"
          sx={{ color: theme.palette.error.main, mb: 2 }}
        >
          {error}
        </Typography>
      )}

      <Button variant="primary" size="large">
        Entrar
      </Button>
    </Box>
  )
}

export default LoginForm
