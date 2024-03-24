/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { Link } from 'react-router-dom';
import cn from '../../../utils/utils';

const inputVariants = cva(
  ' text-sm border transition-colors shadow-sm focus:outline-none focus:ring focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        default:
          'bg-slate-50 rounded-md border-gray-300 text-gray-900 dark:border-slate-100 dark:bg-white  dark:text-slate-900 dark:hover:text-slate-100',
        danger:
          'bg-slate-50 rounded-md border-red-500 text-gray-900 dark:border-red-500 dark:bg-white  dark:text-slate-900 dark:hover:text-slate-100',
        success:
          'bg-slate-50 rounded-md border-green-500 text-gray-900 dark:border-green-500 dark:bg-white  dark:text-slate-900 dark:hover:text-slate-100',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      // variant: 'default',
      size: 'default',
    },
  }
);
const sublabelVariants = {
  danger: 'text-red-500',
  success: 'text-green-500',
  default: 'text-gray-900',
};

export interface TextProps
  extends React.ButtonHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  href?: string;
  label?: string;
  placeholder?: string;
  sublabel?: string;
  type?: any;
}

const TextInput = React.forwardRef<HTMLInputElement, TextProps>(
  (
    {
      className,
      children,
      href,
      variant,
      label,
      sublabel,
      placeholder,
      size,
      ...props
    },
    ref
  ) => {
    const sublabelClassName = sublabel
      ? sublabelVariants[variant || 'default']
      : '';

    if (href) {
      return (
        <Link
          to={href}
          className={cn(inputVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <div>
        {label ? (
          <label
            // className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-900"
            className="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        ) : (
          ' '
        )}

        <input
          type="text"
          id="first_name"
          // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cocogreen-500 focus:border-cocogreen-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cocogreen-900 dark:focus:border-blue-500"
          className={cn(inputVariants({ variant, size, className }))}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {sublabel ? (
          <label
            className={`block mb-2 text-xs text-left font-normal ${sublabelClassName}`}
          >
            {sublabel}
          </label>
        ) : (
          ' '
        )}
      </div>
    );
  }
);
TextInput.displayName = 'TextInput';

export { TextInput, inputVariants };
