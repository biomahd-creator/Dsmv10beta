import * as React from "react";
import { Building2, Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Progress } from "../ui/progress";
import { cn } from "../ui/utils";

interface PayorCardProps {
  payor: {
    id: string;
    name: string;
    rut: string;
    email?: string;
    phone?: string;
    address?: string;
    creditScore: number;
    riskLevel: "low" | "medium" | "high";
    totalOperations: number;
    onTimePayments: number;
  };
  onClick?: () => void;
  className?: string;
}

const riskConfig = {
  low: { label: "Bajo", variant: "default" as const, color: "text-green-600" },
  medium: { label: "Medio", variant: "secondary" as const, color: "text-yellow-600" },
  high: { label: "Alto", variant: "destructive" as const, color: "text-red-600" },
};

export function PayorCard({ payor, onClick, className }: PayorCardProps) {
  const risk = riskConfig[payor.riskLevel];
  const onTimePercentage = (payor.onTimePayments / payor.totalOperations) * 100;

  return (
    <Card
      className={cn(
        "hover:shadow-md transition-shadow",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback>
              <Building2 className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-base truncate">{payor.name}</CardTitle>
            <p className="text-sm text-muted-foreground">RUT: {payor.rut}</p>
          </div>
          <Badge variant={risk.variant}>{risk.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Score de Crédito</span>
            <span className="font-semibold">{payor.creditScore}/1000</span>
          </div>
          <Progress value={(payor.creditScore / 1000) * 100} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Pagos a tiempo</span>
            <span className="font-semibold">{onTimePercentage.toFixed(0)}%</span>
          </div>
          <Progress value={onTimePercentage} />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs pt-2">
          {payor.email && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Mail className="h-3 w-3" />
              <span className="truncate">{payor.email}</span>
            </div>
          )}
          {payor.phone && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span>{payor.phone}</span>
            </div>
          )}
          {payor.address && (
            <div className="flex items-center gap-1 text-muted-foreground col-span-2">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{payor.address}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2 border-t">
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {payor.totalOperations} operaciones realizadas
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
