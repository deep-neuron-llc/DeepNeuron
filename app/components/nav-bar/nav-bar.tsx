"use client";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LaunchIcon from '@mui/icons-material/Launch';
import { useState, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCustomTheme } from "@/theme";

interface Props {
  window?: () => Window;
  children: ReactNode;
}

const drawerWidth = 240;
const navItems = [
  { label: "Start", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "About Us", path: "/about-us" },
];

const NavBar = ({ window, children }: Props) => {
  const { toggleDarkMode } = useCustomTheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((p) => !p);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src="/deep-neuron-logo.svg"
        alt="Deep Neuron Logo"
        sx={{ height: 48, my: 1 }}
      />
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  sx={{ textAlign: "center" }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </List>
    </Box>
  );

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
                    color="inherit"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}
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
                <Grid
                  container
                  spacing={3}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                      <Button
                        key={item.label}
                        component={Link}
                        href={item.path}
                        color="primary"
                        sx={{
                          borderBottom: isActive
                            ? "2px solid currentColor"
                            : "none",
                          borderRadius: 0,
                        }}
                      >
                        {item.label}
                      </Button>
                    );
                  })}

                  <Button endIcon={<LaunchIcon />} href="/learning">
                    Learning
                  </Button>
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
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default NavBar;
