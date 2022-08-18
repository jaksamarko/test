import banner from "../assets/images/banner.jpg";

const Header = () => {
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-black pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div
              className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-4 text-3xl font-bold leading-snug text-primary sm:text-4xl sm:leading-snug md:text-[45px] md:leading-snug">
                LANOSCH
              </h1>
              <p className="mx-auto mb-10 max-w-[600px] text-base text-primary sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed">
                Lanni vagy nem lanni
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
              data-wow-delay=".25s"
            >
              <div className="mt-16">
                <img
                  src={banner}
                  alt="banner"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
