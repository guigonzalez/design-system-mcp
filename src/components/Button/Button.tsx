import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'link-secondary';
  /** Button size */
  size?: 'sm' | 'md';
  /** Destructive action styling */
  destructive?: boolean;
  /** Loading state */
  isLoading?: boolean;
  /** Icon before the button text */
  iconBefore?: React.ReactNode;
  /** Icon after the button text */
  iconAfter?: React.ReactNode;
  /** Full width button */
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      destructive = false,
      isLoading = false,
      iconBefore,
      iconAfter,
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={clsx(
          // Base styles
          'font-sans inline-flex items-center justify-center',
          'text-sm font-medium leading-6',
          'transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed',

          // Size variants
          size === 'md' && 'h-10 px-3 gap-1 rounded-lg',
          size === 'sm' && 'h-9 px-2 gap-1 rounded-lg',

          // Link variants (special handling)
          (variant === 'link' || variant === 'link-secondary') && [
            'h-6 px-0 gap-2 rounded-none',
            !destructive && !isDisabled && 'underline',
            'hover:no-underline',
          ],

          // Primary variant
          variant === 'primary' && !destructive && [
            'bg-primary text-primary-foreground',
            'hover:bg-[#e65100]',
            'focus-visible:ring-primary',
            'dark:bg-primary dark:text-primary-foreground',
            'dark:hover:bg-[#d96200]',
            isDisabled && 'opacity-50',
          ],

          // Primary destructive
          variant === 'primary' && destructive && [
            'bg-destructive text-destructive-foreground',
            'hover:bg-[#ef4444]',
            'focus-visible:ring-destructive',
            'dark:bg-destructive dark:text-destructive-foreground',
            'dark:hover:bg-[#b91c1c]',
            isDisabled && 'opacity-50',
          ],

          // Secondary variant
          variant === 'secondary' && !destructive && [
            'bg-secondary text-primary',
            'hover:bg-[#ffd399]',
            'focus-visible:ring-primary',
            'dark:bg-[#3d2517] dark:text-primary',
            'dark:hover:bg-[#4d2f1c]',
            isDisabled && 'opacity-50',
          ],

          // Secondary destructive
          variant === 'secondary' && destructive && [
            'bg-[#fecaca] text-destructive',
            'hover:bg-[#fca5a5]',
            'focus-visible:ring-destructive',
            'dark:bg-[#3d1717] dark:text-destructive',
            'dark:hover:bg-[#4d1c1c]',
            isDisabled && 'opacity-50',
          ],

          // Outline variant
          variant === 'outline' && !destructive && [
            'bg-accent border border-border text-foreground',
            'hover:bg-secondary hover:text-primary hover:border-primary',
            'focus-visible:ring-primary',
            'dark:bg-transparent dark:border-primary dark:text-primary',
            'dark:hover:bg-[#3d2517] dark:hover:text-primary dark:hover:border-primary',
            isDisabled && 'opacity-50',
          ],

          // Outline destructive
          variant === 'outline' && destructive && [
            'bg-accent border border-border text-destructive',
            'hover:bg-[#fee2e2] hover:border-destructive',
            'focus-visible:ring-destructive',
            'dark:bg-transparent dark:border-destructive dark:text-destructive',
            'dark:hover:bg-[#3d1717] dark:hover:border-destructive',
            isDisabled && 'opacity-50',
          ],

          // Ghost variant
          variant === 'ghost' && !destructive && [
            'bg-transparent text-primary',
            'hover:bg-secondary',
            'focus-visible:ring-primary',
            'dark:bg-transparent dark:text-primary',
            'dark:hover:bg-[#3d2517]',
            isDisabled && 'opacity-50',
          ],

          // Ghost destructive
          variant === 'ghost' && destructive && [
            'bg-transparent text-destructive',
            'hover:bg-[#fee2e2]',
            'focus-visible:ring-destructive',
            'dark:bg-transparent dark:text-destructive',
            'dark:hover:bg-[#3d1717]',
            isDisabled && 'opacity-50',
          ],

          // Link variant
          variant === 'link' && !destructive && [
            'text-primary',
            'hover:text-[#e65100]',
            'focus-visible:ring-primary',
            'dark:text-primary',
            'dark:hover:text-[#d96200]',
            isDisabled && 'opacity-50 no-underline',
          ],

          // Link destructive
          variant === 'link' && destructive && [
            'text-destructive',
            'hover:text-[#ef4444]',
            'focus-visible:ring-destructive',
            'dark:text-destructive',
            'dark:hover:text-[#b91c1c]',
            isDisabled && 'opacity-50 no-underline',
          ],

          // Link Secondary variant
          variant === 'link-secondary' && !destructive && [
            'text-foreground',
            'hover:text-muted-foreground',
            'focus-visible:ring-foreground',
            'dark:text-[#fcfaf8]',
            'dark:hover:text-[#b3b3b3]',
            isDisabled && 'opacity-50 no-underline',
          ],

          // Link Secondary destructive
          variant === 'link-secondary' && destructive && [
            'text-destructive',
            'hover:text-[#ef4444]',
            'focus-visible:ring-destructive',
            'dark:text-destructive',
            'dark:hover:text-[#b91c1c]',
            isDisabled && 'opacity-50 no-underline',
          ],

          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && iconBefore && <span>{iconBefore}</span>}
        {children}
        {!isLoading && iconAfter && <span>{iconAfter}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
