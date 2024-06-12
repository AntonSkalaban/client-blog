import { FC, forwardRef, InputHTMLAttributes } from "react";

import styled from "./styled.module.scss";
export interface FormTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const FormTextArea: FC<FormTextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  FormTextAreaProps
>(({ error, ...props }, ref) => {
  return (
    <>
      <textarea className={`form-input ${styled.textaria}`} ref={ref} {...props} />
      {error && <p>{error}</p>}
    </>
  );
});
