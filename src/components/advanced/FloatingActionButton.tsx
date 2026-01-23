import * as React from "react";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

interface FloatingActionButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  className?: string;
  ariaLabel: string;
}

const positionClasses = {
  "bottom-right": "bottom-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "top-right": "top-6 right-6",
  "top-left": "top-6 left-6",
};

export function FloatingActionButton({
  icon,
  onClick,
  position = "bottom-right",
  className,
  ariaLabel,
}: FloatingActionButtonProps) {
  return (
    <Button
      size="lg"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "fixed z-50 h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110",
        positionClasses[position],
        className
      )}
    >
      {icon}
    </Button>
  );
}
