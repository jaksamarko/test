import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import logoSmall from '../assets/images/logo_small.svg';

const Footer = () => {
	const MAX_WIDTH = 768;
	const [smallLogo, setSmallLogo] = useState(window.innerWidth < MAX_WIDTH);

	function resize() {
		setSmallLogo(window.innerWidth < MAX_WIDTH);
	}

	useEffect(() => {
		window.addEventListener('resize', resize);
		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	/* useEffect(() => {
    console.log(smallLogo);
  }, [smallLogo]); */

	return (
		<footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
			<div className="sm:flex sm:items-center sm:justify-between">
				<a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
					<img src={logoSmall} className="mr-3 h-8" alt="Flowbite Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
						Lanosch
					</span>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
					<li>
						<a href="#about" className="mr-4 hover:underline md:mr-6 ">
							Rólunk
						</a>
					</li>
					<li>
						<a href="#justdance" className="mr-4 hover:underline md:mr-6 disabled">
							Szolgák
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6 ">
							Licensz
						</a>
					</li>
					<li>
						<a href="#contact" className="hover:underline">
							Kapcsolat
						</a>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2022{' '}
				<a href="https://flowbite.com/" className="hover:underline">
					Lanosch™
				</a>
				. Minden jog fentartva
			</span>
			{/* <footer classNameName="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
			<hr classNameName="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
			<div classNameName="flex items-center justify-between">
				<div classNameName="w-full md:w-1/2 lg:w-1/2">
					<a classNameName="flex items-center mb-4 sm:mb-0">
						<img src={smallLogo ? logoSmall : logo} classNameName="mr-3 h-8" alt="Lanosch Logo" />
					</a>
					<span classNameName="basis-11/12 text-sm text-gray-500 text-center dark:text-gray-400 items-center">
						© {new Date().getFullYear()} <a classNameName="hover:underline">Lanosch Reszort™</a>. All
						Rights Reserved.
					</span>
				</div>
				<div classNameName="lg:w-1/2">
					<ul classNameName="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a href="#" classNameName="mr-4 hover:underline md:mr-6 ">
								About
							</a>
						</li>
						<li>
							<a href="#" classNameName="mr-4 hover:underline md:mr-6">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" classNameName="mr-4 hover:underline md:mr-6 ">
								Licensing
							</a>
						</li>
						<li>
							<a href="#" classNameName="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer> */}
		</footer>
	);
};

export default Footer;
