"use client";
import React from "react";
import NavBar from "../components/nav-bar/nav-bar";
import CustomPaper from "../components/custom-paper/custom-paper";
import { Stack, Typography } from "@mui/material";

const Learning = () => {
  return (
    <NavBar>
      <CustomPaper alt small>
        <Stack gap={1}>
          <Typography
            variant="h3"
            color="primary"
            sx={{ textTransform: "uppercase" }}
            align="center"
          >
            <b>Learning</b>
          </Typography>
          <Typography
            sx={{ typography: ["body1", "h6"] }}
            align="center"
            gutterBottom
          >
            Under construction!
          </Typography>
        </Stack>
      </CustomPaper>
    </NavBar>
  );
};

export default Learning;
