import { styled } from "@mui/material";

export const StyledHero = styled("div")(({ theme })=> ({
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      [theme.breakpoints.up('xs')]: { // <= mobile
        display: "block",
        padding: "20px",
        paddingTop: "100px",
        paddingBottom: "40px",
      },
      [theme.breakpoints.up('md')]: { // >= mobile
        display: "flex",
        alignItems: "center",
        PaddingTop: "100px",
        height: "100vh",
      },
    }))

export const StyledImg = styled("img")(({ theme })=> ({
      width: "80%",
      borderRadius: "50%",
      border: `1px solid ${ theme.palette.primary.contrastText }`,
      position: "relative",
    }))
