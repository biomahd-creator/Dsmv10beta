import * as React from "react";
import {
  ResponsiveContainer,
  Sankey,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "../ui/card";
import { cn } from "../ui/utils";

interface SankeyNode {
  name: string;
}

interface SankeyLink {
  source: number;
  target: number;
  value: number;
}

interface SankeyDiagramProps {
  nodes: SankeyNode[];
  links: SankeyLink[];
  height?: number;
  className?: string;
}

export function SankeyDiagram({
  nodes,
  links,
  height = 400,
  className,
}: SankeyDiagramProps) {
  const data = {
    nodes,
    links,
  };

  return (
    <Card className={cn("p-6", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <Sankey
          data={data}
          node={{ fill: "hsl(var(--primary))", fillOpacity: 0.8 }}
          link={{ stroke: "hsl(var(--muted-foreground))", strokeOpacity: 0.3 }}
          nodePadding={50}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
            }}
          />
          <Legend />
        </Sankey>
      </ResponsiveContainer>
    </Card>
  );
}
