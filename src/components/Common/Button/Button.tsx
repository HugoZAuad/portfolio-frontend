import React from "react";
import { Button as MuiButton, useTheme } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
  type = "button",
  disabled = false,
}) => {
  const theme = useTheme();

  const getMuiVariant = () => {
    if (variant === "primary" || variant === "accent") return "contained";
    if (variant === "secondary") return "outlined";
    return "text";
  };

  const getStyles = () => {
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
      minWidth: "auto",
    };

    const variants = {
      primary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
          boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
        },
      },
      secondary: {
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
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
          boxShadow: `0 4px 12px ${theme.palette.secondary.main}30`,
        },
      },
    };

    return {
      ...baseStyles,
      ...(variants[variant] || variants.primary),
    };
  };

  return (
    <MuiButton
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant={getMuiVariant()}
      sx={getStyles()}
      className={className}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
