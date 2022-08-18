import LinkButton, { LinkButtonProps } from "../components/Misc/LinkButton";

const NoPageLayout = () => {
  const buttons: LinkButtonProps[] = [
    {
      title: "Home",
      page_url: "/",
    },
  ];

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative mx-auto max-w-[850px] overflow-hidden rounded-lg bg-white py-20 px-8 text-center shadow-lg sm:px-12 md:px-[60px]"
              data-wow-delay=".2s"
            >
              <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl lg:text-[40px] xl:text-[42px]">
                404 - Nem találok ilyen oldalt.
              </h2>
              <h3 className="mb-8 text-xl font-normal text-dark-700 md:text-2xl">
                Esetleg ezek a linkek segítenek visszatalálni?
              </h3>
              <ul className="flex flex-wrap justify-center">
                {buttons.map((v, ind) => {
                  return <LinkButton {...v} key={ind} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="alert-1"
        className="flex p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
        role="alert"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-5 h-5 text-blue-700 dark:text-blue-800"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Info</span>
        <div className="ml-3 text-sm font-medium text-blue-700 dark:text-blue-800">
          A simple info alert with an{" "}
          <a
            href="#"
            className="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900"
          >
            example link
          </a>
          . Give it a click if you like.
        </div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300"
          data-dismiss-target="#alert-1"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NoPageLayout;
