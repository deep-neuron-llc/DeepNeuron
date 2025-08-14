import React from "react";
import NavBar from "../components/nav-bar/nav-bar";
import Banner from "../components/banner/banner";
import ServiceCarousel from "@/app/start/components/service-carousel/service-carousel";
import ServiceCards from "@/app/start/components/service-cards/service-cards";
import {
  industryServiceCardData,
  serviceCardData,
} from "@/app/start/components/service-cards/utils/service-card-data";
import BannerKnowUs from "../components/banner/banner-know-us";
import navigationItems from "../components/nav-bar/utils/navigation-data";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Start = () => {
  return (
    <div>
      <NavBar>
        <Banner
          home
          title="Transform your business with the power of"
          titleStrong="Ai Solutions"
          subtitle="We help companies like yours to design, develop, and deploy cutting edge AI solutions that drive results. From idea to production, we are your partner in intelligent innovation."
          button
          buttonText="Book an appointment"
          buttonIcon={CalendarMonthIcon}
          handler={navigationItems.contactUs.path}
        />
        <ServiceCarousel />
        <ServiceCards
          alt
          strongTitle="Top-notch"
          title="Service & Support"
          data={serviceCardData}
        />
        <ServiceCards
          strongTitle="Industries"
          title="We serve"
          data={industryServiceCardData}
        />
        <BannerKnowUs alt />
      </NavBar>
    </div>
  );
};

export default Start;
