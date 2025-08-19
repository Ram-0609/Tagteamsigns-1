import * as React from 'react';

import {cn} from '@/lib/utils';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
  ({className, ...props}, ref) => {
    return (
      <div className="relative">
      <textarea
        className={cn(
          'peer flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-300',
          "focus:border-transparent focus:ring-0",
          className
        )}
        ref={ref}
        {...props}
      />
      <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 bg-primary transition-all duration-300 peer-focus:left-0 peer-focus:w-full"></span>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export {Textarea};
