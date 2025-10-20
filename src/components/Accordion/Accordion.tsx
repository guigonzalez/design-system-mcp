import React, { createContext, useContext, useState, useRef, useEffect, HTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

// Context for managing accordion state
interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type?: 'single' | 'multiple';
}

const AccordionContext = createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion');
  }
  return context;
};

// Context for individual accordion items
interface AccordionItemContextValue {
  value: string;
  isOpen: boolean;
}

const AccordionItemContext = createContext<AccordionItemContextValue | undefined>(undefined);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error('AccordionTrigger and AccordionContent must be used within an AccordionItem');
  }
  return context;
};

// Main Accordion Container
export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** Allow multiple items to be open at once */
  type?: 'single' | 'multiple';
  /** Default open items (controlled) */
  defaultValue?: string | string[];
  /** Controlled open items */
  value?: string | string[];
  /** Callback when items change */
  onValueChange?: (value: string | string[]) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = useState<string[]>(() => {
    if (value !== undefined) {
      return Array.isArray(value) ? value : [value];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  // Handle controlled state
  useEffect(() => {
    if (value !== undefined) {
      setOpenItems(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  const toggleItem = (itemValue: string) => {
    setOpenItems((prev) => {
      let newItems: string[];

      if (type === 'single') {
        newItems = prev.includes(itemValue) ? [] : [itemValue];
      } else {
        newItems = prev.includes(itemValue)
          ? prev.filter((item) => item !== itemValue)
          : [...prev, itemValue];
      }

      if (onValueChange) {
        onValueChange(type === 'single' ? (newItems[0] || '') : newItems);
      }

      return newItems;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={clsx('font-sans', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// Accordion Item
export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Unique value for this item */
  value: string;
  /** Disable the item */
  disabled?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  disabled = false,
  className,
  ...props
}) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div
        className={clsx(
          'border-b border-border dark:border-[#353535]',
          disabled && 'opacity-50 pointer-events-none',
          className
        )}
        data-state={isOpen ? 'open' : 'closed'}
        {...props}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// Accordion Trigger (Button)
export interface AccordionTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Item value (auto-detected from parent if not provided) */
  value?: string;
}

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const { toggleItem } = useAccordion();
    const { value, isOpen } = useAccordionItem();

    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          'flex w-full items-center justify-between py-4 px-4',
          'text-base font-medium leading-6 text-left',
          'transition-all duration-200',
          'hover:bg-muted/30',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          'dark:text-[#fcfaf8] dark:hover:bg-[#2a2a2a]',
          !isOpen && 'underline',
          className
        )}
        onClick={() => toggleItem(value)}
        aria-expanded={isOpen}
        {...props}
      >
        <span className="flex-1">{children}</span>
        <ChevronIcon
          className={clsx(
            'h-4 w-4 shrink-0 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
    );
  }
);

AccordionTrigger.displayName = 'AccordionTrigger';

// Accordion Content
export interface AccordionContentProps extends HTMLAttributes<HTMLDivElement> {}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
  ...props
}) => {
  const { isOpen } = useAccordionItem();
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      className="overflow-hidden transition-all duration-300 ease-in-out"
      style={{ height: isOpen ? `${height}px` : '0px' }}
    >
      <div
        ref={contentRef}
        className={clsx(
          'px-4 pb-4 text-sm font-normal leading-5 text-foreground dark:text-[#fcfaf8]',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

// Chevron Icon Component
const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Export all components
export default Accordion;
