"use client";
import NavBar from "../components/nav-bar/nav-bar";
import Banner from "../components/banner/banner";
import TeamCarousel from "./component/team-carousel/team-carousel";
import OurMotivation from "./component/our-motivation";
import OurVision from "./component/our-vision";
import WhyUs from "./component/why-us";
import BannerKnowUs from "../components/banner/banner-know-us";
import OurPartners from "./component/our-partners";

const AboutUs = () => {
  return (
    <NavBar>
      <Banner
        titleStrong="About Us"
        subtitle="Since 2025, Deep Neuron has facilitated growth for businesses with comprehensive AI solutions. Our team has executed many projects and assisted many clients globally."
      />
      <WhyUs />
      <OurMotivation />
      <OurVision />
      <OurPartners />
      <TeamCarousel />
      <BannerKnowUs alt/>
    </NavBar>
  );
};

export default AboutUs;
