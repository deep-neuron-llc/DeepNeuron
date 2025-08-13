import { useCustomTheme } from "@/theme";
import { Grid, Paper } from "@mui/material";
import React, { ReactNode } from "react";

interface CustomPaperProp {
  children: ReactNode;
  alt?: boolean;
}

const CustomPaper = ({ children, alt = false }: CustomPaperProp) => {
  const { darkMode } = useCustomTheme();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          py: 10,
          background: darkMode
            ? alt
              ? "linear-gradient(to bottom, #121212 0%, #1A232E 100%)"
              : "linear-gradient(to bottom, #1A232E 0%, #121212 100%)"
            : undefined,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid size={{ xs: 12, md: 10, xl: 7 }} sx={{ p: 1 }}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CustomPaper;
