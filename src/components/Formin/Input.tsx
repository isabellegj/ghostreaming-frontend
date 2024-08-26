import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  errors?: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  register,
  required,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors ? "border-red-500" : ""
        }`}
        {...register(name, { required })}
      />
      {errors && (
        <p className="text-red-500 text-xs italic mt-2">
          {errors.message || "Este campo é obrigatório"}
        </p>
      )}
    </div>
  );
};

export default Input;
