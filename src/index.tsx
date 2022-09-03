import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "tw-elements";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import BackToTop from "./components/Misc/BackToTop";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const EventLayout = lazy(() => import("./layouts/EventLayout"));

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/events/:eventid" element={<EventLayout />} />
        {/* <Route path="*" element={<NoPageLayout />} /> */}
      </Routes>
    </BrowserRouter>
    <Footer />
    <BackToTop />
  </React.StrictMode>
);
