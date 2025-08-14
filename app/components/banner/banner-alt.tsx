import React from "react";
import CustomPaper from "../custom-paper/custom-paper";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import navigationItems from "../nav-bar/utils/navigation-data";

interface BannerAlt {
  alt?: boolean;
}
const BannerAlt = ({ alt = false }: BannerAlt) => {
  return (
    <>
      <CustomPaper alt={alt}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "50vh" }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              typography: { xs: "h3", md: "h2" },
              textTransform: "uppercase",
              pb: 6,
            }}
            gutterBottom
          >
            Get to{" "}
            <Typography
              component="span"
              color="primary"
              gutterBottom
              sx={{
                typography: { xs: "h3", md: "h2" },
                textDecoration: "underline",
                textUnderlineOffset: "8px",
                color: "primary.main",
              }}
            >
              Know us
            </Typography>{" "}
            & what we do
          </Typography>
          <Typography variant="h5">
            When we sit together, new ideas form. We shape those ideas into
            reality.
          </Typography>
          <Box sx={{ pt: 4 }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href={navigationItems.contactUs.path}
            >
              Get in Touch
            </Button>
          </Box>
        </Grid>
      </CustomPaper>
    </>
  );
};

export default BannerAlt;
