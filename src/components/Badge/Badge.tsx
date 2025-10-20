import { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge variant */
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  /** Rounded shape (fully rounded vs slightly rounded) */
  rounded?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      variant = 'default',
      rounded = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={clsx(
          // Base styles
          'font-sans inline-flex items-center justify-center',
          'text-xs font-semibold leading-4',
          'px-2.5 py-0.5',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',

          // Shape variants
          rounded ? 'rounded-full' : 'rounded-md',

          // Default variant
          variant === 'default' && [
            'bg-primary text-primary-foreground',
            'hover:bg-[#e65100]',
            'focus-visible:ring-primary',
            'dark:bg-primary dark:text-primary-foreground',
            'dark:hover:bg-[#d96200]',
          ],

          // Secondary variant
          variant === 'secondary' && [
            'bg-secondary text-secondary-foreground',
            'hover:bg-[#ffd399]',
            'focus-visible:ring-secondary',
            'dark:bg-[#331200] dark:text-[#d4a574]',
            'dark:hover:bg-[#4d1b00]',
          ],

          // Destructive variant
          variant === 'destructive' && [
            'bg-destructive text-destructive-foreground',
            'hover:bg-[#ef4444]',
            'focus-visible:ring-destructive',
            'dark:bg-destructive dark:text-destructive-foreground',
            'dark:hover:bg-[#b91c1c]',
          ],

          // Outline variant
          variant === 'outline' && [
            'bg-background border border-border text-foreground',
            'hover:bg-secondary hover:border-primary',
            'focus-visible:ring-primary',
            'dark:bg-transparent dark:border-[#353535] dark:text-[#fcfaf8]',
            'dark:hover:bg-[#1f1f1f] dark:hover:border-primary',
          ],

          className
        )}
        tabIndex={0}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
