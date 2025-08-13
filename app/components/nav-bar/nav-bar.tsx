"use client";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LaunchIcon from "@mui/icons-material/Launch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCustomTheme } from "@/theme";
import CustomDrawer from "./components/custom-drawer";
import navigationItems from "./utils/navigation-data";
import Footer from "../footer/footer";

interface Props {
  window?: () => Window;
  children: ReactNode;
}

const drawerWidth = 330;

const NavBar = ({ window, children }: Props) => {
  const { toggleDarkMode, darkMode } = useCustomTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((p) => !p);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        color="transparent"
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: darkMode ? "#121212" : "white" }}
      >
        <Grid container justifyContent={{ md: "center" }}>
          <Grid size={{ xs: 12, xl: 7 }}>
            <Grid
              container
              spacing={2}
              justifyContent="space-between"
              sx={{ p: 2 }}
            >
              <Grid size="auto">
                <Grid container alignItems="center">
                  <IconButton
                    color="primary"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      mx: 1,
                      display: { md: "none" },
                      backgroundColor: "primary.main",
                      color: darkMode ? "black" : "white",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box
                    component="img"
                    src="/deep-neuron-logo.svg"
                    alt="Deep Neuron Logo"
                    sx={{ height: 48, mr: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid size="auto">
                <Grid container spacing={2}>
                  <Grid size="auto">
                    <Grid
                      container
                      spacing={1}
                      sx={{ display: { xs: "none", md: "flex" } }}
                    >
                      <Button
                        component={Link}
                        href={navigationItems.home.path}
                        color="primary"
                        sx={{
                          borderBottom:
                            pathname === navigationItems.home.path
                              ? "2px solid currentColor"
                              : "none",
                          borderRadius: 0,
                        }}
                      >
                        {navigationItems.home.label}
                      </Button>

                      <Button
                        onClick={handleClick}
                        color="primary"
                        sx={{
                          borderBottom:
                            pathname === navigationItems.solutions.path
                              ? "2px solid currentColor"
                              : "none",
                          borderRadius: 0,
                        }}
                        endIcon={
                          <KeyboardArrowDownIcon
                            sx={{
                              transition: "transform 0.3s ease",
                              transform: open
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        }
                      >
                        {navigationItems.solutions.label}
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        sx={{ width: 400, maxWidth: "100%" }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        {navigationItems.solutions.children.map((child) => (
                          <MenuItem onClick={handleClose} key={child.id}>
                            <ListItemIcon>{child.icon}</ListItemIcon>
                            <ListItemText>
                              <Typography>{child.label}</Typography>
                              <Typography variant="body2">
                                {child.description}
                              </Typography>
                            </ListItemText>
                            <Typography sx={{ ml: 3 }}>
                              {child.linkIcon}
                            </Typography>
                          </MenuItem>
                        ))}
                      </Menu>

                      <Button
                        component={Link}
                        href={navigationItems.aboutUs.path}
                        color="primary"
                        sx={{
                          borderBottom:
                            pathname === navigationItems.aboutUs.path
                              ? "2px solid currentColor"
                              : "none",
                          borderRadius: 0,
                        }}
                      >
                        {navigationItems.aboutUs.label}
                      </Button>

                      <Button endIcon={<LaunchIcon />} href="/learning">
                        Learning
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    spacing={1}
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    <Button variant="contained" href="/contact">
                      Get in touch
                    </Button>
                    <IconButton color="primary" onClick={toggleDarkMode}>
                      <DarkModeIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <CustomDrawer />
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default NavBar;
