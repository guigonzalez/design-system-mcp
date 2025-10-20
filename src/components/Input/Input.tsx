import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text for the input */
  label?: string;
  /** Whether the field is required */
  isRequired?: boolean;
  /** Whether the field is optional (shows "Optional" text) */
  isOptional?: boolean;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** Success message to display */
  success?: string;
  /** Input variant */
  variant?: 'default' | 'error' | 'success';
  /** Full width input */
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      isRequired = false,
      isOptional = false,
      helperText,
      error,
      success,
      variant = 'default',
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine the actual variant based on error/success props
    const actualVariant = error ? 'error' : success ? 'success' : variant;
    const message = error || success || helperText;

    return (
      <div className={clsx('flex flex-col gap-2', fullWidth && 'w-full')}>
        {/* Label */}
        {label && (
          <label
            className={clsx(
              'font-sans text-sm font-medium leading-5',
              disabled ? 'text-muted-foreground opacity-50 dark:text-[#b3b3b3]' : 'text-foreground dark:text-[#fcfaf8]'
            )}
          >
            {label}
            {isRequired && (
              <span className="ml-1 text-destructive">*</span>
            )}
            {isOptional && (
              <span className="ml-1 text-muted-foreground dark:text-[#b3b3b3] font-normal">
                (Optional)
              </span>
            )}
          </label>
        )}

        {/* Input Field */}
        <input
          ref={ref}
          disabled={disabled}
          className={clsx(
            // Base styles
            'flex h-10 rounded-md border bg-background px-3 py-2',
            'font-sans text-sm font-normal leading-5',
            'transition-colors duration-200',
            'placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'dark:bg-[#1f1f1f] dark:text-[#fcfaf8] dark:placeholder:text-[#757575]',

            // Default variant
            actualVariant === 'default' && [
              'border-input',
              'hover:border-foreground',
              'focus:border-primary focus:ring-primary/20',
              'dark:border-[#353535]',
              'dark:hover:border-[#fcfaf8]',
              'dark:focus:border-primary dark:focus:ring-primary/20',
              disabled && 'hover:border-input dark:hover:border-[#353535]',
            ],

            // Error variant
            actualVariant === 'error' && [
              'border-destructive',
              'focus:border-destructive focus:ring-destructive/20',
              'dark:border-destructive',
              'dark:focus:border-destructive dark:focus:ring-destructive/20',
            ],

            // Success variant
            actualVariant === 'success' && [
              'border-success',
              'focus:border-success focus:ring-success/20',
              'dark:border-success',
              'dark:focus:border-success dark:focus:ring-success/20',
            ],

            // Disabled state
            disabled && [
              'cursor-not-allowed opacity-50',
              'bg-muted/50',
              'dark:bg-[#2a2a2a]',
            ],

            fullWidth && 'w-full',
            className
          )}
          {...props}
        />

        {/* Helper/Error/Success Message */}
        {message && (
          <p
            className={clsx(
              'font-sans text-sm font-normal leading-5',
              actualVariant === 'error' && 'text-destructive dark:text-destructive',
              actualVariant === 'success' && 'text-success dark:text-success',
              actualVariant === 'default' && 'text-muted-foreground dark:text-[#b3b3b3]'
            )}
          >
            {message}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
