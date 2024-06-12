import { SelectHTMLAttributes } from "react";

export interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  title: string;
  options: { [key: string]: string }[];
  error?: string;
  onChange: (value: string) => void;
}
