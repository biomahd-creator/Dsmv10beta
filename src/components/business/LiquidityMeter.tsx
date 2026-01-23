import * as React from "react";
import { Droplet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

interface LiquidityMeterProps {
  currentLiquidity?: number;
  requiredLiquidity?: number;
  currency?: string;
  className?: string;
}

export function LiquidityMeter({
  currentLiquidity = 0,
  requiredLiquidity = 1,
  currency = "USD",
  className,
}: LiquidityMeterProps) {
  const percentage = requiredLiquidity > 0 ? (currentLiquidity / requiredLiquidity) * 100 : 0;
  const cappedPercentage = Math.min(percentage, 100);

  const getStatus = () => {
    if (percentage >= 100) return { label: "Óptima", color: "text-green-600", variant: "default" as const };
    if (percentage >= 70) return { label: "Buena", color: "text-blue-600", variant: "secondary" as const };
    if (percentage >= 40) return { label: "Baja", color: "text-yellow-600", variant: "secondary" as const };
    return { label: "Crítica", color: "text-red-600", variant: "destructive" as const };
  };

  const status = getStatus();
  const difference = currentLiquidity - requiredLiquidity;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">Liquidez</CardTitle>
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Disponible</p>
              <p className="text-2xl font-bold">
                {currency} {currentLiquidity.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">Requerida</p>
              <p className="text-lg font-semibold text-muted-foreground">
                {currency} {requiredLiquidity.toLocaleString()}
              </p>
            </div>
          </div>

          <Progress value={cappedPercentage} className="h-3" />

          <div className="flex items-center justify-between text-sm">
            <span className={cn("font-medium", status.color)}>
              {percentage.toFixed(1)}%
            </span>
            <span className={cn(
              "font-medium",
              difference >= 0 ? "text-green-600" : "text-red-600"
            )}>
              {difference >= 0 ? "+" : ""}
              {currency} {difference.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="pt-2 border-t text-xs text-muted-foreground">
          {percentage >= 100 && "La empresa cuenta con liquidez suficiente para operar cómodamente"}
          {percentage >= 70 && percentage < 100 && "Nivel de liquidez aceptable, se recomienda mantener monitoreo"}
          {percentage >= 40 && percentage < 70 && "Nivel de liquidez bajo, considere aumentar reservas"}
          {percentage < 40 && "Nivel crítico de liquidez, se requiere acción inmediata"}
        </div>
      </CardContent>
    </Card>
  );
}