import * as React from "react";
import { FileText, Calendar, DollarSign, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { cn } from "../ui/utils";

interface InvoiceCardProps {
  invoice: {
    id: string;
    number: string;
    payor: string;
    amount: number;
    currency: string;
    issueDate: string;
    dueDate: string;
    status: "pending" | "approved" | "rejected" | "paid";
  };
  onView?: () => void;
  onApprove?: () => void;
  className?: string;
}

const statusConfig = {
  pending: { label: "Pendiente", variant: "secondary" as const, color: "bg-yellow-500" },
  approved: { label: "Aprobada", variant: "default" as const, color: "bg-green-500" },
  rejected: { label: "Rechazada", variant: "destructive" as const, color: "bg-red-500" },
  paid: { label: "Pagada", variant: "outline" as const, color: "bg-blue-500" },
};

export function InvoiceCard({ invoice, onView, onApprove, className }: InvoiceCardProps) {
  const status = statusConfig[invoice.status];

  return (
    <Card className={cn("hover:shadow-md transition-shadow", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">{invoice.number}</CardTitle>
          </div>
          <Badge variant={status.variant}>{status.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Pagador</p>
              <p className="font-medium truncate">{invoice.payor}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Monto</p>
              <p className="font-medium">
                {invoice.currency} {invoice.amount.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Emisión</p>
              <p className="font-medium">{invoice.issueDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Vencimiento</p>
              <p className="font-medium">{invoice.dueDate}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          {onView && (
            <Button variant="outline" size="sm" onClick={onView} className="flex-1">
              Ver detalle
            </Button>
          )}
          {onApprove && invoice.status === "pending" && (
            <Button size="sm" onClick={onApprove} className="flex-1">
              Aprobar
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
