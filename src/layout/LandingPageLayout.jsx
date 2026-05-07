import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Banner from "@/pages/landindPage/Banner";
import CustomerCalls from "@/pages/landindPage/CustomerCalls";
import FAQ from "@/pages/landindPage/FAQ";
import Features from "@/pages/landindPage/Features";
import Pricing from "@/pages/landindPage/Pricing";
import React from "react";


const LandingPageLayout = () => {
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <Banner />
      <Features />
      <Pricing />
      <FAQ />
      <CustomerCalls />
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
