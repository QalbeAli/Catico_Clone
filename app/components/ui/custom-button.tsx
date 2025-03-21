import * as React from "react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, isLink, href, target, rel, ...props }, ref) => {
    const buttonClasses = cn(
      "relative overflow-hidden group font-acme",
      "transition-all duration-300 transform hover:scale-105",
      "bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500",
      "bg-[length:200%_auto] hover:bg-[center_right_1rem]",
      "text-white rounded-full px-8 py-3",
      "before:absolute before:inset-0",
      "before:bg-gradient-to-r before:from-blue-600 before:via-purple-600 before:to-blue-600",
      "before:bg-[length:200%_auto]",
      "before:opacity-0 before:transition-all before:duration-300",
      "before:hover:opacity-100",
      "shadow-[0_0_20px_rgba(79,70,229,0.3)]",
      "hover:shadow-[0_0_25px_rgba(79,70,229,0.45)]",
      className
    );

    const content = (
      <span className="flex relative z-10 gap-2 justify-center items-center">
        {children}
        <span className="transition-transform transform group-hover:translate-x-1">
          →
        </span>
      </span>
    );

    if (isLink && href) {
      return (
        <a href={href} target={target} rel={rel} className={buttonClasses}>
          {content}
        </a>
      );
    }

    return (
      <Button className={buttonClasses} ref={ref} {...props}>
        {content}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
