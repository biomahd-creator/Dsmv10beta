import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "../ui/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText: string;
  ctaVariant?: "default" | "outline";
}

interface PricingTableProps {
  tiers: PricingTier[];
  onSelectTier: (tierId: string) => void;
  className?: string;
}

export function PricingTable({
  tiers,
  onSelectTier,
  className,
}: PricingTableProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
        className
      )}
    >
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={cn(
            "relative flex flex-col",
            tier.popular && "border-primary shadow-lg"
          )}
        >
          {tier.popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
              Más popular
            </Badge>
          )}
          <CardHeader>
            <CardTitle>{tier.name}</CardTitle>
            <div className="mt-4">
              <span className="text-4xl font-bold">${tier.price}</span>
              <span className="text-muted-foreground">/{tier.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {tier.description}
            </p>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ul className="space-y-3 mb-6 flex-1">
              {tier.features.map((feature, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-start gap-2 text-sm",
                    !feature.included && "text-muted-foreground"
                  )}
                >
                  <Check
                    className={cn(
                      "h-4 w-4 mt-0.5 shrink-0",
                      feature.included ? "text-primary" : "text-muted-foreground/50"
                    )}
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => onSelectTier(tier.id)}
              variant={tier.ctaVariant || (tier.popular ? "default" : "outline")}
              className="w-full"
            >
              {tier.ctaText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
