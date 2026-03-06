import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { StyledDesktopToolbar, StyledMobileToolbar, StyledNavLink } from "./styles";


export default function NavBar() {
  const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);

    if(element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>  
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
          <StyledMobileToolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleSmoothScroll("about")}>
                <StyledNavLink>About</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("skills")}>
                <StyledNavLink>Skills</StyledNavLink>
              </MenuItem>
              <MenuItem onClick={() => handleSmoothScroll("projects")}>
                <StyledNavLink>Projects</StyledNavLink>
              </MenuItem>
            </Menu>
          </StyledMobileToolbar>
          <StyledDesktopToolbar variant="regular">
            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <StyledNavLink>About</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("skills")}>
              <StyledNavLink>Skills</StyledNavLink>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("projects")}>
              <StyledNavLink>Project</StyledNavLink>
            </MenuItem>
          </StyledDesktopToolbar>
        </AppBar>
      </Box>
    </>
  )
}
