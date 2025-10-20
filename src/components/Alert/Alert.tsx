import React, { HTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Alert variant */
  variant?: 'default' | 'destructive';
  /** Alert title */
  title?: string;
  /** Alert description */
  description?: string;
  /** Custom icon (optional) */
  icon?: React.ReactNode;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = 'default',
      title,
      description,
      icon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const defaultIcon = variant === 'destructive' ? <ErrorIcon /> : <InfoIcon />;
    const displayIcon = icon !== undefined ? icon : defaultIcon;

    return (
      <div
        ref={ref}
        role="alert"
        className={clsx(
          'font-sans relative w-full rounded-lg border p-4',
          'flex gap-3',

          // Default variant
          variant === 'default' && [
            'bg-background border-border text-foreground',
            'dark:bg-[#1f1f1f] dark:border-[#353535] dark:text-[#fcfaf8]',
          ],

          // Destructive variant
          variant === 'destructive' && [
            'border-destructive/50 bg-[#fecaca]/50 text-destructive',
            'dark:bg-[#3d1717] dark:border-destructive dark:text-destructive',
          ],

          className
        )}
        {...props}
      >
        {/* Icon */}
        {displayIcon && (
          <div className="shrink-0 mt-0.5">
            {displayIcon}
          </div>
        )}

        {/* Content */}
        <div className="flex-1 space-y-1">
          {title && (
            <h5 className="font-medium text-base leading-none">
              {title}
            </h5>
          )}
          {description && (
            <p className="text-sm leading-6 font-normal">
              {description}
            </p>
          )}
          {children && (
            <div className="text-sm leading-6 font-normal">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Alert.displayName = 'Alert';

// Info Icon (chevron right)
const InfoIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M7.5 5L12.5 10L7.5 15"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Error Icon (circle with exclamation)
const ErrorIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <circle
      cx="10"
      cy="10"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 6V10.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle
      cx="10"
      cy="13.5"
      r="0.5"
      fill="currentColor"
    />
  </svg>
);

export default Alert;
