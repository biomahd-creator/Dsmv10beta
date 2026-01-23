import * as React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CashFlowProjectionProps {
  data: Array<{
    period: string;
    income: number;
    expenses: number;
    balance: number;
  }>;
  title?: string;
  className?: string;
}

export function CashFlowProjection({
  data,
  title = "Proyección de Flujo de Caja",
  className,
}: CashFlowProjectionProps) {
  const totalIncome = data.reduce((sum, item) => sum + item.income, 0);
  const totalExpenses = data.reduce((sum, item) => sum + item.expenses, 0);
  const finalBalance = data[data.length - 1]?.balance || 0;
  const isPositive = finalBalance >= 0;

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant={isPositive ? "default" : "destructive"} className="gap-1">
            {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {isPositive ? "Positivo" : "Negativo"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Ingresos Totales</p>
            <p className="text-lg font-semibold text-green-600">
              ${totalIncome.toLocaleString()}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Gastos Totales</p>
            <p className="text-lg font-semibold text-red-600">
              ${totalExpenses.toLocaleString()}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Balance Final</p>
            <p className={`text-lg font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`}>
              ${finalBalance.toLocaleString()}
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period" />
            <YAxis />
            <Tooltip
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="income"
              fill="#22c55e"
              fillOpacity={0.1}
              stroke="#22c55e"
              name="Ingresos"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              fill="#ef4444"
              fillOpacity={0.1}
              stroke="#ef4444"
              name="Gastos"
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              name="Balance"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
