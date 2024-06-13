import { forwardRef, InputHTMLAttributes } from "react";

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <input className="form-input" ref={ref} {...props} />
        {error && <p className="error">{error}</p>}
      </>
    );
  },
);
