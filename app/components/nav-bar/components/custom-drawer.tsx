"use client";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationItems from "../utils/navigation-data";

interface DrawerProps {
  toggleDrawer: () => void;
}

const CustomDrawer = ({ toggleDrawer }: DrawerProps) => {
  const pathname = usePathname();
  return (
    <Box onClick={toggleDrawer} sx={{ textAlign: "center" }}>
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
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={navigationItems.home.label} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === navigationItems.solutions.path}
              component={Link}
              href={navigationItems.solutions.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={navigationItems.solutions.label} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              selected={pathname === navigationItems.aboutUs.path}
              component={Link}
              href={navigationItems.aboutUs.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={navigationItems.aboutUs.label} />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href=""
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Learning" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              href=""
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="Contact Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </List>
    </Box>
  );
};

export default CustomDrawer;
