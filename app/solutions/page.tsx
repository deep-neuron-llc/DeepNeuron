"use client";
import NavBar from "../components/nav-bar/nav-bar";
import CustomPaper from "../components/custom-paper/custom-paper";
import { Stack, Typography } from "@mui/material";

const Solutions = () => {
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
            <b>Solutions</b>
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

export default Solutions;
