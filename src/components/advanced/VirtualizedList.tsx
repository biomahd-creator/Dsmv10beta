import * as React from "react";
import { cn } from "../ui/utils";

interface VirtualizedListProps<T> {
  items: T[];
  height: number;
  itemHeight: number;
  width?: string | number;
  className?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscanCount?: number;
}

export function VirtualizedList<T>({
  items,
  height,
  itemHeight,
  width = "100%",
  className,
  renderItem,
  overscanCount = 5,
}: VirtualizedListProps<T>) {
  const [scrollTop, setScrollTop] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Calculate visible range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscanCount);
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + height) / itemHeight) + overscanCount
  );

  const visibleItems = items.slice(startIndex, endIndex + 1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      className={cn("border rounded-md overflow-auto", className)}
      style={{
        height,
        width,
        overflowY: "auto",
        position: "relative",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, idx) => {
            const actualIndex = startIndex + idx;
            return (
              <div
                key={actualIndex}
                style={{ height: itemHeight }}
                className="border-b last:border-0"
              >
                {renderItem(item, actualIndex)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
