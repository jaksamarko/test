import { useEffect, useState } from "react";
import Progress from "./Progress";

export interface AlertProps {
  spanText?: string;
  text?: string;
  color?: string;
  dismiss: () => void;
}

const Alert = (props: AlertProps) => {
  const [timeLeft, setTimeLeft] = useState(100);

  useEffect(() => {
    if (timeLeft <= 0) props.dismiss();

    const interV = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 30);

    return () => {
      clearInterval(interV);
    };
  }, [timeLeft]);

  return (
    <div
      id="alert-border"
      className={`left-1/2 -translate-x-1/2 fixed bottom-0 z-40 flex flex-wrap p-4 mb-2 text-sm text-${
        props.color || "green"
      }-700 bg-${props.color || "green"}-100 rounded-lg dark:bg-${
        props.color || "green"
      }-200 dark:text-${props.color || "green"}-800`}
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        {props.spanText && (
          <div>
            <span className="font-medium">{props.spanText}</span>
            {" " + props.text}
          </div>
        )}
      </div>
      <button
        type="button"
        className={`ml-1 -mx-1.5 -my-1.5 text-${
          props.color || "green"
        }-500 rounded-lg focus:ring-2 focus:ring-${
          props.color || "green"
        }-400 p-1.5 hover:bg-${props.color || "green"}-200 dark:hover:bg-${
          props.color || "green"
        }-300 inline-flex h-8 w-8`}
        data-dismiss-target="#alert-border"
        aria-label="Close"
        onClick={props.dismiss}
      >
        <span className="sr-only">Dismiss</span>
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <p className="hidden" />
      <Progress width={timeLeft} />
    </div>
  );
};

export default Alert;
