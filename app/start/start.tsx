import React from "react";
import NavBar from "../components/nav-bar/nav-bar";
import ServiceCarousel from "@/app/start/components/service-carousel/service-carousel";
import ServiceCards from "@/app/start/components/service-cards/service-cards";
import {
  industryServiceCardData,
  serviceCardData,
} from "@/app/start/components/service-cards/utils/service-card-data";
import BannerKnowUs from "../components/banner/banner-know-us";
import HomeBanner from "../components/banner/home-banner";

const Start = () => {
  return (
    <div>
      <NavBar>
        <HomeBanner />
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
