import { useCustomTheme } from "@/theme";
import { Container, Paper } from "@mui/material";
import React, { ReactNode } from "react";

interface CustomPaperProp {
  children: ReactNode;
  alt?: boolean;
  small?: boolean;
}

const CustomPaper = ({
  children,
  alt = false,
  small = false,
}: CustomPaperProp) => {
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
        <Container
          maxWidth="lg"
          sx={{ px: 2, py: small ? 0 : 16, height: "100%" }}
        >
          {children}
        </Container>
      </Paper>
    </>
  );
};

export default CustomPaper;
