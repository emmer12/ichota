import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        id={props.name}
        type={type}
        className={cn(
          "fmt-1 block w-full px-3 py-2 h-14 border-2 border-[#33333354] rounded-full  shadow-sm focus:outline-none focus:ring-primary focus:border-primary focus:text-inherit !mt-1.5 ",
          className,
          {
            "text-[#F50000] border-[#F50000]": props.slot,
          }
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
