import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, error, ...rest } = props;

  return (
    <div>
      <div className="flex items-center justify-between">
        {!!props.label && (
          <label htmlFor={props.name} className="block text-sm/6 font-medium text-gray-900">
            {props.label}
          </label>
        )}
      </div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...rest}
          id={props.name}
          ref={ref}
          autoComplete={"off"}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 
          placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
          focus:outline-none  focus:ring-black
          sm:text-sm/6"
        />
      </div>
      {!!error && <span className="block mt-1 text-sm/6 font-medium text-red">{error}</span>}
    </div>
  );
});

export default Input;
