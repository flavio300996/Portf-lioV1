import { styled } from "@mui/material";

export const ButtonStylezed = 
    styled("button")(({ theme }) => ({
          backgroundColor: "transparent",
          border: `1px solid $(theme.palette.primary.contrastText)`,
          borderRadius: "3xp",
          padding: "5px 15px",
          width: "100%",
          color: theme.palette.primary.contrastText,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          '&:hover': {
            backgroundColor: theme.palette.secondary.light
          }
    }))