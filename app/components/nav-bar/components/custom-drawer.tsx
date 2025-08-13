"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationItems from "../utils/navigation-data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDrawer = () => {
  const pathname = usePathname();
  const [openSolutions, setOpenSolutions] = useState(true);
  const toggleOpenSolutions = () => {
    setOpenSolutions((p) => !p);
  };
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src="/deep-neuron-logo.svg"
        alt="Deep Neuron Logo"
        sx={{ height: 48, my: 1 }}
      />
      <Divider />
      <List>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === navigationItems.home.path}
              component={Link}
              href={navigationItems.home.path}
            >
              <ListItemIcon>{navigationItems.home.icon}</ListItemIcon>
              <ListItemText primary={navigationItems.home.label} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === navigationItems.solutions.path}
              onClick={toggleOpenSolutions}
            >
              <ListItemIcon>{navigationItems.solutions.icon}</ListItemIcon>
              <ListItemText primary={navigationItems.solutions.label} />
              <KeyboardArrowDownIcon
                sx={{
                  transition: "transform 0.3s ease",
                  transform: openSolutions ? "rotate(-180deg)" : "rotate(0deg)",
                }}
              />
            </ListItemButton>
          </ListItem>
          <Collapse in={openSolutions} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 2 }}>
              {navigationItems.solutions.children.map((child) => (
                <ListItemButton key={child.id}>
                  <ListItemIcon>{child.icon}</ListItemIcon>
                  <ListItemText
                    primary={child.label}
                    secondary={child.description}
                  />
                  {child.linkIcon}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === navigationItems.aboutUs.path}
              component={Link}
              href={navigationItems.aboutUs.path}
            >
              <ListItemIcon>{navigationItems.aboutUs.icon}</ListItemIcon>
              <ListItemText primary={navigationItems.aboutUs.label} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} href="">
              <ListItemIcon>{navigationItems.learning.icon}</ListItemIcon>
              <ListItemText primary={navigationItems.learning.label} />
              {navigationItems.learning.linkIcon}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Grid
              container
              justifyContent="center"
              sx={{ width: "100%", pt: 3 }}
            >
              <Button
                component={Link}
                href={navigationItems.contactUs.path}
                size="large"
                variant="contained"
                sx={{ textAlign: "center" }}
              >
                {navigationItems.contactUs.label}
              </Button>
            </Grid>
          </ListItem>
        </List>
      </List>
    </Box>
  );
};

export default CustomDrawer;
