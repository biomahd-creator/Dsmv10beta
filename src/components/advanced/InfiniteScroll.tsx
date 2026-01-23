import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../ui/utils";

interface InfiniteScrollProps {
  children: React.ReactNode;
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  className?: string;
  threshold?: number;
  loadingComponent?: React.ReactNode;
}

export function InfiniteScroll({
  children,
  hasMore,
  loading,
  onLoadMore,
  className,
  threshold = 100,
  loadingComponent,
}: InfiniteScrollProps) {
  const observerTarget = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          onLoadMore();
        }
      },
      { threshold: 0, rootMargin: `${threshold}px` }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, loading, onLoadMore, threshold]);

  return (
    <div className={cn("w-full", className)}>
      {children}
      <div ref={observerTarget} className="py-4 flex justify-center">
        {loading && (
          loadingComponent || (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">Cargando más...</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
