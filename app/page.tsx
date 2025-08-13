"use client";
import NavBar from "./components/nav-bar/nav-bar";
import Banner from "./components/banner/banner";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ServiceCarousel from "./components/service-carousel/service-carousel";

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
      </NavBar>
    </>
  );
}
