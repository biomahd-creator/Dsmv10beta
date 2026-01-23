import * as React from "react";
import { AlertTriangle, CheckCircle, AlertCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { cn } from "../ui/utils";

interface RiskIndicatorProps {
  score: number;
  maxScore?: number;
  factors?: {
    name: string;
    value: number;
    impact: "positive" | "negative" | "neutral";
  }[];
  className?: string;
}

export function RiskIndicator({
  score,
  maxScore = 1000,
  factors,
  className,
}: RiskIndicatorProps) {
  const percentage = (score / maxScore) * 100;

  const getRiskLevel = () => {
    if (percentage >= 70) return { label: "Bajo", color: "text-green-600", icon: CheckCircle, variant: "default" as const };
    if (percentage >= 40) return { label: "Medio", color: "text-yellow-600", icon: AlertCircle, variant: "secondary" as const };
    return { label: "Alto", color: "text-red-600", icon: AlertTriangle, variant: "destructive" as const };
  };

  const risk = getRiskLevel();
  const Icon = risk.icon;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Indicador de Riesgo</CardTitle>
          <Badge variant={risk.variant} className="gap-1">
            <Icon className="h-3 w-3" />
            {risk.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{score}</span>
            <span className="text-sm text-muted-foreground">de {maxScore}</span>
          </div>
          <Progress value={percentage} className="h-3" />
          <p className="text-xs text-muted-foreground">
            {percentage >= 70 && "Excelente perfil crediticio"}
            {percentage >= 40 && percentage < 70 && "Perfil crediticio aceptable con observaciones"}
            {percentage < 40 && "Perfil crediticio de alto riesgo"}
          </p>
        </div>

        {factors && factors.length > 0 && (
          <div className="space-y-2 pt-2 border-t">
            <h4 className="text-sm font-medium">Factores de Evaluación</h4>
            <div className="space-y-2">
              {factors.map((factor, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    {factor.impact === "positive" && <CheckCircle className="h-4 w-4 text-green-600" />}
                    {factor.impact === "negative" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                    {factor.impact === "neutral" && <Info className="h-4 w-4 text-muted-foreground" />}
                    <span>{factor.name}</span>
                  </div>
                  <span className={cn(
                    "font-medium",
                    factor.impact === "positive" && "text-green-600",
                    factor.impact === "negative" && "text-red-600",
                    factor.impact === "neutral" && "text-muted-foreground"
                  )}>
                    {factor.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
