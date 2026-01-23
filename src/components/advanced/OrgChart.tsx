import * as React from "react";
import { Building2, Users, Globe } from "lucide-react";
import { cn } from "../ui/utils";

interface Node {
  id: string;
  name: string;
  title: string;
  image?: string;
  children?: Node[];
}

interface OrgChartProps {
  data: Node;
  className?: string;
}

function OrgNode({ node }: { node: Node }) {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-2 mb-4">
        <div className="bg-card border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-w-[200px]">
          <div className="flex items-center gap-3">
            {node.image ? (
              <img
                src={node.image}
                alt={node.name}
                className="size-10 rounded-full object-cover"
              />
            ) : (
              <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="size-5 text-primary" />
              </div>
            )}
            <div className="flex-1">
              <p className="font-semibold text-sm">{node.name}</p>
              <p className="text-xs text-muted-foreground">{node.title}</p>
            </div>
          </div>
        </div>
        {hasChildren && (
          <div className="w-0.5 h-6 bg-border" />
        )}
      </div>
      {hasChildren && (
        <div className="flex gap-8 relative">
          {node.children!.length > 1 && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-border" />
          )}
          {node.children!.map((child) => (
            <div key={child.id} className="relative">
              {node.children!.length > 1 && (
                <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-border -translate-x-1/2" />
              )}
              <div className="pt-6">
                <OrgNode node={child} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function OrgChart({ data, className }: OrgChartProps) {
  return (
    <div className={cn("overflow-auto p-8", className)}>
      <OrgNode node={data} />
    </div>
  );
}
