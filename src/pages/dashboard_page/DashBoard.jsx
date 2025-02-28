import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/fekki-logo.png";
import LeftImage from "../../assets/leftside.png";
import RightImage from "../../assets/rightside.png";
import SettingImage from "../../assets/settings.png";

const pages = [
  { name: "Dashboard", path: "/" },
  { name: "Job Description", path: "/job-description" },
  { name: "Interview", path: "/interview" },
  { name: "Candidate", path: "/candidate" },
  { name: "CRM", path: "/crm" },
  { name: "Operations", path: "/operations" },
  { name: "Vendor", path: "/vendor" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }} // Now aligned to the left
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }} // Now aligned to the left
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{page.name}</Typography>{" "}
                  {/* Align text to the left */}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Left & Right Images - Only Visible on Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button sx={{ minWidth: "unset" }}>
              <img
                src={LeftImage}
                alt="Left"
                style={{ height: "30px", maxWidth: "100%" }}
              />
            </Button>

            <Button sx={{ minWidth: "unset" }}>
              <img
                src={RightImage}
                alt="Right"
                style={{ height: "30px", maxWidth: "100%" }}
              />
            </Button>
          </Box>

          {/* Logo - Always Visible */}
          <Button
            sx={{
              minWidth: "unset",
              flexGrow: { xs: 1, md: 0 },
              textAlign: "center",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: "35px", maxWidth: "100%" }}
            />
          </Button>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  padding: "10px 20px",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Profile Section */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button
                  sx={{
                    minWidth: "unset",
                    flexGrow: { xs: 1, md: 0 },
                    textAlign: "center",
                  }}
                >
                  <img
                    src={SettingImage}
                    alt="SettingImage"
                    style={{ height: "35px", maxWidth: "100%" }}
                  />
                </Button>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User" src="/static/images/avatar/2.jpg" />
                </IconButton>
                <Typography
                  sx={{
                    fontWeight: 500,
                    textTransform: "capitalize",
                    fontSize: "14px",
                  }}
                >
                  Raju
                </Typography>
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
