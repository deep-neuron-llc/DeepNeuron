"use client";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { useState, useContext, createContext, ReactNode } from "react";

type CustomThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  handleLightMode: () => void;
};

const CustomThemeContext = createContext<CustomThemeContextType | undefined>(
  undefined
);

const globalTheme = {
  cssVariables: true,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
};

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((p) => !p);
  const handleLightMode = () => setDarkMode(false);

  const darkTheme = createTheme({
    palette: {
      primary: { main: "#01E9BD" },
      mode: "dark",
      background: {
        // default: "#1A232E",
        // paper: "#ffffff",
      },
    },
    ...globalTheme,
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#f0f0f0",
        // paper: "#ffffff",
      },
    },
    ...globalTheme,
  });

  return (
    <CustomThemeContext.Provider
      value={{ darkMode, toggleDarkMode, handleLightMode }}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

const theme = createTheme(globalTheme);

const useCustomTheme = () => {
  const context = useContext(CustomThemeContext);
  if (!context) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
};

export { CustomThemeProvider, CustomThemeContext, theme, useCustomTheme };
