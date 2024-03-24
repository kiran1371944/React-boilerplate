/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { Link } from 'react-router-dom';
import cn from '../../../utils/utils';

const buttonVariants = cva(
  'btn inline-flex items-center justify-center text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        default:
          'bg-slate-900 dark:bg-slate-50 text-white hover:bg-slate-700 dark:text-slate-900 dark:hover:text-slate-100',
        danger:
          'text-white dark:bg-red-600 hover:bg-red-600 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-red-700 ',
        success:
          'text-white dark:bg-green-600 hover:bg-green-600 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:hover:bg-green-700 ',
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        type="button"
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
