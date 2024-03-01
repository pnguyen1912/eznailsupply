import React from "react";
import LandingPage from "views/LandingPage";
import AboutPage from "views/AboutPage";
import ServicesPage from "views/ServicesPage";
import ProductsPage from "views/ProductsPage";
import ContactPage from "views/ContactPage";
import Footer from "views/Footer";
import Helmet from "react-helmet";
import customer from "customer.json";

export default function App() {
  let city = customer.address.split(" ").splice(4, 1).join();
  let state = customer.address.split(" ").splice(5, 1).join();
  let zipCode = customer.address.split(" ").splice(6, 1).join();

  return (
    <>
      <LandingPage />
      <AboutPage />
      {/* <ServicesPage /> */}
      <ProductsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
