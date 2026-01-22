/**
 * StatusAlert Component
 * 
 * BUSINESS PATTERN: Alertas de estado sin estilos inline
 * 
 * NO MODIFICAR sin consultar: /components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md
 * Parte del sistema modular sin estilos inline
 */

import { cn } from "../ui/utils";

interface StatusAlertProps {
  variant: "success" | "warning" | "info" | "danger";
  message: string;
  icon?: string;
  className?: string;
}

const variantClasses = {
  success: {
    bg: "alert-success",
    border: "border-l-4",
    text: "alert-success-text",
  },
  warning: {
    bg: "alert-warning",
    border: "border-l-4",
    text: "alert-warning-text",
  },
  info: {
    bg: "alert-info",
    border: "border-l-4",
    text: "alert-info-text",
  },
  danger: {
    bg: "alert-danger",
    border: "border-l-4",
    text: "alert-danger-text",
  },
};

const defaultIcons = {
  success: "✓",
  warning: "⚠",
  info: "ℹ",
  danger: "✕",
};

export function StatusAlert({
  variant,
  message,
  icon,
  className,
}: StatusAlertProps) {
  const classes = variantClasses[variant];
  const displayIcon = icon || defaultIcons[variant];

  return (
    <div
      className={cn(
        "p-3 rounded-lg",
        classes.bg,
        classes.border,
        className
      )}
    >
      <p className={cn("text-sm font-medium", classes.text)}>
        {displayIcon} {message}
      </p>
    </div>
  );
}