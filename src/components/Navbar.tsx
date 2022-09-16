import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import NavbarButton from './Navbar/NavbarButton';
import PageLink, { PageLinkInterface } from './Navbar/PageLink';

const links: PageLinkInterface[] = [
	{ text: 'Főoldal', href: '/#home' },
	{ text: 'Rólunk', href: '/#about' },
	{ text: 'FAQ', href: '/#faq' },
	{ text: 'Nyitások', href: '/#events' },
	{ text: 'Tagok', href: '/#team' },
	{ text: 'Bérlés', href: '/#contact' },
];

const Navbar = () => {
	const [navbarHide, setNavbarHide] = useState(true);

	const [active, setActive] = useState(links[0].href);

	const handleScroll = (ev: Event) => {
		const scrollPos =
			(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) + 73;
		for (const link of links) {
			const refElement = document.getElementById(`${link.href.split('#')[1]}`) as HTMLElement;
			if (!refElement) continue;
			if (
				refElement.offsetTop <= scrollPos &&
				refElement.offsetTop + refElement.offsetHeight > scrollPos
			)
				setActive(link.href);
		}
	};
	useEffect(() => {
		//window.removeEventListener("scroll", handleScroll);
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div
			className={`ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent sticky`}
		>
			<div className="container">
				<div className="relative -mx-4 flex items-center justify-between">
					<div className="w-60 max-w-full px-4">
						<a href="index.html" className="navbar-logo block w-full py-5">
							<img src={logo} alt="logo" className="header-logo w-full" />
						</a>
					</div>
					<div className="flex w-full items-center justify-between px-4">
						<div>
							<button
								id="navbarToggler"
								onClick={() => setNavbarHide(!navbarHide)}
								className={`${
									navbarHide ? '' : 'navbarTogglerActive'
								} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
							>
								<span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
								<span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
								<span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
							</button>
							<nav
								id="navbarCollapse"
								className={`absolute right-4 top-full ${
									navbarHide ? 'hidden' : ''
								} w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
							>
								<ul className="block lg:flex">
									{links
										.map((v, ind) => {
											return (
												<div onClick={() => setNavbarHide(true)}>
													<PageLink {...v} active={active} key={ind} />
												</div>
											);
										})
										.concat(<NavbarButton inverseHide />)}
								</ul>
							</nav>
						</div>
						<NavbarButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
