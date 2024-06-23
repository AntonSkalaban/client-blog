import { SelectHTMLAttributes } from "react";
import { Control } from "react-hook-form";

export interface FormSelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  title: string;
  options: { [key: string]: string }[];
  error?: string;
  control: Control<{ [key: string]: string }>;
  name: string;
}
