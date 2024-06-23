"use client";
import { FC, useState } from "react";
import { useController } from "react-hook-form";

import VectorIcon from "assets/images/svg/vector.svg";

import styled from "./styled.module.scss";
import { FormSelectProps } from "./types";

export const FormSelect: FC<FormSelectProps> = ({
  title,
  options,
  error,
  name,
  control,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { field } = useController({
    control,
    name,
  });
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string | number) => () => {
    field.onChange(value);
  };

  return (
    <>
      <div>
        <select {...props} onChange={(e) => e.target.value} hidden>
          {options.map(({ name, value }) => (
            <option key={value} value={value}>
              {" "}
              {name}
            </option>
          ))}
        </select>
        <div className={`form-input ${styled.select}`} onClick={handleClick}>
          <div className={styled.select__header} data-testid={"select-title"}>
            {title}
            <button>
              <VectorIcon />
            </button>
          </div>
          {isOpen && (
            <ul className={styled["select__options-list"]} data-testid={"select-content"}>
              {options.map(({ name, value }) => (
                <li className={styled["select__option"]} key={value} onClick={handleSelect(value)}>
                  {name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {error && <p className="error">{error}</p>}
    </>
  );
};
