import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "peer flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors duration-300",
            "focus:border-transparent focus:ring-0",
            className
          )}
          ref={ref}
          {...props}
        />
        <span className="absolute bottom-0 left-1/2 block h-0.5 w-0 bg-primary transition-all duration-300 peer-focus:left-0 peer-focus:w-full"></span>
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
