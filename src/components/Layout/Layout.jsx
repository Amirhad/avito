import React from "react";
import { Outlet } from "react-router-dom";
import { Logo } from "../content/Logo/Logo";
import { Search } from "../content/Search/Search";
import { Header } from "../header/Header";
import { Footer } from "../Footer/Footer";
export const Layout = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Logo />
        <Search />
      </div>

      <Outlet />
      <Footer />
    </>
  );
};
