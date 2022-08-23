import About from "../components/About";
import Events from "../components/Events";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Team from "../components/Team";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Faq />
      <Events />
      <About />
      <Team />
    </>
  );
};

export default MainLayout;
