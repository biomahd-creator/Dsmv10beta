import * as React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { cn } from "../ui/utils";

interface SearchFilter {
  id: string;
  label: string;
  active: boolean;
}

interface SearchResultsProps {
  query: string;
  onQueryChange: (query: string) => void;
  filters?: SearchFilter[];
  onFilterToggle?: (filterId: string) => void;
  results: React.ReactNode;
  resultsCount?: number;
  onFilterClick?: () => void;
  className?: string;
}

export function SearchResults({
  query,
  onQueryChange,
  filters,
  onFilterToggle,
  results,
  resultsCount,
  onFilterClick,
  className,
}: SearchResultsProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="pl-9"
          />
        </div>
        {onFilterClick && (
          <Button variant="outline" size="icon" onClick={onFilterClick}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {filters && filters.some((f) => f.active) && (
        <div className="flex flex-wrap gap-2">
          {filters
            .filter((f) => f.active)
            .map((filter) => (
              <Badge
                key={filter.id}
                variant="secondary"
                className="cursor-pointer"
                onClick={() => onFilterToggle?.(filter.id)}
              >
                {filter.label}
                <span className="ml-1">×</span>
              </Badge>
            ))}
        </div>
      )}

      {/* Results Count */}
      {resultsCount !== undefined && (
        <div className="text-sm text-muted-foreground">
          {resultsCount} {resultsCount === 1 ? "resultado" : "resultados"}
        </div>
      )}

      {/* Results */}
      <div className="space-y-2">{results}</div>
    </div>
  );
}

// Search Result Item Component
interface SearchResultItemProps {
  title: string;
  description?: string;
  metadata?: string;
  onClick?: () => void;
  className?: string;
}

export function SearchResultItem({
  title,
  description,
  metadata,
  onClick,
  className,
}: SearchResultItemProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer hover:bg-accent transition-colors",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <h3 className="font-medium">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
        {metadata && (
          <p className="text-xs text-muted-foreground mt-2">{metadata}</p>
        )}
      </CardContent>
    </Card>
  );
}
