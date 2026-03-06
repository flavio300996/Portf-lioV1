import { styled } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';

export const StyledNavLink = styled("a")(() => ({
  textDecoration: "none",
  color: "inherit",
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
      display: "none",
  },
  [theme.breakpoints.up('md')]: {
      display: "flex",
      justifyContent: "space-evenly",
  },
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
      display: "flex",
      justifyContent: "end",
  },
  [theme.breakpoints.up('md')]: {
      display: "flex",
  },
}));
