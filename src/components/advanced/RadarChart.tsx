import * as React from "react";
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface RadarChartProps {
  data: Array<Record<string, string | number>>;
  dataKeys: string[];
  angleKey: string;
  title?: string;
  colors?: string[];
  className?: string;
}

const defaultColors = [
  "hsl(var(--primary))",
  "hsl(var(--secondary))",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
];

export function RadarChart({
  data,
  dataKeys,
  angleKey,
  title,
  colors = defaultColors,
  className,
}: RadarChartProps) {
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RechartsRadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={angleKey} />
            <PolarRadiusAxis />
            {dataKeys.map((key, index) => (
              <Radar
                key={key}
                name={key}
                dataKey={key}
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
                fillOpacity={0.6}
              />
            ))}
            <Legend />
            <Tooltip />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
