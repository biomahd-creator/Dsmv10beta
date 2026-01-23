import * as React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { Card } from "../ui/card";
import { cn } from "../ui/utils";

interface GanttTask {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: number;
  dependencies?: string[];
  color?: string;
}

interface GanttChartProps {
  tasks: GanttTask[];
  height?: number;
  className?: string;
}

export function GanttChart({ tasks, height = 400, className }: GanttChartProps) {
  // Calculate timeline bounds
  const allDates = tasks.flatMap((t) => [t.startDate, t.endDate]);
  const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map((d) => d.getTime())));
  const totalDays = Math.ceil(
    (maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const getPosition = (date: Date) => {
    const days = Math.ceil(
      (date.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return (days / totalDays) * 100;
  };

  const getWidth = (start: Date, end: Date) => {
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return (days / totalDays) * 100;
  };

  return (
    <Card className={cn("p-6", className)}>
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <h3 className="font-semibold">Diagrama de Gantt</h3>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <span>Inicio: {minDate.toLocaleDateString("es-ES")}</span>
            <span>Fin: {maxDate.toLocaleDateString("es-ES")}</span>
          </div>
        </div>
        <div style={{ height }} className="relative">
          {tasks.map((task, index) => {
            const left = getPosition(task.startDate);
            const width = getWidth(task.startDate, task.endDate);
            const bgColor = task.color || "hsl(var(--primary))";

            return (
              <div key={task.id} className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium w-32 truncate">
                    {task.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {task.progress}%
                  </span>
                </div>
                <div className="relative h-8 bg-muted rounded">
                  <div
                    className="absolute h-full rounded transition-all"
                    style={{
                      left: `${left}%`,
                      width: `${width}%`,
                      backgroundColor: bgColor,
                      opacity: 0.7,
                    }}
                  >
                    <div
                      className="h-full rounded"
                      style={{
                        width: `${task.progress}%`,
                        backgroundColor: bgColor,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
