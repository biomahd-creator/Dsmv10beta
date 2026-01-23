import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { cn } from "../ui/utils";

interface Activity {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  action: string;
  target?: string;
  timestamp: string;
  type: "info" | "success" | "warning" | "error";
  metadata?: React.ReactNode;
}

interface ActivityFeedProps {
  activities: Activity[];
  className?: string;
}

const typeColors = {
  info: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-yellow-500",
  error: "bg-red-500",
};

export function ActivityFeed({ activities, className }: ActivityFeedProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {activities.map((activity, index) => (
        <div key={activity.id} className="flex gap-4 relative">
          {/* Timeline line */}
          {index < activities.length - 1 && (
            <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
          )}

          {/* Avatar with status dot */}
          <div className="relative">
            <Avatar className="h-10 w-10">
              <AvatarImage src={activity.user.avatar} />
              <AvatarFallback>
                {activity.user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div
              className={cn(
                "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background",
                typeColors[activity.type]
              )}
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm">
                  {activity.user.name}
                </span>
                <span className="text-sm text-muted-foreground">
                  {activity.action}
                </span>
                {activity.target && (
                  <Badge variant="secondary" className="text-xs">
                    {activity.target}
                  </Badge>
                )}
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.timestamp}
              </span>
            </div>
            {activity.metadata && (
              <Card className="mt-2">
                <CardContent className="p-3 text-sm">
                  {activity.metadata}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
