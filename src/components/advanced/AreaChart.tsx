import * as React from "react";
import {
  Area,
  AreaChart as RechartsAreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface AreaChartProps {
  data: Array<Record<string, string | number>>;
  xKey: string;
  yKeys: string[];
  title?: string;
  colors?: string[];
  stacked?: boolean;
  className?: string;
}

const defaultColors = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
];

export function AreaChart({
  data,
  xKey,
  yKeys,
  title,
  colors = defaultColors,
  stacked = false,
  className,
}: AreaChartProps) {
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RechartsAreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {yKeys.map((key, index) => (
              <Area
                key={key}
                type="monotone"
                dataKey={key}
                stackId={stacked ? "1" : undefined}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.6}
              />
            ))}
          </RechartsAreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
