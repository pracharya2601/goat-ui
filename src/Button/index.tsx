import React, { FC, ButtonHTMLAttributes } from 'react';

type ButtonVariants = 'default' | 'warning';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}
//check
export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  ...rest
}) => {
  const wrappedClassName =
    `px-8 py-2 font-semibold ${variant == "default" && 'text-white'}
      ${variant !== "default" && 'text-red-700'} 
      transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`
  return (
    <button className={wrappedClassName} {...rest}>
      {text}
    </button>
  );
};