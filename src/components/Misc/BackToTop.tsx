import { useEffect } from "react";

const BackToTop = () => {
  const handleScroll = () => {
    const backToTop = document.querySelector(".back-to-top") as HTMLElement;
    backToTop.style.display =
      (document.body.scrollTop || document.documentElement.scrollTop) > 50
        ? "flex"
        : "none";
  };

  useEffect(() => {
    window.removeEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a
      href="#"
      className="back-to-top fixed bottom-8 right-8 left-auto z-[999] hidden h-10 w-10 items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
    >
      <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white"></span>
    </a>
  );
};

export default BackToTop;
