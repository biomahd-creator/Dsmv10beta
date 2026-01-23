import * as React from "react";
import { CheckCircle2, Clock, AlertCircle, XCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { cn } from "../ui/utils";

type VerificationStatus = "pending" | "verified" | "rejected" | "processing";

interface DocumentVerificationStatusProps {
  documentName: string;
  status: VerificationStatus;
  message?: string;
  timestamp?: Date;
  className?: string;
}

const statusConfig = {
  pending: {
    icon: Clock,
    label: "Pendiente",
    variant: "secondary" as const,
    color: "text-yellow-600",
  },
  processing: {
    icon: Clock,
    label: "En revisión",
    variant: "secondary" as const,
    color: "text-blue-600",
  },
  verified: {
    icon: CheckCircle2,
    label: "Verificado",
    variant: "default" as const,
    color: "text-green-600",
  },
  rejected: {
    icon: XCircle,
    label: "Rechazado",
    variant: "destructive" as const,
    color: "text-red-600",
  },
};

export function DocumentVerificationStatus({
  documentName,
  status,
  message,
  timestamp,
  className,
}: DocumentVerificationStatusProps) {
  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-start gap-3">
        <Icon className={cn("size-5 mt-0.5", config.color)} />
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <p className="font-medium text-sm">{documentName}</p>
            <Badge variant={config.variant}>{config.label}</Badge>
          </div>
          {message && (
            <p className="text-sm text-muted-foreground">{message}</p>
          )}
          {timestamp && (
            <p className="text-xs text-muted-foreground">
              {timestamp.toLocaleDateString("es-ES", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
