"use client";
import HeaderForm from "@components/header/components/HeaderForm";
import React from "react";
import Form2 from "./components/Form2";
import Footer from "@components/footer/Footer";

const page = () => {
  return (
    <div
      className="bg-repeat "
      style={{ backgroundImage: "url('/images/header/bg-footer.jpeg')" }}
    >
      <HeaderForm />
      <Form2 />
      <Footer />
    </div>
  );
};

export default page;
