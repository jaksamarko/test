import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export interface ContactFieldProps {
  name: string;
  placeholder: string;
  type?: "text" | "date";
  displayName?: string;
  value: string | Date;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | React.Dispatch<React.SetStateAction<Date | null>>;
  maxLength?: number;
}

const ContactField = (props: ContactFieldProps) => {
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;

    props.setValue(text as any);
  };

  const onChangeDate = (date: Date | null) => {
    if (date) {
      props.setValue(date as any);
    }
  };

  const renderInput = (type: ContactFieldProps["type"]) => {
    switch (type) {
      case "date":
        return (
          <DatePicker
            selected={props.value as Date}
            onChange={(date) => onChangeDate(date)}
          />
        );
      default:
        return (
          <input
            onChange={onChange}
            type={props.type || "text"}
            name={props.name}
            value={props.value as string}
            maxLength={props.maxLength || 20}
            placeholder={props.placeholder}
            className="w-full border-0 border-b border-[#f1f1f1] py-4 focus:border-primary focus:outline-none"
          />
        );
    }
  };

  return (
    <div className="mb-6">
      <label htmlFor={props.name} className="block text-xs text-dark">
        {props.displayName}*
      </label>
    </div>
  );
};

export default ContactField;
