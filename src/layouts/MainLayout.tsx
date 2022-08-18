import Events from "../components/Events";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Team from "../components/Team";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Faq />
      <Events />
      <Team />
      <Footer />
    </>
  );
};

export default MainLayout;
