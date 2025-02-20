import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  return (
    <div className="flex h-9 items-center justify-between gap-1 rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors">
      <input
        type={showPassword ? "text" : "password"}
        className={cn(
          "flex w-full outline-none border-none text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      <button
        onClick={() => setShowPassword((prev) => (prev = !prev))}
        type="button">
        {showPassword ? (
          <Eye className="w-4 h-4" />
        ) : (
          <EyeOff className="w-4 h-4" />
        )}
      </button>
    </div>
  );
});
PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
