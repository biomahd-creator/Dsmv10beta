import LogoNegro from "../../imports/LogoNegro";
import LogoBlanco from "../../imports/LogoBlanco";
import { cn } from "../ui/utils";
import { useTheme } from "../core/ThemeProvider";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark" | "auto";
}

export function Logo({ className, size = "md", variant = "auto" }: LogoProps) {
  const { config, theme } = useTheme();
  
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
    xl: "h-12",
  };

  if (config.logoUrl) {
    return (
      <img 
        src={config.logoUrl} 
        alt="Brand Logo" 
        className={cn(sizeClasses[size], "w-auto object-contain", className)} 
      />
    );
  }

  // Auto-detect theme if variant is "auto"
  const effectiveVariant = variant === "auto" 
    ? (theme === "dark" ? "dark" : "light")
    : variant;

  // LogoBlanco para modo oscuro (texto blanco sobre fondo oscuro)
  // LogoNegro para modo claro (texto negro sobre fondo claro)
  const LogoComponent = effectiveVariant === "dark" ? LogoBlanco : LogoNegro;

  return (
    <div className={cn(sizeClasses[size], "w-auto aspect-[477/90.64]", className)}>
      <LogoComponent />
    </div>
  );
}