import { forwardRef } from "react";

type InputProps = {
  id?: string;
  label?: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      value,
      type = "text",
      placeholder,
      onChange,
      autoComplete,
      className = "",
    },
    ref
  ) => {
    return (
      <div className="mb-4">
        {label && (
          <label
            htmlFor={id}
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
        />
      </div>
    );
  }
);

// export default function Input({
//     id,label,value,type="text",placeholder,onChange,autoComplete,className="",
// }:InputProps){

// }

export default Input;
