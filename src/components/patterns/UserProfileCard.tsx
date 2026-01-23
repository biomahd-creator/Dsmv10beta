import * as React from "react";
import { Mail, MapPin, Phone, Calendar, Edit } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { cn } from "../ui/utils";

interface UserProfileCardProps {
  user: {
    name: string;
    avatar?: string;
    role?: string;
    email?: string;
    phone?: string;
    location?: string;
    joinedDate?: string;
    bio?: string;
    badges?: string[];
  };
  onEdit?: () => void;
  className?: string;
}

export function UserProfileCard({
  user,
  onEdit,
  className,
}: UserProfileCardProps) {
  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardHeader className="relative pb-0">
        {onEdit && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={onEdit}
          >
            <Edit className="h-4 w-4" />
          </Button>
        )}
        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-2xl">
              {user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            {user.role && (
              <p className="text-sm text-muted-foreground">{user.role}</p>
            )}
          </div>
          {user.badges && user.badges.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {user.badges.map((badge, index) => (
                <Badge key={index} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {user.bio && (
          <>
            <p className="text-sm text-center text-muted-foreground">
              {user.bio}
            </p>
            <Separator />
          </>
        )}
        <div className="space-y-3">
          {user.email && (
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="truncate">{user.email}</span>
            </div>
          )}
          {user.phone && (
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
              <span>{user.phone}</span>
            </div>
          )}
          {user.location && (
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground shrink-0" />
              <span>{user.location}</span>
            </div>
          )}
          {user.joinedDate && (
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
              <span>Miembro desde {user.joinedDate}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
