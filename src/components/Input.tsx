import { FC, forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "../utils";

export interface InputProps extends Partial<UseFormRegisterReturn> {
  label?: string;
  type?: string;
  error?: string;
}

export const Input = forwardRef<HTMLLabelElement, InputProps>(
  ({ label, type = "text", error, ...props }, ref) => {
    return (
      <label className="mt-4 block" ref={ref}>
        <p className="text-md font-semibold text-black mb-2">{label}</p>
        <input
          className={cn(
            "w-full border border-solid rounded-sm outline-none px-2 py-2",
            { "border-red-500": error }
          )}
          type={type}
          {...props}
        />
        {error && <p className="text-red-500 italic text-sm">{error}</p>}
      </label>
    );
  }
);
