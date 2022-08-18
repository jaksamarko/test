import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BackToTop from "./components/Misc/BackToTop";
import Navbar from "./components/Navbar";
import EventLayout from "./layouts/EventLayout";
import MainLayout from "./layouts/MainLayout";
import NoPageLayout from "./layouts/NoPageLayout";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/events/:eventid" element={<EventLayout />} />
          <Route path="*" element={<NoPageLayout />} />
        </Routes>
      </BrowserRouter>
      <BackToTop />
    </>
  );
}

export default App;
