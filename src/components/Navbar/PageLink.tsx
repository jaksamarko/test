import React from "react";

export interface PageLinkInterface {
  text: string;
  href: string;
  active?: boolean;
}

const PageLink = (data: PageLinkInterface) => {
  const href = `#${data.href}`;
  const onClick = (ev: React.MouseEvent<HTMLLIElement>) => {
    ev.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <li className="group relative" onClick={onClick}>
      <a
        href={href}
        className={`ud-menu-scroll mx-8 flex py-2 text-base text-dark group-hover:text-primary lg:mr-0 lg:inline-flex lg:py-6 lg:px-0 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70
        ${data.active ? "active" : ""} `}
      >
        {data.text}
      </a>
    </li>
  );
};

export default PageLink;
