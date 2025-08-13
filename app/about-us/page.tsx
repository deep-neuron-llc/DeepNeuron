"use client";
import NavBar from "../components/nav-bar/nav-bar";
import Banner from "../components/banner/banner";
import TeamCarousel from "./component/team-carousel/team-carousel";

const AboutUs = () => {
  return (
    <NavBar>
      <Banner
        titleStrong="About Us"
        subtitle="Since 2025, Deep Neuron has facilitated growth for businesses with comprehensive AI solutions. Our team has executed many projects and assisted many clients globally."
      />
      <TeamCarousel />
    </NavBar>
  );
};

export default AboutUs;
