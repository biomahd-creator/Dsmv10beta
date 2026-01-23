import * as React from "react";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

interface ComparisonColumn {
  id: string;
  name: string;
  popular?: boolean;
}

interface ComparisonRow {
  feature: string;
  values: (boolean | string | number)[];
}

interface ComparisonTableProps {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  className?: string;
}

export function ComparisonTable({
  columns,
  rows,
  className,
}: ComparisonTableProps) {
  const renderValue = (value: boolean | string | number) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-600 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
      );
    }
    return <span className="text-center block">{value}</span>;
  };

  return (
    <div className={cn("border rounded-lg overflow-hidden", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Características</TableHead>
            {columns.map((col) => (
              <TableHead key={col.id} className="text-center">
                <div className="space-y-1">
                  <div className="font-semibold">{col.name}</div>
                  {col.popular && (
                    <Badge variant="secondary" className="text-xs">
                      Recomendado
                    </Badge>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.feature}</TableCell>
              {row.values.map((value, colIndex) => (
                <TableCell key={colIndex} className="text-center">
                  {renderValue(value)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
