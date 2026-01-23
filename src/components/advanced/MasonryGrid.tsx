import * as React from "react";
import { cn } from "../ui/utils";

interface MasonryGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export function MasonryGrid({
  children,
  columns = 3,
  gap = 16,
  className,
}: MasonryGridProps) {
  const childrenArray = React.Children.toArray(children);

  // Distribute items into columns
  const columnsArray: React.ReactNode[][] = Array.from({ length: columns }, () => []);
  
  childrenArray.forEach((child, index) => {
    columnsArray[index % columns].push(child);
  });

  return (
    <div
      className={cn("w-full", className)}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {columnsArray.map((column, columnIndex) => (
        <div
          key={columnIndex}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: `${gap}px`,
          }}
        >
          {column}
        </div>
      ))}
    </div>
  );
}
