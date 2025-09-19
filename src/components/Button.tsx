import React from "react"
import { Button as MuiButton, useTheme } from "@mui/material"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "accent"
  size?: "small" | "medium" | "large"
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
}) => {
  const theme = useTheme()

  const getVariantStyles = () => {
    const baseStyles = {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      borderRadius: "8px",
      transition: "all 0.3s ease",
      textTransform: "none" as const,
      padding:
        size === "small"
          ? "6px 12px"
          : size === "large"
          ? "12px 24px"
          : "10px 20px",
      fontSize:
        size === "small"
          ? "0.875rem"
          : size === "large"
          ? "1.125rem"
          : "1rem",
      border: "1px solid",
      minWidth: "auto",
    }

    const variants = {
      primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
          boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
        },
      },
      secondary: {
        backgroundColor: "transparent",
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      },
      accent: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderColor: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          borderColor: theme.palette.secondary.dark,
          boxShadow: `0 4px 12px ${theme.palette.secondary.main}30`,
        },
      },
    }

    return {
      ...baseStyles,
      ...(variants[variant] || variants.primary),
    }
  }

  return (
    <MuiButton
      onClick={onClick}
      sx={getVariantStyles()}
      className={className}
    >
      {children}
    </MuiButton>
  )
}

export default Button
