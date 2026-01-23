import * as React from "react";
import { Percent, TrendingUp, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { cn } from "../ui/utils";

interface FactoringRateDisplayProps {
  rate: number; // Tasa mensual en porcentaje
  period?: string; // "mensual" | "anual"
  amount: number; // Monto de la factura
  title?: string;
  description?: string;
  discountDays?: number; // Días de anticipo (opcional)
  currency?: string;
  additionalFees?: {
    name: string;
    amount: number;
  }[];
  className?: string;
}

export function FactoringRateDisplay({
  rate,
  period = "mensual",
  amount,
  title,
  description,
  discountDays = 30,
  currency = "USD",
  additionalFees = [],
  className,
}: FactoringRateDisplayProps) {
  const dailyRate = rate / 30;
  const discountAmount = (amount * dailyRate * discountDays) / 100;
  const totalFees = additionalFees.reduce((sum, fee) => sum + fee.amount, 0);
  const totalCost = discountAmount + totalFees;
  const netAmount = amount - totalCost;
  const effectiveRate = (totalCost / amount) * 100;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">{title || "Cálculo de Factoring"}</CardTitle>
          </div>
          <Badge variant="secondary" className="gap-1">
            <Percent className="h-3 w-3" />
            {rate}% {period}
          </Badge>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Valor Factura</span>
            <span className="font-semibold">
              {currency} {amount.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Días de anticipo</span>
            <span className="font-medium">{discountDays} días</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Tasa diaria</span>
            <span className="font-medium">{dailyRate.toFixed(3)}%</span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Descuento</span>
            <span className="font-medium text-red-600">
              - {currency} {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          {additionalFees.map((fee, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{fee.name}</span>
              <span className="font-medium text-red-600">
                - {currency} {fee.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}

          <div className="flex items-center justify-between text-sm pt-2 border-t">
            <span className="font-medium">Costo Total</span>
            <span className="font-semibold text-red-600">
              - {currency} {totalCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <Separator />

        <div className="space-y-2 bg-muted/50 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="font-medium">Monto Neto a Recibir</span>
            <span className="text-xl font-bold text-green-600">
              {currency} {netAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Tasa efectiva</span>
            <span className="font-medium">{effectiveRate.toFixed(2)}%</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
          <TrendingUp className="h-3 w-3" />
          <span>Liquidez inmediata garantizada</span>
        </div>
      </CardContent>
    </Card>
  );
}