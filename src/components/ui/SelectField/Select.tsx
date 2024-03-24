/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import cn from '../../../utils/utils';

const selectVariants = cva(
  ' text-sm border transition-colors shadow-sm focus:outline-none focus:ring focus:ring-gray-200 disabled:opacity-50 disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        default:
          'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:none none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:none',
        danger:
          'bg-gray-50 border border-red-500 text-gray-900 dark:border-red-500 text-sm rounded-lg focus:none none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:none',
        success:
          'bg-gray-50 border border-green-500 dark:border-green-500 text-gray-900 text-sm rounded-lg focus:none none block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:none dark:none',
      },
      size: {
        default: 'h-10 w-full p-2.5 rounded-md',
        sm: 'h-9 w-full p-2 rounded-md',
        lg: 'h-14 w-full p-4 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
const sublabelVariants = {
  danger: 'text-red-500',
  success: 'text-green-500',
  default: 'text-gray-900',
};

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  label?: string;
  sublabel?: string;
  options: { value: string; label: string }[] | any;
}

const SelectInput = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, children, variant, label, sublabel, options, size, ...props },
    ref
  ) => {
    const sublabelClassName = sublabel
      ? sublabelVariants[variant || 'default']
      : '';

    return (
      <form className="max-w-sm ">
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

        <select
          id="select"
          className={cn(selectVariants({ variant, size, className }))}
          required
          ref={ref}
          {...props}
        >
          <option value="">Select</option>
          {options?.map(
            (
              option: {
                value: string | number | readonly string[] | undefined;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: React.Key | null | undefined
            ) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          )}
        </select>
        {sublabel ? (
          <label
            className={`block mb-2 text-xs text-left font-normal ${sublabelClassName}`}
          >
            {sublabel}
          </label>
        ) : (
          ' '
        )}
      </form>
    );
  }
);
SelectInput.displayName = 'SelectInput';

export { SelectInput, selectVariants };
