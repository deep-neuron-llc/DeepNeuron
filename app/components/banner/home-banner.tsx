"use client";
import React from "react";
import { useCustomTheme } from "@/theme";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import navigationItems from "../nav-bar/utils/navigation-data";
import CustomPaper from "../custom-paper/custom-paper";

const HomeBanner = () => {
  const { darkMode } = useCustomTheme();
  const title = "Transform your business with the power of";
  const titleStrong = "Ai Solutions";
  const subtitle =
    "We help companies like yours to design, develop, and deploy cutting edge AI solutions that drive results. From idea to production, we are your partner in intelligent innovation.";
  return (
    <>
      <CustomPaper alt>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Container maxWidth="lg" sx={{ p: 1.5 }}>
            <Stack gap={1}>
              <Typography
                sx={{
                  typography: { xs: "h3", md: "h2" },
                  textTransform: "uppercase",
                }}
                align="center"
              >
                <b>{title}</b>
              </Typography>
              <Typography
                align="center"
                color="primary"
                gutterBottom
                sx={{
                  typography: { xs: "h3", md: "h2" },
                  textDecoration: "underline",
                  textUnderlineOffset: "8px",
                  textTransform: "uppercase",
                  pb: 1.5,
                }}
              >
                {titleStrong}
              </Typography>
              <Typography
                sx={{ typography: ["body1", "h6"] }}
                align="center"
                gutterBottom
              >
                {subtitle}
              </Typography>
              <Grid
                container
                justifyContent="center"
                sx={{ pt: { xs: 2, md: 5 } }}
              >
                <Button
                  size="large"
                  startIcon={<CalendarMonthIcon />}
                  variant="contained"
                  component={Link}
                  href={navigationItems.contactUs.path}
                >
                  Book an appointment
                </Button>
              </Grid>
            </Stack>
          </Container>
          <Divider />
        </Grid>
      </CustomPaper>
    </>
  );
};

export default HomeBanner;
