import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="h-screen w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
