import * as React from "react";
import { MessageSquare, MoreVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "../ui/utils";

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  replies?: Comment[];
}

interface CommentThreadProps {
  comments: Comment[];
  onReply?: (commentId: string, content: string) => void;
  onEdit?: (commentId: string) => void;
  onDelete?: (commentId: string) => void;
  className?: string;
}

function CommentItem({
  comment,
  onReply,
  onEdit,
  onDelete,
  depth = 0,
}: {
  comment: Comment;
  onReply?: (commentId: string, content: string) => void;
  onEdit?: (commentId: string) => void;
  onDelete?: (commentId: string) => void;
  depth?: number;
}) {
  const [showReply, setShowReply] = React.useState(false);
  const [replyContent, setReplyContent] = React.useState("");

  const handleReply = () => {
    if (replyContent.trim() && onReply) {
      onReply(comment.id, replyContent);
      setReplyContent("");
      setShowReply(false);
    }
  };

  return (
    <div className={cn("space-y-3", depth > 0 && "ml-8")}>
      <div className="flex gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.author.avatar} />
          <AvatarFallback>
            {comment.author.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{comment.author.name}</span>
              <span className="text-xs text-muted-foreground">
                {comment.timestamp}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onEdit?.(comment.id)}>
                  Editar
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onDelete?.(comment.id)}
                  className="text-destructive"
                >
                  Eliminar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <p className="text-sm">{comment.content}</p>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setShowReply(!showReply)}
          >
            <MessageSquare className="h-3 w-3 mr-1" />
            Responder
          </Button>
        </div>
      </div>

      {showReply && (
        <div className="ml-11 space-y-2">
          <Textarea
            placeholder="Escribe tu respuesta..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-[80px]"
          />
          <div className="flex gap-2">
            <Button size="sm" onClick={handleReply}>
              Responder
            </Button>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => setShowReply(false)}
            >
              Cancelar
            </Button>
          </div>
        </div>
      )}

      {comment.replies?.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
          depth={depth + 1}
        />
      ))}
    </div>
  );
}

export function CommentThread({
  comments,
  onReply,
  onEdit,
  onDelete,
  className,
}: CommentThreadProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          onReply={onReply}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
