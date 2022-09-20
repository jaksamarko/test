import About from '../components/About';
import Contact from '../components/Contact';
import Events from '../components/Events';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Header from '../components/Header';
import JustDance from '../components/JustDance';
import BackToTop from '../components/Misc/BackToTop';
import Navbar from '../components/Navbar';
import Team from '../components/Team';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Team />
			<JustDance />
			<Events />
			<Faq />
			<Contact />
			<Footer />
			<BackToTop />
		</>
	);
};

export default MainLayout;
