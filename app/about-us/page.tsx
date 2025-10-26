"use client";
import NavBar from "../components/nav-bar/nav-bar";
import TeamCarousel from "./component/team-carousel/team-carousel";
import OurMission from "./component/our-mission";
import OurVision from "./component/our-vision";
import WhyUs from "./component/why-us";
import BannerKnowUs from "../components/banner/banner-know-us";
import OurPartners from "./component/our-partners";
import CustomPaper from "../components/custom-paper/custom-paper";
import { Stack, Typography } from "@mui/material";

const AboutUs = () => {
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
            <b>About Us</b>
          </Typography>
          <Typography
            sx={{ typography: ["body1", "h6"] }}
            align="center"
            gutterBottom
          >
            Since 2025, Deep Neuron has facilitated growth for businesses with
            comprehensive AI solutions. Our team has executed many projects and
            assisted many clients globally.
          </Typography>
        </Stack>
      </CustomPaper>
      <WhyUs />
      <OurMission />
      <OurVision />
      <OurPartners />
      <TeamCarousel />
      <BannerKnowUs alt />
    </NavBar>
  );
};

export default AboutUs;
