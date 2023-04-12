import * as React from "react";
import { cn } from "../../lib/utils";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types";


export interface TheInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}


const Input = React.forwardRef<HTMLInputElement, TheInputProps>(
  ({error,className, name,...props }, ref) => {
    return (
      <>
        <section className="flex flex-col w-full ">
          <label className="text-sm  px-1" htmlFor={name}>
            {name}
          </label>
          <input
            ref={ref}
            id={name}
            className={cn(
              "p-1 rounded-md bg-zinc-700 focus:outline-zinc-600 ",
              className
            )}
            {...props}
          />
          <section className="text-red-600 text-xs px-1">{error}</section>
        </section>
      </>
    );
  }
);

export default Input;
