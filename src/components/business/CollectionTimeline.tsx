import * as React from "react";
import { CheckCircle2, Clock, AlertTriangle, DollarSign } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

type CollectionStatus = "pending" | "due-soon" | "overdue" | "collected";

interface CollectionEvent {
  id: string;
  invoiceNumber: string;
  amount: number;
  dueDate: Date;
  status: CollectionStatus;
  payorName: string;
  collectedDate?: Date;
}

interface CollectionTimelineProps {
  events: CollectionEvent[];
  className?: string;
}

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pendiente",
    color: "bg-blue-500",
    textColor: "text-blue-600",
  },
  "due-soon": {
    icon: AlertTriangle,
    label: "Próximo vencimiento",
    color: "bg-yellow-500",
    textColor: "text-yellow-600",
  },
  overdue: {
    icon: AlertTriangle,
    label: "Vencido",
    color: "bg-red-500",
    textColor: "text-red-600",
  },
  collected: {
    icon: CheckCircle2,
    label: "Cobrado",
    color: "bg-green-500",
    textColor: "text-green-600",
  },
};

export function CollectionTimeline({ events, className }: CollectionTimelineProps) {
  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="size-5" />
        <h3 className="font-semibold">Timeline de Cobranzas</h3>
      </div>
      <div className="space-y-6">
        {events.map((event, index) => {
          const config = statusConfig[event.status];
          const Icon = config.icon;
          const isLast = index === events.length - 1;

          return (
            <div key={event.id} className="relative">
              {!isLast && (
                <div className="absolute left-2.5 top-8 h-full w-0.5 bg-border" />
              )}
              <div className="flex gap-4">
                <div className={cn("relative z-10 rounded-full p-1 ring-4 ring-background", config.color)}>
                  <Icon className="size-3 text-white" />
                </div>
                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <p className="font-medium text-sm">{event.invoiceNumber}</p>
                      <p className="text-sm text-muted-foreground">{event.payorName}</p>
                    </div>
                    <Badge variant={event.status === "collected" ? "default" : "secondary"}>
                      {config.label}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Vencimiento: {event.dueDate.toLocaleDateString("es-ES")}
                    </span>
                    <span className={cn("font-semibold", config.textColor)}>
                      ${event.amount.toLocaleString("es-ES")}
                    </span>
                  </div>
                  {event.collectedDate && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Cobrado el {event.collectedDate.toLocaleDateString("es-ES")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
