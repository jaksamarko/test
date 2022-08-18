import { Navigate } from "react-router-dom";

export interface LinkButtonProps {
  title: string;
  page_url: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <li>
      <a
        href="javascript:void(0)"
        onClick={() => {
          return <Navigate replace to={props.page_url} />;
        }}
        className="mx-2 my-1 inline-block rounded-md bg-[#f5f8ff] py-3 px-6 text-base font-medium text-dark hover:bg-primary hover:text-white"
      >
        {props.title}
      </a>
    </li>
  );
};

export default LinkButton;
