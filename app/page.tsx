"use client";
import NavBar from "./components/nav-bar/nav-bar";
import Banner from "./components/banner/banner";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ServiceCarousel from "./components/service-carousel/service-carousel";
import ServiceCards from "./components/service-cards/service-cards";
import {
  serviceCardData,
  industryServiceCardData,
} from "./components/service-cards/utils/service-card-data";
import CustomPaper from "./components/custom-paper/custom-paper";
import { Typography } from "@mui/material";
import BannerAlt from "./components/banner/banner-alt";

export default function Home() {
  return (
    <>
      <NavBar>
        <Banner
          home
          title="Transform your business with the power of"
          titleStrong="Ai Solutions"
          subtitle="We help companies like yours to design, develop, and deploy cutting edge AI solutions that drive results. From idea to production, we are your partner in intelligent innovation."
          button
          buttonText="Book an appointment"
          buttonIcon={CalendarMonthIcon}
          handler={() => console.log("Contact Us")}
        />
        <ServiceCarousel />
        <ServiceCards
          alt
          strongTitle="Top-notch"
          title="Service & Support"
          data={serviceCardData}
        />
        <BannerAlt />
        <ServiceCards
          alt
          strongTitle="Industries"
          title="We serve"
          data={industryServiceCardData}
        />
      </NavBar>
    </>
  );
}
