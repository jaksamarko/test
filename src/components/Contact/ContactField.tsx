import React, { ChangeEvent, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface ContactFieldProps {
  name: string;
  placeholder?: string;
  type?: "text" | "email" | "date" | "option" | "textarea";
  displayName: string;
  value: string | Date;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<Date>>;
  maxLength?: number;

  //For date
  minDate?: Date;
  maxDate?: Date;

  //For select
  options?: string[];

  notRequired?: boolean;
}

export const emailRegex = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

const defaultText = "Válassz egyet...";

const ContactField = (props: ContactFieldProps) => {
  const [error, setError] = useState<string | null>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    let tempError = "";
    if (!props.notRequired) {
      if (!text.length) tempError = "Nem lehet kitöltetlen";

      if (props.type === "email")
        if (!emailRegex.test(text)) tempError = "Érvénytelen email cím";
    }

    setError(tempError);

    props.setValue(text as any);
  };

  const onChangeDate = (date: Date | null) => {
    if (date) {
      props.setValue(date as any);
    }
  };

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    let tempError = "";
    if (val === "def") tempError = "Választanod kell egyet";

    setError(tempError);
    props.setValue(val as any);
  };

  const renderInput = (type: ContactFieldProps["type"]) => {
    switch (type) {
      case "date":
        return (
          <DatePicker
            selected={props.value as Date}
            onChange={(date) => onChangeDate(date)}
            showTimeSelect
            name={props.name}
            dateFormat={"yyyy/MM/dd, hh:mm"}
            maxDate={props.maxDate || null}
            minDate={props.minDate || null}
            required={!props.notRequired}
          />
        );
      case "option":
        return (
          <>
            <input
              name={props.name}
              value={props.value as string}
              className={"hidden"}
            />
            <select value={props.value as string} onChange={onChangeSelect}>
              <option value="def">{defaultText}</option>
              {props.options?.map((v, i) => {
                return (
                  <option value={v} key={i}>
                    {v}
                  </option>
                );
              })}
            </select>
          </>
        );
      default:
        return (
          <input
            onChange={onChange}
            type={props.type || "text"}
            name={props.name}
            value={props.value as string}
            maxLength={props.maxLength || 50}
            placeholder={props.placeholder}
            required={!props.notRequired}
            className={`w-full border-b py-4 ${
              error
                ? "border-1 focus:border-red-600"
                : "border-0 focus:border-primary focus:outline-none border-[#f1f1f1]"
            }`}
          />
        );
    }
  };

  return (
    <div className="mb-6">
      <label htmlFor={props.name} className="block text-xs text-dark">
        {props.displayName + (props.notRequired ? "" : "*")}
      </label>
      {renderInput(props.type)}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default ContactField;
