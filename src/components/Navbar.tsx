import { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import PageLink, { PageLinkInterface } from "./Navbar/PageLink";

const links: PageLinkInterface[] = [
  { text: "Főoldal", href: "home" },
  { text: "Rólunk", href: "about" },
  { text: "FAQ", href: "faq" },
  { text: "Nyitások", href: "events" },
  { text: "Tagok", href: "team" },
  { text: "Bérlés", href: "contact" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [navbarHide, setNavbarHide] = useState(true);
  const handleScroll = (ev: Event) => {
    const scrollPos =
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop) + 73;
    for (let i = 0; i < links.length; i++) {
      const refElement = document.querySelector(
        `#${links[i].href}`
      ) as HTMLElement;
      if (!refElement) {
        links[i].active = false;
        continue;
      }
      if (
        refElement.offsetTop <= scrollPos &&
        refElement.offsetTop + refElement.offsetHeight > scrollPos
      ) {
        links.forEach((v, ind) => (v.active = i === ind));
      } else {
        links[i].active = false;
      }
    }

    const ud_header = document.querySelector(".ud-header") as HTMLElement;
    setSticky(window.pageYOffset > ud_header?.offsetTop);
  };
  useEffect(() => {
    //window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`ud-header absolute top-0 left-0 z-40 flex w-full items-center bg-transparent
    ${sticky ? "sticky" : ""}`}
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
                  navbarHide ? "" : "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full ${
                  navbarHide ? "hidden" : ""
                } w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:px-4 lg:shadow-none xl:px-6`}
              >
                <ul className="blcok lg:flex">
                  {links.map((v, ind) => {
                    return (
                      <div onClick={() => setNavbarHide(true)}>
                        <PageLink {...v} key={ind} />
                      </div>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              {/*  <a
                href="signin.html"
                className="loginBtn py-3 px-7 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a> */}
              <a
                href="signup.html"
                className="signUpBtn rounded-lg bg-white bg-opacity-20 py-3 px-6 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Csatlakozz!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
