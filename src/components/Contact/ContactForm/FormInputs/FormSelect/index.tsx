"use client";
import { forwardRef, useState } from "react";

import VectorIcon from "assets/images/svg/vector.svg";

import styled from "./styled.module.scss";
import { FormSelectProps } from "./types";

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ title, options, error, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    //const selectRef = useClickOutside(() => setIsOpen(false));

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    const handleSelect = (value: string | number) => () => {
      onChange(String(value));
    };

    return (
      <>
        <div>
          <select {...props} ref={ref} onChange={(e) => e.target.value} hidden>
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
                  <li
                    className={styled["select__option"]}
                    key={value}
                    onClick={handleSelect(value)}
                  >
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
  },
);
