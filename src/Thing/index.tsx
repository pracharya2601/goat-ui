import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';


export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

import "../tailwind.css"

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<Props> = ({ children }) => {
  const joinedClasses = classNames(`
    px-8 py-2 font-semibold
    transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-red-300 to-blue-300 hover:from-pink-400 hover:to-indigo-400
  `)
  return (
    <div className={joinedClasses}>
      {children || `the snozzberries taste like snozzberries`}
    </div>
  );
};
