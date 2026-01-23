import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "../ui/utils";

interface SplitButtonOption {
  label: string;
  value: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface SplitButtonProps {
  label: string;
  options: SplitButtonOption[];
  onMainClick: () => void;
  onOptionClick: (value: string) => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
  className?: string;
}

export function SplitButton({
  label,
  options,
  onMainClick,
  onOptionClick,
  variant = "default",
  size = "default",
  disabled = false,
  className,
}: SplitButtonProps) {
  return (
    <div className={cn("inline-flex rounded-md", className)}>
      <Button
        variant={variant}
        size={size}
        onClick={onMainClick}
        disabled={disabled}
        className="rounded-r-none border-r-0"
      >
        {label}
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={variant}
            size={size}
            disabled={disabled}
            className="rounded-l-none px-2"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onOptionClick(option.value)}
              disabled={option.disabled}
            >
              {option.icon && <span className="mr-2">{option.icon}</span>}
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
