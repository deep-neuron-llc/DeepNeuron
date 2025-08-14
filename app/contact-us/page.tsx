"use client";
import NavBar from "../components/nav-bar/nav-bar";
import Banner from "../components/banner/banner";
import ContactUsForm from "./component/contact-us-form";

const ContactUs = () => {
  return (
    <NavBar>
      <Banner titleStrong="Contact Us" />
      <ContactUsForm />
    </NavBar>
  );
};

export default ContactUs;
