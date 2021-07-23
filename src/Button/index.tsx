import React, { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

type ButtonVariants = 'default' | 'warning';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  ...rest
}) => {
  const wrappedClassName = classNames(
    `px-8 py-2 font-semibold`,
    {
      'text-white': variant == "default",
      'text-red-700': variant !== "default",
    },
    `transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400`
  )
  return (
    <button className={wrappedClassName} {...rest}>
      {text}
    </button>
  );
};