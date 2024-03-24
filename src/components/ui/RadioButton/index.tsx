/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { v4 as uuidv4 } from 'uuid';

// import cn from '../../../utils/utils';

const inputVariants = cva(
  ' text-sm transition-colors disabled:opacity-50 disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 rounded-md dark:bg-white text-white dark:text-slate-900 dark:hover:text-slate-100',
        danger:
          'bg-slate-900 rounded-md border-red-500 dark:border-red-500 dark:bg-white text-white dark:text-slate-900 dark:hover:text-slate-100',
        success:
          'bg-slate-900 rounded-md  dark:bg-white text-white dark:text-slate-900 dark:hover:text-slate-100',
        warning:
          'text-white dark:bg-yellow-500 hover:bg-yellow-600 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-yellow-700 ',
        outline:
          'bg-transparent dark:bg-transparent py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  border border-gray-200  hover:text-stale-900 dark:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700',
        outlineNoHover:
          'bg-transparent dark:bg-transparent py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  border border-gray-200  hover:text-stale-900 dark:text-gray-900 dark:border-gray-600 dark:hover:border-gray-600 dark:hover:text-gray-900 dark:hover:bg-transparent',
        subtle:
          'bg-slate-100 dark:bg-slate-50 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-stale-100 hover:text-accent-foreground',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-900 hover:bg-transparent dark:hover:bg-transparent',
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

export interface TextProps
  extends React.ButtonHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  name?: string;
  label?: string;
  placeholder?: string;
  sublabel?: string;
}

const RadioButton = React.forwardRef<HTMLInputElement, TextProps>(
  (
    {
      className,
      children,
      name,
      variant,
      label,
      sublabel,
      placeholder,
      size,
      ...props
    },
    ref
  ) => {
    const id: string = uuidv4();
    return (
      <div>
        <div className="flex items-center mb-0">
          <input
            type="radio"
            value=""
            name={name}
            id={id}
            className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300  dark:bg-gray-100 dark:border-gray-600"
            ref={ref}
            {...props}
          />
          <label
            htmlFor={id}
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-900"
          >
            {label}
          </label>
        </div>
      </div>
    );
  }
);
RadioButton.displayName = 'RadioButton';

export { RadioButton, inputVariants };
