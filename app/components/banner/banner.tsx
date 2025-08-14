"use client";
import React from "react";
import { useCustomTheme } from "@/theme";
import { SvgIconComponent } from "@mui/icons-material";
import { Button, Divider, Grid, Paper, Typography } from "@mui/material";
import Link from "next/link";

interface BannerProps {
  home?: boolean;
  title?: string;
  titleStrong?: string;
  subtitle?: string;
  button?: boolean;
  buttonText?: string;
  buttonIcon?: SvgIconComponent;
  handler?: string;
}

const Banner = ({
  home = false,
  title,
  titleStrong,
  subtitle,
  button,
  buttonText,
  buttonIcon,
  handler,
}: BannerProps) => {
  const { darkMode } = useCustomTheme();
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          height: home ? "95vh" : "35vh",
          background: darkMode
            ? "linear-gradient(to bottom, #121212 0%, #1A232E 100%)"
            : undefined,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <Grid size={{ xs: 12, md: 10, xl: 7 }} sx={{ p: 1.5 }}>
            <Typography
              sx={{
                typography: { xs: "h3", md: "h1" },
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
                typography: { xs: "h3", md: "h1" },
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                textTransform: "uppercase",
                pb: 1.5,
              }}
            >
              {titleStrong}
            </Typography>
            <Typography
              sx={{ typography: ["body1", "h5"] }}
              align="center"
              gutterBottom
            >
              {subtitle}
            </Typography>
            {button && (
              <Grid size={{ xs: 12 }} sx={{ pt: { xs: 2, md: 5 } }}>
                <Grid container justifyContent="center">
                  <Button
                    size="large"
                    startIcon={
                      buttonIcon ? React.createElement(buttonIcon) : undefined
                    }
                    variant="contained"
                    component={Link}
                    href={handler}
                  >
                    {buttonText}
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Divider />
        </Grid>
      </Paper>
    </>
  );
};

export default Banner;
