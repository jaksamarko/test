import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import logoSmall from "../assets/images/logo_small.svg";

const Footer = () => {
  const MAX_WIDTH = 768;
  const [smallLogo, setSmallLogo] = useState(window.innerWidth < MAX_WIDTH);

  function resize() {
    setSmallLogo(window.innerWidth < MAX_WIDTH);
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* useEffect(() => {
    console.log(smallLogo);
  }, [smallLogo]); */

  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex items-center justify-between">
        <a className="flex items-center mb-4 sm:mb-0">
          <img
            src={smallLogo ? logoSmall : logo}
            className="mr-3 h-8"
            alt="Lanosch Logo"
          />
        </a>
        <span className="basis-11/12 text-sm text-gray-500 text-center dark:text-gray-400 items-center">
          © {new Date().getFullYear()}{" "}
          <a className="hover:underline">Lanosch Reszort™</a>. All Rights
          Reserved.
        </span>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
