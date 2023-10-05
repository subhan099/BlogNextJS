"use client";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
export default function Layout({ heading, children }) {
  return (
    <>
      <Header Heading={heading} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
